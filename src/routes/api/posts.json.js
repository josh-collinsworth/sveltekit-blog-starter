export const get = async (args) => {
	try {
		/**
		 * These let you add query params to change what's retrieved from the endpoint, e.g., 
		 * /api/posts.json?offset=10&limit=20
		 **/

		const offset = args.query.get('offset')
		const limit = args.query.get('limit')
	
		const posts = await Promise.all(
			Object.entries(import.meta.glob('../blog/*.md')).map(async ([path, page]) => {
				const { metadata } = await page()
				const slug = path.slice(2, -3)
				return { ...metadata, slug }
			})
		)
		.then(posts => {
			return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
		})
		.then(posts => {
			if (offset) {
				return posts.slice(offset)
			}
			return posts
		})
		.then(posts => {
			if (limit && limit < posts.length) {
				return posts.slice(0, limit)
			}
			return posts
		})
		.then(posts => {
			return posts.map(post => ({
				title: post.title,
				slug: post.slug,
				excerpt: post.excerpt,
				coverImage: post.coverImage,
				date: post.date,
				categories: post.categories,
			}))
		})
		
		return {
			status: 200,
			body: {
				posts
			}
		}
	}
			
	catch(error) {
		return {
			status: 500,
			body: {
				error: 'Could not fetch posts. ' + error
			}
		}
	}
}
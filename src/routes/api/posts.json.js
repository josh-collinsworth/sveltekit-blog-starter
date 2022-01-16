export const get = async (request) => {
	try {
		/**	
		 * These let you add query params to change what's retrieved from the endpoint, e.g., 
		 * /api/posts.json?offset=10&limit=20
		 **/

		const posts = await Promise.all(
			Object.entries(import.meta.glob('../blog/_posts/*.md')).map(async ([path, resolver]) => {
				const { metadata } = await resolver()
				const slug = path.split('/').pop().slice(0, -3)
				return { ...metadata, slug }
			})
		)

		let sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date))

		sortedPosts = sortedPosts.map(post => ({
			title: post.title,
			slug: post.slug,
			excerpt: post.excerpt,
			coverImage: post.coverImage,
			date: post.date,
			categories: post.categories,
		}))
		
		return {
			status: 200,
			body: {
				posts: sortedPosts
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
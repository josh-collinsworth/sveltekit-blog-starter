import fetchPosts from '$lib/assets/js/fetchPosts'

export const get = async () => {
	try {
		const posts = await fetchPosts({ withContent: false })
		return {
			status: 200,
			body: {
				posts
			}
		}
	}
	
	catch {
		return {
			status: 500,
			body: {
				error: 'Could not fetch posts.'
			}
		}
	}
}
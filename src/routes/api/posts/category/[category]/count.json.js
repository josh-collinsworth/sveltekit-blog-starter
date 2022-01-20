import fetchPosts from '$lib/assets/js/fetchPosts'

export const get = async ({ params }) => {
  const { category } = params
	const options = { category, limit: -1 }

  try {
    const { posts } = await fetchPosts(options)
    
		return {
			status: 200,
			body: {
				total: posts.length
			}
		}
	}

	catch {
		return {
			status: 500,
			body: {
				error: `Could not retrieve total number of ${category} posts.`
			}
		}
	}
}
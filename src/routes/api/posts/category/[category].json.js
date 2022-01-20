import fetchPosts from '$lib/assets/js/fetchPosts'

export const get = async ({ params }) => {
  const { category } = params

  try {
    const { posts } = await fetchPosts({ category })
    
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
				error: `Could not retrieve total number of ${category} posts.`
			}
		}
	}
}
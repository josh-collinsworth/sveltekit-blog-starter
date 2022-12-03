import fetchPosts from '$lib/assets/js/fetchPosts'

export const load = async ({ params }) => {
	const category = params.category
  const page = params.page || 1
	const options = { category, limit: -1 }
	const { posts } = await fetchPosts(options)

	return { 
		posts,
		category,
		page,
		total: posts.length
	}
}

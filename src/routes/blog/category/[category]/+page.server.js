import fetchPosts from '$lib/assets/js/fetchPosts'

export const load = async ({ params }) => {
	const category = params.category
	const options = { category }
	const { posts } = await fetchPosts(options)

	return { 
		posts,
		category,
		total: posts.length
	}
}

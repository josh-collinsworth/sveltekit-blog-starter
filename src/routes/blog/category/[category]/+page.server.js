import fetchPosts from '$lib/assets/js/fetchPosts'

export const load = async ({ params, url }) => {
	const category = params.category
	const options = { category }
	const { posts } = await fetchPosts(options)
	const res = await fetch(`${url.origin}/api/posts/category/${category}/count.json`)
	const { total } = await res.json()

	return { 
		posts,
		category,
		total
	}
}

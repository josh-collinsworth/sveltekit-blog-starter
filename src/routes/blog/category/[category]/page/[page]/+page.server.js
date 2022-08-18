import { redirect } from '@sveltejs/kit'
import { postsPerPage } from '$lib/config'
import fetchPosts from '$lib/assets/js/fetchPosts'
import { error } from '@sveltejs/kit'

export const load = async ({ fetch, params }) => {
	try {
		const page = params.page ? params.page : 1
		const { category } = params

		// Prevents duplication of page 1 as the index page
		if (page <= 1) {
			throw redirect(301, `/blog/category/${category}`);
		}
		
		let offset = (page * postsPerPage) - postsPerPage
	
		const totalPostsRes = await fetch('/api/posts/count.json')
		const { total } = await totalPostsRes.json()
		const { posts } = await fetchPosts({ offset, page })

		const body = {
			posts,
			page,
			category,
			totalPosts: total 
		}
		return {
			body,
		}
	} catch(err) {
		throw error(404, err)
	}
}

import fetchPosts from '$lib/assets/js/fetchPosts'
import { error } from '@sveltejs/kit'

export const GET = async ({ params }) => {
	const { category } = params

	try {
		const { posts } = await fetchPosts({ category })
		
		return new Response(
			JSON.stringify(posts),
			{ 
				status: 200,
				headers: {
					'content-type': 'application/json'
				}
			}
		)
	}

	catch(err) {
		throw error(500, err)
	}
}
import fetchPosts from '$lib/assets/js/fetchPosts'
import { error } from '@sveltejs/kit'

export const GET = async ({ params }) => {
	const { category } = params
	const options = { category, limit: -1 }

	try {
		const { posts } = await fetchPosts(options)
		
		return new Response(
			JSON.stringify(posts.length),
			{ 
				status: 200,
				headers: {
					'content-type': 'application/json'
				}
			}
		)
	}

	catch(err) {
		throw error(500, `Could not retrieve ${category} posts. ${err}`)
	}
}
import { error } from '@sveltejs/kit'

export const GET = async () => {
	try {
		const posts = import.meta.glob(`$lib/posts/*.md`)

		return new Response(
			JSON.stringify(Object.keys(posts).length),
			{ 
				status: 200,
				headers: {
					'content-type': 'application/json'
				}
			}
		)
	}

	catch(err) {
		throw error(500, `Could not retrieve total posts. ${err}`)
	}
}
import fetchPosts from '$lib/assets/js/fetchPosts'
import { json } from '@sveltejs/kit'

export const prerender = true

export const GET = async ({ params }) => {
	const { category } = params
	const options = { category, limit: -1 }

  const { posts } = await fetchPosts(options)
		
  return json(posts.length)
}
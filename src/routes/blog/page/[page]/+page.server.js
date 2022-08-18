import { postsPerPage } from '$lib/config'
import fetchPosts from '$lib/assets/js/fetchPosts'
import { redirect, error } from '@sveltejs/kit'

export const load = async ({ url, params }) => {
  const page = params.page ? params.page : 1

  // Keeps from duplicationg the blog index route as page 1
  if (page <= 1) {
    throw redirect(301, '/blog')
  }
  
  let offset = (page * postsPerPage) - postsPerPage

  const totalPostsRes = await fetch(`${url.origin}/api/posts/count.json`)
  const total = await totalPostsRes.json()
  const { posts } = await fetchPosts({ offset, page })
  
  return {
    posts,
    page,
    totalPosts: total
  }
}

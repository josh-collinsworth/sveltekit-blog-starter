export const load = async ({ url }) => {
	const postRes = await fetch(`${url.origin}/api/posts.json`)
	const posts = await postRes.json()

  const totalRes = await fetch(`${url.origin}/api/posts/count.json`)
  const total = await totalRes.json()

	return { posts, total }
}

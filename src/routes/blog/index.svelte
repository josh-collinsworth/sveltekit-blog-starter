<script context="module">
	export const load = async ({ fetch }) => {
		const postRes = await fetch(`/api/posts.json`)
		const { posts } = await postRes.json()

    const totalRes = await fetch(`/api/posts/count.json`)
    const { total } = await totalRes.json()

		return {
			props: { posts, total }
		}
	}
</script>


<script>
  import PostsList from '$lib/components/PostsList.svelte'
  import Pagination from '$lib/components/Pagination.svelte'
	export let posts = []
  export let total = 0
</script>


<svelte:head>
	<title>Blog</title>
	<meta data-key="description" name="description" content="Writings on development, design, and random thoughts.">
</svelte:head>


<h1>Blog</h1>

<PostsList {posts} />

<Pagination currentPage={1} totalPosts={total} />
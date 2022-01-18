<script context="module">
  import { postsPerPage } from '$lib/config'

  export const load = async ({ fetch, params }) => {
    try {
      const page = params.page ? params.page : 1

      if (page <= 1) {
        return {
          status: 301,
          redirect: '/blog'
        }
      }
      
      let offset = (page * postsPerPage) - postsPerPage
    
      const totalPostsRes = await fetch('/api/posts/count.json')
      const { total } = await totalPostsRes.json()

      const postsRes = await fetch(`/api/posts.json?page=${page}&offset=${offset}`)
      const { posts } = await postsRes.json()
      
      return {
        status: 200,
        props: {
          posts,
          page,
          totalPosts: total
        }
      }
    } catch(error) {
      return {
        status: 404,
        error: error.message
      }
    }
  }
</script>


<script>
  import PostsList from '$lib/components/PostsList.svelte'
  import Pagination from '$lib/components/Pagination.svelte'

  export let page = 1
  export let totalPosts
  export let posts = []

  $: lowerBound = page * postsPerPage - postsPerPage || 1
  $: upperBound = Math.min(page * postsPerPage, totalPosts)
</script>


<svelte:head>
	<title>Blog - page {page}</title>
	<meta data-key="description" name="description" content="Writings on development, design, and random thoughts.">
</svelte:head>


<h1 class="h2">Posts {lowerBound}–{upperBound} of {totalPosts}</h1>
<Pagination currentPage={page} {totalPosts} />

<PostsList {posts} />

<Pagination currentPage={page} {totalPosts} />
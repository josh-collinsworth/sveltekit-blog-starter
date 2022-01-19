<!-- This dynamic page renders any page at /blog/category/* -->
<!-- TODO: add pagination to this route -->
<script context="module">
  import fetchPosts from '$lib/assets/js/fetchPosts'

	export const load = async ({ params }) => {
    const category = params.category
    const options = { category }
    const { posts } = await fetchPosts(options)

		return {
			props: { 
        posts,
        category
      }
		}
	}
</script>

<script>
  import PostsList from '$lib/components/PostsList.svelte'

	export let posts
  export let category
</script>


<svelte:head>
	<title>Category: {category}</title>
</svelte:head>


<h1>Blog category: {category}</h1>

{#if posts.length}
  <PostsList {posts} />
{:else}
  <p><strong>Ope!</strong> Sorry, couldn't find any posts in the category "{category}".</p>

  <p><a href="/blog">Back to blog</a></p>
{/if}

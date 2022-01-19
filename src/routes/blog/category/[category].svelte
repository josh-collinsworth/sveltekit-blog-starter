<!-- This dynamic page renders any page at /blog/category/* -->

<script context="module">
	export const load = async ({ fetch, params }) => {
    const category = params.category

    const res = await fetch(`/api/posts.json`)
		let { posts } = await res.json()

    // TODO: this would work better server-side
    const matchingPosts = posts
      .filter(post => post.categories.includes(category))

		return {
			props: { 
        posts: matchingPosts,
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

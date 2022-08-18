<!-- Renders posts listed by category -->
<script>
  // throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  import PostsList from '$lib/components/PostsList.svelte'
  import Pagination from '$lib/components/Pagination.svelte'
  import { siteDescription } from '$lib/config'

  export let page
  export let category
  export let totalPosts
  export let posts = []
  export let data

  $: lowerBound = (page * postsPerPage) - (postsPerPage - 1) || 1
  $: upperBound = Math.min(page * postsPerPage, totalPosts)
</script>


<svelte:head>
	<title>Blog - page {page}</title>
	<meta data-key="description" name={siteDescription}>
</svelte:head>


<!-- TODO: this is duplicated in both `[page].svelte` files -->
{#if posts.length}
  <h1>
    Category: {category}
    <br />
    <small>Posts {lowerBound}–{upperBound} of {totalPosts}</small>
  </h1>
  <Pagination currentPage={page} {totalPosts} path="/blog/category/{category}/page" />

  <PostsList {posts} />

  <Pagination currentPage={page} {totalPosts} path="/blog/category/{category}/page" />
{:else}
  <h1>Oops!</h1>

  <p>Sorry, no posts to show here.</p>

  <a href="/blog">Back to blog</a>
{/if}
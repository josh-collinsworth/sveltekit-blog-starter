<!-- Renders posts listed by category -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { siteDescription, postsPerPage } from '$lib/config'

	let { data } = $props();
	let page = $derived(data.page)
	let category = $derived(data.category)
	let totalPosts = $derived(data.totalPosts)
	let posts = $derived(data.posts)

	let lowerBound = $derived((page * postsPerPage) - (postsPerPage - 1) || 1)
	let upperBound = $derived(Math.min(page * postsPerPage, totalPosts))
</script>


<svelte:head>
	<title>Blog category {category} - page {page}</title>
	<meta data-key="description" name={siteDescription}>
</svelte:head>


<!-- TODO: this is duplicated across multiple `+page.svelte` files -->
{#if posts && posts.length}
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
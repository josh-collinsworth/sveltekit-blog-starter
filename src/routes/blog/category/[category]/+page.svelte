<!-- Renders any page at /blog/category/* -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'

	export let data
</script>


<svelte:head>
	<title>Category: {data.category}</title>
</svelte:head>


<h1>Blog category: {data.category}</h1>

{#if data.posts.length}
	<PostsList posts={data.posts} />
	<Pagination currentPage="1" totalPosts={data.total} path="/blog/category/{data.category}/page" />
{:else}
	<p><strong>Ope!</strong> Sorry, couldn't find any posts in the category "{data.category}".</p>

	<p><a href="/blog">Back to blog</a></p>
{/if}

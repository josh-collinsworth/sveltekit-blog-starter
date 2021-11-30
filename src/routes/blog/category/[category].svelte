<script context="module">
	export async function load({ fetch, page }) {
    const category = page.params.category
    //TODO: maybe add a way to fetch with query parameter to avoid filtering?
		const res = await fetch(`/blog/posts.json`)
		let { posts } = await res.json()

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
	export let posts;
  export let category;
</script>


<svelte:head>
	<title>Category: {category}</title>
</svelte:head>

<main>
  <h1>Blog category: {category}</h1>
  
  <ul class="posts-list">
    {#each posts as post}
      <li>
        <a href="/blog/{post.slug}">
          <img src={post.coverImage} alt=""/>
        </a>
        <h2>
          <a href="/blog/{post.slug}">
            {post.title}
          </a>
        </h2>

        <p>{post.excerpt}</p>
      </li>
    {/each}
  </ul>
</main>
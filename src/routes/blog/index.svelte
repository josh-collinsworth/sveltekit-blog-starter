<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(`/blog/all-posts.json`)
		const { posts } = await res.json()

		return {
			props: { posts }
		}
	}
</script>

<script>
	export let posts;

  console.log(posts)
</script>


<svelte:head>
	<title>Josh Collinsworth | Writing</title>
	<meta data-key="description" name="description" content="Writings on development, design, and random thoughts.">
	<meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" />
	<meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png"/>
</svelte:head>

<h1>Blog</h1>

<ul>

  {#each posts as post}
  <li>

    <h2>
      <a href="/blog/{post.slug}">
        {post.title}
      </a>
    </h2>

    <p>{post.excerpt}</p>
  </li>
  {/each}
</ul>

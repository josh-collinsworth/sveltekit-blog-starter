<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(`/api/posts.json`)
		const { posts } = await res.json()

		return {
			props: { posts }
		}
	}
</script>

<script>
	export let posts;
</script>


<svelte:head>
	<title>Blog</title>
	<meta data-key="description" name="description" content="Writings on development, design, and random thoughts.">
</svelte:head>


<h1>Blog</h1>

<ul class="posts-list">
  {#each posts as post}
    <li>
      <a href="{post.slug}">
        <img src={post.coverImage} alt="" />
      </a>
      <h2>
        <a href="{post.slug}">
          {post.title}
        </a>
      </h2>

      <p>{post.excerpt}</p>
    </li>
  {/each}
</ul>
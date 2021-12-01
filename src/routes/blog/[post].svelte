<script context="module">
  export async function load({page}) {
    try {
      const Post = await import(`./_posts/${page.params.post}.md`)
      
      return {
        props: {
          Post: Post.default,
          meta: Post.metadata,
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
  export let Post, meta;
</script>


<svelte:head>
  <!-- Be sure to add your image files and un-comment the lines below -->
  <title>{meta.title}</title>
  <meta data-key="description" name="description" content="{meta.excerpt}">
  <meta property="og:type" content="article" />
  <meta property="og:title" content={meta.title} />
  <meta name="twitter:title" content={meta.title} />
  <meta property="og:description" content={meta.excerpt} />
  <meta name="twitter:description" content={meta.excerpt} />
  <!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
  <meta property="og:image:width" content={meta.coverWidth} />
  <meta property="og:image:height" content={meta.coverHeight} />
  <!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>


<article class="post">
  <!-- You might want to add an alt frontmatter attribute. If not leaving alt blank here works, too. -->
  <img
    class="cover-image"
    src="{meta.coverImage}"
    alt=""
    style="aspect-ratio: {meta.coverWidth} / {meta.coverHeight};"
    width={meta.coverWidth}
    height={meta.coverHeight}
  />

  <h1>{ meta.title }</h1>
  
  <div class="meta">
    <b>Published:</b> {meta.date}
    <br>
    <b>Updated:</b> {meta.updated}
  </div>
  
  <svelte:component this={Post} />

  <aside class="post-footer">
    {#if meta.categories}
      <h2>Posted in: </h2>
      <ul>
        {#each meta.categories as category}
          <li>
            <a href="/blog/category/{category}/">
              { category }
            </a>
          </li>
        {/each}
      </ul>
    {/if}
  </aside>
</article>

<script>
  export let posts = []
</script>


<ul class="posts-list">
  {#each posts as post}
    <li>
      <a href="/blog/{post.slug}">
        <img src={post.coverImage} alt="" />
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
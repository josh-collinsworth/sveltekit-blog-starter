<script>
  export let posts = []
</script>


<ul class="posts-list">
  {#each posts as post}
    <li>
      <a href="/blog/{post.slug}">
        <img
          src={post.coverImage}
          alt=""
          width={post.coverWidth}
          height={post.coverHeight}
          style="ratio: {post.coverWidth} / {post.coverHeight}"
        />
        <h2>
          {post.title}
        </h2>
      </a>

      <p>{post.excerpt}</p>
    </li>
  {/each}
</ul>
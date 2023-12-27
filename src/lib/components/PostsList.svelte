<script>
	export let posts = []
</script>


<ul class="posts-list">
	{#each posts as post}
		<li>
			<article>
				<a href="/blog/{post.slug}">
					<img
					src={post.coverImage}
					alt=""
					width={post.coverWidth}
					height={post.coverHeight}
					/>
					<h2>
						{post.title}
					</h2></a>
					<p>{post.excerpt}</p>
					<a href="/blog/{post.slug}" class="btn">Read Now</a>
			</article>

			
		</li>
	{/each}
</ul>

<style>
	img {
		aspect-ratio:2 / 2;
		object-fit: cover;
		grid-row: span 2;
	}

	.btn {
		text-decoration: none;
		text-align:center;
	}

	article {
		background:#fff;
		padding:2rem;
		border: 2px solid var(--black);
	}

</style>
<script>
	import { siteTitle } from '$lib/config';
	import { onMount } from 'svelte';
	import { formatDate } from '$lib/assets/js/dateUtils.js';
	let data;

	async function fetchData() {
		const response = await fetch('/api/posts.json');
		if (response.ok) {
			let rawData = await response.json();
			// Format each date
			data = rawData.map((post) => ({
				...post,
				date: formatDate(post.date)
			}));
		} else {
			console.error('Error fetching data');
		}
	}

	onMount(() => {
		fetchData();
	});
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<section class="hero">
	<h1>
		Hey, I'm <strong>Jimmy</strong><br />
		I'm just here to <strong>talk about life, leadership</strong> and the pursuit of
		<strong>the perfect dad joke.</strong>
	</h1>
</section>

<section class="split-section">
	<div class="socialLinks">
		<img src="/images/jimmyheadshot.jpg" alt="Follow Jimmy on social media" class="headshot" />
    <h2>Connect with me.</h2>
		<ul>
			<li>
				<a href="https://www.linkedin.com/in/jimmylemon/" target="_blank"
					><img src="/images/linkedin@2x.png" alt="linkedIn Link" /><p>@jimmylemon</p></a
				>
			</li>
			<li>
				<a href="https://www.instagram.com/_jimmylemon/" target="_blank"
					><img src="/images/instagram@2x.png" alt="linstagram Link" /><span>@_jimmylemon</span></a
				>
			</li>
			<li>
				<a href="https://www.threads.net/@_jimmylemon" target="_blank"
					><img src="/images/threads@2x.png" alt="threads Link" /><span>@_jimmylemon</span></a
				>
			</li>
			<li>
				<a href="https://www.facebook.com/jimmy.lemon" target="_blank"
					><img src="/images/facebook@2x.png" alt="facebook Link" /><span>/jimmy.lemon</span></a
				>
			</li>

      <li style="grid-column: span 2;">
				<a href="https://bullseyetotalmedia.com" target="_blank"
					><img src="/images/btm-icon-round.png" alt="facebook Link" /><span><strong>work with me:</strong> bullseyetotalmedia.com</span></a
				>
			</li>
		</ul>
	</div>
	<div class="latest-post">
		<h2>The latest from the blog.</h2>
		{#if data && data.length > 0}
			<ul class="post-list">
				{#each data.slice(0, 3) as item}
					<a href="/blog/{item.slug}">
						<li>
							<h4>{item.title}</h4>
							<span class="blog-date">{item.date}</span>
						</li>
					</a>
				{/each}
			</ul>
		{:else}
			<p>Loading...</p>
		{/if}

		<a href="/blog" class="btn">More from the Blog</a>
	</div>
</section>

<style>
	section.hero {
		background-color: var(--yellow);
		min-height: 60vh;
		display: flex;
		align-items: center;
		border-bottom: 2px solid var(--black);
	}

	section.hero h1 {
		font-weight: 300;
		max-width: 55vw;
		font-weight: 300;
		margin: 0 10vw;
	}

	.split-section {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.split-section > div {
		padding: 5vw;
	}

	.split-section > div:first-of-type {
		border-right: 2px solid var(--black);
	}

	h2 {
		margin-bottom: 2rem;
	}
	h4 {
		margin-bottom: 0px;
		font-weight: 300;
	}

	span {
		margin-top: 0px;
	}

	.latest-post ul {
		padding-left: 0px;
	}
	li {
		list-style-type: none;
	}
	.latest-post li {
		border: 1px solid var(--black);
		padding: 1rem;
		list-style-type: none;
		transition: all 0.3s ease;
		margin-bottom: 1rem;
		background: #fff;
	}

	.latest-post a:hover li {
		border-left: 40px solid var(--black);
		padding-left: 2rem;
    cursor:pointer;
	}

	a {
		text-decoration: none;
	}

	.socialLinks img {
		max-height: 50px;
		width: auto;
		display: inline;
	}

	.socialLinks img.headshot {
		margin: 0 auto;
		max-height: 150px;
		border-radius: 100%;
}

  .socialLinks {
    display: flex;
    flex-direction: column;
  }

  .socialLinks ul {
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:1rem;
  }

  .socialLinks li a {
    display:flex;
    align-items: center;
    background:#fff;
    padding:.5rem;
    gap:1rem;
    transition: all .3s ease;
    border-left:0px solid var(--black);
      }

      .socialLinks li a:hover {
        border-left:8px solid var(--black);
        padding-left:12px;
        cursor:pointer;
      }

      .socialLinks h2 {
        text-align: center;
        margin-top:1rem;
      }
</style>

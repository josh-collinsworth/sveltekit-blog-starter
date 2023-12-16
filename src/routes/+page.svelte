<script>
	import { siteTitle } from '$lib/config';
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<section class="hero">
	<h1>Hey, I'm <strong>Jimmy</strong><br />
		I'm just here to <strong>talk about life, leadership</strong> and the pursuit of <strong>the perfect dad joke.</strong> </h1>
</section>

<style>
	section.hero {
		max-width: 65vw;
		padding-top:4rem;
		font-weight:300;
		margin-left:10vw;
	}

	section.hero h1 {
		font-weight:300;
	}
</style>

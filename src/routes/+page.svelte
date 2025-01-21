<script>
	import { siteTitle } from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<!-- This is the README.md file in the root of the repo. It serves double duty as the homepage's content. If you'd rather use your own HTML and/or Svelte, you can delete/modify everything in this file. -->
<data.ReadMe />

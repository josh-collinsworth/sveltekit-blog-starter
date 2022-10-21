<script>
	import { siteTitle } from '$lib/config';

<<<<<<< Updated upstream
	export let data;
=======
export let data

const { ReadMe } = data
>>>>>>> Stashed changes
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<<<<<<< Updated upstream
<!-- This is the README.md file in the root of the repo. It serves double duty as the homepage's content. If you'd rather use your own HTML and/or Svelte, you can delete/modify everything in this file. -->
<svelte:component this={data.ReadMe} />
=======

<svelte:component this={ReadMe} />
<!-- This is the README.md file in the root of the repo. It serves double duty as the homepage's content. If you'd rather use your own HTML and/or Svelte, you can delete/modify everything in this file. -->
>>>>>>> Stashed changes

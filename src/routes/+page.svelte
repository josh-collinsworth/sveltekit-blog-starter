<script>
	import { siteTitle } from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<!-- This is the README.md file in the root of the repo. It serves double duty as the homepage's content. If you'd rather use your own HTML and/or Svelte, you can delete/modify everything in this file. -->


<div class="aboutme">
	<div class="typeme">
		<b>bonky@bonkyserv λ ~ whoami</b>
	</div>

	<section class="output">
		<svelte:component this={data.Whoami} />
	</section>
</div>

<!-- <svelte:component this={data.ReadMe} /> -->
<style>
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,500;0,700;1,400&display=swap');

	* {
		font-family: 'IBM Plex Mono', monospace;
	}

	.output {
		width: 100%;
		max-width: 80ch;
		animation: fade 5s;
	}

	.typeme {
		width: 27ch;
		animation: typing 2s steps(27), blink 0.5s step-end infinite alternate;
		white-space: nowrap;
		overflow: hidden;
		border-right: 10px solid #f2d5cf;
	}

	/* animation */

	@keyframes fade {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes typing {
		0% {
			width: 0;
		}
		100% {
			width: 27ch;
		}
	}

	@keyframes blink {
		50% {
			border-color: transparent;
		}
	}
</style>

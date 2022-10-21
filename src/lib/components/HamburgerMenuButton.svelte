<script>
	import { isMenuOpen } from '$lib/assets/js/store'
	import HamburgerSVG from './svg/HamburgerSVG.svelte'
	import XSVG from './svg/XSVG.svelte'

	export let closeOnly = false

	const toggleIsMenuOpen = () => {
		isMenuOpen.set(!$isMenuOpen)
	}
</script>

<button
	on:click={toggleIsMenuOpen}
	aria-pressed={$isMenuOpen}
	class="menu-button"
	tabindex={($isMenuOpen || !closeOnly) ? '0' : '-1'}
>
	<span class="sr-only">Toggle hamburger menu</span>
	{#if closeOnly}
		<XSVG />
	{:else}
		<HamburgerSVG />
	{/if}
</button>
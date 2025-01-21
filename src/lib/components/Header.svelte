<script>
	import { preventDefault } from 'svelte/legacy';

	import MainNav from './MainNav.svelte'
	import HamburgerMenuButton from './HamburgerMenuButton.svelte'
	import { siteTitle } from '$lib/config'

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	}
</script>


<header>
	<a onclick={preventDefault(focusMain)} class="skip-to-content-link" href="#main">
		Skip to main content
	</a>
	
	<a href="/" class="site-title">
		{siteTitle}
	</a>
	
	<HamburgerMenuButton />
	<MainNav />

</header>
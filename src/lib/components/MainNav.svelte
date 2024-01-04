<script>
	import { navItems } from '$lib/config';
	import { isMenuOpen } from '../assets/js/store';
	import NavItem from './NavItem.svelte';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->
<nav class="main-nav" class:open={$isMenuOpen}>
	<ul>
		{#each navItems as page}
			<NavItem href={page.route}>
				{page.title}
			</NavItem>
		{/each}
	</ul>
	<HamburgerMenuButton closeOnly="true" />
</nav>

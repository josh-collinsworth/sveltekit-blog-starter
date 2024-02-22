<script>
	import { isMenuOpen } from '../assets/js/store';
	import HamburgerMenuButton from './HamburgerMenuButton.svelte';
	import NavItems from './NavItems.svelte';
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->
<nav class="main-nav" class:open={$isMenuOpen}>
	<NavItems />
	<HamburgerMenuButton closeOnly="true" />
</nav>

<script>
	import { currentPage, isMenuOpen } from '../assets/js/store';

	let { href, children } = $props();

	let isCurrentPage = $derived($currentPage.startsWith(href));

	const maybeCloseMenu = () => {
		if (href != $currentPage) {
			isMenuOpen.set(false);
		}
	};
</script>

<li>
	<a
		{href}
		onclick={maybeCloseMenu}
		class:active={isCurrentPage}
		aria-current={isCurrentPage ? 'page' : false}
	>
		{@render children?.()}
	</a>
</li>

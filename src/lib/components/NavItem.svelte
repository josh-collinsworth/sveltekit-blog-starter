<script>
  import { isMenuOpen, currentPage } from '$lib/assets/js/store';

  export let href;

  $: isCurrentPage = href === $currentPage

  const closeMenu = () => {
    isMenuOpen.set(false);
  }
</script>


<li>
  <a
    href={href}
    tabindex={$isMenuOpen ? 0 : -1}
    on:click={closeMenu}
    class:active={isCurrentPage}
    aria-current={isCurrentPage ? 'page' : false}
  >
    <slot />
  </a>
</li>
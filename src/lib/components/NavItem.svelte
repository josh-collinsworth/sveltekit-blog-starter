<script>
  import { currentPage, isMenuOpen } from '$lib/assets/js/store'

  export let href

  $: isCurrentPage = $currentPage.startsWith(href)
</script>


<li>
  <a
    href={href}
    class:active={isCurrentPage}
    aria-current={isCurrentPage ? 'page' : false}
  >
    <slot />
  </a>
</li>
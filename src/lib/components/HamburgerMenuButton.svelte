<script>
  import { isMenuOpen } from '$lib/assets/js/store'

  const toggleIsMenuOpen = () => {
    isMenuOpen.set(!$isMenuOpen)
  }
</script>

<button
  on:click={toggleIsMenuOpen}
  aria-pressed={$isMenuOpen}
  class="menu-button"
>
  {$isMenuOpen}
  <span class="sr-only">Toggle hamburger menu</span>
</button>
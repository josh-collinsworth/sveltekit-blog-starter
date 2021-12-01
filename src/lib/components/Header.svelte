<script>
  import MainNav from './MainNav.svelte';
  import { isMenuOpen } from '$lib/assets/js/store';
  import throttle from 'just-throttle';
  import { onMount } from 'svelte'

  $: menuBtnText = $isMenuOpen ? 'Show nav menu' : 'Close nav menu';

  const toggleIsMenuOpen = () => {
    isMenuOpen.set(!$isMenuOpen);
  }

  // Safety function, to prevent the menu from disappearing after a resize
  const checkForWindowSize = throttle(() => {
    isMenuOpen.set(window && window.innerWidth >= 768)
  }, 100)

  const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	}

  onMount(() => {
    checkForWindowSize();
  })
</script>


<svelte:window on:resize={checkForWindowSize} />

<header>
  <a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
    Skip to main content
  </a>

  <a href="/">Home</a>

  <button class="hamburger-btn" aria-pressed={$isMenuOpen} on:click={toggleIsMenuOpen}>
    <span class="sr-only">{menuBtnText}</span>
  </button>

  <MainNav />
</header>
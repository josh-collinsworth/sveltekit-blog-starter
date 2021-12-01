<script>
  import MainNav from './MainNav.svelte';

  const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	}
</script>


<header>
  <div class="container">
    <a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
      Skip to main content
    </a>
    
    <a href="/" class="site-title">My Awesome Blog</a>
    
    <MainNav />
  </div>
</header>
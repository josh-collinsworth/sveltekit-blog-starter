<script>
  import '$lib/assets/scss/global.scss';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
	import { prefetchRoutes } from '$app/navigation'
  import { onMount } from 'svelte'

  // This pre-fetches all routes on the site in the background for faster loading.
  onMount(() => {
    prefetchRoutes()
  })
</script>


<!-- This markup is used on every page in the site. The <slot> is where the page's actual contents will show up. -->
<div class="layout">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>
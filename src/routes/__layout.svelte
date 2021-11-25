<script>
  import '$lib/assets/scss/global.scss';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
	import { prefetchRoutes } from '$app/navigation'
  import { onMount } from 'svelte'

  onMount(() => {
    prefetchRoutes()
  })
</script>


<div class="layout">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>



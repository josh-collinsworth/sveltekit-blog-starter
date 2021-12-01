<script context="module">
	export const load = async({ page }) => {
    return {
      props: {
        path: page.path
      }
    }
  }
</script>

<script>
  import '$lib/assets/scss/global.scss';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { currentPage } from '$lib/assets/js/store';
	import { prefetchRoutes } from '$app/navigation'
  import { onMount } from 'svelte'

  export let path;

  // Used to add classes to the page based on route
  $: dynamicPath = path.replace(/\//g, ' ').trim() || 'home'
  
  $: currentPage.set(path)

  // This pre-fetches all routes on the site in the background for faster loading.
  onMount(() => {
    prefetchRoutes()
  })
</script>


<!-- This markup is used on every page in the site. The <slot> is where the page's actual contents will show up. The dynamic path adds classes based on the current route. -->
<div class="layout {dynamicPath}">
  <Header />
  <main id="main" tabindex="-1">
    <slot />
  </main>
  <Footer />
</div>
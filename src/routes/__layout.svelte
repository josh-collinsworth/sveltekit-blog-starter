<!-- This is the global layout file; it "wraps" every page on the site. (Or more accurately: is the parent component to every page component on the site.) -->

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
	import { prefetchRoutes } from '$app/navigation';
  import { onMount } from 'svelte';

  export let path;
  
  /**
   * Updates the global store with the current path. (Used for highlighting 
   * the current page in the nav, but could be useful for other purposes,
   * such as adding page transitions.)
   **/
  $: currentPage.set(path)

  /**
   * This pre-fetches all routes on the site in the background for faster loading.
   * It may be better to use `prefetch()` for specific routes instead if there are 
   * lots and lots of routes, however, to avoid wasting user data.
   * 
   * https://kit.svelte.dev/docs#modules-$app-navigation
   **/
  onMount(() => {
    prefetchRoutes()
  })
</script>


<!-- This markup is used on every page in the site. The <slot> is where the page's actual contents will show up. The dynamic path adds classes based on the current route. -->
<div class="layout">
  <Header />
  <main id="main" tabindex="-1">
    <slot />
  </main>
  <Footer />
</div>
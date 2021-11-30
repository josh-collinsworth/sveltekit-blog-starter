<script context="module">
	export const load = async({ page }) => {
    console.log(page.path)
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
	import { prefetchRoutes } from '$app/navigation'
  import { onMount } from 'svelte'

  export let path;

  $: dynamicPath = path.replace(/\//g, ' ').trim() || 'home'

  // This pre-fetches all routes on the site in the background for faster loading.
  onMount(() => {
    prefetchRoutes()
  })
</script>


<!-- This markup is used on every page in the site. The <slot> is where the page's actual contents will show up. The dynamic path adds classes based on the current route. -->
<div class="layout {dynamicPath}">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>
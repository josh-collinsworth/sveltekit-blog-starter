<!-- This is the global layout file; it "wraps" every page on the site. (Or more accurately: is the parent component to every page component on the site.) -->
<script context="module">
	export const load = async({ url, fetch }) => {
    /**
     * This fetch call is not used in this file, but the route won't be pre-rendered 
     * and routed properly unless it's called inside a `load` function. ¯\_(ツ)_/¯
     * */ 
    const rss = await fetch(`/api/rss.xml`)

    return {
      props: {
        path: url.pathname
      }
    }
  }
</script>

<script>
  import '$lib/assets/scss/global.scss'
  import Header from '$lib/components/Header.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { currentPage, isMenuOpen } from '$lib/assets/js/store'
  import { navItems } from '$lib/config'
	import { prefetch } from '$app/navigation'
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import { cubicIn, cubicOut } from 'svelte/easing'

  const transitionIn = { delay: 200, duration: 400, y: 12, easing: cubicOut }
  const transitionOut = { duration: 200, y: -8, easing: cubicIn }

  export let path
  
  /**
   * Updates the global store with the current path. (Used for highlighting 
   * the current page in the nav, but could be useful for other purposes.)
   **/
  $: currentPage.set(path)

  /**
   * This pre-fetches all top-level routes on the site in the background for faster loading.
   * https://kit.svelte.dev/docs#modules-$app-navigation
   * 
   * Any route added in src/lib/config.js will be prefetched automatically. You can add your
   * own prefetch() calls here, too.
   **/
  onMount(() => {
    navItems.forEach(item => prefetch(item.route))
  })
</script>


<!-- 
  The below markup is used on every page in the site. The <slot> is where the page's
  actual contents will show up.

  NOTE: if you add content that doesn't belong inside a `<main>` element to any page
  (such as a sidebar, for example), you'll want to change this `<main>` element to 
  something else, and add a `<main>` on each page as needed instead. Otherwise, you'll
  end up with poor semantics and accessibility.
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main
-->
<div class="layout" class:open={$isMenuOpen}>
  <Header />
  {#key path}
    <main
      id="main"
      tabindex="-1"
      in:fly={transitionIn}
      out:fly={transitionOut}
    >
      <slot />
    </main>
  {/key}
  <Footer />
</div>
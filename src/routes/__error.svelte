<!-- This page handles any error encountered by the site. -->

<script context="module">
  export const load = ({ error, status }) => {
      return { props: { error, status } };
  };
</script>


<script>
  import { currentPage } from '$lib/assets/js/store'
  import { onMount } from 'svelte'

  export let status
  export let error

  /**
   * I'm not really sure why this is necessary; I think it must be
   * a bug with the current version of SvelteKit. But for some reason,
   * the initial router load of the RSS page always 404s. This just
   * reloads the page, so it actually displays properly.
  */
  onMount(() => {
    if ($currentPage.includes('rss.xml')) {
      window.location.reload()
    }
  })
</script>


<h2>{status}</h2>

<p class="subhead">{error.message}</p>

<p><strong>Sorry!</strong> Maybe try one of these links?</p>
<ul>
  <li><a href="/">Home</a></li>
</ul>
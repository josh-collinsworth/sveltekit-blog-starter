<!-- This page handles any error encountered by the site. -->

<script context="module">
  export const load = ({ error, status }) => {
      return { props: { error, status } };
  };
</script>


<script>
  export let status
  export let error
</script>


<h2>{status}</h2>

<p class="subhead">{error.message}</p>

<p><strong>Sorry!</strong> Maybe try one of these links?</p>
<ul>
  <li><a href="/">Home</a></li>
</ul>
<script>
  import Header from '$lib/components/Header.svelte';
  import '$lib/assets/scss/global.scss';
</script>


<div class="layout">
  <Header />
  <slot />
</div>
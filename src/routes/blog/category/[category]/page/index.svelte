<!-- This file just here to prevent 404s with the /blog/category/x/page/y route where y is not defined -->
<script context="module">
	export const load = async () => {
    return {
      status: 301,
      redirect: `/blog/category`
    }
  }
</script>
<script>
	let isToggled = false
</script>


<button on:click={() => isToggled = !isToggled}>
	Click me!!
</button>

{#if isToggled}
	<p>Toggled on ✅</p>
{/if}

<style>
	button {
		background: orange;
		font-size: 2rem;
	}
</style>
<script>
	import MainNav from './MainNav.svelte'
	import HamburgerMenuButton from './HamburgerMenuButton.svelte'
	import { siteTitle } from '$lib/config'

	const focusMain = () => {
		const main = document.querySelector('main');
		main.focus();
	}
</script>


<header>
	<a on:click|preventDefault={focusMain} class="skip-to-content-link" href="#main">
		Skip to main content
	</a>
	
	<a href="/">
		<h2><span style="font-weight:300;">jimmy</span><span style="font-weight:800">lemon</span></h2>
	</a>
	
	<HamburgerMenuButton />
	<MainNav />

</header>

<style>
	header {
	background:var(--yellow);
	color:var(--black);
	display:flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
	border-bottom: 2px solid var(--black);
	}

	header li a {
		font-weight:600!important;
	}
	header h2 {
		margin:0px;
		padding:0px;
	}

	header .main-nav {
    font-weight:700;
}

header .main-nav li.active {
    color:red;
}
</style>
<script>
	import logo from '$lib/images/logo.svg';
	import Container from '$lib/components/Conatiner.svelte';
</script>

<header>
	<Container>
		<nav class="flex items-center justify-between w-full h-16 py-4">
			<img src={logo} alt="Floral Logo" class="object-contain h-full w-fit" />
			<div class="flex gap-8">
				<a href="/">Home</a>
				<a href="/News">News</a>
				<a href="/Team">Team</a>
				<a href="/AboutUs">About Us</a>
			</div>
			<button>floral.at</button>
		</nav>
	</Container>
</header>

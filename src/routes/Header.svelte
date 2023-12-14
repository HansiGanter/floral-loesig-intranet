<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.svg';
	import github from '$lib/images/github.svg';
	import Container from '$lib/components/Conatiner.svelte';
</script>

<header>
	<Container>
		<img src={logo} alt="Floral Logo" />

		<nav>
			<svg viewBox="0 0 2 3" aria-hidden="true">
				<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
			</svg>
		</nav>
	</Container>
</header>

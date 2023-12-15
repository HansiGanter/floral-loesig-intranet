<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import '../app.css';
</script>

<div class="flex min-h-screen flex-col">
	<Header />

	<main class="flex-auto">
		<slot />
	</main>

	<Footer />
</div>

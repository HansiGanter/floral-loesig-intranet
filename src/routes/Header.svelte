<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import Container from '$lib/components/Container.svelte';

	import { _ } from 'svelte-i18n';
</script>

<header>
	<Container class="my-0">
		<nav class="flex h-16 w-full items-center justify-between py-4">
			<a href="/" class="h-full">
				<img src={logo} alt="Floral Logo" class="h-full w-fit object-contain" />
			</a>
			<div class="flex gap-8">
				<a href="/">{$_('navbar.home')}</a>
				<a href="/News">{$_('navbar.news')}</a>
				<a href="/Team">{$_('navbar.team')}</a>
				<a href="/AboutUs">{$_('navbar.aboutus')}</a>
			</div>
			<button>{$_('floralat.website')}</button>
		</nav>
	</Container>
</header>

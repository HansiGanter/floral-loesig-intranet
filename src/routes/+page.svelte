<script lang="ts">
	import Container from '$lib/components/Conatiner.svelte';
	import Button from '$lib/components/common/Button.svelte';
	import H1 from '$lib/components/common/headings/H1.svelte';
	import H2 from '$lib/components/common/headings/H2.svelte';
	import H3 from '$lib/components/common/headings/H3.svelte';
	import H4 from '$lib/components/common/headings/H4.svelte';
	import H5 from '$lib/components/common/headings/H5.svelte';
	import H6 from '$lib/components/common/headings/H6.svelte';
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>Floral Lösieg Intranet</title>
	<meta name="description" content="Floral Lösieg Intranet" />
</svelte:head>

<div id="hero" class="flex w-full flex-col items-center justify-center gap-6 overflow-hidden">
	<H1 class="text-center text-white">Welcome Home: Explore Floral Lösieg's Intranet Realm</H1>
	<H5 class="text-center text-white">
		Your central hub for seamless collaboration, updates, and company resources.
	</H5>
	<Button variant="primary" class="my-6" on:click={() => goto('/vision')}>Vision</Button>
</div>

<style>
	#hero {
		height: calc(100vh - 64px);
		background:
			linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
			url('$lib/assets/images/image1.jpg') center / cover no-repeat;
	}
</style>

<script lang="ts">
	import Button from '$lib/components/common/Button.svelte';
	import H1 from '$lib/components/common/headings/H1.svelte';
	import H2 from '$lib/components/common/headings/H2.svelte';
	import H5 from '$lib/components/common/headings/H5.svelte';
	import { goto } from '$app/navigation';
	import { _ } from 'svelte-i18n';
	import Container from '$lib/components/Container.svelte';
	import Carousel from '$lib/components/Carousel.svelte';

	const testimonials = [
		{
			stars: 5,
			quote: 'Floral Lösieg has transformed my home with their beautiful decorative fabrics.',
			img: 'image.jpg',
			name: 'John Smith',
			job: 'Interior Designer, Smith Interiors'
		},
		{
			stars: 5,
			quote: 'Floral Lösieg has transformed my home with their beautiful decorative fabrics.',
			img: 'image.jpg',
			name: 'John Smith',
			job: 'Interior Designer, Smith Interiors'
		},
		{
			stars: 5,
			quote: 'Floral Lösieg has transformed my home with their beautiful decorative fabrics.',
			img: 'image.jpg',
			name: 'John Smith',
			job: 'Interior Designer, Smith Interiors'
		},
		{
			stars: 5,
			quote: 'Floral Lösieg has transformed my home with their beautiful decorative fabrics.',
			img: 'image.jpg',
			name: 'John Smith',
			job: 'Interior Designer, Smith Interiors'
		},
		{
			stars: 5,
			quote: 'Floral Lösieg has transformed my home with their beautiful decorative fabrics.',
			img: 'image.jpg',
			name: 'John Smith',
			job: 'Interior Designer, Smith Interiors'
		}
	];
</script>

<svelte:head>
	<title>{$_('title')}</title>
	<meta name="description" content="Floral Lösieg Intranet" />
</svelte:head>

<div id="hero" class="flex w-full flex-col items-center justify-center gap-6 overflow-hidden">
	<H1 class="text-center text-white">{$_('hero.heading')}</H1>
	<H5 class="text-center text-white">
		{$_('hero.subheading')}
	</H5>
	<Button variant="primary" class="my-6" on:click={() => goto('/vision')}>
		{$_('hero.gotovision')}
	</Button>
</div>

<Container class="bg-green-200">Here goes some Leitbild shit</Container>

<Container>
	<H2 class="text-center">{$_('testimonial.heading')}</H2>
	<H5 class="text-center">{$_('testimonial.description')}</H5>
	<div>
		<Carousel>
			{#each testimonials as testimonial}
				<div class="mx-4 h-40 bg-green-300">Hi, I'm slide 1</div>
			{/each}
		</Carousel>
	</div>

	<div>
		<Carousel>
			{#each testimonials as testimonial}
				<div class="mx-4 h-40 bg-green-300">Hi, I'm slide 1</div>
			{/each}
		</Carousel>
	</div>
	<br />

	<div>
		<Carousel>
			<div class="mx-4 h-40 bg-green-300">Hi, I'm slide 1</div>
			<div class="mx-4 h-40 bg-red-300">Hi, I'm slide 2</div>
			<div class="mx-4 h-40 bg-blue-300">Hi, I'm slide 3</div>
			<div class="mx-4 h-40 bg-yellow-300">Hi, I'm slide 4</div>
			<div class="mx-4 h-40 bg-purple-300">Hi, I'm slide 1</div>
			<div class="mx-4 h-40 bg-pink-300">Hi, I'm slide 2</div>
			<div class="mx-4 h-40 bg-orange-300">Hi, I'm slide 3</div>
			<div class="mx-4 h-40 bg-teal-300">Hi, I'm slide 4</div>
		</Carousel>
	</div>
</Container>

<style>
	#hero {
		height: calc(100vh - 64px);
		background:
			linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
			url('$lib/assets/images/image1.jpg') center / cover no-repeat;
	}
</style>

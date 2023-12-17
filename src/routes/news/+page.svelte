<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import H1 from '$lib/components/common/headings/H1.svelte';
	import H2 from '$lib/components/common/headings/H2.svelte';
	import H6 from '$lib/components/common/headings/H6.svelte';
	import { _ } from 'svelte-i18n';
	import MyImage from '$lib/assets/images/image-portrait.jpg?enhanced';
	import Button from '$lib/components/common/Button.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import { NewsGallery } from '$lib/content/newsposts';
	import Icon from '@iconify/svelte';

	export let data;

	let left: () => void;
	let right: () => void;

	function goLeft() {
		left();
	}
	function goRight() {
		right();
	}
</script>

<div id="news-hero" class="flex flex-col justify-center">
	<Container>
		<H1 class="text-white">{$_('news.heading')}</H1>
		<H6 class="text-white">
			{$_('news.subheading')}
		</H6>
	</Container>
</div>

<Container>
	<p class="font-semibold">{$_('news.newslist.preheading')}</p>
	<H2>{$_('news.newslist.heading')}</H2>
	<p class="mb-16 text-xl">
		{$_('news.newslist.description')}
	</p>
	<div class="grid grid-cols-3 gap-8">
		{#each data.newsposts as post}
			<a href="/news/{post.id}">
				<div class="grid gap-6 hover:shadow-lg">
					<enhanced:img
						src={MyImage}
						alt={`Image of News-Post ${post.title}`}
						class="aspect-video object-cover"
					/>
					<div class="flex flex-col gap-4 p-4">
						<div class="flex flex-wrap gap-4">
							{#each post.categories as categorie}
								<span class="bg-gray-100 px-2 py-1 text-sm">{categorie}</span>
							{/each}
						</div>
						<H6>{post.title}</H6>
						<p>{post.subtitle}</p>
					</div>
					<Button variant="tertiary" trailingIcon="ic:round-arrow-forward" class="m-4 mx-auto w-fit"
						>{$_('news.newslist.item.button')}</Button
					>
				</div>
			</a>
		{/each}
	</div>
</Container>

<Container>
	<div class="relative">
		<Carousel bind:left bind:right perPage={1}>
			{#each NewsGallery as img}
				<enhanced:img src={img.url} alt={`Portrait von ${img.alt}`} class="w-screen object-cover" />
			{/each}
		</Carousel>
		<Button variant="secondary" class="goLeft absolute rounded-full !p-2" on:click={goLeft}>
			<Icon icon="ic:round-arrow-back" class="h-6 w-6 shrink-0" />
		</Button>
		<Button variant="secondary" class="goRight absolute rounded-full !p-2" on:click={goRight}>
			<Icon icon="ic:round-arrow-forward" class="h-6 w-6 shrink-0" />
		</Button>
	</div>
</Container>

<style>
	#news-hero {
		height: 35vw;
		background:
			linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
			url('$lib/assets/images/image1.jpg') center / cover no-repeat;
	}
	:global(.goLeft) {
		top: 50%;
		transform: translate(calc(-50% + 48px), -50%);
	}
	:global(.goRight) {
		top: 50%;
		left: 100%;
		transform: translate(calc(-50% - 48px), -50%);
	}
</style>

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
	console.log(data);

	let left: () => void;
	let right: () => void;

	function goLeft() {
		left();
	}
	function goRight() {
		right();
	}
</script>

<div id="team-hero" class="flex flex-col justify-center">
	<Container>
		<H1 class="text-white">{$_('team.heading')}</H1>
		<H6 class="text-white">
			{$_('team.subheading')}
		</H6>
	</Container>
</div>

<Container>
	<div class="flex flex-col gap-20">
		<div class="flex flex-col gap-4">
			<p class="font-semibold">{$_('team.teamlist.preheading')}</p>
			<div class="flex flex-col gap-6">
				<H2 class="!my-0">{$_('team.teamlist.heading')}</H2>
				<p class="text-lg">{$_('team.teamlist.description')}</p>
			</div>
		</div>
		<div class="grid grid-cols-2 gap-16">
			{#each data.teamdata as teammember}
				<div class="flex flex-col gap-6">
					<enhanced:img
						src={MyImage}
						alt={`Image of employee ${teammember.name}`}
						class="aspect-video object-cover"
					/>
					<div class="flex flex-col gap-4">
						<div>
							<p class="text-xl font-semibold">{teammember.name}</p>
							<p class="text-lg">{teammember.job}</p>
						</div>
						<p>{teammember.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</Container>

<Container>
	<div class="my-20 flex flex-col gap-6">
		<H2 class="!my-0 text-center">{$_('team.teamgallery.heading')}</H2>
		<p class="text-center text-lg">{$_('team.teamlist.description')}</p>
	</div>
	<div class="relative">
		<Carousel bind:left bind:right perPage={1}>
			{#each NewsGallery as img}
				<enhanced:img
					src={img.url}
					alt={`Portrait von ${img.alt}`}
					class=" w-screen object-cover"
				/>
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
	#team-hero {
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

<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import H1 from '$lib/components/common/headings/H1.svelte';
	import { _ } from 'svelte-i18n';
	import image from '$lib/assets/images/image-portrait.jpg';
	import H2 from '$lib/components/common/headings/H2.svelte';
	import Button from '$lib/components/common/Button.svelte';
	import MyImage from '$lib/assets/images/image-portrait.jpg?enhanced';
	import LatestNews from '$lib/components/LatestNews.svelte';

	const heroimgs = [image, image, image, image];
	export let data;
</script>

<Container class="mt-0">
	<div class="grid grid-cols-2 items-center justify-center">
		<div class="flex flex-col gap-6 break-words pr-12">
			<H1>{$_('aboutus.heading')}</H1>
			<p>{$_('aboutus.subheading')}</p>
		</div>
		<div class="grid h-[calc(100vh-64px)] grid-cols-2 gap-4 overflow-hidden">
			<div class="flex flex-col justify-start">
				{#each [1, 2, 3, 4] as n}
					<div class="slide-up inline-block shrink-0">
						{#each heroimgs as img}
							<img src={img} alt={img} class="inline-block object-contain pb-4" />
						{/each}
					</div>
				{/each}
			</div>
			<div class="flex h-screen flex-col justify-end">
				{#each [1, 2, 3, 4] as n}
					<div class="slide-down inline-block shrink-0">
						{#each heroimgs as img}
							<img src={img} alt={img} class="inline-block object-contain pb-4" />
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</div>
</Container>

<Container>
	<div class="flex flex-col gap-20">
		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-6">
				<H2 class="!my-0">{$_('team.teamlist.heading')}</H2>
				<p class="text-lg">{$_('team.teamlist.description')}</p>
				<a href="/team">
					<Button class="w-fit" variant="primary">{$_('team.gotoall')}</Button>
				</a>
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
	<LatestNews></LatestNews>
</Container>

<style>
	.slide-up {
		animation: slide-up 60s linear infinite;
	}

	@keyframes slide-up {
		0% {
			transform: translateY(0%);
		}

		100% {
			transform: translateY(-100%);
		}
	}

	.slide-down {
		animation: slide-down 60s linear infinite;
	}

	@keyframes slide-down {
		0% {
			transform: translateY(0%);
		}

		100% {
			transform: translateY(100%);
		}
	}
</style>

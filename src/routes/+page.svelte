<script lang="ts">
	import Button from '$lib/components/common/Button.svelte';
	import H1 from '$lib/components/common/headings/H1.svelte';
	import H2 from '$lib/components/common/headings/H2.svelte';
	import H6 from '$lib/components/common/headings/H6.svelte';
	import { goto } from '$app/navigation';
	import { _ } from 'svelte-i18n';
	import Container from '$lib/components/Container.svelte';
	import Carousel from '$lib/components/Carousel.svelte';
	import Icon from '@iconify/svelte';
	import MyImage from '$lib/assets/images/image-portrait.jpg?enhanced';
	import LatestNews from '$lib/components/LatestNews.svelte';
	import H4 from '$lib/components/common/headings/H4.svelte';
	import Accordion from '$lib/components/Accordion.svelte';

	export let data;

	const testimonials = [
		{
			stars: 5,
			quote:
				'Floral Lösieg hat mein Zuhause mit ihren wunderschönen dekorativen Stoffen komplett verändert!',
			img: MyImage,
			name: 'Anna Müller',
			job: 'Innenarchitektin, Müller Design'
		},
		{
			stars: 4,
			quote:
				'Die Produkte von Floral Lösieg haben eine erstaunliche Qualität und haben mein Wohnzimmer auf ein neues Niveau gehoben.',
			img: MyImage,
			name: 'Max Schmidt',
			job: 'Raumausstatter, Schmidt Interior'
		},
		{
			stars: 5,
			quote:
				'Ich bin begeistert von der Vielfalt und Eleganz der Stoffe von Floral Lösieg. Einfach perfekt für mein Projekt!',
			img: MyImage,
			name: 'Sophie Wagner',
			job: 'Dekorateurin, Wagner Designs'
		},
		{
			stars: 4,
			quote:
				'Die Kreativität und Qualität der Produkte von Floral Lösieg sind beeindruckend. Sie haben meinen Erwartungen entsprochen.',
			img: MyImage,
			name: 'Julius Becker',
			job: 'Innenarchitekt, Becker Interiors'
		},
		{
			stars: 5,
			quote:
				'Floral Lösieg liefert nicht nur hochwertige Stoffe, sondern auch exzellenten Service. Ich bin äußerst zufrieden!',
			img: MyImage,
			name: 'Maria Schulz',
			job: 'Raumgestalterin, Schulz Designs'
		}
	];

	let left: () => void;
	let right: () => void;

	function goLeft() {
		left();
	}
	function goRight() {
		right();
	}

	const faqs = [
		{
			question: $_('faq.question1'),
			answer: $_('faq.answer1')
		},
		{
			question: $_('faq.question2'),
			answer: $_('faq.answer2')
		},
		{
			question: $_('faq.question3'),
			answer: $_('faq.answer3')
		},
		{
			question: $_('faq.question4'),
			answer: $_('faq.answer4')
		},
		{
			question: $_('faq.question5'),
			answer: $_('faq.answer5')
		},
		{
			question: $_('faq.question6'),
			answer: $_('faq.answer6')
		}
	];
</script>

<svelte:head>
	<title>{$_('title')}</title>
	<meta name="description" content="Floral Lösieg Intranet" />
</svelte:head>

<div id="hero" class="flex items-center justify-center">
	<div class="flex max-w-[70%] flex-col items-center gap-6 overflow-hidden">
		<H1 class="text-center text-white">{$_('hero.heading')}</H1>
		<H6 class="text-center text-white">
			{$_('hero.subheading')}
		</H6>
		<Button variant="primary" class="my-6 w-fit" on:click={() => goto('/vision')}>
			{$_('hero.gotovision')}
		</Button>
	</div>
</div>

<Container class="bg-green-200">Here goes some Leitbild shit</Container>

<Container>
	<H2 class="text-center">{$_('testimonial.heading')}</H2>
	<p class="mb-20 text-center">{$_('testimonial.description')}</p>
	<div class="relative">
		<Carousel bind:left bind:right perPage={3}>
			{#each testimonials as testimonial}
				<div class="mx-4 flex flex-col gap-8 border border-black p-8">
					<div class="flex">
						{#each Array(testimonial.stars) as _, i}
							<Icon icon="ic:baseline-star" class="h-6 w-6 shrink-0" />
						{/each}
						{#each Array(5 - testimonial.stars) as _, i}
							<Icon icon="ic:baseline-star-border" class="h-6 w-6 shrink-0" />
						{/each}
					</div>
					<p>"{testimonial.quote}"</p>
					<div class="flex gap-4">
						<div class=" h-14 w-14 shrink-0">
							<enhanced:img
								src={testimonial.img}
								alt={`Portrait von ${testimonial.name}`}
								class="aspect-square rounded-full object-cover"
							/>
						</div>
						<div>
							<p class="font-semibold">{testimonial.name}</p>
							<p>{testimonial.job}</p>
						</div>
					</div>
				</div>
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

<Container>
	<LatestNews></LatestNews>
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
	<div class="flex flex-col gap-20">
		<div class="flex flex-col gap-6">
			<H2>{$_('faq.heading')}</H2>
			<p class="text-lg">{$_('faq.description')}</p>
		</div>
		<div class="border-b border-black">
			{#each faqs as faq}
				<Accordion>
					<span slot="head">{faq.question}</span>
					<div slot="details">
						<p>{faq.answer}</p>
					</div>
				</Accordion>
			{/each}
		</div>
		<div class="flex flex-col gap-6">
			<div class="flex flex-col gap-6">
				<H4>{$_('faq.contactus.heading')}</H4>
				<p class="text-lg">{$_('faq.contactus.description')}</p>
			</div>
			<Button class="w-fit" variant="secondary">{$_('faq.contactus.button')}</Button>
		</div>
	</div>
</Container>

<style>
	#hero {
		height: calc(100vh - 64px);
		background:
			linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
			url('$lib/assets/images/image1.jpg') center / cover no-repeat;
	}
	:global(.goLeft) {
		top: 50%;
		transform: translate(calc(-50% + 16px), -50%);
	}
	:global(.goRight) {
		top: 50%;
		left: 100%;
		transform: translate(calc(-50% - 16px), -50%);
	}
</style>

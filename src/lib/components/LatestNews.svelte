<script lang="ts">
	import H2 from './common/headings/H2.svelte';
	import { GETLatestNewsPosts } from '$lib/content/newsposts';
	import { onMount } from 'svelte';
	import Button from './common/Button.svelte';
	import H6 from './common/headings/H6.svelte';
	import MyImage from '$lib/assets/images/image-portrait.jpg?enhanced';
	import { _ } from 'svelte-i18n';

	type NewsPost = {
		id: number;
		title: string;
		subtitle: string;
		image: string;
		categories: string;
		readTime: string;
		author: string;
		published: string;
		content: string;
	};
	let latestNews: NewsPost[] | null = null;

	onMount(() => {
		GETLatestNewsPosts()
			.then((res) => res.json())
			.then((newsposts) => {
				latestNews = newsposts;
			})
			.catch((error) => {
				console.error('Error loading data:', error);
				return { status: 500, error: new Error('Failed to load data') };
			});
	});
</script>

<div class="flex flex-col gap-16">
	<div class="flex flex-col gap-4">
		<H2>{$_('news.latestNews.heading')}Discover Our Latest News</H2>
		<p>{$_('news.latestNews.subheading')}Stay updated with our latest news and announcements.</p>
	</div>
	<div class="grid grid-cols-3 gap-8">
		{#if latestNews}
			{#each latestNews as post}
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
						<Button
							variant="tertiary"
							trailingIcon="ic:round-arrow-forward"
							class="m-4 mx-auto w-fit">{$_('news.newslist.item.button')}</Button
						>
					</div>
				</a>
			{/each}
		{:else}
			<p>Loading...</p>
		{/if}
	</div>
</div>

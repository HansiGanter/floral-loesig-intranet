<script>
	import Container from '$lib/components/Container.svelte';
	import H3 from '$lib/components/common/headings/H3.svelte';
	import H2 from '$lib/components/common/headings/H2.svelte';
	import MyImage from '$lib/assets/images/image-portrait.jpg?enhanced';
	import Icon from '@iconify/svelte';
	import LatestNews from '$lib/components/LatestNews.svelte';
	import { _ } from 'svelte-i18n';

	export let data;
</script>

<Container>
	<div class="flex flex-col gap-20">
		<div class="flex flex-col gap-12">
			<a href="/news">
				<div class="flex items-center gap-2">
					<Icon icon="ic:round-arrow-back-ios-new" class="h-4 w-4 shrink-0" />{$_(
						'news.newsPost.gotoallnews'
					)}
				</div>
			</a>
			<div class="flex flex-col gap-4">
				<div class="flex items-center gap-4">
					<div class="flex items-center gap-2">
						{#each data.categories as categorie}
							<span class="bg-gray-100 px-2 py-1 text-sm">{categorie}</span>
						{/each}
					</div>
					<span>{data.readTime} {$_('news.newsPost.minutesread')}</span>
				</div>
				<H2 class="my-0">{data.title}</H2>
			</div>
		</div>
		<div class="flex flex-col gap-4">
			<enhanced:img
				src={MyImage}
				alt={`Image of News-Post ${data.title}`}
				class="aspect-video object-cover"
			/>
			<div class="flex items-center justify-between">
				<span>{$_('news.newsPost.writtenby')} {data.author}</span>
				<span>{$_('news.newsPost.published')} {data.published}</span>
			</div>
		</div>
	</div>
</Container>
<Container>
	<div class="flex flex-col px-40">
		<H3 class="my-12">{data.subtitle}</H3>
		<p>{@html data.content}</p>
	</div>
</Container>

<Container>
	<LatestNews></LatestNews>
</Container>

<script>
	import { page } from '$app/stores';
	import H1 from '$lib/components/common/headings/H1.svelte';
	import H4 from '$lib/components/common/headings/H4.svelte';
</script>

<div class="my-40 w-full">
	<H1 class="text-center">An error happend!</H1>
	<H4 class="text-center">Error status: {$page.status}</H4>
	<H4 class="text-center">
		Error description: {$page.error ? $page.error.message : 'no Error message'}
	</H4>
</div>

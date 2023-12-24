<script>
	import { page } from '$app/stores';
	import H1 from '$lib/components/common/headings/H1.svelte';
	import H4 from '$lib/components/common/headings/H4.svelte';
	import { _ } from 'svelte-i18n';
</script>

<div class="my-20 w-full">
	<H1 class="text-center">{$_('error.heading')}</H1>
	<H4 class="text-center">{$_('error.status')} {$page.status}</H4>
	<H4 class="text-center">
		{$_('error.description')}
		{$page.error ? $page.error.message : 'no Error message'}
	</H4>
</div>

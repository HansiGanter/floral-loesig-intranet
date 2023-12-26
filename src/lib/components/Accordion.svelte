<script lang="ts">
	import Icon from '@iconify/svelte';
	export let open = false;
	import { slide } from 'svelte/transition';
	const handleClick = () => (open = !open);
</script>

<div class="border-t border-black py-2.5">
	<button on:click={handleClick} class="flex w-full items-center justify-between text-lg font-bold">
		<slot name="head" /><Icon
			icon={open ? 'ic:round-keyboard-arrow-up' : 'ic:round-keyboard-arrow-down'}
			class="h-6 w-6 shrink-0"
		/>
	</button>

	{#if open}
		<div transition:slide class="py-2.5">
			<slot name="details" />
		</div>
	{/if}
</div>

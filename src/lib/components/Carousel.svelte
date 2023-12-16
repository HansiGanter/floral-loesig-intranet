<script lang="ts">
	import Icon from '@iconify/svelte';
	import Siema from 'siema';
	import { onMount } from 'svelte';

	let selector: HTMLElement;

	let controller: Siema;
	onMount(() => {
		controller = new Siema({
			selector: selector,
			perPage: 3,
			draggable: true,
			multipleDrag: true,
			loop: true
		});
	});
	function left() {
		controller.prev();
	}
	function right() {
		controller.next();
	}
</script>

<div bind:this={selector}>
	<slot />
</div>

<div class="flex justify-center">
	<button on:click={left}>
		<Icon icon="carbon:arrow-left" class="h-6 w-6 shrink-0" />
	</button>
	<button on:click={right}>
		<Icon icon="carbon:arrow-right" class="h-6 w-6 shrink-0" />
	</button>
</div>

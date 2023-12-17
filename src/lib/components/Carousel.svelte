<script lang="ts">
	import Siema from 'siema';
	import { onMount } from 'svelte';

	export let perPage: number;
	let selector: HTMLElement;

	let controller: Siema;
	onMount(() => {
		controller = new Siema({
			selector: selector,
			perPage: perPage,
			draggable: true,
			multipleDrag: true,
			loop: true
		});
	});
	export const left = () => controller.prev();
	export const right = () => controller.next();
</script>

<div bind:this={selector}>
	<slot />
</div>

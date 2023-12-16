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
	export const left = () => controller.prev();
	export const right = () => controller.next();
</script>

<div bind:this={selector}>
	<slot />
</div>

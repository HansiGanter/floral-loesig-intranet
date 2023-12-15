<script lang="ts">
	import Icon from '@iconify/svelte';

	export let variant: 'primary' | 'secondary' | 'tertiary' | 'link';
	export let leadingIcon = '';
	export let trailingIcon = '';
	export let buttonType: 'button' | 'submit' | 'reset' | undefined = undefined;
	let clazz = '';
	export { clazz as class };

	const variants = {
		primary:
			'text-white bg-black border border-black focus:ring-blue-300 hover:bg-white hover:text-black',
		secondary:
			'text-black bg-white border border-black focus:ring-blue-300 hover:bg-black hover:text-white',
		tertiary: 'text-black bg-white border border-white focus:ring-blue-300 hover:border-black',
		link: 'text-black bg-white focus:ring-blue-300 hover:underline'
	};
</script>

<button
	class={`flex items-center justify-center gap-3 px-5 py-2 outline-none focus:ring-4 ${variants[variant]} ${clazz}`}
	type={buttonType}
	on:click
>
	{#if leadingIcon}
		<Icon icon={leadingIcon} class="h-6 w-6 shrink-0" />
	{/if}
	<slot />
	{#if trailingIcon}
		<Icon icon={trailingIcon} class="h-6 w-6 shrink-0" />
	{/if}
</button>

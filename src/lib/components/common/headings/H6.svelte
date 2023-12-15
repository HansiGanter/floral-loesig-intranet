<script>
	let clazz = '';
	export { clazz as class };
</script>

<h1 class={`my-1 text-xl font-semibold ${clazz}`}>
	<slot />
</h1>

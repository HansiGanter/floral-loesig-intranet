<script>
	let clazz = '';
	export { clazz as class };
</script>

<h1 class={`my-4 text-4xl font-semibold ${clazz}`}>
	<slot />
</h1>

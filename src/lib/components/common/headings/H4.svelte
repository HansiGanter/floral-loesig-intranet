<script>
	let clazz = '';
	export { clazz as class };
</script>

<h1 class={`my-3 text-3xl font-semibold ${clazz}`}>
	<slot />
</h1>

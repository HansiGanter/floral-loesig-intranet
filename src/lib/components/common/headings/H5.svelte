<script>
	let clazz = '';
	export { clazz as class };
</script>

<h1 class={`my-2 text-2xl font-semibold ${clazz}`}>
	<slot />
</h1>

<script lang="ts">
	import Container from '$lib/components/Conatiner.svelte';
	import Button from '$lib/components/common/Button.svelte';
	import H1 from '$lib/components/common/headings/H1.svelte';
	import H2 from '$lib/components/common/headings/H2.svelte';
	import H3 from '$lib/components/common/headings/H3.svelte';
	import H4 from '$lib/components/common/headings/H4.svelte';
	import H5 from '$lib/components/common/headings/H5.svelte';
	import H6 from '$lib/components/common/headings/H6.svelte';
	import Icon from '@iconify/svelte';
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>Floral Lösieg Intranet</title>
	<meta name="description" content="Floral Lösieg Intranet" />
</svelte:head>

<Container>
	<H1>Heading 1</H1>
	<H2>Heading 1</H2>
	<H3>Heading 1</H3>
	<H4>Heading 1</H4>
	<H5>Heading 1</H5>
	<H6>Heading 1</H6>
	<br /><br />
	<div class="flex gap-4 py-4">
		<Button variant="primary">Button</Button>
		<Button variant="secondary">Button</Button>
		<Button variant="tertiary">Button</Button>
		<Button variant="link">Button</Button>
	</div>
	<div class="flex gap-4 py-4">
		<Button variant="primary" leadingIcon="mdi-light:home">Button</Button>
		<Button variant="secondary" leadingIcon="mdi-light:home">Button</Button>
		<Button variant="tertiary" leadingIcon="mdi-light:home">Button</Button>
		<Button variant="link" leadingIcon="mdi-light:home">Button</Button>
	</div>
	<div class="flex gap-4 py-4">
		<Button variant="primary" trailingIcon="mdi-light:home">Button</Button>
		<Button variant="secondary" trailingIcon="mdi-light:home">Button</Button>
		<Button variant="tertiary" trailingIcon="mdi-light:home">Button</Button>
		<Button variant="link" trailingIcon="mdi-light:home">Button</Button>
	</div>
	<div class="flex gap-4 py-4">
		<Button variant="primary" leadingIcon="mdi-light:home"></Button>
		<Button variant="secondary" leadingIcon="mdi-light:home"></Button>
		<Button variant="tertiary" leadingIcon="mdi-light:home"></Button>
		<Button variant="link" leadingIcon="mdi-light:home"></Button>
	</div>
</Container>

<script>
	import { writable } from 'svelte/store';
	import { get } from 'svelte/store'

	import CodeBlock from './CodeBlock.svelte'
	import SchemaForm from './SchemaForm.svelte'

</script>

<header>
	<h1>Schemanator: How-To</h1>
</header>

<main>
	<section>
		<SchemaForm />
	</section>
	<section>
		<CodeBlock />
	</section>
</main>

<style>
	header {
		max-width: var(--container-width);
		margin: auto;
	}
	main {
		max-width: var(--container-width);
		margin: auto;
		padding: 1rem;
	  display: grid;
	  grid-gap: 4rem;
	  grid-template-columns: repeat(
	  	auto-fill,
	  	minmax(var(--section-width), 1fr)
	  );
	}
</style>

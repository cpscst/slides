<script context="module" lang="ts">
	// We need to configure highlight.js for Javascript, and then alias the
	// exports to match the function signatures that `CodeJar` Component expects
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/atom-one-dark.css';

	import javascript from 'highlight.js/lib/languages/javascript';

	hljs.registerLanguage('javascript', javascript);

	// `highlight` takes the input code and returns the highlighted HTML markup
	const highlight = (code: string, syntax: string | undefined) =>
		hljs.highlight(code, {
			language: syntax ?? ''
		}).value;
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	export let value = '';

	// **NOTE:** Since `onMount` is only called on the client, we can just
	// make our import there. And assign to our Component's scope
	let CodeJar: typeof import('@novacbn/svelte-codejar')['CodeJar'] | undefined;
	onMount(async () => {
		({ CodeJar } = await import('@novacbn/svelte-codejar'));
	});
</script>

<div class="top">
	<div class="lang">javascript</div>
	<div class="wrapScroll">
		<div class="wrap">
			{#if CodeJar}
				<CodeJar class="hljs" syntax="javascript" {highlight} bind:value />
			{:else}
				<!--
		**NOTE:** Normally the `CodeJar` Svelte handles fall through for us, and
		renders / syntax highlights without an editor during SSR / non-JS enabled clients
	-->
				<pre><code>{value}</code></pre>
			{/if}
		</div>
	</div>
</div>

<style>
	.top {
		display: block;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		position: relative;
	}
	.wrapScroll {
		display: block;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		border-radius: var(--rad);
		padding: 0.5rem var(--pad);
		font-family: var(--font);
		font-size: var(--font-size);
		resize: none;
		overflow: scroll;

		position: relative;

		background-color: var(--back-1);

		border: none;
	}
	.wrap {
		display: block;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		border-radius: var(--rad);
		padding: 0.5rem var(--pad);
		font-family: var(--font);
		font-size: var(--font-size);
		resize: none;

		position: absolute;

		background-color: var(--back-1);

		border: none;
	}
	:global(.hljs) {
		background: var(--back-1);
	}

	.lang {
		position: absolute;
		top: 0;
		right: 0;
		padding: 0.25em 0.5em;
		color: var(--text-weak);
		z-index: 100;
	}
</style>

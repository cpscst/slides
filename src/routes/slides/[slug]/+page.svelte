<script lang="ts">
	import type { Slide } from '$lib/types';
	import { onMount } from 'svelte';
	import Page from '../../Page.svelte';
	import Title from '../../Title.svelte';

	export let data: Slide;
	let pdfUrl: string;
	onMount(async () => {
		let url = await import(`../content/${data.url}.pdf?url`);
		pdfUrl = url.default;
	});
</script>

<Page>
	<div class="meta">
		<h1>{data.title}</h1>
		<a href={pdfUrl} target="_blank" rel="noopener noreferrer">Open in new tab {'->'}</a>
	</div>
	<object title="pdf" data={pdfUrl} type="application/pdf" width="100%" height="100%" />
</Page>

<style>
	h1 {
		margin: 0;
		padding: 0;
	}
	object {
		width: 100%;
		height: 100%;
	}

	.meta {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
</style>

<script lang="ts">
	import Card from '../Card.svelte';
	import Page from '../Page.svelte';
	import Title from '../Title.svelte';

	import type { Slide } from '$lib/types';

	export let data: {
		slides: Slide[];
	};
</script>

<Page>
	<Title title="Slides" subtitle="Check out the CST slides" />
	<div class="slides">
		{#each data.slides as slide}
			<Card title={slide.title} url={`slides/${slide.url}`} />
		{/each}
	</div>
</Page>

<style>
	.slides {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--pad);
		width: 100%;
		padding: 0 10vw;
		box-sizing: border-box;
	}
</style>

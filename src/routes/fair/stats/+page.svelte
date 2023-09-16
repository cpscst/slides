<script lang="ts">
	import Page from '../../Page.svelte';
	import Title from '../../Title.svelte';
	import Stat from './Stat.svelte';

	import { stats } from './stats';

	let showStats = false;
</script>

<Page>
	{#if !showStats}
		<Title
			title="CST Stats"
			subtitle="Learn about the Computer Science Team"
			start="Show me"
			on:click={() => (showStats = true)}
		/>
	{:else}
		<div class="stats">
			{#each stats as stat}
				<Stat {...stat} />
			{/each}
		</div>
	{/if}
</Page>

<style>
	.stats {
		position: relative;
		gap: var(--pad);
		width: 100%;
		padding: 10vw 0;
		box-sizing: border-box;

		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
	}
</style>

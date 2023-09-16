<script lang="ts">
	import Page from '../../Page.svelte';
	import Title from '../../Title.svelte';
	import Activities from '../../Activities.svelte';
	import Problem from './Problem.svelte';

	import { problems, getStartingCode } from './problems';
	import type { ResultState } from '$lib/types';

	let problemIndex = -1;

	let values = problems.map((problem) => getStartingCode(problem));

	let resultStates: (ResultState | { tag: 'none' } | { tag: 'waiting' })[] = problems.map(() => ({
		tag: 'none'
	}));
</script>

<Page>
	{#if problemIndex == -1}
		<Title
			title="Fun Coding Problems"
			subtitle="Solve these fun coding problems to test your skills"
			start="Start"
			on:click={() => (problemIndex = 0)}
		/>
	{:else}
		<div class="content">
			<div class="problemListScroll">
				<div class="problemList">
					{#each problems as problem, index}
						<button
							class="problemTab"
							class:selected={index == problemIndex}
							on:click={() => (problemIndex = index)}
						>
							<span class="name">
								{problem.name}
							</span>
							<span class="state">
								{#if resultStates[index].tag == 'none'}
									{''}
								{:else if resultStates[index].tag == 'waiting'}
									*
								{:else if resultStates[index].tag == 'success'}
									{'✓'}
								{:else if resultStates[index].tag == 'failure'}
									*
								{/if}
							</span>
						</button>
					{/each}
				</div>
			</div>
			{#if problemIndex >= 0 && problemIndex < problems.length}
				{#key problemIndex}
					<Problem
						bind:value={values[problemIndex]}
						problem={problems[problemIndex]}
						bind:resultState={resultStates[problemIndex]}
					/>
				{/key}
			{/if}

			<!-- <div class="buttons">
				<button on:click={() => problemIndex--} disabled={problemIndex === -1}>Previous</button>
				{#if problemIndex == problems.length - 1}
				<button on:click={() => problemIndex++}>Finish</button>
				{:else}
					<button on:click={() => problemIndex++} disabled={problemIndex === problems.length - 1}
						>Next</button
					>
				{/if}
			</div> -->
		</div>
	{/if}
</Page>

<style>
	.content {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--pad);
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		position: relative;
	}

	.problemListScroll {
		height: 100%;
		overflow: scroll;
		position: relative;
		width: 15rem;
		height: 100%;
	}

	.problemList {
		position: absolute;
		display: flex;
		flex-direction: column;
		height: 100%;
		gap: var(--pad);
		box-sizing: border-box;
		flex-shrink: 0;
		flex-grow: 0;
		flex-basis: 15rem;
		box-sizing: border-box;
	}
	.problemList button {
		width: 100%;
		text-align: left;
	}

	.problemList button.selected {
		background-color: var(--back-3);
		color: var(--bg);
	}

	.problemTab {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: var(--pad);
		padding: var(--pad);
		border-radius: var(--rad);
		background-color: var(--back-1);
		color: var(--text);
	}

	.problemTab:hover {
		background-color: var(--back-2);
	}

	.problemTab:active {
		background-color: var(--back-3);
	}
</style>

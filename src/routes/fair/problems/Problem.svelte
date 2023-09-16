<script lang="ts">
	import type { Problem, ResultState } from '$lib/types';
	import CodeEditor from './CodeEditor.svelte';
	import { TIMEOUT, testProblem } from './problems';

	export let problem: Problem;

	export let value: string;

	export let resultState: ResultState | { tag: 'none' } | { tag: 'waiting' };

	async function test() {
		resultState = { tag: 'waiting' };
		resultState = await testProblem(problem, value);
	}

	let expandResults = false;
</script>

<div class="problem">
	<h2>{problem.problem}</h2>
	<CodeEditor bind:value />
	<div class="submit">
		<button on:click={test}>Run</button>
		<button
			class="results"
			class:none={resultState.tag == 'none'}
			class:waiting={resultState.tag == 'waiting'}
			class:success={resultState.tag == 'success'}
			class:failure={resultState.tag == 'failure'}
			class:expand={expandResults}
			on:click={() => {
				if (resultState.tag == 'failure') {
					expandResults = !expandResults;
				}
			}}
		>
			{#if resultState.tag == 'none'}
				No results yet
			{:else if resultState.tag == 'waiting'}
				Running...
			{:else if resultState.tag == 'success'}
				Success in {resultState.time}ms
			{:else if resultState.tag == 'failure'}
				Failure:
				{#if resultState.reason.tag == 'timeout'}
					Timeout after {TIMEOUT}ms
				{:else if resultState.reason.tag == 'error'}
					{resultState.reason.message}
				{:else if resultState.reason.tag == 'wrongAnswer'}
					Wrong answer at test case {resultState.reason.testCase + 1} of {problem.ret.tests.length}
				{:else}
					Unknown error
				{/if}
			{/if}
		</button>
	</div>
</div>

<style>
	.problem {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--pad);
		width: calc(100% - 15rem - 2 * var(--pad));
		height: 100%;
		box-sizing: border-box;
		flex-basis: 0;
		flex-grow: 1;
		box-sizing: border-box;
	}
	h2 {
		font-size: 1.5rem;
		margin: 0;
	}

	.submit {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		justify-content: space-between;
		gap: var(--pad);
		width: 100%;
		box-sizing: border-box;
	}

	.results {
		padding: var(--pad);
		border-radius: var(--rad);

		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

		max-width: 100%;
		text-align: left;
	}

	.results.none {
		background-color: var(--back);
		color: var(--text-weak);
	}

	.results.waiting {
		background-color: var(--back-2);
		color: var(--text-weak);
	}

	.results.success {
		background-color: var(--back-2);
		color: var(--text-accent);
	}

	.results.failure {
		color: var(--text-fail);
	}

	.results.expand {
		max-width: none;
		white-space: normal;
		word-break: break-word;
		overflow: scroll;
		text-overflow: none;
	}
</style>

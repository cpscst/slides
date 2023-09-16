<script lang="ts">
	import { questions } from './questions';
	import Question from './Question.svelte';
	import Page from '../../Page.svelte';
	import { onMount } from 'svelte';
	import type { AnswerStat } from '$lib/types';
	import { writable, type Writable } from 'svelte/store';
	import Title from '../../Title.svelte';
	import Activities from '../../Activities.svelte';

	let questionIndex = -1;

	function emptyAnswerStats(): AnswerStat[] {
		let ret = [];
		for (let question of questions) {
			let stat = [];
			for (let _ of question.answers) {
				stat.push(0);
			}
			ret.push(stat);
		}
		return ret;
	}

	const answerStats: Writable<AnswerStat[]> = writable(emptyAnswerStats());

	onMount(() => {
		let rawAnswerStats = localStorage.getItem('answerStats');
		if (rawAnswerStats) {
			answerStats.set(JSON.parse(rawAnswerStats));
		} else {
			answerStats.set(emptyAnswerStats());
		}
		let unsubscribe = answerStats.subscribe((answerStats) => {
			localStorage.setItem('answerStats', JSON.stringify(answerStats));
		});
		return unsubscribe;
	});

	let checkedAnswers: (string | null)[] = [];
	for (let _ of questions) {
		checkedAnswers.push(null);
	}
</script>

<Page>
	{#if questionIndex == -1}
		<Title
			title="Controversial Quiz"
			subtitle="Answer these questions to settle these coding dilemmas"
			start="Start"
			on:click={() => (questionIndex = 0)}
		/>
	{:else if questionIndex == questions.length}
		<Title title="Done" subtitle="Great job!" />
		<Activities items={['home', 'problems', 'stats', 'signup']} />
	{:else}
		<div class="content">
			{#if questionIndex >= 0 && questionIndex < questions.length}
				{#key questionIndex}
					<Question
						bind:checked={checkedAnswers[questionIndex]}
						question={questions[questionIndex]}
						bind:answerStat={$answerStats[questionIndex]}
					/>
				{/key}
			{/if}
			<div class="buttons">
				<button on:click={() => questionIndex--} disabled={questionIndex === -1}>Previous</button>
				{#if questionIndex == questions.length - 1}
					<button on:click={() => questionIndex++}>Finish</button>
				{:else}
					<button on:click={() => questionIndex++} disabled={questionIndex === questions.length - 1}
						>Next</button
					>
				{/if}
			</div>
		</div>
	{/if}
</Page>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: space-between;
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		gap: var(--pad);
		padding: 10vh 10vw;
	}

	.buttons {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: var(--pad);
		width: 100%;
	}
</style>

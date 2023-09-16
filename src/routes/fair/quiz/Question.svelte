<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { scale } from 'svelte/transition';
	import type { AnswerStat, Question } from '../../lib/types';

	export let question: Question;
	export let answerStat: AnswerStat;

	export let checked: string | null;
	let oldChecked: string | null = checked;

	$: checked, onCheckedChange();

	function onCheckedChange() {
		if (checked !== oldChecked) {
			if (checked != null) {
				answerStat[question.answers.indexOf(checked)]++;
			}
			if (oldChecked != null) {
				answerStat[question.answers.indexOf(oldChecked)]--;
			}
			oldChecked = checked;
		}
	}

	$: totalVotes = answerStat.reduce((a, b) => a + b, 0);
</script>

<div class="question">
	<div class="title">
		<h2>{question.question}</h2>
		<div>
			{#if checked != null}
				<button on:click={() => (checked = null)}>Clear</button>
			{/if}
		</div>
	</div>
	<div class="answerWrapper">
		<div class="answersScroll">
			<div class="answers">
				{#each question.answers as answer, index}
					<label class="answer">
						<div
							class="votes"
							style={`--vote-ratio: ${answerStat[index] == 0 ? 0 : answerStat[index] / totalVotes}`}
						/>
						<div class="answerBox">
							<div class="radio">
								<input type="radio" bind:group={checked} name={question.question} value={answer} />
								<span>{answer}</span>
							</div>
							<div class="voteCount">
								{answerStat[index]} votes
							</div>
						</div>
					</label>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.question {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		position: relative;
	}

	.title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: auto;

		box-sizing: border-box;
	}
	.answerWrapper {
		display: block;
		height: 100%;
		width: 100%;
		box-sizing: border-box;
		position: relative;
	}

	.answersScroll {
		display: block;
		height: 100%;
		width: 100%;
		overflow-y: scroll;
		box-sizing: border-box;
		position: absolute;
		border-radius: var(--rad);
	}

	.answers {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: center;
		width: 100%;
		height: auto;
		gap: var(--pad);
	}

	.answer {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		justify-content: left;
		width: 100%;
		border-radius: var(--rad);
		background: var(--back-1);
		height: calc(var(--pad) * 2 + 1rem);

		box-sizing: border-box;

		position: relative;
		transition: background 0.1s ease-in-out;

		overflow: hidden;
	}

	.answerBox {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		height: calc(var(--pad) * 2 + 1rem);

		width: 100%;
		height: 100%;
		padding: var(--pad);
		box-sizing: border-box;
	}

	.radio {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: left;
		height: 100%;
		width: 100%;
	}

	.voteCount {
		white-space: nowrap;
		color: var(--text-weak);
	}

	.answer:hover {
		background: var(--back-2);
	}

	.answer:active,
	.answer:has(:checked) {
		background: var(--back-3);
	}

	.votes {
		position: absolute;
		display: block;
		height: 0.5rem;
		width: calc(var(--vote-ratio) * 100%);
		background: var(--vote);
		border-radius: var(--rad);
		transition: width var(--trans) ease-in-out;
		box-sizing: border-box;
	}

	.answer:active .votes,
	.answer:has(:checked) .votes {
		background: var(--vote-1);
	}

	input {
		margin-right: 1em;
		z-index: 1000;
	}

	label span {
		z-index: 100;
	}
</style>

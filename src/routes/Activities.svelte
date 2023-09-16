<script lang="ts">
	import Card from './Card.svelte';
	import { base } from '$app/paths';

	export let items: (keyof typeof allActivities)[] = [];

	const allActivities = {
		home: {
			title: 'Home',
			url: '/',
			arrowBack: true
		},
		fair: {
			title: 'Club fair activities',
			url: 'fair'
		},
		quiz: {
			title: 'Controversial quiz',
			url: 'fair/quiz'
		},
		problems: {
			title: 'Fun coding problems',
			url: 'fair/problems'
		},
		stats: {
			title: 'CST stats',
			url: 'fair/stats'
		},
		signup: {
			title: 'Sign up',
			url: 'fair/signup',
			special: true
		},
		slides: {
			title: 'Slides',
			url: 'slides'
		}
	};
</script>

<div class="options">
	{#each items as item}
		<Card {...allActivities[item]} />
	{/each}
</div>

<style>
	.options {
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

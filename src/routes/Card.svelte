<script lang="ts">
	import { base } from '$app/paths';

	export let title: string;
	export let url: string;
	export let special: boolean = false;

	export let arrowBack: boolean = false;
</script>

<a class="card" href="{base}/{url}" class:special>
	<h2>{title}</h2>
	<h2 class="arrow" class:back={arrowBack}>{arrowBack ? '<-' : '->'}</h2>
</a>

<style>
	.card {
		display: flex;
		flex-direction: row;
		align-items: left;
		justify-content: space-between;

		width: 100%;
		background: var(--back-1);
		border-radius: 0.5em;
		padding: 1em;

		text-decoration: none;
		color: var(--text-accent);

		text-align: left;

		transition: background var(--trans) ease-in-out, color var(--trans) ease-in-out;
	}

	.arrow {
		opacity: 0;
		transform: translateX(-0.5em);

		transition: opacity var(--trans) ease-in-out, transform var(--trans) ease-in-out;
	}

	.arrow.back {
		transform: translateX(0.5em);
	}

	.card:hover .arrow {
		opacity: 1;
		transform: translateX(0);
	}

	.card:hover {
		background: var(--back-2);

		color: var(--text-accent-hover);
	}

	h2 {
		margin: 0;
		padding: 0;
		font-size: 1.5em;
	}

	.card.special {
		color: var(--text);
	}
	.card.special:hover {
		color: var(--text-strong);
	}
</style>

<script lang="ts">
	export let title: string;
	export let subtitle: string;

	export let start: string | null = null;
</script>

<div class="upper">
	<h2>{title}</h2>
	<h3>{subtitle}</h3>
	{#if start != null}
		<button class="start" on:click>{start}</button>
	{/if}
</div>

<style>
	.upper {
		display: flex;
		flex-direction: column;
		align-items: left;
		justify-content: center;
		width: 100%;
		padding: 10vh 10vw;
		box-sizing: border-box;
		gap: 1rem;
	}

	h2 {
		margin: 0;
		padding: 0;
		font-size: 2em;
		font-weight: 600;
	}

	h3 {
		margin: 0;
		padding: 0;
		font-size: 1.2em;
		line-height: 1.5em;
		font-weight: 400;
	}

	.start {
		font-size: 1.2em;
	}
</style>

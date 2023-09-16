<script lang="ts">
	export let number: number;
	export let unit: string | null = null;
	export let description: string | null = null;
	export let big: boolean = false;
</script>

<div class="stat" class:big>
	<h2>
		{number}{#if unit != null}{' ' + unit}{/if}
	</h2>
	<p>{description}</p>
</div>

<style>
	.stat {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: var(--pad);
		background: var(--back-1);
		box-sizing: border-box;
		gap: 1rem;

		border-radius: var(--rad);
	}

	/* take up 2 grids */
	.big {
		grid-column: span 2;
	}

	h2 {
		margin: 0;
		padding: 0;
		font-size: 2em;
		font-weight: 600;
		color: var(--text-accent);
	}

	p {
		margin: auto 0;
		padding: 0;
		font-size: 1em;
		line-height: 1.5em;
		font-weight: 400;
	}
</style>

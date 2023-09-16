<script lang="ts">
</script>

<div class="contentScroll">
	<div class="content">
		<slot />
	</div>
</div>

<style>
	.contentScroll {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: auto;
	}
	.content {
		position: absolute;
		width: min(100%, 60rem);
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-sizing: border-box;
		padding: var(--pad);
	}
</style>

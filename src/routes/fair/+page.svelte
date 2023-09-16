<script lang="ts">
	import Activities from '../Activities.svelte';
	import Page from '../Page.svelte';
	import Title from '../Title.svelte';
</script>

<Page>
	<Title title="Welcome to CST's club fair activities" subtitle="Check out some fun things to do" />
	<Activities items={['quiz', 'problems', 'stats', 'signup']} />
</Page>

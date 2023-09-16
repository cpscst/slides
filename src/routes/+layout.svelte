<script lang="ts">
	import './global.css';
	import '@fontsource-variable/jetbrains-mono';
	import { dev } from '$app/environment';

	// imports to show current page
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	// $: prettyPage =
	// 	($page.url.pathname == '/' || $page.url.pathname == base
	// 		? []
	// 		: $page.url.pathname.replace(base, '').slice(1).split('/'))

	let prettyPage: { name: string; url: string }[] = [];
	$: {
		let path = $page.url.pathname;
		if (path == '/' || path == base) {
			prettyPage = [];
		} else {
			let split = path.replace(base, '').slice(1).split('/');
			prettyPage = split.map((name, i) => {
				return {
					name,
					url: '/' + split.slice(0, i + 1).join('/')
				};
			});
		}
	}

	// TODO add cmd + enter to submit
	// TODO add better stats
	// TODO add cps campus QR code
	// TODO add better js hints
</script>

<head>
	<title>{'⇒CST'}</title>
</head>

<header>
	<h1>
		<a href="{base}/">{'=>CST'}</a>
		{#each prettyPage as page}
			<a class="page" href="{base}/{page.url}">/{page.name}</a>
		{/each}
	</h1>
	<div class="links">
		<a href="{base}/fair/signup"><button>Sign Up</button></a>
		<a href="https://github.com/Ashwagandhae/cst-demo" target="_blank" rel="noopener noreferrer"
			>Code on Github</a
		>
		<!-- {#if dev}
			<button on:click={() => localStorage.clear()}>Clear localStorage</button>
		{/if} -->
	</div>
</header>
<main>
	<slot />
</main>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--pad);
		background: var(--back-1);
	}
	h1 {
		margin: 0;
	}

	main {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.links {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--pad);
	}

	.page {
		color: var(--text);
		font-weight: 400;
	}

	.page:hover {
		color: var(--text-strong);
	}
</style>

<script lang="ts">
	import Page from '../../Page.svelte';
	import { onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import Scan from './Scan.svelte';

	const signUps: Writable<string[]> = writable([]);

	onMount(() => {
		let rawSignUps = localStorage.getItem('signUps');
		if (rawSignUps) {
			signUps.set(JSON.parse(rawSignUps));
		} else {
			signUps.set([]);
		}
		let unsubscribe = signUps.subscribe((signUps) => {
			localStorage.setItem('signUps', JSON.stringify(signUps));
		});
		return unsubscribe;
	});

	let email: string;
	function signUp() {
		if (email) {
			if (email.includes('@')) {
				email = email.split('@')[0];
			}
			signUps.update((signUps) => [email, ...signUps]);
			email = '';
		}
	}

	let emailInput: HTMLInputElement;
	onMount(() => {
		emailInput.focus();
	});
</script>

<Page>
	<div class="content">
		<Scan />
		<div class="or">or</div>
		<div class="signup">
			<div class="mailInput">
				<input
					bind:this={emailInput}
					type="text"
					placeholder="Email here"
					bind:value={email}
					on:keypress={(event) => {
						if (event.key == 'Enter') {
							signUp();
						}
					}}
				/>
				<span>@college-prep.org</span>
			</div>
			<button on:click={signUp}>Sign up</button>
		</div>
		<div class="emailScroll">
			<div class="emails">
				{#each $signUps as signUp}
					<div class="email">
						<span>{signUp}@college-prep.org</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</Page>

<style>
	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--pad);
		height: 100%;
	}

	.or {
		font-size: 1.2rem;
		width: 100%;
		text-align: center;
	}
	.signup {
		display: flex;
		flex-direction: row;
		width: 100%;
		gap: var(--pad);
	}
	.mailInput {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--pad);
		font-size: 1.2rem;

		width: 100%;
	}

	.mailInput > input {
		font-size: 1.2rem;

		flex: 1;
		background: var(--back-1);
		border: none;
		border-radius: var(--rad);
		padding: var(--pad);
		box-sizing: border-box;
		color: var(--text);
	}

	.signup > button {
		white-space: nowrap;
	}

	input::placeholder {
		color: var(--text-weak);
	}

	input:focus {
		outline: none;
		background: var(--back-3);
	}
	.emailScroll {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		overflow: scroll;
		position: relative;
		box-sizing: border-box;
	}

	.emails {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		position: absolute;
		height: 100%;
		width: 100%;
		gap: var(--pad);
	}

	.email {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: var(--pad);
		padding: var(--pad);
		border-radius: var(--rad);
		background: var(--back-1);
		color: var(--text);
	}
</style>

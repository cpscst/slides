<script lang="ts">
	import Qr from './qr.jpeg';
</script>

<div class="content">
	<div class="scan">
		<img src={Qr} alt="CPS Campus QR Code" />
		<p>Scan this QR code to sign up with CPS Campus</p>
	</div>
</div>

<style>
	.scan {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--pad);
	}

	.scan img {
		width: 20rem;
		height: 20rem;
		object-fit: contain;
		border-radius: var(--rad);
	}

	p {
		margin: 0;
	}
</style>

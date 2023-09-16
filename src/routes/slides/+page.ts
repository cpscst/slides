import type { Load } from '@sveltejs/kit';
import { base } from '$app/paths';

export const load: Load = async ({ fetch }) => {
	const response = await fetch(`${base}/api/slides`);
	const slides = await response.json();
	return {
		slides
	};
};

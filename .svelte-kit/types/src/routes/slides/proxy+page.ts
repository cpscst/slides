// @ts-nocheck
import type { Load } from '@sveltejs/kit';
import { base } from '$app/paths';

export const load = async ({ fetch }: Parameters<Load>[0]) => {
	const response = await fetch(`${base}/api/slides`);
	const slides = await response.json();
	return {
		slides
	};
};

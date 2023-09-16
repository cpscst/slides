import { getSlideMeta } from '$lib/slides';
import type { Slide } from '$lib/types';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	// first get svgs
	const slideFiles = Object.entries(import.meta.glob('/src/routes/slides/content/*.pdf'));
	const slides = await Promise.all(
		slideFiles.map(async ([path, _]) => {
			const name = (path.split('/').pop() ?? '').split('.')[0];

			return getSlideMeta(name);
		})
	);
	// sort by index
	slides.sort((a, b) => a.index - b.index);

	return json(slides);
};

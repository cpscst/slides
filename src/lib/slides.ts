import type { Slide } from './types';

export async function getSlideMeta(name: string) {
	let meta: Omit<Slide, 'index' | 'url'>;
	try {
		meta = await import(`../routes/slides/content/${name}.json`);
	} catch (e) {
		console.error(e);
		meta = {
			title: 'Untitled'
		};
	}

	const ret: Slide = {
		...meta,
		index: parseInt(name),
		url: name
	};

	return ret;
}

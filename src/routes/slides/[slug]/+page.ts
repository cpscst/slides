import { getSlideMeta } from '$lib/slides';

export async function load({ params }: { params: { slug: string } }) {
	return getSlideMeta(params.slug);
}

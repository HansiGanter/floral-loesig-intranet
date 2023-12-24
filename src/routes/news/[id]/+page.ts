import { GETNewsPostById } from '$lib/content/newsposts';

export function load({ params: { id } }) {
	return GETNewsPostById(+id)
		.then((res) => res.json())
		.catch((error) => {
			console.error('Error loading data:', error);
			return { status: 500, error: new Error('Failed to load data') };
		});
}

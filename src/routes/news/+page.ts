import { GETNewsPosts } from '$lib/content/newsposts';

export function load() {
	return GETNewsPosts()
		.then((res) => res.json())
		.then((newsposts) => {
			return { newsposts };
		})
		.catch((error) => {
			console.error('Error loading data:', error);
			return { status: 500, error: new Error('Failed to load data') };
		});
}

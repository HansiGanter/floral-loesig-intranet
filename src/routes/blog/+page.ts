import { GET } from '$lib/content/newsposts';

export function load() {
	return GET()
		.then((res) => {
			return res.json();
		})
		.then((x) => {
			return { x };
		})
		.catch((error) => {
			console.error('Error loading data:', error);
			return { status: 500, error: new Error('Failed to load data') };
		});
}

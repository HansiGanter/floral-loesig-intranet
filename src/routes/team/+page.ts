import { GETTeamData } from '$lib/content/teamdata';

export function load() {
	return GETTeamData()
		.then((res) => res.json())
		.then((teamdata) => {
			return { teamdata };
		})
		.catch((error) => {
			console.error('Error loading data:', error);
			return { status: 500, error: new Error('Failed to load data') };
		});
}

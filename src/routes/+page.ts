import { GETTeamLeads } from '$lib/content/teamdata';
// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export function load() {
	return GETTeamLeads()
		.then((res) => res.json())
		.then((teamdata) => {
			return { teamdata };
		})
		.catch((error) => {
			console.error('Error loading data:', error);
			return { status: 500, error: new Error('Failed to load data') };
		});
}

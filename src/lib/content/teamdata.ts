import { json } from '@sveltejs/kit';

const teamdata = [
	{
		id: 1,
		name: 'John Doe',
		job: 'CEO',
		image: 'https://picsum.photos/id/10/800/500',
		description: 'John Doe is an experienced leader with a passion for textiles.'
	},
	{
		id: 2,
		name: 'Emily Smith',
		job: 'Chief Financial Officer',
		image: 'https://picsum.photos/id/10/800/500',
		description: 'Emily Smith is a skilled strategist in financial planning and investment.'
	},
	{
		id: 3,
		name: 'Michael Johnson',
		job: 'Head of Marketing',
		image: 'https://picsum.photos/id/10/800/500',
		description: 'Michael Johnson excels in innovative marketing solutions and brand development.'
	},
	{
		id: 4,
		name: 'Sarah Williams',
		job: 'Human Resources Manager',
		image: 'https://picsum.photos/id/10/800/500',
		description:
			'Sarah Williams is dedicated to fostering a positive and productive workplace environment.'
	},
	{
		id: 5,
		name: 'David Brown',
		job: 'Operations Manager',
		image: 'https://picsum.photos/id/10/800/500',
		description: 'David Brown specializes in efficient operational processes and logistics.'
	},
	{
		id: 6,
		name: 'Jessica Davis',
		job: 'Product Manager',
		image: 'https://picsum.photos/id/10/800/500',
		description: 'Jessica Davis has a keen eye for product innovation and user experience.'
	},
	{
		id: 7,
		name: 'Daniel Miller',
		job: 'IT Director',
		image: 'https://picsum.photos/id/10/800/500',
		description: 'Daniel Miller leads in implementing cutting-edge technology solutions.'
	},
	{
		id: 8,
		name: 'Ashley Wilson',
		job: 'Sales Director',
		image: 'https://picsum.photos/id/10/800/500',
		description: 'Ashley Wilson drives sales growth with her charismatic and persuasive skills.'
	},
	{
		id: 9,
		name: 'Brian Moore',
		job: 'Chief Legal Officer',
		image: 'https://picsum.photos/id/10/800/500',
		description: 'Brian Moore is an expert in corporate law and legal compliance.'
	},
	{
		id: 10,
		name: 'Karen Taylor',
		job: 'Chief Technology Officer',
		image: 'https://picsum.photos/id/10/800/500',
		description:
			'Karen Taylor is at the forefront of technological innovation and digital transformation.'
	},
	{
		id: 11,
		name: 'Richard Anderson',
		job: 'Quality Assurance Manager',
		image: 'https://picsum.photos/id/10/800/500',
		description: 'Richard Anderson ensures the highest standards of quality in all products.'
	},
	{
		id: 12,
		name: 'Sophia Jackson',
		job: 'Customer Service Lead',
		image: 'https://picsum.photos/id/10/800/500',
		description: 'Sophia Jackson excels in delivering exceptional customer service experiences.'
	},
	{
		id: 13,
		name: 'Christopher White',
		job: 'Research and Development Head',
		image: 'https://picsum.photos/id/10/800/500',
		description: 'Christopher White pioneers in developing innovative and sustainable products.'
	},
	{
		id: 14,
		name: 'Olivia Harris',
		job: 'Creative Director',
		image: 'https://picsum.photos/id/10/800/500',
		description: 'Olivia Harris leads with creativity and vision in brand and design.'
	}
];

export const GETTeamData = async () => {
	return json(teamdata);
};

export const GETTeamLeads = async () => {
	return json(teamdata.slice(0, 4));
};

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Visa for Korea Events',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: '가이드',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '시작하기', slug: 'guides/get-started' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

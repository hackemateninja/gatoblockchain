import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.md'],
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex({
			extensions: ['.md']
		})
	],
	kit: {
		adapter: adapter(),
		alias: {
			$add: 'src/adapters',
			$app: 'src/application',
			$domain: 'src/domain',
			$services: 'src/services',
			$ui: 'src/ui',
			$svg: 'src/ui/svg',
			$root: 'src'
		}
	}
};

export default config;

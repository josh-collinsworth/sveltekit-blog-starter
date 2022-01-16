import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or  used as pages)
	extensions: ['.svelte', '.md'],

	preprocess: [
		preprocess({
			scss: {
				// Ensures Sass variables are always available inside component <style> blocks
				prependData: `@import 'src/lib/assets/scss/_vars.scss';`
			},
		}),
		mdsvex({
			// The default mdsvex extension is .svx; this overrides that.
			extensions: ['.md'],

			// Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
			],
		}),
	],

	kit: {
		// Default SvelteKit options
		target: '#svelte',
		adapter: adapter(),

		// Allows reading from files in the root directory. Necessary for package.json props and README
		vite: {
			server: {
				fs: {
					allow: ['.']
				}
			}
		}
	}
};

export default config;

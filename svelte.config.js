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

			/**
			 * Automatically matches any markdown file inside the 'blog' folder, and
			 * uses the named file to lay out those markdown files.
			 * 
			 * You can add more layouts. If the key matches a folder, it will apply
			 * to any markdown file in that folder. Otherwise, layouts can be used
			 * in any markdown file's frontmatter, with `layout: name_here`.
			 * 
			 * You can also specify a fallback layout by naming it `_`. More here:
			 * https://mdsvex.pngwn.io/docs#named-layouts
			 */ 
			layout: {
				blog: 'src/routes/blog/_post.svelte'
			}
		}),
	],

	kit: {
		// Default SvelteKit options
		target: '#svelte',
		adapter: adapter(),

		/**
		 * This `vite` block is only necessary to load the README file from the root. 
		 * If you're not loading from the root directory, you should remove it.
		 */  
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

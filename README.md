# SvelteKit static blog starter

This starter contains everything you need to get up and running with [SvelteKit](https://kit.svelte.dev/) as a static site generator for your Markdown (and Svelte)-powered blog. [Check out the demo here](https://sveltekit-static-starter.netlify.app/), or view the [GitHub repo here](https://github.com/josh-collinsworth/sveltekit-blog-starter).

## Features

- 🎉 **Ready to use with SvelteKit 1.0!**
- ⚡️ **Super fast static site generation with hydration**. Every route is compiled down to static HTML and routed with (optional) JavaScript, thanks to the SvelteKit static adapter (pre-installed)
- 📦 **Zero-config preloading** for automatic, fast background preloading of all top-level pages
- ✍️ **Markdown support** with a pre-configured blog
	- 📑 **Pagination** included (_can customize posts per page_)
	- ✅ **Category pages** included
	- 💬 **Posts JSON API**
- 💅 **Sass** pre-installed and -configured
- 📝 **mdsvex** pre-installed--use Svelte components inside Markdown!
	- 🔗 **Rehype** plugins are included to generate unique heading IDs, for direct linking
- 📱 **Responsive and accessible defaults**; includes a "skip to content" link and accessible mobile nav menu
- 🔄 **Page transitions** (_fancy!_)
- 🔎 **Basic SEO** for blog posts (_strongly recommend checking that out for yourself, though_)
- 📰 **RSS feed** set up and ready to go (_though it could also likely benefit from some optimization_); just update `src/lib/config.js`


## Quick Start

Clone or download [this repo](https://github.com/josh-collinsworth/sveltekit-blog-starter), then install the dependencies and run the dev server:

```
npx degit https://github.com/josh-collinsworth/sveltekit-blog-starter my-sveltekit-blog
cd my-sveltekit-blog 
npm install
npm run dev -- --open
```

That should get a dev server up and running (assuming you have npm and Node installed already). Any saved changes to components and styles should auto-refresh blazingly fast.

Now all you need to do is:

- Update the `src/lib/config.js` file
- Drop your Markdown posts into `src/lib/posts`
- Optionally, customize the styles in `lib/assets/scss`

GLHF! Details below. 👇

(_Feel free to [open an issue](https://github.com/josh-collinsworth/sveltekit-blog-starter/issues/new) if you come across one._)


## Customization

Be sure to update `src/lib/config.js` to reflect your site's domain, preferences, etc. This is also where the nav menu can be updated.

**It's very important to update this file with the specific details of your site.** Info from this file is used in your RSS feed and SEO meta tags, so don't launch without updating it.


## Adding new posts

Adding new posts is as simple as dropping a new `.md` file into `src/lib/posts`. New posts will automatically show up on the site, be added to the posts API, and any category pages.

A few demo Markdown posts are included, and highlight some of the features of this starter. These demo posts can be updated or removed, but it may be best to use one as a starting point, just for the frontmatter properties.

If you want to use other frontmatter properties in the template (or just modify the layout), make changes in `src/routes/blog/[post]/+page.svelte`.

**Note: posts should have a `date` frontmatter property.** This is how they're sorted by default. There are also other frontmatter properties used to enhance the site experience (like the `coverWidth` and `coverHeight`, which are used in the template to reserve space for the image, minimizing cumulative layout shift).

The starter will still work without `date` properties in your posts, but the sorting won't be right.

Also: while there's no link to it by default, `/blog/category` exists as an archive of all your post categories.


### Pagination

Pagination automatically kicks in once you have more posts than the `postsPerPage` option in `src/lib/config.js`. This means you won't see the pagination right away unless you either change `postsPerPage` to a very low number, or add several more Markdown files to the `src/lib/posts` folder.

**Note:** both the normal `/blog` feed _and_ the category feeds at `/category/[category]` are automatically paginated.


### RSS

This starter also includes a basic RSS feed. It's very minimal, so you may want to tweak it depending on your XML feed needs, but it _does_ work out of the box.

Update the `config` details in `src/lib/config.js` to get your site's unique info correct. (You could also pull this info in other places, or add to it, to keep things consistent, but that's up to you.)
	

## Sass

**By default, all CSS in this starter is global.** It's located in `src/lib/assets/scss`, and all compiled into the `global.scss` file (which is then loaded into the global `+layout.svelte` file) automatically.

I didn't use component `<style>` blocks because, while component-based scoped CSS is very nice, it can also be hard to track down and update. Since this is a starter, I felt it was best to keep all the styles together in one place, and let you, the author, decide whether you want to keep them as they are, move to scoped CSS instead, or use a mixture.


## Site navigation menus

To add or remove pages from the site's navigation menu (in both the header and footer), edit the `navItems` array in `src/lib/config.js`. Items there will be automatically added to the main menu in the header and footer, and the mobile nav menu. They'll also have proper classes and ARIA attributes to show when they're the current page.


## Colors and Fonts

This starter has a default color palette (Credit to [coolors.co](https://coolors.co/palettes/trending)) and fonts, but you can easily override those here:

**Colors:** `src/lib/assets/scss/_vars.scss`
	
**Fonts:** `src/app.html` for the links, `_vars.scss` for the font names.


## Components

This starter includes only a handful of structural components, for the header, footer, site nav, posts lists (since lists of posts are repeated in several locations), and pagination (plus a couple that are actually just SVG icons).

You're welcome and encouraged to create your own (using them in Markdown is fun!); I just didn't want to push authors too far in any component direction right off the bat.


## Static files

Things that should just live in the site root of the finished site (like a `robots.txt` file, favicon, or maybe images) should go in the `static` folder. If you link to them, use the root path (e.g., `/images/my.png`, not `../static/images/my.png`).

(Placeholder images credit [Unsplash](https://unsplash.com); photographer names are in the file names.)


## Building and deploying

The build command (from package.json) is simply:

```
npm run build
```

That should do it on a host like Netlify or Vercel. Or, if you prefer, you can run `npm run build` to generate the static files, then upload those (they'll be generated into a `build` folder).

Use `npm run preview` _after_ a build to preview the built site.


## Further documentation

I assume at least a little bit of knowledge of SvelteKit and/or similar static site generators here, but be sure to read [the SvelteKit docs](https://kit.svelte.dev/docs) for more info.


## Contributing

I've tried my best to make sure this starter is up to date with the latest SvelteKit, but I'm sure improvements can be made. Feel free to [visit the repo](https://github.com/josh-collinsworth/sveltekit-blog-starter) and submit a pull request, or [contact me directly](https://joshcollinsworth.com/contact).
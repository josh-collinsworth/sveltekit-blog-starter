# SvelteKit static blog starter

This starter contains everything you need to get up and running with [SvelteKit](https://kit.svelte.dev/) as a static site generator for your Markdown (and Svelte)-powered blog. [Check out the demo here](https://sveltekit-static-starter.netlify.app/), or view the [GitHub repo here](https://github.com/josh-collinsworth/sveltekit-blog-starter).

## Features

- ⚡️ **Super fast static site generation** with hydration. Every route is compiled down to static HTML with optional JavaScript, thanks to the SvelteKit static adapter (pre-installed)
- 📦 **Zero-config prefetching** for automatic, fast background page loading
- ✍️ **Markdown support** with a pre-configured blog
  - 📑 **Pagination** included. (Can also customize posts per page.)
  - ✅ **Category pages** included
  - 💬 **Posts JSON API**
- 💅 **Sass** pre-installed and -configured
- 📝 **MDSvex** pre-installed--use Svelte components inside Markdown!
  - 🔗 **Rehype** plugins are included to generate unique heading IDs, for direct linking
- 🌍 **Global layout file**, with dynamic classes and a "skip to content" link
- 📱 **Responsive by default** (_though you may want to build your own mobile menu--that's up to you_)
- 🔎 **Basic SEO** for blog posts (_strongly recommend checking that out for yourself, though_)
- 📰 **RSS feed** set up and ready to go (_though it could also likely benefit from some optimization_); just update `src/lib/config.js`


## Installation

Clone or download [this repo](https://github.com/josh-collinsworth/sveltekit-blog-starter), then install the dependencies and run the dev server.

I recommend using these commands:

```
npx degit https://github.com/josh-collinsworth/sveltekit-blog-starter my-sveltekit-blog
cd my-sveltekit-blog
npm install
npm run dev -- --open
```

That should get a dev server up and running (assuming you have npm and Node installed already). Any saved changes to components and styles should auto-refresh blazingly fast.


## Adding new posts

Adding new posts is as simple as dropping a new `.md` file into `src/routes/blog/_posts`. It will automatically show up on the site, and be added to the posts API.

A few demo Markdown posts are included, and highlight some of the features of this starter. These can be updated or removed, but it may be best to use one as a starting point, just for the frontmatter properties.

If you want to use other frontmatter properties in the template (or just modify it), make changes in `src/routes/blog/[post].svelte`.

**Note: posts should have a `date` frontmatter property.** This is how they're sorted by default. There are also other frontmatter properties used to enhance the site experience (like the `coverWidth` and `coverHeight`, which are used in the template to reserve space for the image, minimizing cumulative layout shift).


### Pagination

Pagination automatically kicks in once you have more posts than the `postsPerPage` option in `src/lib/config.js`. This means you won't see the pagination right away unless you either change `postsPerPage` to a very low number, or add several more Markdown files to the `_posts` folder.


### RSS

This starter also includes a basic RSS feed. It's very minimal, so you may want to tweak it depending on your XML feed needs, but it _does_ work out of the box. That said: you'll want to update the `config` details in `src/lib/config.js` to get your site's unique info correct. (You could also pull this info in other places, or add to it, to keep things consistent, but that's up to you.)
  

## Sass

There's a Sass build pipeline for global SCSS already configured.

**By default, all CSS is global.** It's located in `src/lib/assets/scss`, and all compiled into the `global.scss` file (which is then loaded into the global `__layout.svelte` file).

This is because, while component-based scoped CSS is very nice, it can also be hard to track down and update. Since this is a starter, I felt it was best to keep all the (basic, minimal) styles together in one place, and let you, the author, decide whether you want to keep them as they are, move to scoped CSS instead, or use a mixture.


## Site navigation menus

To add or remove pages from the site's navigation menu (in both the header and footer), edit the `MainNav.svelte` file inside `src/lib/components`. (_I recommend using the included `NavItem` component as shown for best results; it automatically handles highlighting the current page, visually and accessibly._)


## Colors and Fonts

This starter has a default color palette (Credit to [coolors.co](https://coolors.co/palettes/trending)) and fonts, but you can easily override those here:

**Colors:** `src/lib/assets/scss/_vars.scss`
  
**Fonts:** `src/app.html` for the links, `_vars.scss` for the font names.


## Components

This starter includes only a few basic structural components, for the header, footer, site nav, posts lists (since lists of posts are repeated in several locations), and pagination. You're welcome and encouraged to create your own (using them in Markdown is fun!); I just didn't want to push authors too far in any component direction right off the bat.


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


## To do:

- Add a mobile nav menu
- Add pagination to category routes


## Further documentation

I assume at least a little bit of knowledge of SvelteKit and/or similar static site generators here, but be sure to read [the SvelteKit docs](https://kit.svelte.dev/docs) for more info.
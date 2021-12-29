---
layout: false
---

# SvelteKit static blog starter

This starter contains everything you need to get up and running with [SvelteKit](https://kit.svelte.dev/) as a static site generator for your Markdown (and Svelte)-powered blog. [Check out the demo here](https://sveltekit-static-starter.netlify.app/).

## Features

- **Super fast static site generation** with hydration. Every route is compiled down to static HTML with optional JavaScript, thanks to the SvelteKit adapter-static (pre-installed)
- **Zero-config prefetching** for automatic, fast background page loading
- **Markdown support** for both pages and posts
- **Sass** pre-installed and -configured
- **MDSvex** pre-installed--use Svelte components inside Markdown!
  - **Rehype** plugins are included to generate unique heading IDs, for direct linking
- **Global layout file** with `Header` and `Footer` Svelte components, pre-configured with route-specific dynamic classes and a "skip to content" link
- **Responsive by default** 
- **Basic SEO** for blog posts (_strongly recommend checking that out for yourself, though_)
- **RSS feed** set up and ready to go (_though it could also likely benefit from some optimization_)


## Installation

Clone or download [this repo](https://github.com/josh-collinsworth/sveltekit-blog-starter), then inside of it, in the terminal, run:

```
npm install
```

Followed by:

```
npm run dev
```

That should get a dev server up and running (assuming you have NPM and Node installed already). Any changes to components and styles should auto-refresh super quickly.


## Adding new posts

A couple of demo Markdown posts are included in `src/routes/blog/`. These can be updated or removed, but it may be easiest to duplicate one as a starting point. Otherwise, to create a new post, drop a new `.md` file into `src/routes/blog/`. It will automatically show up in the list.

**Note: posts should have a `date` property.** This is how they're sorted by default. There are also other frontmatter properties used to enhance the site experience (like the `coverWidth` and `coverHeight`, which are used in the template to reserve space for the image, minimizing cumulative layout shift).

The posts each offer a demo of a feature of SvelteKit and/or MDSvex.

**Note:** there's currently no pagination included in post fetching or rendering. However, `src/routes/api/posts.json.js` has the capability set up; it just needs to be used.


### RSS

This starter also includes a basic RSS feed, though you'll want to update it as directed in `src/routes/rss.xml.js`. Like the blog SEO (and in fact most of this starter), it's very minimal and not guaranteed to be in optimal shape. It _does_ work, however.
  

## Sass

There's a Sass build pipeline for global SCSS included.

**By default, all CSS is global.** It's located in `src/lib/assets/scss`, and all compiled into the `global.scss` file (which is then loaded into the global `__layout.svelte` file).

This is because, while scoped, component-based CSS is very nice, it can also be hard to track down and get into. Since this is a starter, I felt it was best to keep all the (basic, minimal) styles together in one place, and let you, the author, decide whether you want to keep them that way or move to scoped CSS instead, or (as I do), use a mixture. It's up to you.


## Site navigation menus

To add or remove pages from the site's navigation menu (in both the header and footer), edit the `MainNav.svelte` file inside `src/lib/components`. (_I recommend using the `NavItem` component as shown for best results; it automatically handles highlighting the current page, visually and accessibly._)


## Colors and Fonts

This starter has a default color palette and fonts, but you can easily override those. (Credit to [coolors.co](https://coolors.co/palettes/trending) for the default palette.)

**Colors:** `src/lib/assets/scss/_vars.scss`
  
**Fonts:** `src/app.html`


## Components

This starter includes only a few components, most of which are for the header, footer, and site nav. You're welcome and encouraged to create your own (using them in Markdown is fun!); I just didn't want to push authors too far in any component direction right off the bat.


## Deploying

The build command (from package.json) is simply:

```
npm run build
```

That should do it on a host like Netlify or Vercel. Or, if you prefer, you can run `npm run build` to generate the static files, then upload those (they'll be generated into a `build` folder).


## Further documentation

I assume at least a little bit of knowledge of SvelteKit and/or similar static site generators here, but be sure to read [the SvelteKit docs](https://kit.svelte.dev/docs) for more info.
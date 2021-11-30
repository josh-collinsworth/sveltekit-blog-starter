# SvelteKit static blog starter

This starter contains everything you need to get up and running with SvelteKit as a static site generator for your Markdown (and Svelte)-powered blog. [Check out the demo here](https://sveltekit-static-starter.netlify.app/).

## Features

- **Super fast static site generation** with hydration; every route is compiled down to static HTML with optional JavaScript
- **Zero-config prefetching** for automatic, fast background page loading
- **Sass** pre-installed and -configured
- **MDSvex** for Markdown support, _and_ for Svelte components inside Markdown
  - For a demo, check out the `blog/post-one` page, or `src/routes/blog/_posts/post-one.md`
  - **Rehype** plugins are included to generate unique heading IDs, for direct linking
- **Global layout file** with `Header` and `Footer` Svelte components, pre-configured with route-specific dynamic classes and a "skip to content" link
- **Basic SEO** for blog posts (strongly recommend checking that out for yourself, though)
- **RSS feed** set up and ready to go (though it could also likely benefit from some optimization)


## Installation

Clone or download [this repo](https://github.com/josh-collinsworth/sveltekit-blog-starter), then inside of it, in the terminal, run:

```
npm install
```

Followed by:

```
npm run dev
```

That should get a dev server up and running (assuming you have NPM and Node installed already). Any changes to components should auto-refresh super quickly. (Sass changes _may_ require a refresh.)


## Handling and adding posts

A few demo Markdown posts are included in `src/routes/blog/_posts`. These can be updated or removed, but it may be easiest to duplicate one as a starting point. Otherwise, to create a new post, drop a new `.md` file into `src/routes/blog/_posts`. It will automatically show up in the list.

**Note: it's important that all posts have a `date` frontmatter property!** This is how they're sorted by default.

There's a demo of how to use Svelte components inside of Markdown (the whole idea of MDSvex, really) at `src/routes/blog/_posts/post-one.md`. The `Alert.svelte` component is not particularly useful (and not semantically sound for the purposes of an accessible alert, either), so feel free to delete it. It's just there for demo purposes.


### How posts are loaded

Behind the scenes, when you hit the `/blog` route, you're hitting the `src/routes/blog/index.svelte` file. That file queries the `posts.json` endpoint for info about all posts. (This is available as `/blog/posts.json` in the browser, if you'd like to take a look.)

Under the hood, that endpoint uses the `fetchPosts.js` file, found in `src/lib/assets/js`. That file handles loading all the Markdown files inside the `_posts` folder, maybe doing some sorting, formatting, and/or filtering, then handing them back to the page.

The `/blog/posts.json` route is what SvelteKit considers an "[endpoint](https://kit.svelte.dev/docs#routing-endpoints)." You _could_ make the JSON feed of your posts hidden if you wanted to, but having it available _does_ open up some nice options, like being able to query your posts from another site, or even adding a client-side search bar or recent posts widget.

**NOTE!** Currently, there is no pagination included. You may need to do a little extra if migrating blogs that already have dozens and dozens of posts.


### RSS

This starter also includes a basic RSS feed, though you'll want to update it as directed in `src/routes/rss.xml.js`. Like the blog SEO (and in fact most of this starter), it's very minimal and not guaranteed to be in optimal shape. It _does_ work, however.
  

## Sass

There's a Sass build pipeline for global SCSS included.

**By default, all CSS is global.** It's located in `src/lib/assets/scss`, and all compiled into the `global.scss` file (which is then loaded into the global `__layout.svelte` file).

This is because, while scoped, component-based CSS is very nice, it can also be hard to track down and get into. Since this is a starter, I felt it was best to keep all the (basic, minimal) styles together in one place, and let you, the author, decide whether you want to keep them that way or move to scoped CSS instead, or (as I do), use a mixture. It's up to you.


## Site navigation menus

Basic site nav is included in the `Header.svelte` and `Footer.svelte` components, but this starter has only minimalist responsiveness. (It's technically responsive for any screen size, but it's not _optimized_ for small screens; stuff just reflows.) If you want to build your own hamburger/slide-out menu, you can, but one is not included by default.


## Defaults

This starter has a default color palette and fonts, but you can easily override those. (Credit to [coolors.co](https://coolors.co/palettes/trending) for the default palette.)

**Colors:** `src/lib/assets/scss/_vars.scss`
  
**Fonts:** `src/app.html`


## Components

This starter includes only three components; the Header and Footer (both used in the `__layout.svelte` file), and an Alert component that is included purely for demonstration purposes. You're welcome and encouraged to create your own--using components inside Markdown is a blast!--but I wanted that to be your choice, rather than forcing you into a component collection.


## Deploying

The build command (from package.json) is simply:

```
npm run build
```

That should do it on a host like Netlify or Vercel. Or, if you prefer, you can run `npm run build` to generate the static files, then upload those (they'll be generated into a `build` folder).


## Further documentation

I assume at least a little bit of knowledge of SvelteKit and/or similar static site generators here, but be sure to read [the SvelteKit docs](https://kit.svelte.dev/docs) for more info.
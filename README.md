# SvelteKit static blog starter

This starter contains everything you need to get up and running with SvelteKit as a static site generator for your Markdown (and Svelte)-powered blog.

**Features:**

- Super fast static site generation with hydration; every route is compiled down to static HTML with optional JavaScript
- No-config prefetching for fast page loading
- Sass pre-installed
- MDSvex for Markdown support, _and_ for Svelte components inside Markdown
  - For a demo, check out the `blog/post-one` page, or `src/routes/blog/_posts/post-one.md`
  - Rehype plugins are included for automatic heading links
- Global `__layout.svelte` file with `Header` and `Footer` Svelte components, pre-configured with route-specific dynamic classes
- Basic SEO for blog posts (strongly recommend checking that out for yourself, though)
- RSS feed


## Installation

Clone or download this repo to your machine, then inside of it, in the terminal, run:

```
npm install
```

Followed by:

```
npm run dev
```

That should get a dev server up and running (assuming you have NPM and Node installed already).


## Handling and adding posts

A few demo Markdown posts are included in `src/routes/blog/_posts`. These can be updated or removed, but it may be easiest to duplicate one as a starting point. Otherwise, to create a new post, drop a new `.md` file into `src/routes/blog/_posts`. It will automatically show up in the list.

**Note: it's important that all posts have a `date` frontmatter property!** This is how they're sorted by default.

There's a demo of how to use Svelte components inside of Markdown (the whole idea of MDSvex, really) at `src/routes/blog/_posts/post-one.md`. The `Alert.svelte` component is not particularly useful (and not semantically sound for the purposes of an accessible alert, either), so feel free to delete it. It's just there for demo purposes.


### How posts are loaded

The `/blog` route (handled by `src/routes/blog/index.svelte`) queries the `posts.json.js` file for info about all posts. (This is available as `/blog/posts.json` in the browser, if you'd like to take a look.)

In turn, that route uses the `fetchPosts.js` file inside of `src/lib/assets/js`. There are several options available for use in that file, but the gist is: it handles loading Markdown files inside the `_posts` folder, maybe doing some sorting, formatting, and/or filtering, then handing them back.

This is what SvelteKit considers an "[endpoint](https://kit.svelte.dev/docs#routing-endpoints)." You _could_ make the JSON feed of your posts hidden if you wanted to, but having the JSON feed available _does_ open up some nice options, like being able to query your posts from another site, or even adding a client-side search bar or recent posts widget.


### RSS

This starter also includes a basic RSS feed, though you'll want to update it as directed in `src/routes/rss.xml.js`. Like the blog SEO (and in fact most of this starter), it's very minimal and not guaranteed to be in optimal shape. It _does_ work, however.


## Defaults

This starter has a default color palette and fonts, but you can easily override those.

**Colors:** `src/lib/assets/scss/_vars.scss`
  
**Fonts:** `src/app.html`
  

## Sass

There's a Sass build pipeline for global SCSS included.

**By default, all CSS is global.** It's located in `src/lib/assets/scss`, and all compiled into the `global.scss` file (which is then loaded into the global `__layout.svelte` file).

This is because, while scoped, component-based CSS is very nice, it can also be hard to track down and get into. Since this is a starter, I felt it was best to keep all the (basic, minimal) styles together in one place, and let you, the author, decide whether you want to keep them that way or move to scoped CSS instead, or (as I do), use a mixture. It's up to you.


## Site navigation menus

Basic site nav is included in the `Header.svelte` and `Footer.svelte` components, but this starter has only minimalist responsiveness. (It's technically responsive for any screen size, but it's not _optimized_ for small screens; stuff just reflows.) If you want to build your own hamburger/slide-out menu, you can, but one is not included by default.


## Deploying

The build command (from package.json) is simply:

```
npm run build
```

That should do it on a host like Netlify or Vercel. Or, if you prefer, you can run `npm run build` to generate the static files, then upload those (they'll be generated into a `build` folder).

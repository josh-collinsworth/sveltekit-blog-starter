---
title: "Drafts"
date: "2021-10-26"
updated: "2021-11-01"
categories: 
  - "sveltekit"
  - "markdown"
coverImage: "/images/jefferson-santos-fCEJGBzAkrU-unsplash.jpg"
coverWidth: 16
coverHeight: 9
excerpt: Drafts are excluded by default
draft: true
---

Blog posts with `draft: true` in frontmatter are excluded by default.

If you want to render them, for example in a staging environment, you can supply an environment variable

Either in a `.env`:

```
PUBLIC_RENDER_DRAFTS="true"
```

or by running any command like this:

```
PUBLIC_RENDER_DRAFTS=true npm run dev
```
---
title: "A Markdown post with a Svelte component"
date: "2023-04-28"
updated: "2023-04-28"
categories:
  - "sveltekit"
  - "markdown"
  - "svelte"
coverImage: "/images/jerry-zhang-ePpaQC2c1xA-unsplash.jpg"
coverWidth: 16
coverHeight: 9
excerpt: This post demonstrates how to include a Svelte component in a Markdown post.
---

<script>
	import Callout from '$lib/components/Callout.svelte';
</script>

This starter includes an `Callout.svelte` component. It's not particularly useful on its own, but here's how you might use it inside of a Markdown post, thanks to mdsvex.

<Callout>
This is an example of the Callout.svelte component! Find it in <code>src/lib/components/Callout.svelte</code>.
</Callout>

You can inject any Svelte components you want into Markdown! Just import them in a `<script>` tag and then use them wherever you like.

For that matter, you can inject any HTML anywhere! (Note that you cannot use Markdown _inside_ Svelte components or HTML, however. Any opened tag must be closed before returning to Markdown.)

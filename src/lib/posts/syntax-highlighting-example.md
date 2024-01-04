---
title: "Syntax highlighting with mdsvex"
date: "2023-01-05"
updated: "2023-01-05"
categories:
  - "sveltekit"
  - "web"
  - "css"
  - "markdown"
coverImage: "/images/linus-nylund-Q5QspluNZmM-unsplash.jpg"
coverWidth: 16
coverHeight: 9
excerpt: This post shows you how syntax highlighting works here.
---

mdsvex has automatic, built-in syntax highlighting with [Prism.js](https://prismjs.com/); just include the language name after the triple backticks, like so:

```
\```css
/* Your CSS here */
\```
```

And that will render just like so:

```css
.my-css-class {
	color: #ffd100;
	box-sizing: border-box;
	/* etc... */
}
```

Here's how you'd do JavaScript:

```
\```js
// You can use js or javascript for the language
\```
```

Highlighted code sample:
```js
const invertNumberInRange = (num, range) => {
	return range - num;
}

invertNumberInRange(25, 100); // 75
```

Of course, mdsvex supports Svelte highlighting, too:

```svelte
<script>
	import myComponent from '$lib/components/myComponent.svelte';

	export let myProp = undefined;
</script>

<div>
	<MyComponent prop={myProp}>
</div>
```

All these colors are in `src/lib/assets/css/prism.css`, if you'd like to change them.

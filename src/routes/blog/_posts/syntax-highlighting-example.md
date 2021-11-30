---
title: "Syntax highlighting with MDSvex"
date: "2021-04-28"
updated: "2021-04-28"
categories: 
  - "javascript"
  - "web"
  - "writing"
coverImage: "/images/example-image.png"
coverWidth: 16
coverHeight: 9
excerpt: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor, libero sed tincidunt vehicula, mi quam faucibus purus, nec pulvinar tortor lacus ac quam. Maecenas orci justo, vestibulum at leo et, ultricies eleifend mi.
---

MDSvex has automatic, built-in syntax highlighting with [Prism.js](https://prismjs.com/); just include the language name after the triple backticks, like so:

```
\```css
.my-css-class { 
  color: orange;
}
\```
```

And that will render just like so:

```css
.my-css-class { 
  color: orange;
}
```

Here's how you'd do JavaScript:

```
\```js
const invertNumberInRange = (num, range) => {
  return range - num;
}
\```
```

Output:
```js
const invertNumberInRange = (num, range) => {
  return range - num;
}
```

Of course, MDSvex supports Svelte, too:

```
\```svelte
<script>
  import myComponent from '$lib/components/myComponent.svelte';

  export let myProp = undefined;
</script>

<div>
  <MyComponent prop={myProp}>
</div>
\```
```

Output:

```svelte
<script>
  import myComponent from '$lib/components/myComponent.svelte';

  export let myProp = undefined;
</script>

<div>
  <MyComponent prop={myProp}>
</div>
```
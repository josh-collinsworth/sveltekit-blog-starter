<script context="module">
	export const load = async ({ fetch }) => {
		const res = await fetch(`/api/posts.json`)
		let { posts } = await res.json()

    let uniqueCategories = {}

    posts.forEach(post => {
      post.categories.forEach(category => {
        if (uniqueCategories.hasOwnProperty(category)) {
          uniqueCategories[category].count += 1
        } else {
          uniqueCategories[category] = {
            title: category,
            count: 1
          }
        }
      })
    })

    const sortedUniqueCategories = 
      Object.values(uniqueCategories)
        .sort((a, b) => a.title > b.title)

		return {
			props: { 
        uniqueCategories: sortedUniqueCategories
      }
		}
	}
</script>


<script>
  export let uniqueCategories
</script>


<svelte:head>
  <title>Blog | Categories</title>
</svelte:head>


<div class="compressed-content">
  <h1 class="h2">All blog categories</h1>
  
  <ul>
    {#each uniqueCategories as category}
    <li>
      <a href="/blog/category/{category.title}">
        { category.title }
      </a>
      ({category.count})
    </li>
    {/each}
  </ul>
</div>


<style lang="scss">
  h1.h2 {
    margin: 0 0 var(--wholeNote);
  }

  li {
    text-transform: uppercase;
    margin-bottom: var(--quarterNote);
    font-style: italic;
    
    a {
      font-family: var(--headingFont);
      font-weight: bold;
      font-size: 0.85em;
      font-style: normal;
    }
  }
</style>
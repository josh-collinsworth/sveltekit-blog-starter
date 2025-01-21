<script>
	import { postsPerPage } from '$lib/config'

	/**
	 * @typedef {Object} Props
	 * @property {any} currentPage
	 * @property {any} totalPosts
	 * @property {string} [path]
	 */

	/** @type {Props} */
	let { currentPage, totalPosts, path = '/blog/page' } = $props();
	
	let pagesAvailable = $derived(Math.ceil(totalPosts / postsPerPage))
	

	const isCurrentPage = (page) => page == currentPage
</script>

<!-- For some reason, the pagination wasn't re-rendering properly during navigation without the #key block -->
{#key currentPage}
	{#if pagesAvailable > 1}
		<nav aria-label="Pagination navigation" class="pagination">
			<ul>
				{#each Array.from({length: pagesAvailable}, (_, i) => i + 1) as page}
					<li>
						<a href="{path}/{page}" aria-current="{isCurrentPage(page)}">
							<span class="sr-only">
								{#if isCurrentPage(page)}
									Current page: 
								{:else}
									Go to page 
								{/if}
							</span>
							{page}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
{/key}
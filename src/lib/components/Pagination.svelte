<script>
  import { postsPerPage } from '$lib/config'

  export let currentPage
  export let totalPosts
  
  let pagesAvailable
  $: pagesAvailable = Math.ceil(totalPosts / postsPerPage)

  const isCurrentPage = (page) => page == currentPage
</script>


{#if pagesAvailable > 1}
  <nav aria-label="Pagination navigation" class="pagination">
    <ul>
      {#each Array.from({length: pagesAvailable}, (_, i) => i + 1) as page}
        <li>
          <a href="/blog/page/{page}" aria-current="{isCurrentPage(page)}">
            {#if isCurrentPage(page)}
              <span class="sr-only">
                Current page
              </span>
            {:else}
              <span class="sr-only">
                Go to page
              </span>
            {/if}
            {page}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
{/if}


<style lang="scss">
  .pagination {
    margin: 0 0 1rem;

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      list-style-type: none;
      gap: 0.5rem;
      margin: 0;
      padding: 0;

      li {
        margin: 0;
      }

      a {
        background: $lightAccent;
        text-decoration: none;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2em;
        height: 2em;
        font-family: $primaryFont;
        font-weight: bold;
        transition: background .1s;

        &:hover {
          background: $accent;
          color: $white;
        }

        &[aria-current="true"] {
          background: $accent;
          color: $white;
          border: 1px solid currentColor;
        }
      }

    }
  }

  :global(.dark .pagination ul a) {
    background: $dark !important;

    &[aria-current="true"] {
      background: $accent !important;
    }
  }
</style>
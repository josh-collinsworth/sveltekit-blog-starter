<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
    import { formatDate } from '$lib/assets/js/dateUtils.js';
    export let data;

    let {
        title,
        excerpt,
        date,
        updated,
        coverImage,
        coverWidth,
        coverHeight,
        categories 
    } = data.meta;
    const PostContent = data.PostContent;
    date = formatDate(date);

    
    
</script>

<svelte:head>
    <!-- Be sure to add your image files and un-comment the lines below -->
    <title>{title}</title>
    <meta data-key="description" name="description" content="{excerpt}">
    <meta property="og:type" content="article" />
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta property="og:description" content={excerpt} />
    <meta name="twitter:description" content={excerpt} />
    <!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
    <meta property="og:image:width" content={coverWidth} />
    <meta property="og:image:height" content={coverHeight} />
    <!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<progress id="reading-progress" max="100" value="0" ></progress>


<article class="post">
    <!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. -->
    <img
        class="cover-image"
        src="{coverImage}"
        alt="{title}"
        style="aspect-ratio: {coverWidth} / {coverHeight};"
        width={coverWidth}
        height={coverHeight}
    />

    <h1>{ title }</h1>
    
    <div class="meta">
        <b>Published:</b> {date}
        
        {#if updated}
        <br>
        <b>Updated:</b> {updated} 
        {/if}
    </div>

	<PostContent />



    {#if categories}
        <aside class="post-footer">
            <h2>Posted in: </h2>
            <ul>
                {#each categories as category}
                    <li>
                        <a href="/blog/category/{category}/">
                            { category }
                        </a>
                    </li>
                {/each}
            </ul>
        </aside>
    {/if}
</article> 

<style>
    :root {
  --progress-width: 100%;
  --progress-height: 8px;
  --progress-bar-color: rgb(115, 0, 209);
  --progress-bg: none;
  --progress-border-radius: 5px;
}

progress {
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

/*Target this for applying styles*/
progress[value] {
  /* Reset the default appearance */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  /* Get rid of default border in Firefox. */
  border: none;

  width: var(--progress-width);
  height: var(--progress-height);

  /* Firefox: any style applied here applies to the container. */
  background-color: var(--progress-bg);
  border-radius: var(--progress-border-radius);

  /* For IE10 */
  color: var(--progress-bar-color);
}

/* For Firefox: progress bar */
progress[value]::-moz-progress-bar {
  background-color: var(--progress-bar-color);
  border-radius: var(--progress-border-radius);
}

/* WebKit/Blink browsers:
    -webkit-progress-bar is to style the container */
progress[value]::-webkit-progress-bar {
  background-color: var(--progress-bg);
  border-radius: var(--progress-border-radius);
}

/*-webkit-progress-value is to style the progress bar.*/
progress[value]::-webkit-progress-value {
  background-color: var(--progress-bar-color);
  border-radius: var(--progress-border-radius);
}
</style>
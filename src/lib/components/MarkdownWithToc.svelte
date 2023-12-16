<script>
  import { onMount } from 'svelte';
  import { unified } from 'unified';
  import remarkParse from 'remark-parse';
  import remarkToc from 'remark-toc';
  import remarkHtml from 'remark-html';

  export let PostContent = '';

  let processedContent = '';

  onMount(async () => {
    if (PostContent) {
      try {
        const processed = await unified()
          .use(remarkParse)
          .use(remarkToc, { heading: 'contents' }) // You can customize options for remark-toc here
          .use(remarkHtml)
          .process(PostContent);
        processedContent = processed.toString();
      } catch (error) {
        console.error('Error processing Markdown:', error);
        processedContent = '<p>Error processing content</p>';
      }
    }
  });
</script>

<div class="markdown-content">
  {@html processedContent}
</div>

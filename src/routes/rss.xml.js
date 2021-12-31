// IMPORTANT: update all the property values in this `config` object to reflect your site!
const config = {
  siteTitle: 'SvelteKit Static Blog Starter',
  siteDescription: 'Add a description here',
  mySiteURL: 'example.com',
  siteLink: 'https://github.com/josh-collinsworth/sveltekit-blog-starter'
}

export const get = async () => {
  const data = await Promise.all(
    Object.entries(import.meta.glob('./blog/*.md')).map(async ([path, page]) => {
      const { metadata } = await page()
      const slug = path.split('/').pop().split('.').shift()
      return { ...metadata, slug }
    })
  )
  .then(posts => {
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
  })

  const body = render(data)
  const headers = {
    'Cache-Control': `max-age=0, s-max-age=${600}`,
    'Content-Type': 'application/xml',
  };
  return {
    body,
    headers,
  };
};


//Be sure to review and replace any applicable content below!
const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${config.siteTitle}</title>
<description>${config.siteDescription}</description>
<link>${config.siteLink}</link>
<atom:link href="https://${config.mySiteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${posts
  .map(
    (post) => `<item>
<guid isPermaLink="true">https://${config.mySiteURL}/blog/${post.slug}</guid>
<title>${post.title}</title>
<link>https://${config.mySiteURL}/blog/${post.slug}</link>
<description>${post.excerpt}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
  )
  .join('')}
</channel>
</rss>
`;

import { postsPerPage } from '$lib/config'

const fetchPosts = async ({ offset = 0, limit = postsPerPage, category = '' } = {}) => {
  const posts = await Promise.all(
    Object.entries(import.meta.glob('../../../routes/blog/_posts/*.md')).map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const slug = path.split('/').pop().slice(0, -3)
      return { ...metadata, slug }
    })
  )

  let sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date))
  
  if (category) {
    sortedPosts = sortedPosts.filter(post => post.categories.includes(category))
  }

  if (offset) {
    sortedPosts = sortedPosts.slice(offset)
  }
  
  if (limit && limit < sortedPosts.length) {
    sortedPosts = sortedPosts.slice(0, limit)
  }

  sortedPosts = sortedPosts.map(post => ({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    date: post.date,
    categories: post.categories,
  }))

  return {
    posts: sortedPosts
  }
}

export default fetchPosts
/**
 * All of these values are used throughout the site – for example, 
 * in the <meta> tags, in the footer, and in the RSS feed.
 * 
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/ 

export const siteTitle = 'Jimmy Lemon'
export const siteDescription = 'Built with the SvelteKit Static Blog Starter'
export const siteURL = 'jimmylemon.com'
export const siteLink = 'https://github.com/josh-collinsworth/sveltekit-blog-starter'
export const siteAuthor = 'Jimmy Lemon'

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 6

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Blog',
		route: '/blog'
	}, {
		title: 'About',
		route: '/about'
	}, {
		title: 'What I Use',
		route: '/uses' 
	},
]
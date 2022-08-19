import { error } from '@sveltejs/kit'

export const load = async ({ url }) => {
	try {
		/**
		 * This fetch call is not used in this file, but the route won't be pre-rendered 
		 * and routed properly unless it's called inside a `load` function. ¯\_(ツ)_/¯
		 * */ 
		const rss = await fetch(`${url.origin}/api/rss.xml`)

		return {
			path: url.pathname
		}
	}
	catch(err) {
		throw error(500, err)
	}
}

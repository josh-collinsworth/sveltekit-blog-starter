import { error } from '@sveltejs/kit'

export const load = async () => {
	try {
		const ReadMeFile = await import('../../README.md')
		const ReadMe = ReadMeFile.default
		
		return {
			ReadMe
		}
	}
	catch(err) {
		error(500, err);
	}
}

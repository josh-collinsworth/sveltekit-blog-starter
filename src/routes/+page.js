import { error } from '@sveltejs/kit';

export const load = async () => {
	try {
		const WhoamiFile = await import('../../whoami.md');
		// const ReadMeFile = await import('../../README.md')
		// const ReadMe = ReadMeFile.default
		const Whoami = WhoamiFile.default;

		return {
			Whoami
		};
	} catch (err) {
		throw error(500, err);
	}
};

import { redirect } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

export const actions = {
	loginUser: async ({ request }) => {
		const { username, password } = Object.fromEntries(await request.formData());
		if (!username || !password) return;
		const existingUser = await prisma.user.findUnique({
			where: {
				username: username,
				password: password
			}
		});
		if (!existingUser) return;
		redirect(303, `/${existingUser.id}`);
	}
};

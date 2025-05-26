import { redirect } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

export const actions = {
	createUser: async ({ request }) => {
		const { username, password } = Object.fromEntries(await request.formData());
		if (!username || !password) return;
		const existingUser = await prisma.user.findUnique({
			where: { username: username }
		});
		if (existingUser) return;
		await prisma.user.create({
			data: {
				username,
				password
			}
		});

		const newUser = await prisma.user.findUnique({
			where: { username: username }
		});

		redirect(303, `/${newUser.id}`);
	}
};

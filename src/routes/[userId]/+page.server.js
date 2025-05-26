import { prisma } from '$lib/server/prisma';

export const actions = {
	createProject: async ({ request, params }) => {
		const { title } = Object.fromEntries(await request.formData());
		if (!title) return;
		await prisma.project.create({
			data: {
				title,
				userId: Number(params.userId)
			}
		});
	}
};

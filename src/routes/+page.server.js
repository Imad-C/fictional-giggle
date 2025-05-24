import { prisma } from '$lib/server/prisma';

export const load = async () => {
	const tasks = await prisma.task.findMany();
	return { tasks };
};

export const actions = {
	createTask: async ({ request }) => {
		const { title, description } = Object.fromEntries(await request.formData());
		await prisma.task.create({
			data: {
				title,
				description
			}
		});
	},

	// updateTask: async ({ request }) => {
	// 	// pass
	// },

	deleteTask: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id');
		if (!id) return;
		await prisma.task.delete({
			where: { id: Number(id) }
		});
	}
};

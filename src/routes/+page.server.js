import { prisma } from '$lib/server/prisma';

export const load = async () => {
	const tasks = await prisma.task.findMany();
	return { tasks };
};

export const actions = {
	createTask: async ({ request }) => {
		const { title, description } = Object.fromEntries(await request.formData());
		if (!title) return;
		await prisma.task.create({
			data: {
				title,
				description
			}
		});
	},

	updateTask: async ({ request }) => {
		const { id, title, description } = Object.fromEntries(await request.formData());
		if (!id || !title) return;
		await prisma.task.update({
			where: { id: Number(id) },
			data: {
				title,
				description
			}
		});
	},

	deleteTask: async ({ request }) => {
		const { id } = Object.fromEntries(await request.formData());
		if (!id) return;
		await prisma.task.delete({
			where: { id: Number(id) }
		});
	}
};

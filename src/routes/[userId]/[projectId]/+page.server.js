import { prisma } from '$lib/server/prisma';

export const load = async ({ parent, params }) => {
	const userData = await parent();
	const project = userData.user.projects.find((project) => {
		return project.id === Number(params.projectId);
	});
	const sortedTasks = [...project.tasks].sort((a, b) => a.id - b.id);
	return { tasks: sortedTasks };
};

export const actions = {
	createTask: async ({ request, params }) => {
		const { title, description } = Object.fromEntries(await request.formData());
		if (!title) return;
		await prisma.task.create({
			data: {
				title,
				description,
				projectId: Number(params.projectId)
			}
		});
	},

	updateTask: async ({ request, params }) => {
		const { id, title, description } = Object.fromEntries(await request.formData());
		if (!id || !title) return;
		await prisma.task.update({
			where: { id: Number(id) },
			data: {
				title,
				description,
				projectId: Number(params.projectId)
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

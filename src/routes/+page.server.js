import { prisma } from '$lib/server/prisma';

export const load = async () => {
	const tasks = await prisma.task.findMany();
	console.log(tasks);
	return { tasks };
};

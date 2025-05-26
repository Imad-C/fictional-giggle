import { prisma } from '$lib/server/prisma';

export const load = async ({ params }) => {
	const user = await prisma.user.findFirstOrThrow({
		where: { id: Number(params.userId) },
		include: {
			projects: {
				include: {
					tasks: true
				}
			}
		}
	});

	let currentProject = null;
	if (params.projectId) {
		currentProject = user.projects.find((project) => {
			return project.id === Number(params.projectId);
		});
	}

	return { user, currentProject };
};

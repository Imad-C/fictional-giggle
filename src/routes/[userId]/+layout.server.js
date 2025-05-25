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
	return { user };
};

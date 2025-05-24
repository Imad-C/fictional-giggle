import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const taskData = [
	{ title: 'task 1', description: 'this is task 1' },
	{ title: 'task 2', description: 'this is task 2' },
	{ title: 'task 3', description: 'this is task 3' }
];

async function main() {
	for (const task of taskData) {
		await prisma.task.create({
			data: {
				title: task.title,
				description: task.description
			}
		});
	}
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});

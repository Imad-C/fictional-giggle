import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// const seedData = [
// 	{
// 		title: 'project 1',
// 		tasks: [
// 			{ title: 'task 1', description: 'this is task 1' },
// 			{ title: 'task 2', description: 'this is task 2' },
// 			{ title: 'task 3', description: 'this is task 3' }
// 		]
// 	},
// 	{
// 		title: 'project a',
// 		tasks: [
// 			{ title: 'task a', description: 'this is task a' },
// 			{ title: 'task b', description: 'this is task b' },
// 			{ title: 'task c', description: 'this is task c' }
// 		]
// 	},
// 	{
// 		title: 'project x',
// 		tasks: [
// 			{ title: 'task x', description: 'this is task x' },
// 			{ title: 'task y', description: 'this is task y' },
// 			{ title: 'task z', description: 'this is task z' }
// 		]
// 	}
// ];

// async function main() {
// 	for (const project of seedData) {
// 		await prisma.project.create({
// 			data: {
// 				title: project.title,
// 				tasks: { create: project.tasks }
// 			}
// 		});
// 	}
// }

const seedData = [
	{
		username: 'user 1',
		password: 'password 1',
		projects: [
			{
				title: 'project 1',
				tasks: [
					{ title: 'task 1', description: 'this is task 1' },
					{ title: 'task 2', description: 'this is task 2' },
					{ title: 'task 3', description: 'this is task 3' }
				]
			},
			{
				title: 'project a',
				tasks: [
					{ title: 'task a', description: 'this is task a' },
					{ title: 'task b', description: 'this is task b' },
					{ title: 'task c', description: 'this is task c' }
				]
			},
			{
				title: 'project x',
				tasks: [
					{ title: 'task x', description: 'this is task x' },
					{ title: 'task y', description: 'this is task y' },
					{ title: 'task z', description: 'this is task z' }
				]
			}
		]
	},
	{
		username: 'user 11',
		password: 'password 11',
		projects: [
			{
				title: 'project 11',
				tasks: [
					{ title: 'task 11', description: 'this is task 11' },
					{ title: 'task 22', description: 'this is task 22' },
					{ title: 'task 33', description: 'this is task 33' }
				]
			},
			{
				title: 'project aa',
				tasks: [
					{ title: 'task aa', description: 'this is task aa' },
					{ title: 'task bb', description: 'this is task bb' },
					{ title: 'task cc', description: 'this is task cc' }
				]
			},
			{
				title: 'project xx',
				tasks: [
					{ title: 'task xx', description: 'this is task xx' },
					{ title: 'task yy', description: 'this is task yy' },
					{ title: 'task zz', description: 'this is task zz' }
				]
			}
		]
	},
	{
		username: 'user 111',
		password: 'password 111',
		projects: [
			{
				title: 'project 111',
				tasks: [
					{ title: 'task 111', description: 'this is task 111' },
					{ title: 'task 222', description: 'this is task 222' },
					{ title: 'task 333', description: 'this is task 333' }
				]
			},
			{
				title: 'project aaa',
				tasks: [
					{ title: 'task aaa', description: 'this is task aaa' },
					{ title: 'task bbb', description: 'this is task bbb' },
					{ title: 'task ccc', description: 'this is task ccc' }
				]
			},
			{
				title: 'project xxx',
				tasks: [
					{ title: 'task xxx', description: 'this is task xxx' },
					{ title: 'task yyy', description: 'this is task yyy' },
					{ title: 'task zzz', description: 'this is task zzz' }
				]
			}
		]
	}
];

async function main() {
	for (const user of seedData) {
		await prisma.user.create({
			data: {
				username: user.username,
				password: user.password,
				projects: {
					create: user.projects.map((project) => ({
						title: project.title,
						tasks: { create: project.tasks }
					}))
				}
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

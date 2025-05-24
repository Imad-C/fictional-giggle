import { PrismaClient } from '@prisma/client';

// set prisma globally to prevent new connections on hot reloads
global.prisma;

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
	global.prisma = prisma;
}

export { prisma };

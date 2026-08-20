import { PrismaClient } from '@prisma/client';

// Single shared Prisma instance for the whole app.
const prisma = new PrismaClient();

export { prisma };
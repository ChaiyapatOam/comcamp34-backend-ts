import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const User = prisma.register_data;
export const File = prisma.file;
export const Question = prisma.question;

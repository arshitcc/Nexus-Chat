import { PrismaClient } from "@prisma/client";

const prismaClient = () => new PrismaClient();

type PrismaClientGenerated = ReturnType<typeof prismaClient>;

const globalThis = global as unknown as {
  prisma: PrismaClientGenerated | undefined;
};

const db = globalThis.prisma ?? prismaClient();

export default db;

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

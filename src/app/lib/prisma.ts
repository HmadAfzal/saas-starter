import { PrismaClient } from "@prisma/client";

type prismaClientSinglton = ReturnType<typeof prismaClientSinglton>;

const prismaClientSinglton = () => {
  return new PrismaClient();
};

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSinglton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

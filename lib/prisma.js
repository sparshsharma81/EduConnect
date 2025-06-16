import { PrismaClient } from "@prisma/client";

//we are creating a new instance of prisma here...
//so globalThis.prisma
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
//next js has something called hot reloading -- 
// globalThis.prisma: This global variable ensures that the Prisma client instance is
// reused across hot reloads during development. Without this, each time your application
// reloads, a new instance of the Prisma client would be created, potentially leading
// to connection issues.
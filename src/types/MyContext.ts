import { PrismaClient } from "@prisma/client";
import { Redis } from "ioredis";

export interface MyContext {
  prisma: PrismaClient;
  redis: Redis;
}

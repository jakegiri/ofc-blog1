import { PrismaClient } from "@prisma/client";
import { Redis } from "ioredis";
import { User } from "../shared/generated/type-graphql";

declare module "express-session" {
  interface SessionData {
    userId: string;
  }
}

export interface MyContext {
  prisma: PrismaClient;
  redis: Redis;
}

export class MySession implements Partial<User> {
  userId!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
}

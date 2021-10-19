import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { Redis } from "ioredis";
import { User } from "../shared/generated/type-graphql";

declare module "express-session" {
  interface SessionData {
    userId: string;
  }
}

export interface MyContext {
  req: Request;
  res: Response;
  prisma: PrismaClient;
  redis: Redis;
  mySession: MySession;
}

export class MySession implements Partial<User> {
  userId!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
}

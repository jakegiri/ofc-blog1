import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { Redis } from "ioredis";

declare module "express-session" {
  interface SessionData {
    userId: string;
    data: MySession;
  }
}

export interface MyContext {
  req: Request;
  res: Response;
  prisma: PrismaClient;
  redis: Redis;
  mySession: MySession;
}

export class MySession {
  userId?: string;
  firstName!: string;
  lastName!: string;
  email!: string;
}

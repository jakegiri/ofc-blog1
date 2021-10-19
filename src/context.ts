import { Request, Response } from "express";
import prisma from "./clients/prismaClient";
import redis from "./clients/redisClient";
import { User } from "./shared/generated/type-graphql";
import { MySession } from "./types";

interface Params {
  req: Request;
  res: Response;
}

export const context = async ({ req, res }: Params) => {
  let user: User | null | undefined;
  let mySession: MySession | undefined;

  const token = req.session.userId || ""; // retrieve token from express session
  const userId = await redis.get(token); // retrieve userId from redis store
  if (userId) {
    user = await prisma.user.findUnique({ where: { id: userId } });
  }
  if (user) {
    mySession = {
      userId: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };
  }
  console.log("session: ", mySession);

  return { req, res, prisma, redis, mySession };
};

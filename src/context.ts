import { Request, Response } from "express";
import prisma from "./clients/prismaClient";
import redis from "./clients/redisClient";

interface Params {
  req: Request;
  res: Response;
}

export const context = ({ req, res }: Params) => {
  return { req, res, prisma, redis, mySession: req.session.data };
};

import { v4 } from "uuid";
import { confirmationPrefix } from "../constants/redisPrefixes";
import redis from "../clients/redisClient";

export async function createConfirmationUrl(userId: string): Promise<string> {
  const token = v4();
  await redis.set(confirmationPrefix + token, userId, "ex", 60 * 60 * 60 * 24); // 1day expiratino
  return `http://localhost:4000/user/confirm/${token}`;
}

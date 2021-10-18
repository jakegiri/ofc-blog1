import Redis from "ioredis";

declare global {
  var redis: Redis.Redis;
}

const redis = global.redis || new Redis();

if (process.env.NODE_ENV === "development") global.redis = redis;

export default redis;

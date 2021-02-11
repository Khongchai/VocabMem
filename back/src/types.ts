import { Request, Response } from "express";
import { RedisClient } from "redis";

export type Context = {
  req: Request & { session: { userId: number } };
  redis: RedisClient;
  res: Response;
};

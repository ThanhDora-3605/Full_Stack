import { NextFunction, Request, Response } from "express";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const user = "Hoàng An";
  req.user = user;
  next();
};

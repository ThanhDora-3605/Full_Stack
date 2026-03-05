import { NextFunction, Request, Response } from "express";
import * as z from "zod";

export const validate = (schema: z.ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const body = await schema.safeParseAsync(req.body);

    if (!body.success) {
      return res.status(400).json({
        message: "Validate failed",
        errors: body.error.issues,
      });
    }
    req.body = body;
    next();
  };
};
//Mass assignment vulnerability

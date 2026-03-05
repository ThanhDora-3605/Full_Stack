import { Request, Response } from "express";

export const userController = {
  create: async (req: Request, res: Response) => {
    //req.body
    res.json({
      message: "Create user Success",
      data: req.body,
    });
  },
};

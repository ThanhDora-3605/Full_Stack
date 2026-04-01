import { Request, Response } from "express";

export const uploadController = {
  viewForm: (req: Request, res: Response) => {
    res.render("upload", {
      layout: false,
    });
  },
  upload: (req: Request, res: Response) => {
    res.json({
      image: `/media/${req.file?.filename}`,
    });
  },
};

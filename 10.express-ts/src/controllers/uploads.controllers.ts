import { Request, Response } from "express";

export const uploadsController = {
  viewForm: (req: Request, res: Response) => {
    res.render("uploads", { layout: false });
  },
  uploadFile: (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }
    return res.json({
      message: "Upload file success",
      filename: req.file.filename,
      path: `/files/${req.file.filename}`,
    });
  },
};

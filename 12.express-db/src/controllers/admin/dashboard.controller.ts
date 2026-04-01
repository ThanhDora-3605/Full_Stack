import { Request, Response } from "express";

export const dashboardController = {
  index: (req: Request, res: Response) => {
    res.render("admin/dashboard", {
      layout: "layouts/admin",
    });
  },
};

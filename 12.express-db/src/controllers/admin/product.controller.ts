import { Request, Response } from "express";

export const productController = {
  index: (req: Request, res: Response) => {
    res.render("admin/products/listed", {
      layout: "layouts/admin",
    });
  },
  create: (req: Request, res: Response) => {
    res.render("admin/products/create", {
      layout: "layouts/admin",
    });
  },
  handleCreate: (req: Request, res: Response) => {
    const body = req.body;
    console.log(body);
    //validate
    //service
    res.redirect("/admin/products"); //Chuyển hướng về trang listed
  },
};

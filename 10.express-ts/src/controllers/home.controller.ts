import { Request, Response } from "express";
// import { userService } from "../services/user.service";
// import path from "path";

export const homeController = {
  index: (req: Request, res: Response) => {
    //Tiếp nhận -> xử lý request
    // --> Lỗi --> response 400
    //Gọi service
    // const users = userService.getAll();
    //Trả về response (view)
    // res.json({ users });
    // const viewPath = path.join(__dirname, "../views/home.html");
    // res.sendFile(viewPath);
    const title = "Thanh";
    const content = "Hello World";
    const isAuth = true;
    const users = [
      { id: 1, name: "John Doe", email: "john.doe@example.com" },
      { id: 2, name: "Jane Doe", email: "jane.doe@example.com" },
      { id: 3, name: "John Smith", email: "john.smith@example.com" },
    ];
    res.render("home", { title, content, isAuth, users });
  },

  about: (req: Request, res: Response) => {
    res.render("about");
  },
};

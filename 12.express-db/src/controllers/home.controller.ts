import { Request, Response } from "express";
// import path from "node:path";
// import { userService } from "../services/user.service";

export const homeController = {
  index: (req: Request, res: Response) => {
    //Tiếp nhận -> xử lý request
    // --> Lỗi --> response 400
    //Gọi service
    // const users = userService.getAll();
    //Trả về response (view)
    // const viewPath = path.join(__dirname, "..", "views", "home.html");
    //Data -> Không gửi được sang view để xử lý
    //-> Template Engine (Convert từ javascript thành html)
    // res.sendFile(viewPath);
    const title = "F8";
    const content = `<i>Chào anh em</i>`;
    const isAuth = false;
    const users = [
      {
        id: 1,
        name: "User 1",
        email: "user1@gmail.com",
      },
      {
        id: 2,
        name: "User 2",
        email: "user2@gmail.com",
      },
    ];
    res.render("home", {
      title,
      content,
      isAuth,
      users,
    });
  },

  about: (req: Request, res: Response) => {
    res.render("about", {
      // layout: false, //false, đường dẫn tới file layout trong trường hợp muốn dùng layout khác
    });
  },
};

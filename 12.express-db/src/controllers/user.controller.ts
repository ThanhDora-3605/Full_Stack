import { Request, Response } from "express";
import { userService } from "../services/user.service";
import { postService } from "../services/post.service";

export const userController = {
  index: async (req: Request, res: Response) => {
    const users = await userService.getAll(req);
    res.json(users);
  },
  find: async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await userService.find(+id!);
    res.json(user);
  },
  create: async (req: Request, res: Response) => {
    try {
      const user = await userService.create(req.body);
      res.json({ user });
    } catch (error) {
      console.log(error);
      res.json({ error: error });
    }
  },
  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await userService.update(req.body, +id!);
    res.json(user);
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await userService.delete(+id!);
    res.json(user);
  },
  deleteMany: async (req: Request, res: Response) => {
    const ids = req.body;
    const users = await userService.deleteMany(ids);
    res.json(users);
  },
  getPosts: async (req: Request, res: Response) => {
    const userId = req.params.userId;
    //Gọi service nào?
    const posts = await postService.getPostsByUser(+userId!);
    res.json(posts);
  },
};

//Lấy danh sách bài posts của user có tên chứa từ "r 3"

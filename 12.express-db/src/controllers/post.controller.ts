import { Request, Response } from "express";
import { postService } from "../services/post.service";

export const postController = {
  index: async (req: Request, res: Response) => {
    const posts = await postService.getAll(req);
    res.json(posts);
  },
  create: async (req: Request, res: Response) => {
    const body = req.body;
    const post = await postService.create(body);
    res.json(post);
  },
};

//GET /user/:userId/posts

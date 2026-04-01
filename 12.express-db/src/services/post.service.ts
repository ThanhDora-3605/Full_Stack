import { Request } from "express";
import { prisma } from "../utils/prisma";

export const postService = {
  async getAll(req: Request) {
    const { q = "" } = req.query as unknown as { q: string };
    const posts = await prisma.post.findMany({
      include: {
        user: true,
      },
      where: {
        OR: [
          {
            title: {
              contains: q,
            },
          },
          {
            user: {
              name: {
                contains: q,
              },
            },
          },
        ],
      },
    });
    return posts;
    // const posts = await prisma.$queryRaw`SELECT * FROM posts`;
    // return posts;
  },
  async getPostsByUser(userId: number) {
    const posts = await prisma.post.findMany({
      where: {
        user: {
          id: userId,
        },
      },
      select: {
        id: true,
        title: true,
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    // const posts = await prisma.user.findMany({
    //   where: {
    //     id: userId,
    //   },
    //   include: {
    //     posts: true,
    //   },
    // });
    return posts;
  },
  async create(body: { title: string; userId: number }) {
    const post = await prisma.post.create({
      data: {
        title: body.title,
        user: {
          connect: {
            id: body.userId,
          },
        },
        // userId: body.userId,
      },
    });
    return post;
  },
};

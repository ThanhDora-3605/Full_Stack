import { Request } from "express";
import { prisma } from "../utils/prisma";
type Query = {
  include: string;
};
export const userService = {
  async getAll(req: Request) {
    const { include = "" } = req.query as unknown as Query;
    const relations: {
      [key: string]: boolean;
    } = {};

    include
      .trim()
      .split(",")
      .filter((item) => item)
      .forEach((item) => {
        relations[item.trim()] = true;
      });

    return await prisma.user.findMany({
      // take: 3, //limit
      // skip: 3,
      orderBy: [
        {
          id: "desc",
        },
        {
          createdAt: "asc",
        },
      ],
      include: relations,
    });
  },
  async find(id: number) {
    return await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        phone: true,
      },
    });
  },
  async create(body: { name: string; email: string; phone: string }) {
    return await prisma.user.create({
      data: {
        ...body,
        phone: {
          create: {
            phone: body.phone,
          },
        },
      },
    });
  },
  async update(
    body: { name: string; email: string; phone: string },
    id: number,
  ) {
    return await prisma.user.update({
      where: {
        id,
      },
      data: {
        ...body,
        phone: {
          upsert: {
            where: {
              userId: id,
            },
            create: {
              phone: body.phone,
            },
            update: {
              phone: body.phone,
            },
          },
        },
      },
    });
  },
  async delete(id: number) {
    await prisma.phone.deleteMany({
      where: {
        user: {
          id,
        },
      },
    });
    return await prisma.user.delete({
      where: { id },
    });
  },
  async deleteMany(ids: number[]) {
    return await prisma.user.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  },
};

//where
//take, skip
//select
//omit
//orderBy
//findUnique:
// - field là unique
// - So sánh bằng

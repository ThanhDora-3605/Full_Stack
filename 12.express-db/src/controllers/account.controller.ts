import { Request, Response } from "express";
import { prisma } from "../utils/prisma";

export const accountController = {
  index: async (req: Request, res: Response) => {
    const { amount, sender: senderEmail, receiver: receiverEmail } = req.body;

    await prisma.$transaction(async (tx) => {
      //Trừ tiền
      const sender = await tx.account.update({
        where: {
          email: senderEmail,
        },
        data: {
          balance: {
            decrement: amount,
          },
        },
      });

      //Kiểm tra
      if (sender.balance < 0) {
        throw new Error("Số dư âm");
      }

      //Cộng tiền
      await tx.account.update({
        where: {
          email: receiverEmail,
        },
        data: {
          balance: {
            increment: amount,
          },
        },
      });
    });

    res.json({});
  },
};

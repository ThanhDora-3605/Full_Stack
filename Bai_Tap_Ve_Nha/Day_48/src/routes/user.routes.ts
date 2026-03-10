import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();
const controller = new UserController();

const wrap = (fn: (req: any, res: any) => Promise<unknown>) => (req: any, res: any, next: any) =>
  Promise.resolve(fn(req, res)).catch(next);

router.get("/", wrap(controller.list.bind(controller)));
router.post("/", wrap(controller.create.bind(controller)));
router.get("/search", wrap(controller.search.bind(controller)));
router.put("/:id", wrap(controller.update.bind(controller)));
router.delete("/:id", wrap(controller.delete.bind(controller)));

export default router;
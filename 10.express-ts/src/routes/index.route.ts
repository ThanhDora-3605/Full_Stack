import express from "express";
import { homeController } from "../controllers/home.controller";
import { userController } from "../controllers/user.controller";
import { validate } from "../middlewares/validate.middleware";
import { userSchema } from "../validators/user.validator";
import { uploadsController } from "../controllers/uploads.controllers";
import { uploadMiddleware } from "../middlewares/upload.middlewares";
const router = express.Router();
router.get("/", homeController.index);
router.get("/about", homeController.about);
router.post("/users", validate(userSchema), userController.create);
router.get("/uploads", uploadsController.viewForm);
router.post(
  "/uploads",
  uploadMiddleware.single("file"),
  uploadsController.uploadFile,
);
export default router;

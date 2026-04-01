import express from "express";
import { homeController } from "../controllers/home.controller";
import { userController } from "../controllers/user.controller";
// import { validate } from "../middlewares/validate.middleware";
// import { userSchema } from "../validators/user.validator";
import { uploadController } from "../controllers/upload.controller";
import { upload } from "../middlewares/upload.middleware";
import { postController } from "../controllers/post.controller";
import { accountController } from "../controllers/account.controller";
const router = express.Router();
router.get("/", homeController.index);
router.get("/gioi-thieu", homeController.about);
// router.post("/users", validate(userSchema), userController.create);

router.get("/uploads", uploadController.viewForm);
router.post("/uploads", upload.single("image"), uploadController.upload);

router.get("/users", userController.index);
router.get("/users/:id", userController.find);
router.post("/users", userController.create);
router.put("/users/:id", userController.update);
router.delete("/users/:id", userController.delete);
router.delete("/users", userController.deleteMany);
router.get("/users/:userId/posts", userController.getPosts);

router.get("/posts", postController.index);
router.post("/posts", postController.create);

router.post("/account", accountController.index);

export default router;

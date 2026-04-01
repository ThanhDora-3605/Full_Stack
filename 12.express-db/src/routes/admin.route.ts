import express from "express";
import { dashboardController } from "../controllers/admin/dashboard.controller";
import { productController } from "../controllers/admin/product.controller";
const router = express.Router();
router.get("/", dashboardController.index);
router.get("/products", productController.index);
router.get("/products/create", productController.create);
router.post("/products/create", productController.handleCreate);
export default router;

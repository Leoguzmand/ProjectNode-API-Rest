import { Router } from "express";
const router = Router();

import { getAllProducts } from "../controllers/products.controller.js";

// Estas son las rutas:

router.get("/products", getAllProducts);

//router.get("products/:id",)


export default router;
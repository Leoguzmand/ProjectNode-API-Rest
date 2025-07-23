import { Router } from "express";
const router = Router();

import {
    createProduct,
    deleteProduct,
    getAllProducts,
    getProductById,
    updateProduct
} from "../controllers/products.controller.js";


import { auth } from "../middlewares/auth.middleware.js";


// Estas son las rutas:

router.get("/products", getAllProducts);

router.get("/products/:id", getProductById);

router.post("/products", auth, createProduct);

router.put("/products/:id", auth, updateProduct);

router.delete("/products/:id", auth, deleteProduct);

export default router;
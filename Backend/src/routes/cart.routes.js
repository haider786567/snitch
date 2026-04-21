import { Router } from "express";
import { authenticateUser } from "../middleware/auth.middleware.js";
import { validateAddToCart } from "../validators/cart.validator.js";
import { addToCart } from "../controllers/cart.controller.js";

const router = Router();

router.post("/add/:productId/:variantId",authenticateUser,validateAddToCart,addToCart)



module.exports = router;
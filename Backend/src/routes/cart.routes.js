import { Router } from "express";
import { authenticateUser } from "../middleware/auth.middleware.js";
import { validateAddToCart,validateIncrementCartItemQuantity } from "../validators/cart.validator.js";
import { addToCart, getCart,incrementCartItemQuantity } from "../controllers/cart.controller.js";

const router = Router();

router.post("/add/:productId/:variantId",authenticateUser,validateAddToCart,addToCart)

router.get('/get',authenticateUser,getCart)

router.patch('/quantity/increment/:productId/:variantId', authenticateUser, validateIncrementCartItemQuantity, incrementCartItemQuantity)



export default router;
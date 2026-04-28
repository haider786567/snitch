import { Router } from "express";
import { authenticateUser } from "../middleware/auth.middleware.js";
import { validateAddToCart,validateIncrementCartItemQuantity } from "../validators/cart.validator.js";
import { addToCart, getCart,incrementCartItemQuantity ,decrementCartItemQuantity,removeCartItem,createOrderController,verifyOrderController} from "../controllers/cart.controller.js";

const router = Router();

router.post("/add/:productId/:variantId",authenticateUser,validateAddToCart,addToCart)

router.get('/get',authenticateUser,getCart)

router.patch('/quantity/increment/:productId/:variantId', authenticateUser, validateIncrementCartItemQuantity, incrementCartItemQuantity)

router.patch('/quantity/decrement/:productId/:variantId', authenticateUser, validateIncrementCartItemQuantity, decrementCartItemQuantity)
router.delete('/remove/:productId/:variantId', authenticateUser, removeCartItem)

router.post('/payment/create/order', authenticateUser, createOrderController)
router.post('/payment/verify/order', authenticateUser, verifyOrderController)



export default router;
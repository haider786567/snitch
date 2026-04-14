import express from 'express';
import { Router } from 'express';
import { authSeller } from '../middleware/auth.middleware.js';
import { createProduct } from '../controllers/product.controller.js';
import { createProductValidator } from '../validators/product.validator.js';
import multer from 'multer';
const router = Router();
const upload = multer({
    storage: multer.memoryStorage(),
    limits:{
        fileSize: 5 * 1024 * 1024 // 5MB limit
    }
})

router.post('/create',authSeller,upload.array('images', 7),createProductValidator,createProduct);

export default router;
import productModel from "../models/product.model.js";
import { UploadImage } from "../service/storage.service.js";

export async function createProduct(req,res){
    const {title,description,priceAmount,priceCurrency} = req.body;
    const seller = req.user;
    

    const images = await Promise.all(req.files.map(async (file)=>{
        return await UploadImage({
            buffer:file.buffer,
            fileName:file.originalname

        })

    }))
    const product = await productModel.create({
        title,
        description,
        price: {
            amount: priceAmount,
            currency: priceCurrency
        },
        seller: seller.id,
        images: images.map(img=>({url: img.url}))
    });
    res.status(201).json({
        success: true,
        message: "Product created successfully",
        product
    })  


}
export async function getSellerProducts(req,res){
    const seller = req.user;
    const products = await productModel.find({seller: seller.id});
    res.status(200).json({
        success: true,
        products
        })
}
export async function getAllProducts(req, res) {
    const products = await productModel.find()

    return res.status(200).json({
        message: "Products fetched successfully",
        success: true,
        products
    })
}


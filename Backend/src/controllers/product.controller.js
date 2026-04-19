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

export async function getProductById(req, res) {
    const { id } = req.params;
    try {
        const product = await productModel.findById(id);
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
                success: false
            });
        }
        return res.status(200).json({
            message: "Product fetched successfully",
            success: true,
            product
        });
    } catch (error) {
        console.error("Error fetching product:", error.message);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}
export async function addProductVariant(req, res) {

    const productId = req.params.productId;

    const product = await productModel.findOne({
        _id: productId,
        seller: req.user._id
    });

    if (!product) {
        return res.status(404).json({
            message: "Product not found",
            success: false
        })
    }

    const files = req.files;
    const images = [];
    if (files || files.length !== 0) {
        (await Promise.all(files.map(async (file) => {
            const image = await uploadFile({
                buffer: file.buffer,
                fileName: file.originalname
            })
            return image
        }))).map(image => images.push(image))
    }

    const price = req.body.priceAmount
    const stock = req.body.stock
    const attributes = JSON.parse(req.body.attributes || "{}")

    console.log(price)

    product.variants.push({
        images,
        price: {
            amount: Number(price) || product.price.amount,
            currency: req.body.priceCurrency || product.price.currency
        },
        stock,
        attributes
    })

    await product.save();

    return res.status(200).json({
        message: "Product variant added successfully",
        success: true,
        product
    })

}


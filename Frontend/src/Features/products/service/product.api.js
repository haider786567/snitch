import axios from "axios";

const ProductApiInstance = axios.create({
    baseURL:"/api/products",
    withCredentials: true,
})

export const getSellerProducts = async ()=>{
    try{
        const response = await ProductApiInstance.get("/seller");
        return response.data;
    }catch(error){
        console.error("Error fetching products:", error.message);
        throw error;
    }
}

export const createProduct = async (productData)=>{
    try{
        const response = await ProductApiInstance.post("/create", productData);
        return response.data;
    }catch(error){
        console.error("Error creating product:", error.message);
        throw error;
    }
}
export async function getAllProducts(){
    try{
        const response = await ProductApiInstance.get("/");
        return response.data;
    }catch(error){
        console.error("Error fetching products:", error.message);
        throw error;
    }
}
export async function deleteProduct(productId){
    try{
        const response = await ProductApiInstance.delete(`/delete/${productId}`);
        return response.data;
    }catch(error){
        console.error("Error deleting product:", error.message);
        throw error;
    }
}
export async function getProductById(productId ){
    try{
        const response = await ProductApiInstance.get(`/detail/${productId}`);
        console.log(response.data);
        
        return response.data;
    }catch(error){
        console.error("Error fetching product:", error.message);
        throw error;
    }
}

export async function addProductVariant(productId, newProductVariant) {

    console.log(newProductVariant)

    const formData = new FormData()

    newProductVariant.images.forEach((image) => {
        formData.append(`images`, image.file)
    })

    formData.append("stock", newProductVariant.stock)
    formData.append("priceAmount", newProductVariant.price)
    formData.append("attributes", JSON.stringify(newProductVariant.attributes))

    const response = await ProductApiInstance.post(`/${productId}/variants`, formData)

    return response.data

}
 
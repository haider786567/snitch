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
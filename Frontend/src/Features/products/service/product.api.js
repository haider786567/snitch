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
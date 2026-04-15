import { setSellerProducts } from "../state/product.slice";
import { getSellerProducts , createProduct } from "../service/product.api";
import { useDispatch } from "react-redux";

export const useProduct = ()=>{
    const dispatch = useDispatch();
    const fetchSellerProducts = async ()=>{
        try{
            const data = await getSellerProducts();
            dispatch(setSellerProducts(data.products));
        }catch(error){
            console.error("Error fetching products:", error.message);
        }   
    }

    const createProductHandler = async (productData)=>{
        try{
            const data = await createProduct(productData);
            return data.products;222
        }catch(error){
            console.error("Error creating product:", error.message);
            throw error;
        }
    }

    return {
        fetchSellerProducts,
        createProductHandler,
    }
}
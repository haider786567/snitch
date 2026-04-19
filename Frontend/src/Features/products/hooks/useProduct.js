import { setSellerProducts,setProducts } from "../state/product.slice";
import { getSellerProducts , createProduct ,getAllProducts,getProductById} from "../service/product.api";
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
            return data.products;
        }catch(error){
            console.error("Error creating product:", error.message);
            throw error;
        }
    }
    const fetchAllProducts = async ()=>{
        try{
            const data = await getAllProducts();
            dispatch(setProducts(data.products));
        }catch(error){
            console.error("Error fetching products:", error.message);
        }   
    }

    const handlegetProductById = async (id)=>{
        try{
            const data = await getProductById(id);
            return data.product;
        }catch(error){
            console.error("Error fetching product:", error.message);
            throw error;
        }
    }

    return {
        fetchSellerProducts,
        createProductHandler,
        fetchAllProducts,
        handlegetProductById
    }
}   
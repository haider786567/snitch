import { setSellerProducts,setProducts } from "../state/product.slice";
import { getSellerProducts , createProduct ,getAllProducts,deleteProduct,getProductById,addProductVariant} from "../service/product.api";
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
    const handleDeleteProduct = async (productId)=>{
        try{
            const data = await deleteProduct(productId);
            return data.message;
        }catch(error){
            console.error("Error deleting product:", error.message);
            throw error;
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

    const handleAddProductVariant = async (productId, newProductVariant) => {
        try {
            const data = await addProductVariant(productId, newProductVariant);
            return data.product;
        } catch (error) {
            console.error("Error adding product variant:", error.message);
            throw error;
        }
    }

    return {
        fetchSellerProducts,
        createProductHandler,
        fetchAllProducts,
        handleDeleteProduct,
        handlegetProductById,   
        handleAddProductVariant
    }
}   
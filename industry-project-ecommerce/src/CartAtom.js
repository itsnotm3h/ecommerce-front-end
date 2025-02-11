import { atom, useAtom } from "jotai";
import axios from "axios";
import Immutable from "seamless-immutable";
import { useEffect } from "react";
import { useSession } from "./userAtom";



const initialCart = Immutable([]);

export const cartAtom = atom(initialCart);
// need to load this to stop 
export const cartLoadingAtom = atom(false);

export const useCart = () => {
    const [cartInfo, setCart] = useAtom(cartAtom);
    const [isLoading, setIsLoading] = useAtom(cartLoadingAtom);
    const {statusInfo,getStatus,initSession} = useSession();
    


    const getCart = async (item)=>
    {
        setIsLoading(true);

        try {
            console.log(item);
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/cart/${item}`,{
                withCredentials:true,
                headers: {
                'ngrok-skip-browser-warning': 'true'  // Skip ngrok browser warning
              }});
            setCart(Immutable(response.data));
        }
        catch (error) {
            console.error("Error Fetching in frontend: ", error);
        }finally {
            setIsLoading(false);
        }
    }

    const getCartTotal = () => {
        return cartInfo.reduce((total, item) => total + (item.product_price * item.product_qty), 0).toFixed(2);
    };


    const addToCart = (product) => {
        setCart(currentCart => {

            console.log(product)

            const currentIndex = currentCart.findIndex(i => i.product_id === product.product_id);
            if (currentIndex !== -1) {
                
                let newQty = product.product_qty;

                if (newQty < 0) {
                    // Remove the item using .delete() instead of deleteIn()
                    return currentCart.filter(item => item.product_id !== product.product_id);

                } else {
                    // Update the quantity using setIn()
                    return currentCart.setIn([currentIndex, "product_qty"], newQty);
                }

            }
            else {
                //if the index dont exist it will add a new product. 
                return currentCart.concat({
                    ...product,
                    product_qty: 1 
                })
            }


              
        }
        )
    }

    const updateCart = async () =>{

        try{
            setIsLoading(true);
            const updatedCart = cartInfo.map((item) => ({
                product_id: item.product_id,
                product_qty: item.product_qty,
            }));

            const update = await axios.post(`${import.meta.env.VITE_API_URL}/api/cart/`+statusInfo,{ cartItems: updatedCart },{
                withCredentials:true,
                headers: {
                'ngrok-skip-browser-warning': 'true'  // Skip ngrok browser warning
              }});
            console.log(update.data);


        } catch(error)
        {
            console.error("Error Fetching in frontend CartAtom (updateCart): ", error);

        } finally{
            setIsLoading(false);

        }

    }

    useEffect(() => {
        if (cartInfo !== initialCart) {
            updateCart(statusInfo);
            // console.log(cartInfo);
        }
    }, [cartInfo]); // Depend on the cart state
    

    const deleteCartItem = (product_id) =>{
        console.log(product_id)
        setCart((currentCart)=>{
            currentCart.filter((item)=>item.product_id !== product_id)
        })  
    }


    const getCartQty = (product) => {
        if (!product) return 0;  // Avoid errors if product is undefined
        const productNo = Number(product); 
        const currentIndex = cartInfo.findIndex(i => i.product_id === product);
        return currentIndex !== -1 ? cartInfo[currentIndex].product_qty : 0;
        }

        const fetchCart = () => cartInfo;


    

    return {
        getCartTotal,
        addToCart,
        getCartQty,
        updateCart,
        getCart,
        deleteCartItem,
        fetchCart
    }

}


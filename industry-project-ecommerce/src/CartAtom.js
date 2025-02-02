import { atom, useAtom } from "jotai";
import Immutable from "seamless-immutable";

const itemInfo = Immutable(
    [
        {
            price:65.00,
            product_category:"vase",
            product_dimension:"15.0cm(H) x 12.0cm(W) x 12.0cm(D)",
            product_id:1,
            product_image:"/images/RBC_wildflower.png",
            product_name:"Wildflower Basin",
            product_quantity:2,
            product_series:"Rustic Bloom",
            product_stock:10,
        }

    ]
)


export const cartAtom = atom(itemInfo);

export const useCart = () => {
    const [cartInfo, setCart] = useAtom(cartAtom);

    const getCartTotal = () => {
        return cartInfo.reduce((total, item) => total + (item.price * item.product_quantity), 0).toFixed(2);
    };


    const addToCart = (product) => {
        setCart(currentCart => {

            const currentIndex = cartInfo.findIndex(i => i.product_id === product.product_id);
            if (currentIndex !== -1) {
                
                let newQty = product.product_quantity;
                const modifyCart = currentCart.setIn([currentIndex, "product_quantity"], newQty);
                return modifyCart;
            }
            else {
                //if the index dont exist it will add a new product. 
                return currentCart.concat({
                    ...product,
                    product_quantity: 1 
                })
            }
        }
        )
    }

    const updateCart = (productId,qty) =>{
        setCart(currentCart =>{
            const currentIndex = cartInfo.findIndex(x => x.product_id === productId);

            if(currentCart !==1)
            {
                if(qty == 0)
                {
                    return currentCart.filter(item=>item.product_id !== productId);
                }
                else{

                    return currentCart.setIn([currentIndex, "product_quantity"], qty);
                }
            }

        }


        )
    }

    const getCartQty = (product) => {
        if (!product) return 0;  // Avoid errors if product is undefined
        const currentIndex = cartInfo.findIndex(i => i.product_id === product);
        return currentIndex !== -1 ? cartInfo[currentIndex].product_quantity : 0;
        }

    

    return {
        cartInfo,
        getCartTotal,
        addToCart,
        getCartQty,
        updateCart,
    }

}


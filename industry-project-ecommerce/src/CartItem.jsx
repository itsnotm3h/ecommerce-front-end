import React,{useEffect,useState} from "react";
import { useCart } from "./CartAtom";

export default function CartItem (props){

    const {cartInfo, updateCart,addToCart} = useCart();

    const [count, setCounter] = useState(props.qty);


    
        //This is the addCart function
        // on click update the session immediately. 
    
        const minusCart = () => {
            
            if (count > 1) {
                const newCount = count - 1;
                setCounter(newCount);
                addToCart({
                    "product_id": props.id,
                    "product_name": props.name,
                    "product_qty": newCount,
                    "price": props.price,
                    "product_image": props.image,
                    "product_dimension": props.dimension,
                    "product_category": props.category,
                    "product_series": props.series,
                })
            }

        };
    
        const addCart = () => {

            const stock = props.stock;


            if (count < stock) {

                const newCount = count + 1;
                setCounter(newCount);
                addToCart({
                    "product_id": props.id,
                    "product_name": props.name,
                    "product_qty": newCount,
                    "price": props.price,
                    "product_image": props.image,
                    "product_dimension": props.dimension,
                    "product_category": props.category,
                    "product_series": props.series,
                })
            }
            
        };

        const removeCart = ()=>{

            setCounter(0);
            updateCart(props.id,0)

        }

         useEffect(() => {
          
                   const debouncedTimeout = setTimeout(()=>{
                       updateCart();
                       console.log(cartInfo);
       
       
                   },500);
       
                   return()=> clearTimeout(debouncedTimeout);
        
           }, [cartInfo]);




    return(
    <div key={props.id} className="d-flex flex-wrap w-100 pb-5">
    <div className="col-4 col-lg-3">
        <div className="cart-product-image" style={{backgroundImage:`url(${props.image})`}}></div>
    </div>
    <div className="col-8 col-lg-9 py-lg-4 ps-4 position-relative d-flex flex-wrap">
        <div className="w-100">
            <div className="position-absolute text-black cart-item-delete"><span className="material-symbols-outlined" onClick={()=>{
                removeCart()
            }}>
                delete_forever
            </span></div>
            <div className="cart-product-name header-text header-style">{props.name}</div>
            <div className="cart-product-category">{props.series}, {props.category}</div>
            <div className="cart-product-dimension">{props.dimension}</div>
            <small>(${props.price})</small>
        </div>
        <div className="d-flex flex-wrap align-self-end justify-content-between w-100">
            <div className="col-6">
                <div className="">Quantity<br />
                    <div className="col-5 d-flex productInfo-button justify-content-between">
                        <div className="productInfo-Minus px-2" onClick={() => { minusCart() }}>-</div>
                        <div className="productInfo-Quantity">{count}</div>
                        <div className="productInfo-Add px-2" onClick={() => { addCart() }}>+</div>
                    </div>
                </div>
            </div>
            <div className="col-5 align-self-center text-end">
                Subtotal: ${(props.price*props.qty)}<br/>
                
            </div>
        </div>
    </div>

</div>
)
}
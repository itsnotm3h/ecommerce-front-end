import React,{useEffect,useState} from "react";
import { useLocation } from "wouter";
import { useCart } from "./CartAtom";
import { useSession } from "./userAtom";

export default function CartItem (props){

    const {updateCart,addToCart,getCart,deleteCartItem} = useCart();
    const {statusInfo} = useSession();

    const [, setLocation] = useLocation();

    const [count, setCounter] = useState(props.qty);

    const stock = props.stock;

    
        //This is the addCart function
        // on click update the session immediately. 
    
        const minusCart = () => {
        
            if (count > 0) {
                const newCount = count - 1;
                handleCart(newCount); 
                setCounter(newCount);
            }
            else{
            
            }
        };
    
        const addCart = () => {
    
            if (count < stock) {
                const newCount = count + 1;
                handleCart(newCount);
                setCounter(newCount);
                // console.log(statusInfo);

            }
            
        };

        const removeCart = (id)=>{
            handleCart(0);
        }


        const handleCart = (currentQty) => {

            addToCart({
                "product_id": props.id,
                "product_name": props.name,
                "product_qty": currentQty,
                "price": props.price,
                "product_image": props.image,
                "product_dimension": props.dimension,
                "product_category": props.category,
                "product_series": props.series,
            })
        }

    return(
    <div key={props.id} className="d-flex flex-wrap w-100 pb-5">
    <div className="col-4 col-lg-3">
        <div className="cart-product-image" style={{backgroundImage:`url(${props.image})`}}></div>
    </div>
    <div className="col-8 col-lg-9 py-lg-4 ps-4 position-relative d-flex flex-wrap">
        <div className="w-100">
            <div className="position-absolute text-black cart-item-delete"><span className="material-symbols-outlined" onClick={()=>{
                removeCart(props.id)
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
                        <div className="productInfo-Quantity">{props.qty}</div>
                        <div className={`productInfo-Add px-2 ${count == stock ? "disabled" : ""}`} onClick={() => { addCart() }}>+</div>
                    </div>
                </div>
            </div>
            <div className="col-5 align-self-center text-end">
                Subtotal:<br/>${(props.price*props.qty).toFixed(2)}<br/>
                
            </div>
        </div>
    </div>

</div>
)
}
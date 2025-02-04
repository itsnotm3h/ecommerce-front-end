import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import CartItem from "./CartItem";
import {useCart} from "./CartAtom";
import axios from "axios";

export default function Cart() {
      

    const {cartInfo,getCart,getCartTotal} = useCart();
    const [hide,setHide] = useState("hide");
    const [promo,setPromo] = useState("");
    const [delivery,setDelivery] = useState(10);
    const [discount,setDiscount] = useState(0);

    

    const fullCartTotal = ()=>{

        const itemTotal = getCartTotal();
        const finalTotal = (Number(itemTotal) + Number(delivery) - 
         discount*Number(itemTotal)).toFixed(2);

        return finalTotal;
    }



    const checkPromo = (e)=>{

        const val = e.target.value;
        const textLength = e.target.value.length;
        if(textLength<10)setPromo(val);


    }

    const checkDisplay = ()=>{
        if(cartInfo.length===0) setHide("hide")
        else setHide("");
    }


    

    useEffect(() => {
        getCart();
    }, []);

    useEffect(()=>{
        const validatePromo = async () => {
            try {

                const response = await axios.get(`${import.meta.env.VITE_API_URL}/promo/${promo}`,{withCredentials:true});
                const result = Number(response.data.discount_rate);
                setDiscount(result);
                                        
            }
            catch (error) {
                console.error("Error Fetching in frontend: ", error);
            }
        };


        if(promo.length == 9)
            {
                if(promo!="FREEDELIV")
                {
                    validatePromo();
                }
                // console.log(discount);
            }


    },[promo])

    useEffect(()=>{

        checkDisplay();

    },[cartInfo])



    return (
        <>
            <Navbar type="text-black" />
            <div className="container-fluid p-5">
                <div className="container pt-5">
                    <div>
                        <div className="header-text font-700 sectionTitle">Shopping Cart</div>
                        <div className="row pt-4 justify-content-between">
                            <div className="col-lg-8 pb-5 pe-lg-5">
                                {/* <CartItem name="test" category="cat" dimension="Die" stock="1" /> */}
                                {cartInfo.length === 0 ?(
                                    <>
                                    <p>Your cart is empty.</p>
                                    </>
                                ):(
                                    <>
                                    {cartInfo.map((item)=>(
                                        <CartItem id={item.product_id} name={item.product_name} category={item.category_name} dimension={item.product_dimension} qty={item.product_qty} image={item.product_image} price={item.product_price} series={item.product_series} stock={item.product_stock} />
                                    ))}
                                    </>
                                )
                                }
                                <div className={`pt-4 ${hide}`} id="cart-promocode">
                                    <div className="d-flex flex-wrap border-top border-bottom p-0 py-4 cart-promo-section">
                                        <div className="col-7 col-md-8 col-lg-9 header-style header-text">Promo Code</div>
                                        <div className="col-4 col-md-4 col-lg-3 position-relative"><input type="text" className="cart-promo-input form-control" onChange={checkPromo} value={promo}/></div>
                                    </div>
                                </div>
                                <div className={`py-4 cart-delivery-section ${hide}`} id="cart-delivery">
                                    <div className="d-flex flex-wrap">
                                        <div className="col-7 col-md-8 col-lg-9 header-style header-text pb-4 ">Delivery Address</div>
                                        <div className="col-4 col-md-4 col-lg-3 position-relative text-end">+ New Address</div>
                                    </div>
                                    <div className="row pt-2">
                                        <div className="col-12 col-lg-9"> <label for="exampleFormControlInput1" className="form-label">Address*</label>
                                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Block, street" /></div>
                                        <div className="col-12 col-lg-3">
                                        <label className="form-label">Unit Level</label>
                                            <div className="d-flex flex-wrap">
                                                <div className="w-45">
                                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="level" />
                                                </div>
                                                <div className="align-self-center w-10 text-center">
                                                <p className="m-auto">-</p></div>
                                                <div className="w-45">
                                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="unit" />
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="row py-4  pt-sm-4">
                                            <div className="col-12 col-sm-8 col-md-7 ">
                                        <label for="exampleFormControlInput1" className="form-label">Country</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Please select from dropdown" />
                                        </div>
                                        <div className="col-12 col-sm-4 col-md-5 ">
                                        <label for="exampleFormControlInput1" className="form-label">Postal Code</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="postal code" />
                                        </div>
                                        </div>

                                </div>

                            </div>
                            <div className={`col-lg-4 position-relative ${hide}`}>
                                <div className="sticky-top">
                                    <div className="cart-summary-tab d-flex flex-wrap border py-2 px-3 w-100">
                                        <div className="w-100">
                                            <div className="header-text header-style pb-2 position-relative">Summary</div>
                                            <div className="cart-item-tab d-flex flex-wrap justify-content-between">
                                                <div className="">Item(s) subtotal</div>
                                                <div className="cart-subtotal">${getCartTotal()}</div>
                                            </div>
                                            <div className="cart-item-tab d-flex flex-wrap justify-content-between">
                                                <div className="">Delivery Fee</div>
                                                <div className="cart-delivery">${delivery}</div>
                                            </div>
                                            <div className="cart-item-tab d-flex flex-wrap justify-content-between">
                                                <div className="">Promo Code</div>
                                                <div className="cart-promo">$0.00</div>
                                            </div>
                                        </div>
                                        <div className="w-100 align-self-end pb-2 pt-5">
                                            <div className="cart-item-tab d-flex flex-wrap justify-content-between">
                                                <div className="header-text"><strong>Order Total:</strong></div>
                                                <div className="cart-total header-text"><strong>${fullCartTotal()}</strong></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-none d-lg-block d-xl-nonek">
                                    <div className="pt-4 pb-2 d-flex border-bottom justify-content-between">
                                        <div className="header-text sub-header-style">Promo Code</div>
                                        <div className="input border-0"><span className="material-symbols-outlined">
                                            add
                                        </span></div>
                                    </div>
                                    <div className="py-2 d-flex border-bottom justify-content-between">
                                        <div className="header-text sub-header-style">Delivery Address</div>
                                        <div className="input border-0"><span className="material-symbols-outlined">
                                            add
                                        </span></div>
                                    </div>
                                    </div>
                                    <div className="py-4 d-flex">
                                        <button className="black-btn p-2 ms-auto w-100 header-text" disabled>Check Out</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
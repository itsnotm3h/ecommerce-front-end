import React from "react";
import Navbar from "./Navbar";
import CartItem from "./CartItem";
import {useCart} from "./CartAtom";

export default function Cart() {

    const {cartInfo, getCartTotal} = useCart();

    return (
        <>
            <Navbar type="text-black" />
            <div className="container-fluid p-5 vh-100">
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
                                        <CartItem id={item.product_id} name={item.product_name} category={item.product_category} dimension={item.product_dimension} qty={item.product_quantity} image={item.product_image} price={item.price} series={item.product_series} />
                                    ))}
                                    </>
                                )
                                }
                                <div className="pt-4" id="cart-promocode">
                                    <div className="d-flex flex-wrap border-top border-bottom p-0 py-4 cart-promo-section">
                                        <div className="col-7 col-md-8 col-lg-9 header-style header-text">Promo Code</div>
                                        <div className="col-4 col-md-4 col-lg-3 position-relative"><input type="text" className="cart-promo-input form-control" /></div>
                                    </div>
                                </div>
                                <div className="py-4 cart-delivery-section" id="cart-delivery">
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
                            <div className="col-lg-4 position-relative">
                                <div className="sticky-top">
                                    <div className="cart-summary-tab d-flex flex-wrap border py-2 px-3 w-100">
                                        <div className="w-100">
                                            <div className="header-text header-style pb-2 position-relative">Summary</div>
                                            <div className="cart-item-tab d-flex flex-wrap justify-content-between">
                                                <div className="">Item(s) subtotal</div>
                                                <div className="cart-subtotal">$10.00</div>
                                            </div>
                                            <div className="cart-item-tab d-flex flex-wrap justify-content-between">
                                                <div className="">Delivery Fee</div>
                                                <div className="cart-delivery">$10.00</div>
                                            </div>
                                            <div className="cart-item-tab d-flex flex-wrap justify-content-between">
                                                <div className="">Promo Code</div>
                                                <div className="cart-promo">$100.00</div>
                                            </div>
                                        </div>
                                        <div className="w-100 align-self-end pb-2 pt-5">
                                            <div className="cart-item-tab d-flex flex-wrap justify-content-between">
                                                <div className="header-text"><strong>Order Total:</strong></div>
                                                <div className="cart-total header-text"><strong>$100.00</strong></div>
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
import React from "react";
import Navbar from "./Navbar";

export default function Cart() {
    return (
        <>
            <Navbar type="text-black" />
            <div className="container-fluid p-5 vh-100">
                <div className="container pt-5">
                    <div>
                        <div className="header-text font-700 sectionTitle">Shopping Cart</div>
                        <div className="row pt-4 justify-content-between">
                            <div className="col-lg-8 pb-5">
                                <div className="d-flex flex-wrap w-100 pb-5">
                                    <div className="col-4 col-lg-3">
                                        <div className="cart-product-image"></div>
                                    </div>
                                    <div className="col-8 col-lg-7 py-lg-4 ps-4 position-relative d-flex flex-wrap">
                                        <div className="w-100">
                                            <div className="position-absolute text-black cart-item-delete"><span class="material-symbols-outlined">
                                                delete_forever
                                            </span></div>
                                            <div className="cart-product-name header-text">Product Name</div>
                                            <div className="cart-product-category">Category</div>
                                            <div className="cart-product-dimension">Dimension</div>
                                        </div>
                                        <div className="d-flex flex-wrap align-self-end justify-content-between w-100">
                                            <div className="col-6">
                                                <div className=""> Quantity<br />
                                                    <div className="col-5 d-flex productInfo-button justify-content-between">
                                                        <div className="productInfo-Minus px-2">-</div>
                                                        <div className="productInfo-Quantity">1</div>
                                                        <div className="productInfo-Add px-2">+</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-5 align-self-center text-end">
                                                Subtotal: $10.00
                                            </div>
                                        </div>
                                    </div>



                                </div>

                                <div className="d-flex flex-wrap w-100 pb-4">
                                    <div className="col-4 col-lg-3">
                                        <div className="cart-product-image"></div>
                                    </div>
                                    <div className="col-8 col-lg-7 py-lg-4 ps-4 position-relative d-flex flex-wrap">
                                        <div className="w-100">
                                            <div className="position-absolute text-black cart-item-delete"><span class="material-symbols-outlined">
                                                delete_forever
                                            </span></div>
                                            <div className="cart-product-name header-text">Product Name</div>
                                            <div className="cart-product-category">Category</div>
                                            <div className="cart-product-dimension">Dimension</div>
                                        </div>
                                        <div className="d-flex flex-wrap align-self-end justify-content-between w-100">
                                            <div className="col-6">
                                                <div className=""> Quantity<br />
                                                    <div className="col-5 d-flex productInfo-button justify-content-between">
                                                        <div className="productInfo-Minus px-2">-</div>
                                                        <div className="productInfo-Quantity">1</div>
                                                        <div className="productInfo-Add px-2">+</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-5 align-self-center text-end">
                                                Subtotal: $10.00
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="container p-0"  id="cart-promocode">
                    <div>This is for promocode</div>
                </div>

                <div className="container p-0"  id="cart-address">
                    <div >This is for promocode</div>
                </div>

                            </div>
                            <div className="col-lg-4 position-relative">
                                <div className="cart-summary-tab d-flex flex-wrap border py-2 px-3 w-100">
                                <div className="w-100">
                                    <div className="header-text cart-title pb-2 position-relative">Summary</div>
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
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
import React from "react";
import Navbar from "./Navbar";

export default function Cart() {
    return (
        <>
            <Navbar type="text-black" />
            <div className="container-fluid p-5 vh-100">
                <div className="container h-100 pt-5">
                    <div>
                        <div className="header-text font-700 sectionTitle">Shopping Cart</div>
                        <div className="row">
                            <div className="col-lg-8 border">
                                <div className="d-flex flex-wrap">
                                    <div className="col-lg-3 cart-product-image">
                                        this is the image
                                    </div>
                                    <div className="col-lg-3">
                                        This is the price
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4 border py-2 px-3">
                            <div className="header-text cart-title">Summary</div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
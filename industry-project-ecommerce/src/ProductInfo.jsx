import React from "react";
import Navbar from "./Navbar";

export default function ProductInfo() {
    return (
        <>
            <Navbar type="text-black" />
            <div className="container-fluid p-5 vh-100">
                <div className="container h-100 pt-5">
                    <div className="row productInfo-top justify-content-center">
                        <div className="col-12 col-lg-5 position-relative">
                            <div className="productInfo-photo">
                            </div>
                            <div className="productInfo-description pt-5">
                                <div className="font-700">Product Details</div>
                                <div className="productInfo-writeup">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut lectus rutrum, tincidunt mauris ac, mollis ligula. Nulla facilisi. Etiam auctor eleifend fringilla.                        </div>
                            </div>
                        </div>
                        <div className="col-lg-7 d-flex">
                            <div className="sticky-top my-auto px-lg-5">
                                <div>
                                    <div className="productInfo-category">Catergory</div>
                                    <div className="productInfo-name header-text w-100 sectionTitle font-3rem">Product Name <span class="material-symbols-outlined">
                                        heart_plus
                                    </span></div>
                                    <div className="productInfo-price header-text w-100 sectionTitle">$10.00</div>
                                </div>
                                <div className="pt-5">
                                    <div className="font-700">Dimensions</div>
                                    <div className="productInfo-dimension">Width:xxx;
                                        <div className="productInfo-addToCart pt-5 position-relative">
                                            <div className="col-5 d-flex productInfo-button justify-content-between">
                                                <div className="productInfo-Minus px-2">-</div>
                                                <div className="productInfo-Quantity">1</div>
                                                <div className="productInfo-Add px-2">+</div>
                                            </div>
                                            <div className="prodyctInfo-availablity">In stock</div>

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
import React from "react";
import Navbar from "./Navbar";

export default function ProductInfo(){
    return(
        <>
        <Navbar type="text-black" />
             <div className="container-fluid p-5 vh-100">
             <div className="container h-100 pt-5">
                <div className="row productInfo-top justify-content-center">
                    <div className="col-12 col-lg-5 position-relative">
                        <div className="productInfo-photo">
                        </div>
                        <div>
                            This is the long ass description
                        </div>
                    </div>
                    <div className="col-lg-7 d-flex">
                        <div className="sticky-top my-auto px-5">
                            <div>
                        <div className="productInfo-category">Catergory</div>
                        <div className="productInfo-name header-text w-100 sectionTitle">Product Name</div>
                        <div className="productInfo-price header-text w-100 sectionTitle">$10.00</div>
                        </div>
                        <div className="pt-5">
                           <strong>Dimensions</strong>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
                
                </div>
        </>
    )
}
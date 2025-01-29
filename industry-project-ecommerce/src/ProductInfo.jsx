import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useRoute  } from 'wouter';
import axios from 'axios';




export default function ProductInfo() {

    const [info, setInfo] = useState("");
    const [dimen, setDimension] = useState({});

    const [match, params] = useRoute('/products/:id'); 
    const id = `${params.id}`;

    const display = ()=>{

        let fullString ="";

        // "pd_width":"12.0","pd_depth":"12.0","pd_diameter":null,"pd_circumference":null


        if(dimen.pd_height !=null)
        {
            fullString = fullString +`${dimen.pd_height}cm(H)`
        }
        if(dimen.pd_width !=null)
        {
                fullString = fullString +` x ${dimen.pd_width}cm(W)`
        }
        if(dimen.pd_depth !=null)
        {
            fullString = fullString +` x ${dimen.pd_depth}cm(D)`
        }
        if(dimen.pd_diameter!=null || dimen.pd_circumference!=null)
        {

            if(dimen.pd_diameter!=null)
            {
                 fullString = fullString +`, ${dimen.pd_diameter}cm(Diameter)`

            }
            if(dimen.pd_circumference!=null)
                {
                     fullString = fullString +`, ${dimen.pd_circumference}cm(Diameter)`
    
                }


        }

        return(fullString)
       
    }

    
    useEffect(() => {

        
        if (id) {
            const fetchInfo = async () => {
                try {
                    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products/${params.id}`);
                    setInfo(response.data);
                    setDimension(response.data.dimension[0]); // Assuming there's only one dimension object
                }
                catch (error) {
                    console.error("Error Fetching in frontend: ", error);
                }
            };

            fetchInfo();

            
        }
    }, [id]);


    return (
        <>
            <Navbar type="text-black" />
            <div className="container-fluid p-5 vh-100">
                <div className="container h-100 pt-5">
                    <div className="row d-flex productInfo-top justify-content-center">
                        <div className="col-12 col-lg-5 position-relative">
                            <div className="productInfo-photo" style={{backgroundImage: `url(${info.product_image}`}}>
                            </div>
                            <div className="productInfo-description pt-5">
                                <div className="font-700">Product Details</div>
                                <div className="productInfo-writeup">
                                {info.product_description}                      </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex">
                            <div className="sticky-top my-auto ps-lg-5">
                                <div>
                                    <div className="productInfo-category">{info.product_series}, {info.category_name}</div>
                                    <div className="productInfo-name header-text w-100 sectionTitle font-3rem">{info.product_name}<span class="material-symbols-outlined">
                                        heart_plus
                                    </span></div>
                                    <div className="productInfo-price header-text w-100 sectionTitle">${info.product_price}</div>
                                </div>
                                <div className="pt-5">
                                    <div className="font-700">Dimensions</div>
                                    <div className="productInfo-dimension">
                                        {display()}
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
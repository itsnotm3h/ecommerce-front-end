import React,{useEffect,useState} from "react";
import { Link, useLocation } from 'wouter';


export default function ProductCard (props){

    const [,setLocation] = useLocation();

    const moreInfo = (item) => {

            setLocation("/products/"+item);
      }
      
    return(
        <>
                                        <div className="productItem mb-4 position-relative">
                                            <div className='productPhoto bg-dark-subtle d-flex' style={{backgroundImage: `url(${props.image})`}} onClick={()=>{
                                                moreInfo(props.id)}}>
                                                <div className="productInfo d-flex flex-wrap p-3 position-relative">
                                                    <div className="productInfo-container mt-auto d-flex flex-wrap">
                                                        <div className="w-100 align-self-start">
                                                            <div className="body-text productInfo-type">{props.series},{props.category}</div>
                                                            <div className="header-text productInfo-name">{props.name}</div>
                                                        </div>
                                                        <div className="align-self-end">
                                                        <div className="header-text productInfo-price disable-price">{props.sale}</div>
                                                            <div className="header-text productInfo-price">${props.price}</div>
                                                        </div>
                                                    </div>
                                                    <div className="position-absolute  productInfo-like">
                                                        <div><span className="material-symbols-outlined">
                                                            heart_plus
                                                        </span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
    )
}
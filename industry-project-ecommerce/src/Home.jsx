import React, { useEffect } from "react";
import Navbar from './Navbar';
import Footer from "./Footer";
import { useLocation } from "wouter";
import { useSession } from "./userAtom";

export default function HomePage (){

    const [location] = useLocation();
    

    // const {setPreviousLocation} = useSession();

    
        useEffect(()=>{
    
            // setPreviousLocation(location);
            return()=>{}
        },[])
     

    return(
        <>
        <Navbar type="text-white" />
        <div className="container-fluid mainVisual m-auto p-5 vh-100">
            <div className="container h-100">
            <div className="d-flex align-items-center h-100 p-5">
                <div className="ps-2">
                <div className="header-text main-text-size display-span">Series Name</div>
                <div className="sub-text sub-text-size">This is the text about the products</div>
                </div>
            </div>
            </div>
        </div>
        <section className="p-5">
            <div className="d-flex justify-content-center main-jfy-container p-5 flex-wrap">
            <div className="header-text text-center sectionTitle w-100 text-end pb-4">Just for you</div>
                <div className="col-12 col-lg-3 main-jfy-item short m-auto jfy-2"></div>
                <div className="col-12 col-lg-5 main-jfy-item long my-auto jfy-1"><div className="jfy-hover header-text productName text-center align-items-center h-100 d-flex w-100"><div className="m-auto text-center">Rustic Collection</div></div></div>
                <div className="col-12 col-lg-3 main-jfy-item short m-auto jfy-3"></div>
            </div>
        </section>
        </>
    )
}
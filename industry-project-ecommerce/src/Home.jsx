import React from "react";
import Navbar from './Navbar';
import { Router } from "wouter";



export default function HomePage (){
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
        <section className="vh-100 p-5">
            <div className="d-flex justify-content-center main-jfy-container px-5 flex-wrap">
            <div className="header-text text-center sectionTitle w-100 text-end">Just for you</div>
                <div className="col-12 col-lg-3 main-jfy-item short m-auto jfy-2"></div>
                <div className="col-12 col-lg-4 main-jfy-item long my-auto jfy-1"><div className="jfy-hover header-text productName text-center m-auto h-100">Rustic Collection</div></div>
                <div className="col-12 col-lg-3 main-jfy-item short m-auto jfy-3"></div>
            </div>
        </section>
        <section className="vh-100 p-5">
            <div>NExt Section</div>
            </section>
        </>
    )
}
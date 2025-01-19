import React from "react";
import Navbar from './Navbar';
import { Router } from "wouter";



export default function HomePage (){
    return(
        <>
        <Navbar type="text-white" />
        <div className="container-fluid mainVisual m-auto p-5 vh-100">
            <div className="container h-100">
            <div className="d-flex align-items-center h-100">
                <div>
                <div className="header-text main-text-size p-0 display-span">Series Name</div>
                <div className="sub-text sub-text-size p-0">Series Name</div>
                </div>
            </div>
            </div>
        </div>
        <section>
            <div className="container p-5 vh-100">
                <h1 className="header-text text-center">Just for you</h1>
                <div className="d-flex text-center flex-wrap">
                    <div className="col-3 h-100">1</div>
                    <div className="col-3">2</div>
                    <div className="col-3">3</div>
                </div>
            </div>
        </section>
        </>
    )
}
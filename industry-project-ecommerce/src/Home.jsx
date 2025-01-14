import React from "react";
import Navbar from './navbar';
import { Router } from "wouter";

export default function HomePage (){
    return(
        <>
        <Navbar/>
        <h1>This is home page</h1>
        </>
    )
}
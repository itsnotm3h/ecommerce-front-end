import React from "react";
import Navbar from "./Navbar";
import {Formik, Field, Form} from 'formik';

export default function Login() {

    
    return (
        <>
            <Navbar type="text-black" />
            <div className="container-fluid p-5 vh-100">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-4">                        <div className="header-text font-700 sectionTitle">Login</div>
                        </div>
                        <div className="col-8">
                            <form></form>
                            </div>
                    </div>
                </div>
            </div>

        </>

    );
}
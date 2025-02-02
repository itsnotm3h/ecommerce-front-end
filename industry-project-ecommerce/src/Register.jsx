import React from "react";
import Navbar from "./Navbar";
import { Formik, Field, Form } from 'formik';


export default function Register() {

    const intitalValues = {

    }



    return (
        <>
            <Navbar type="text-black" />
            <div className="container-fluid p-5 vh-100">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-5">
                            <div className="header-text font-700 sectionTitle">Register</div>
                        </div>
                        <div className="col-sm-12 col-md-7 mt-md-1 mt-sm-4">
                            <div className="row gy-4 gx-3 pt-3">
                                <div className="col-12 col-sm-6">
                                    <label className="w-100">First Name</label>
                                    <input className="input w-100"></input>
                                </div>
                                <div className="col-12 col-sm-6"><label className="w-100">Last Name</label>
                                    <input className="input w-100"></input>
                                </div>
                                <div className="col-12">
                                    <label className="w-100">Email</label>
                                    <input className="input w-100"></input>
                                </div>
                                <div className="col-12"><label className="w-100">Password</label>
                                    <input className="input w-100"></input>
                                </div>
                                <div className="col-12">
                                    <label className="w-100">Birthday</label>
                                    <div className="row gx-3">
                                        <div className="col-4">
                                        <select className="form-select" aria-label="Default select example">
                                                <option selected>Day</option>
                                                <option value="01">01</option>


                                            </select>
                                        </div>
                                        <div className="col-4">
                                        <select className="form-select" aria-label="Default select example">
                                                <option selected>Month</option>
                                                <option value="01">January</option>
                                            </select>
                                        </div>
                                        <div className="col-4">
                                        <select className="form-select" aria-label="Default select example">
                                                <option selected>Year</option>
                                                <option value="01">January</option>
                                            </select>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex w-100">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" for="flexCheckDefault">Send me exclusive newsletter and offers.</label>
                                        </div>
                                    </div>
                                    <div className="button w-100 text-center bg-dark text-white p-1 mt-4">Submit</div>
                                </div>
                                {/* 
                                <div className="col-12 col-sm-6">
                                    <label className="w-100">Interests</label>
                                    <div className="d-flex flex-wrap">
                                        <div>Vases</div><div>Bowl</div>
                                    </div>
                                </div> */}

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}
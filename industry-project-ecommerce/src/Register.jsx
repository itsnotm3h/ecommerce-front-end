import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import {useLocation} from 'wouter';
import axios from "axios";


export default function Register() {

    const [isSelect, setSelect] = useState(false);
    const [, setLocation] = useLocation();


    const dateMonth = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
        dob_day: '',
        dob_month: '',
        dob_year: '',
        marketing_preference: ''
    }

    const validationSchema = Yup.object({
        first_name: Yup.string().required('Required'),
        last_name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required("Required").min(8, "Must be at least 8 characters")
            .matches(/[a-z]/, "Must contain lowercase")
            .matches(/[A-Z]/, "Must contain uppercase.")
            .matches(/\d/, "Must contain a number")
            .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must contain at least one symbol."),
        confirm_password: Yup.string().oneOf([Yup.ref("password"), null], "Does not match").required("Required"),
        dob_day: Yup.string().required('Required'),
        dob_month: Yup.string().required('Required'),
        dob_year: Yup.string().required('Required'),
    })

    const handleSubmit = async (values, formikHelpers) => {
        try{
            const response =  await axios.post(`${import.meta.env.VITE_API_URL}/api/users/register`, values);
            console.log("Registration successful:", response.data);
            setLocation("/");

        } catch (error) {
            console.error("Registration failed: ", error.response?.data || error.message);

        } finally {
            formikHelpers.setSubmitting(false);
            window.location.reload();

        }
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
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {(formik) => (
                                    <Form>
                                        <div className="row gy-4 gx-3 pt-3">
                                            <div className="col-12 col-sm-6">
                                                <label className="w-100">First Name</label>
                                                <Field className={`input w-100 form-control ${formik.errors.first_name && formik.touched.first_name ? "invalid" : ""}`} type="text" id="first_name" name="first_name"
                                                />
                                                {formik.errors.first_name && formik.touched.first_name ? <small className="text-danger error">{formik.errors.first_name}</small> : null}
                                            </div>
                                            <div className="col-12 col-sm-6"><label className="w-100">Last Name</label>
                                                <Field className={`input w-100 form-control ${formik.errors.last_name && formik.touched.last_name ? "invalid" : ""}`} type="text" id="last_name" name="last_name" />
                                                {formik.errors.last_name && formik.touched.last_name ? <small className="text-danger error">{formik.errors.last_name}</small> : null}
                                            </div>
                                            <div className="col-12">
                                                <label className="w-100">Email</label>
                                                <Field className={`input w-100 form-control ${formik.errors.email && formik.touched.email ? "invalid" : ""}`} type="email" id="email" name="email" />
                                                {formik.errors.email && formik.touched.email ? <small className="text-danger error">{formik.errors.email}</small> : null}
                                            </div>
                                            <div className="col-12 col-sm-6"><label className="w-100">Password</label>
                                                <Field className={`input w-100 form-control ${formik.errors.password && formik.touched.password ? "invalid" : ""}`} type="password" id="password" name="password" />
                                                {formik.errors.password && formik.touched.password ? <small className="text-danger error">{formik.errors.password}</small> : null}
                                            </div>
                                            <div className="col-12 col-sm-6"><label className="w-100">Confirm Password</label>
                                                <Field className={`input w-100 form-control ${formik.errors.confirm_password && formik.touched.confirm_password ? "invalid" : ""}`} type="password" id="confirm_password" name="confirm_password" />
                                                {formik.errors.confirm_password && formik.touched.confirm_password ? <small className="text-danger error">{formik.errors.confirm_password}</small> : null}
                                            </div>
                                            <div className="col-12">
                                                <label className="w-100">Birthday</label>
                                                <div className="row gx-3">
                                                    <div className="col-4">
                                                        <Field className={`form-select ${formik.errors.dob_day && formik.touched.dob_day ? "invalid" : ""}`} as="select" id="dob_day" name="dob_day">
                                                            <option value="">Day</option>
                                                            {[...Array(31)].map((item, index) => {
                                                                const day = index + 1;
                                                                return <option value={day}>{day}</option>
                                                            }
                                                            )}


                                                        </Field>
                                                        {formik.errors.dob_day && formik.touched.dob_day ? <small className="text-danger error">{formik.errors.dob_day}</small> : null}
                                                    </div>
                                                    <div className="col-4">
                                                        <Field className={`form-select ${formik.errors.dob_month && formik.touched.dob_month ? "invalid" : ""}`} as="select" id="dob_month" name="dob_month">
                                                            <option value="">Month</option>
                                                            {/* <option value="01">January</option> */}
                                                            {dateMonth.map((item, index) => (
                                                                <option value={index + 1}>{item}</option>
                                                            ))}
                                                        </Field>
                                                        {formik.errors.dob_month && formik.touched.dob_month ? <small className="text-danger error">{formik.errors.dob_month}</small> : null}
                                                    </div>
                                                    <div className="col-4">
                                                        <Field className={`form-select ${formik.errors.dob_year && formik.touched.dob_year ? "invalid" : ""}`} as="select" id="dob_year" name="dob_year">
                                                            <option value="">Year</option>
                                                            {[...Array(90)].map((item, index) => {
                                                                const year = new Date().getFullYear() - index - 1;
                                                                return <option value={year}>{year}</option>
                                                            }
                                                            )}
                                                        </Field>
                                                        {formik.errors.dob_year && formik.touched.dob_year ? <small className="text-danger error">{formik.errors.dob_year}</small> : null}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-flex w-100">
                                                    <div className="form-check">
                                                        <Field className="form-check-input" type="checkbox" value="yes" id="marketing_preference" name="marketing_preference" onClick={(e) => setSelect(e.target.checked)} checked={isSelect} />

                                                        <label className="form-check-label" for="flexCheckDefault">Send me exclusive newsletter and offers.</label>

                                                    </div>
                                                </div>
                                                <button className="button w-100 text-center bg-dark text-white p-1 mt-4" type="submit"
                                                    disabled={formik.isSubmitting}
                                                >Submit</button>
                                            </div>
                                            {/* 
                                <div className="col-12 col-sm-6">
                                    <label className="w-100">Interests</label>
                                    <div className="d-flex flex-wrap">
                                        <div>Vases</div><div>Bowl</div>
                                    </div>
                                </div> */}

                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}
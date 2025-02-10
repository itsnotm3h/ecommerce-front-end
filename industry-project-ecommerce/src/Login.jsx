import React from "react";
import Navbar from "./Navbar";
import {Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import {useLocation} from 'wouter';
import axios from "axios";
import {useSession} from "./userAtom";
import { useCart } from "./CartAtom";

export default function Login() {
    
    
    const [, setLocation] = useLocation();
    const {setStatus} = useSession();
    const {fetchCart,getCart} = useCart();
    


    const initialValues = {
        email: '',
        password: ''
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required("Required").min(8, "Must be at least 8 characters")
    })

    const handleSubmit = async (values, formikHelpers) => {
        try{
            const response =  await axios.post(`${import.meta.env.VITE_API_URL}/api/users/login`, values,{withCredentials:true});
            console.log(response.data);
            setStatus(response.data.status);
            fetchCart();
            setLocation("/");
        } catch (error) {
            console.error("Registration failed: ", error.response?.data || error.message);

        } finally {
            formikHelpers.setSubmitting(false);
        }
    }


    
    return (
        <>
            <Navbar type="text-black" />
            <div className="container-fluid p-5 vh-100">
                <div className="container pt-5">
                    <div className="row">
                       <div className="col-sm-12 col-md-5">
                                                   <div className="header-text font-700 sectionTitle">Login</div>
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
                                                                   <div className="col-12">
                                                                       <label className="w-100">Username</label>
                                                                       <Field className={`input w-100 form-control ${formik.errors.email && formik.touched.email ? "invalid" : ""}`} type="email" id="email" name="email"
                                                                       />
                                                                       {formik.errors.email && formik.touched.email ? <small className="text-danger error">{formik.errors.email}</small> : null}
                                                                   </div>
                                                                   <div className="col-12"><label className="w-100">Password</label>
                                                                       <Field className={`input w-100 form-control ${formik.errors.password && formik.touched.password ? "invalid" : ""}`} type="password" id="password" name="password" />
                                                                       {formik.errors.password && formik.touched.password ? <small className="text-danger error">{formik.errors.password}</small> : null}
                                                                   </div>
                                                                   <div className="col-12">                                                                       <button className="button w-100 text-center bg-dark text-white p-1 mt-4" type="submit"
                                                                           disabled={formik.isSubmitting}
                                                                       >Submit</button>
                                                                       </div>

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
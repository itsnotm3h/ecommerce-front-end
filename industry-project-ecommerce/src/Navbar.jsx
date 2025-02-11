import React, { useState, useEffect } from "react";
import { Route, Switch, Link, useLocation } from 'wouter';
import { useSession } from "./userAtom";
import axios from "axios";



export default function Navbar(props) {

    const [isNavbar, setNavbar] = useState(false);
    const {statusInfo,getStatus,setStatus,setPreviousLocation,prevLocation} = useSession();
    const [location] = useLocation();


    const hamburgerToggle = () => {
        setNavbar(!isNavbar);
    }

    const logOut = async ()=>{
        try{
            const response =  await axios.post(`${import.meta.env.VITE_API_URL}/api/users/logout`,{},{
                withCredentials:true,
                headers: {
                'ngrok-skip-browser-warning': 'true'  // Skip ngrok browser warning
              }});
            console.log("loggedout:", response.data);
            setStatus("");
        } catch (error) {
            console.error("logout failed: ", error.response?.data || error.message);
        } finally{
            // window.location.reload();
        }
    }

    useEffect(() => {
        
        const checkNavbar = () => {
            setNavbar(window.innerWidth >= 992);
        }

        checkNavbar();

        window.addEventListener('resize', checkNavbar);

        return () => window.removeEventListener('resize', checkNavbar);

    }, [statusInfo])




    return (
        <>
            <div className={`container-fluid postion-relative p-0 position-absolute`} >
                <nav className="navbar navbar-expand-lg">
                    <div className="container ">
                        <Link className="navbar-brand" href="/">LogoHere</Link >
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={hamburgerToggle}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${isNavbar ? "show" : ""}`} id="navbarNav">
                            <ul className={"navbar-nav ms-auto body-text" + props.type}>
                                <li className="nav-item">
                                    <Link className={`nav-link ` + props.type} href="/products">Products</Link >
                                </li>
                               

                                    {statusInfo == "" ? (
                                        <>
                                         <li className="nav-item">
                                            <div className={`nav-link ` + props.type}><Link className={`link ` + props.type} href="/register">Register</Link>/<Link className={`link ` + props.type} href="/login">Login</Link></div >
                                            </li>
                                        </>
                                    ) : (<>
                                                                            <li>
                                        <div className={`nav-link ` + props.type}><Link className={`link ` + props.type} onClick={()=>{
                                            logOut()
                                        }}>Logout</Link></div >
                                        </li>
                                                                             <li className="nav-item">
                                        <Link className={`nav-link ` + props.type}><span class="material-symbols-outlined">
                                            account_circle
                                        </span></Link>
                                        </li>
                              
                                    </>
                                    )

                                    }

                                {/* <li className="nav-item">

                                    <Link className={`nav-link ` + props.type} href="/favourite"><span class="material-symbols-outlined">
                                        favorite
                                    </span></Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className={`nav-link ` + props.type} href="/cart"><span class="material-symbols-outlined">
                                        shopping_cart
                                    </span></Link >
                                </li>



                                {/* {isthereJWT(checkJWT) ? (
                                <>
                                    <li className="nav-item">
                                        <Link className={isActiveLink("/logout")} onClick={() => { logoutBtn() }}>Logout</Link >
                                    </li>
                                </>
                            ) : (<>
                                <li className="nav-item">
                                    <Link className={isActiveLink("/register")} href="/register">Register</Link >
                                </li>
                                <li className="nav-item">
                                    <Link className={isActiveLink("/login")} href="/login">Login</Link >
                                </li>
                            </>
                            )
                            } */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>


        </>
    )
}
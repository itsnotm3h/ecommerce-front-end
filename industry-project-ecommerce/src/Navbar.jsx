import React from "react";
import {Route, Switch,Link} from 'wouter';


export default function Navbar() {
    return (
        <>
            <div className="container-fluid postion-relative p-0">
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <div className="container ">
                    <Link className="navbar-brand" href="#">E-Shop</Link >
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={clickButton}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isNBopen ? "show" : ""}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className={`nav-link ${location == "/" ? "active" : ""}`} aria-current="page" href="/">Home</Link >
                            </li>
                            <li className="nav-item">
                                <Link className={isActiveLink("/products")} href="/products" onClick={()=>{setTag("/")}}>Products</Link >
                            </li>
                            <li className="nav-item">
                                <Link className={isActiveLink("/cart")} href="/cart">Cart</Link >
                            </li>

                            {isthereJWT(checkJWT) ? (
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
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>


        </>
    )
}
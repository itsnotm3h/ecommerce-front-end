import React from "react";
import {Route, Switch,Link} from 'wouter';


export default function Navbar(props) {
    return (
        <>
            <div className={`container-fluid postion-relative p-0 position-absolute`} >
            <nav className="navbar navbar-expand-lg">
                <div className="container ">
                    <Link className="navbar-brand" href="#">LogoHere</Link >
                    <button
                        className="navbar-toggler"
                        type="button"
                        // onClick={clickButton}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse `} id="navbarNav">
                        <ul className={"navbar-nav ms-auto body-text" + props.type}>
                            <li className="nav-item">
                                <Link className={`nav-link`} aria-current="page" href="/">Home</Link >
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/products">Products</Link >
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/cart">Cart</Link >
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
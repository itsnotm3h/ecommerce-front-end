import React from "react";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">E-Shop</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        // onClick={clickButton}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <div className={`collapse navbar-collapse ${isNBopen ? "show" : ""}`} id="navbarNav"> */}
                    <div className={`collapse navbar-collapse`} id="navbarNav">

                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className={`nav-link`} aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='' href="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='' href="/register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='' href="/cart">Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}
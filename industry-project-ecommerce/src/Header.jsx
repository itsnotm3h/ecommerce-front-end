import React from "react";

export default function Header(props) {
    return (
        <>
            <header className="bg-primary text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4">{props.title}</h1>
                    <p className="lead">Discover amazing products at unbeatable prices!</p>
                    <a className="btn btn-light btn-lg">Shop Now</a>
                </div>
            </header>

        </>
    )
}
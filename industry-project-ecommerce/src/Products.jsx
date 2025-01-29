import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import axios from 'axios';


export default function Products() {

    const [product, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
                setProducts(response.data);
                
            }
            catch (error) {
                console.error("Error Fetching in frontend: ", error);
            }
        };

        fetchProducts();
    }, []);




    return (
        <>
            <Navbar type="text-black" />
            <div className="container-fluid p-5 vh-100">
                <div className="container h-100 pt-5">
                    <div className="row">
                        <div className="col-lg-3 pe-5">
                            <div className="sticky-top">
                                <div className="header-text sectionTitle">Products</div>
                                <div className="search-box border-1 border-dark ps-1 d-flex">
                                    <span>Search..</span><span className="material-symbols-outlined ms-auto">
                                        search
                                    </span>
                                </div>

                                <div className="fliter-tab pt-5">
                                    <div className="accordion" id="accordionPanelsStayOpenExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                    <div>Collection </div>
                                                </button>
                                            </h2>
                                            {/* <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body">
      </div>
    </div> */}
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                    <div>Type </div>
                                                </button>
                                            </h2>
                                            {/* <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body">
      </div>
    </div> */}
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                    <div>Price Range </div>
                                                </button>
                                            </h2>
                                            {/* <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body">
      </div>
    </div> */}
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                    <div>Sort </div>
                                                </button>
                                            </h2>
                                            {/* <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body">
      </div>
    </div> */}
                                        </div>
                                    </div>

                                </div>



                            </div>
                        </div>
                        <div className=" col-lg-8 ms-auto">
                            <div className="product-item-tab container p-0">
                                <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">

                                    {
                                        product.map(product => (
                                            <div key={product.product_id} className="col">
                                            <ProductCard
                                            id = {product.product_id} 
                                            image = {product.product_image}
                                            price = {product.product_price}
                                            category = {product.category_name}
                                            series = {product.product_series}
                                            name = {product.product_name}


                                            />
                                            </div>
                                        ))
                                    }







                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}
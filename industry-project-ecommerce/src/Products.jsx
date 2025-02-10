import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import axios from 'axios';
import { useSession } from "./userAtom";
import { useLocation } from "wouter";



export default function Products() {

    const [location] = useLocation();
    const { setPreviousLocation } = useSession();
    const [selectCollection, unselectCollection] = useState(false);
    const [selectType, unselectType] = useState(false);

    const [search, setSearch] = useState([]);





    const [product, setProducts] = useState([]);
    //   const {statusInfo,getStatus,initSession} = useSession;


    const selectTab = (item)=>{

        if(item == "collection")unselectCollection(!selectCollection)
        if(item == "type")unselectType(!selectType)
    }

    const fliterQuery = (item,key)=>{



      


        console.log(item,key);

    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products/${search}`);
                setProducts(response.data);

            }
            catch (error) {
                console.error("Error Fetching in frontend: ", error);
            }
        };

        fetchProducts();
        // setPreviousLocation(location);


    }, []);




    return (
        <>
            <Navbar type="text-black" />
            <div className="container-fluid p-5">
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
                                                <button className={`accordion-button ${!selectCollection ? "" : "collapsed"}`} type="button" 
                                                onClick={() => {selectTab("collection")}} >
                                                    <div>Collection </div>

                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseOne" className={`accordion-collapse collapse  ${!selectCollection ? "" : "show"}`}>
                                                <div className="accordion-body">
                                                    {[...new Set(product.flatMap(p => p.product_series))].map((series, index) => (
                                                        <p key={index} className="fliterLink" onClick={()=>{fliterQuery(series,"product_series")

                                                        }}>{series}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className={`accordion-button ${!selectType ? "" : "collapsed"}`} type="button" onClick={() => {selectTab("type")}}>
                                                    <div>Type</div>
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseOne" className={`accordion-collapse collapse  ${!selectType ? "" : "show"}`}>
      <div className="accordion-body">
      {[...new Set(product.flatMap(p => p.category_name))].map((type, index) => (
                                                        <p key={index} className="fliterLink">{type}</p>
                                                    ))}
      </div>
    </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button">
                                                    <div>Price Range</div>
                                                </button>
                                            </h2>
                                            {/* <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body">
      </div>
    </div> */}
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse">
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
                                                    id={product.product_id}
                                                    image={product.product_image}
                                                    price={product.product_price}
                                                    category={product.category_name}
                                                    series={product.product_series}
                                                    name={product.product_name}
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
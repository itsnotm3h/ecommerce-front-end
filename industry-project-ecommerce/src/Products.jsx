import React from "react";
import Navbar from "./Navbar";

export default function Products() {
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
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
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

                                    <div className="col">
                                        <div className="productItem mb-4 position-relative">
                                            <div className='productPhoto w-100 bg-dark-subtle test-bg'></div>

                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="productItem mb-4 position-relative">
                                            <div className='productPhoto bg-dark-subtle test-bg d-flex'>
                                                <div className="productInfo d-flex flex-wrap p-3">
                                                    <div className="productInfo-container mt-auto d-flex flex-wrap">
                                                        <div className="w-100 align-self-start">
                                                            <div className="body-text productInfo-type">Type, type2</div>
                                                            <div className="header-text productInfo-name">Product Name</div>
                                                        </div>
                                                        <div className="align-self-end">
                                                            <div className="header-text productInfo-price">$9.00</div>
                                                            <div className="header-text productInfo-price disable-price">$9.00</div>
                                                        </div>
                                                    </div>
                                                    <div className="position-absolute icon-tab">
                                                        <div>Icon</div>
                                                        <div>Icon</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="productItem mb-4 position-relative">

                                            <div className='productPhoto w-100 bg-dark-subtle'>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="productItem mb-4 position-relative">

                                            <div className='productPhoto w-100 bg-dark-subtle'>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col">
                                        <div className="productItem mb-4 position-relative">

                                            <div className='productPhoto w-100 bg-dark-subtle'>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col">
                                        <div className="productItem mb-4 position-relative">

                                            <div className='productPhoto w-100 bg-dark-subtle'>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col">
                                        <div className="productItem mb-4 position-relative">

                                            <div className='productPhoto w-100 bg-dark-subtle'>
                                            </div>
                                        </div>
                                    </div>


                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}
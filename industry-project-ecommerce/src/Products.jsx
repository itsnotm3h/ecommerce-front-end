import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import axios from 'axios';
import { useLocation } from "wouter";
import Immutable from "seamless-immutable";



export default function Products() {

    const [location] = useLocation();
    // const { setPreviousLocation } = useSession();
    const [selectCollection, unselectCollection] = useState(false);
    const [selectType, unselectType] = useState(false);
    const updateSearch = Immutable([]);
    const [search, setSearch] = useState(updateSearch);

    const [product, setProducts] = useState([]);
    const [priceRange, setPriceRange] = useState([]);



    const selectTab = (item) => {

        if (item == "collection") unselectCollection(!selectCollection)
        if (item == "type") unselectType(!selectType)
    }


    const filterQuery = (query) => {

        let {value,checked,name} = query;

        if(name == "price_range")
        {
            value = priceRange[value];
        }
    

        setSearch((prevValue) => {

            // check if the value and type exist

            const getIndex = prevValue.findIndex((item) => item.hasOwnProperty(name));



            if(getIndex !== -1)
            {                 

                if(checked)
                {
                    return prevValue.setIn([getIndex,name],prevValue[getIndex][name].concat(value));

                }
                else {

                const updatedValues = prevValue[getIndex][name].filter((item) => item !== value);
                if(updatedValues.length > 0)
                {
                    return prevValue.setIn([getIndex,name],updatedValues)
                }
                else{
                    return prevValue.filter((_, index) => index !== getIndex);
                }

                }
                
            }
            else{

                return prevValue.concat({[name]:[value]})

            }

         


        

    
        });
    }

    const calculateRange = (currentItem) => {


        let min = Infinity, max = -Infinity;

        for (let item of currentItem) {
            let price = Number(item.product_price);
            if (price < min) min = price;
            if (price > max) max = price;
        }

        if (min != null && max != null) {

            let start = 0;
            let end = min;
            let divider = Math.floor((max - min) / 5);
            let range = [];

            for (let i = 1; i < 5; i++) {
                start = end;
                end = start + (i * divider);

                let startVal = start.toFixed(2);
                let endVal = end.toFixed(2);

                if (end > max) {

                    let endVal = max.toFixed(2);
                    range.push({ "min":startVal, "max":endVal});
                    setPriceRange(range)
                    return range;
                }


                range.push({ "min":startVal, "max":endVal});

            }
        }
    }


    useEffect(()=>{
        console.log(search)
    },[search])

    useEffect(() => {
        const fetchProducts = async () => {
            try {


                // need to change the url if there is search if not empty. 
                const response = search.length === 0 ? 
                (await axios.get(`${import.meta.env.VITE_API_URL}/api/products/`, {
                    withCredentials: true,
                    headers: {
                        'ngrok-skip-browser-warning': 'true'  // Skip ngrok browser warning
                    }
                })):
                (await axios.post(`${import.meta.env.VITE_API_URL}/api/products/filter`,{search},{
                    withCredentials: true,
                    headers: {
                        'ngrok-skip-browser-warning': 'true'  // Skip ngrok browser warning
                    }
                }));
                
            
                setProducts(response.data);
                calculateRange(response.data);
            }
            catch (error) {
                console.error("Error Fetching in frontend: ", error);
            }
        };

        fetchProducts();
        // setPreviousLocation(location);


    }, [search]);




    return (
        <>
            <Navbar type="text-black" />
            <div className="container-fluid p-5">
                <div className="container h-100 pt-5">
                    <div className="row">
                        <div className="col-lg-3 pe-5">
                            <div className="sticky-top">
                                <div className="header-text sectionTitle font-700">Products</div>
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
                                                    onClick={() => { selectTab("collection") }} >
                                                    <div>Collection </div>

                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseOne" className={`accordion-collapse collapse  ${!selectCollection ? "" : "show"}`}>
                                                <div className="accordion-body">
                                                    {[...new Set(product.flatMap(p => p.product_series))].map((series, index) => (
                                                        // <p key={index} className="fliterLink" onClick={() => {
                                                        //     fliterQuery(series, "product_series")

                                                        // }}>{series}</p>


                                                        <div className="form-check fliterLink" key={index}>
                                                            <input className="form-check-input" type="checkbox" name="collection" value={series}  onClick={(e) => filterQuery(e.target)} />
                                                            <label className="form-check-label" >
                                                            {series}
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className={`accordion-button ${!selectType ? "" : "collapsed"}`} type="button" onClick={() => { selectTab("type") }}>
                                                    <div>Type</div>
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseOne" className={`accordion-collapse collapse  ${!selectType ? "" : "show"}`}>
                                                <div className="accordion-body">
                                                    {[...new Set(product.flatMap(p => p.category_name))].map((type, index) => (
                                                        // <p key={index} className="fliterLink">{type}</p>
                                                        
                                                        <div className="form-check fliterLink" key={index}>
                                                            <input className="form-check-input" type="checkbox" name="category_name" value={type}  onClick={(e) => filterQuery(e.target)} />
                                                            <label className="form-check-label" >
                                                            {type}
                                                            </label>
                                                        </div>
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
                                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                                <div className="accordion-body">
                                                    <div className="w-100 position-relative">
                                                        {priceRange.map((item, index) => (
                                                            // <div key={index} className="fliterLink">${item.start} - ${item.end}</div>
                                                            <div className="form-check fliterLink" key={index}>
                                                            <input className="form-check-input" type="checkbox" name="price_range" value={index} onClick={(e) => filterQuery(e.target)} />
                                                            <label className="form-check-label" >
                                                            ${item.min} - ${item.max}
                                                            </label>
                                                        </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse">
                                                    <div>Sort </div>
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                                <div className="accordion-body">
                                                <div className="form-check fliterLink">
                                                            <input className="form-check-input " type="checkbox" name="price_range" value=""  />
                                                            <label className="form-check-label" >
                                                           </label>
                                                        </div>

                                                </div>
                                            </div>
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
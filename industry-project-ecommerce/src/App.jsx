import React, { useEffect,useState } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import Home from './Home';
import ProductInfo from './ProductInfo';
import Products from './Products';
import Cart from './Cart';
import Login from './Login';
import Register from './Register';
import { useSession } from "./userAtom";
import axios from "axios";



export default function App() {

  const location = useLocation();
  const {statusInfo,getStatus} = useSession();

  useEffect(()=>{
    const initSession = async ()=>{
      const response =  await axios.post(`${import.meta.env.VITE_API_URL}/session/init`,{},{
        withCredentials:true,
        headers: {
        'ngrok-skip-browser-warning': 'true'  // Skip ngrok browser warning
      }})
      .then(
        // response=>console.log(response.data)
      )
      .catch(error => console.error(error));
    };



    initSession();
    getStatus();

  },[])

  // exact path="/products"

  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/products/:id" component={ProductInfo} />
        <Route path="/cart" component={Cart}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        {/* <Route path="/admin-dashboard" component={Dashboard}/> */}
      </Switch>
    </>
  )
};
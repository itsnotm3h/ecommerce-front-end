import React, { useEffect } from 'react';
import { Route, Switch } from 'wouter';
import Home from './Home';
import ProductInfo from './ProductInfo';
import Products from './Products';
import Cart from './Cart';
import Footer from './Footer';
import axios from 'axios';


export default function App() {

  useEffect(()=>{
    const initSession = async ()=>{
      try{
        const response =  await axios.post(`${import.meta.env.VITE_API_URL}/session/init`,{},{withCredentials:true});
        console.log(response.data);

      }
      catch (error)
      {
        console.error('Error initializing session:', error);
      }
    };

    initSession();
  },[]);
  

  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/products/:id" component={ProductInfo} />
        <Route path="/products" component={Products} />
        <Route path="/cart" component={Cart}/>
        {/* <Route path="/register" component={Registration}/> */}
        {/* <Route path="/login" component={Login}/> */}
        {/* <Route path="/admin-dashboard" component={Dashboard}/> */}
      </Switch>
    </>
  )
};
import React from 'react';
import { Route, Switch } from 'wouter';
import Home from './Home';
import ProductInfo from './ProductInfo';
import Products from './Products';
import Cart from './Cart';
import Footer from './Footer';

export default function App() {
  

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
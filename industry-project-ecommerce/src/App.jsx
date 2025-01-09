import React from  'react';
import {Route, Switch} from 'wouter';
import Home from './Home';
import ProductInfo from './ProductInfo';
import Products from './Products';
import Header from './header';


export default function App (){

  return(
    <>
    <Header />
    <Switch>
    <Route path="/" component={Home}/>
    <Route path="/productInfo" component={ProductInfo}/>
    <Route path="/products" component={Products}/>
    {/* <Route path="/cart" component={Cart}/> */}
    {/* <Route path="/register" component={Registration}/> */}
    {/* <Route path="/login" component={Login}/> */}
    {/* <Route path="/admin-dashboard" component={Dashboard}/> */}
    </Switch>
    </>
  )
};
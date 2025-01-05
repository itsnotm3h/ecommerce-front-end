import React from  'react';
import {Route, Switch} from 'wouter';
// import './index.css';
export default function App (){

  return(
    <>
    <h1>Hello</h1>


    <Switch>
    <Route path="/" component={HomePage}/>
    </Switch>
    </>
  )
};
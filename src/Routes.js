import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './component/home/Home';
import Login from './component/login/Login';
import Signup from './component/signup/Signup';
import base from './component/base';


function Routes(){
    return(
        <>
         
            <Switch>
           
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/signup" component={Signup}></Route>
                <Route exact path="/base" component={base}></Route>
              
            </Switch>
        </> 
    )
}



export default Routes
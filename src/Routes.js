import React from 'react';
import { Switch, Route } from 'react-router';
import AdminHome from './component/admin/AdminHome';
import AdminNavbar from './component/admin/AdminNavbar';
import CompanyStepFour from './component/admin/company-form/CompanyStepFour';
import CompanyStepOne from './component/admin/company-form/CompanyStepOne';
import CompanyStepThree from './component/admin/company-form/CompanyStepThree';
import CompanyStepTwo from './component/admin/company-form/CompanyStepTwo';
import EmailConfirmation from './component/admin/company-form/EmailConfirmaton';
import Distribution from './component/admin/Distribution';
import Marketing from './component/admin/Marketing';
import Preview from './component/admin/Preview';
import ProductDetail from './component/admin/ProductDetail';
import ProductForm from './component/admin/ProductForm';
import Home from './component/home/Home';
import Login from './component/login/Login';
import Signup from './component/signup/Signup';
import base from './component/base';
import SignupModal from './component/element/SignupModal';



function Routes(){
    return(
        <>
         
            <Switch>
           
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/signup" component={Signup}></Route>
                <Route exact path="/base" component={base}></Route>
                <Route exact path="/signupmodal" component={SignupModal}></Route>

                {/* Admin Routes */}
                <Route exact path="/company_form_one" component={CompanyStepOne}></Route>
                <Route exact path="/company_form_two" component={CompanyStepTwo}></Route>
                <Route exact path="/company_form_three" component={CompanyStepThree}></Route>
                <Route exact path="/company_form_Four" component={CompanyStepFour}></Route>
                <Route exact path="/email_confirmation" component={EmailConfirmation}></Route>
                <Route exact path="/products_detail" component={ProductDetail}></Route>
                <Route exact path="/admin_home" component={AdminHome}></Route>
                <Route exact path="/product_form" component={ProductForm}></Route>
                <Route exact path="/preview" component={Preview}></Route>
                <Route exact path="/distribution" component={Distribution}></Route>
                <Route exact path="/marketing" component={Marketing}></Route>

            </Switch>
        </> 
    )
}



export default Routes
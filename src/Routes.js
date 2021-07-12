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
import ProductDetail from './component/admin/ProductDetail ';
import ProductForm from './component/admin/ProductForm';
import Home from './component/home/Home';
import Login from './component/login/Login';
import Signup from './component/signup/Signup';
import base from './component/base';
import SignupModal from './component/element/SignupModal';
import SupplierStepOne from './component/admin/company-form/SupplierStepOne';
import ServiceStepOne from './component/admin/company-form/ServiceStepOne';
import ServiceStepTwo from './component/admin/company-form/ServiceStepTwo';
import CompanyDetails from './component/admin/CompanyDetails';
import RequestForgotPassword from './component/forgotpassword/RequestForgotPass';
import ForgotPassOTP from './component/forgotpassword/ForgotPassOTP';
import FcPassword from './component/forgotpassword/FcPassword';
import AdminProfile from './component/admin/AdminProfile';
// import ChangePasswordProfile from './component/admin/ChangePasswordProfile';
import TeamAccess from './component/admin/TeamAccess';
// import CompanyDetails from './component/admin/CompanyDetails';
import ChangePassword from './component/admin/ChangePassword';
import Notification from './component/admin/Notification';
import AdminNewPage from './component/admin/AdminNewPage';
import AddBlogs from './component/admin/AddBlogs';
import Blogs from './component/blogs/Blogs';
import BlogsDetails from './component/blogs/BlogsDetails';
import BrandProfile from './component/admin/BrandProfile';

// import ServiceProviderDashboard from './component/service-provider/ServiceProviderDashboard'



function Routes(){
    return(
        <>
         
            <Switch>
                <Route exact path="/team_access" component={TeamAccess}></Route>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/signup" component={Signup}></Route>
                <Route exact path="/service_step_one" component={ServiceStepOne}></Route>
                <Route exact path="/service_step_two" component={ServiceStepTwo}></Route>
                <Route exact path="/base" component={base}></Route>
                <Route exact path="/signupmodal" component={SignupModal}></Route>
                <Route exact path="/ChangePassword" component={ChangePassword}></Route>
                <Route exact path="/company_details" component={CompanyDetails}></Route>
                {/* Admin Routes */}
                <Route exact path="/company_form_one" component={CompanyStepOne}></Route>
                <Route exact path="/company_form_two" component={CompanyStepTwo}></Route>
                <Route exact path="/company_form_three" component={CompanyStepThree}></Route>
                <Route exact path="/company_form_Four" component={CompanyStepFour}></Route>
                <Route exact path="/email_confirmation" component={EmailConfirmation}></Route>
                <Route exact path="/products_detail" component={ProductDetail}></Route>
                <Route exact path="/admin_home" component={AdminHome}></Route>
                <Route exact path="/admin_navbar" component={AdminNavbar}></Route>
                <Route exact path="/product_form" component={ProductForm}></Route>
                <Route exact path="/preview" component={Preview}></Route>
                <Route exact path="/distribution" component={Distribution}></Route>
                <Route exact path="/marketing" component={Marketing}></Route>
                <Route exact path="/supplier_step_one" component={SupplierStepOne}></Route>
                <Route exact path="/request_forgotpass" component={RequestForgotPassword}></Route>
                <Route exact path="/validate-otp" component={ForgotPassOTP}></Route>
                <Route exact path="/change-password" component={FcPassword}></Route>
                <Route exact path="/admin_profile" component={AdminProfile}></Route>
                <Route exact path="/change_password" component={ChangePassword}></Route>
                <Route exact path="/notification" component={Notification}></Route>
                <Route exact path="/company_details" component={CompanyDetails}></Route>
                <Route exact path="/admin/home" component={AdminNewPage}></Route>
                <Route exact path="/add-blog" component={AddBlogs}></Route>
                <Route exact path="/blogs" component={Blogs}></Route>
                <Route exact path="/blog_detail/:uuid" component={BlogsDetails}></Route>
                <Route exact path="/brand-profile" component={BrandProfile}></Route>
                {/* <Route exact path="/service-dashboard" component={ServiceProviderDashboard}></Route> */}
            </Switch>
        </> 
    )
}



export default Routes
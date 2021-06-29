import React, {useEffect} from 'react';
import Header from '../menubar/Header'
import Footer from '../footer/Footer'
import '../../assets2/signup.css';
import Cookies from 'universal-cookie';
import { NavLink } from 'react-router-dom';
import $ from "jquery";  
import BASE_URL from '../base';

const axios = require('axios');
const cookies = new Cookies();
// var userTypeTitle = cookies.get('userType').charAt(0).toUpperCase()+cookies.get('userType').slice(1);
var userTypeTitle=cookies.get('userType')

function Toggle() {
  var temp = document.getElementById("password");
  if (temp.type === "password") {
      temp.type = "text";
  }
  else {
      temp.type = "password";
  }
}
function Toggle1() {
  var temp = document.getElementById("password1");
  if (temp.type === "password") {
      temp.type = "text";
  }
  else {
      temp.type = "password";
  }
}

 function Func() {
    $(".laoder").show(); 
    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('password1').value;
    var comp_name = document.getElementById('comp_name').value;
    var terms =  document.querySelector('input[type=checkbox]:checked')
    var userType = cookies.get('userType');

 
    if (typeof password !== "undefined" && typeof confirm_password !== "undefined") {
      if (password!= confirm_password) {
        // isValid = false;
        // errors["password"] = "Passwords don't match.";
        alert("Passwords do not match.")
      }
  } 

    if (typeof email !== "undefined") {
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    
      if (!pattern.test(email)) {
        // isValid = false;
        // errors["email"] = "Please enter valid email address.";
          alert("Enter a valid email")
      }
    
    }
    if(terms==null){
      alert("Please agree to the terms and conditions first. ");
    }
    else{
     
    axios.post( BASE_URL + "authentication/signup/",
        {
            user_type : userType,
            first_name: first_name,
            last_name: last_name,
            email: email,
            mobile: mobile,
            password: password,
            comp_name:comp_name,

        }).then(res=>{
          if (res.data.message === "Email id is required"){
            alert("Email id is required");
          }
          else if (res.data.message === "Email id already exists"){
            alert("Email id already exists");
          }
          else if (res.data.message === "Password is required"){
            alert("Password is required");
          }
         
          cookies.set('uuid', res.data.data.uuid, { path: '/' })
          cookies.set('token', res.data.data.access, { path: '/' })
        
         
          if (userType === "buyer"){
            $(".laoder").hide(); 
            window.location="/company_form_one";
          }
          else{
            $(".laoder").hide();
            window.location = "/supplier_step_one";
          }
          
        }).catch(err=>{
          window.location = "/signup"
          console.log(err)
        })
      }
} 

// function Signup(){ 
class Signup extends React.Component {
    handleKeypress = (event) => {
      if(event.key === 'Enter'){
        Func();
      }
    }
    render(){
    return(
      
        <>
  <div class="laoder"> <img src="assets/images/ZZ5H.gif" alt="image" /></div>

<div className="layout__layout___2Opq_">

        <div className="signup-layout__layout___39T41">
          <div className="signup-layout__header___IeCtN">
          
            <a href="/" className="header-bar__logo">
              {/* <img src="assets/images/Logo.png"> */}
              <h1> Veniver </h1>
            </a>
            <h1 className="wrappers__wrapper___1B_Ho signup-layout__heading___1SCdF"><span className="text__text___2g-Dv text__xl-heading___59enD text__display-block___1CZnH">Get access to the world's leading {userTypeTitle}s</span></h1>
            <h2 className="wrappers__wrapper___1B_Ho signup-layout__sub-heading___2C1YE"><span className="text__text___2g-Dv text__medium-heading___298Cf text__display-block___1CZnH">Setup your free {userTypeTitle} profile</span></h2></div>
          <div className="grid-container__container___2ffxE">
            <div className="signup-layout__main___ofSWU">
              {/* <form> */}
                <div className="side-by-side-above-mobile__container___3GNAI">
                  <div className="side-by-side-above-mobile__field___1u_TX">
                    <div className="validated-field__container___1zNgS">
                      <div className="input-with-floating-label__wrapper___368i9">
                        <input autoComplete="new-password" className="input-with-floating-label__input___SyB1U" data-tname="FirstNameInput" placeholder="First Name" id="first_name" type="text"  />
                        <label className="input-with-floating-label__label___4HdSN"  htmlFor="firstName"><span className="text__text___2g-Dv text__micro-copy___3xkfL text__veto-baseline___3-Rqq">First Name</span></label>
                      </div>
                    </div>
                  </div>
                  <div className="side-by-side-above-mobile__field___1u_TX">
                    <div className="validated-field__container___1zNgS">
                      <div className="input-with-floating-label__wrapper___368i9">
                        <input autoComplete="new-password" className="input-with-floating-label__input___SyB1U" data-tname="LastNameInput" id="last_name" placeholder="Last Name " type="text"  />
                        <label className="input-with-floating-label__label___4HdSN" htmlFor="lastName"><span className="text__text___2g-Dv text__micro-copy___3xkfL text__veto-baseline___3-Rqq">Last Name</span></label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="validated-field__container___1zNgS">
                  <div className="input-with-floating-label__wrapper___368i9">
                    <input autoComplete="new-password" className="input-with-floating-label__input___SyB1U" data-tname="EmailInput" id="email" placeholder="Email " type="text" />
                    <label className="input-with-floating-label__label___4HdSN" htmlFor="email"><span className="text__text___2g-Dv text__micro-copy___3xkfL text__veto-baseline___3-Rqq">Email</span></label>
                  </div>
                </div>
                <div className="password-input__wrapper___QSbdy">
                  <div className="validated-field__container___1zNgS password-input__full-width-input___3FfgD">
                    <div className="input-with-floating-label__wrapper___368i9">
                      <input autoComplete="new-password" className="input-with-floating-label__input___SyB1U password-input__input___oDHJw" data-tname="PasswordInput" id="password" placeholder="Password " type="password"  />
                      <label className="input-with-floating-label__label___4HdSN" htmlFor="password"><span className="text__text___2g-Dv text__micro-copy___3xkfL text__veto-baseline___3-Rqq">Password</span></label>
                    </div>
                  </div>
                  <button className="password-input__toggle-button___2A3QJ" onClick = {Toggle} data-tname="togglePasswordVisibility" tabIndex={-1} type="button"><span className="text__text___2g-Dv text__small-copy___bgT96 password-input__toggle-button-text___1PpgB">Show</span></button>
                </div>
                <div className="password-input__wrapper___QSbdy">
                  <div className="validated-field__container___1zNgS password-input__full-width-input___3FfgD">
                    <div className="input-with-floating-label__wrapper___368i9">
                      <input autoComplete="new-password" className="input-with-floating-label__input___SyB1U password-input__input___oDHJw" data-tname="PasswordInput" id="password1" placeholder="Password " type="password"  />
                      <label className="input-with-floating-label__label___4HdSN" htmlFor="password"><span className="text__text___2g-Dv text__micro-copy___3xkfL text__veto-baseline___3-Rqq">Confirm Password</span></label>
                    </div>
                  </div>
                  <button className="password-input__toggle-button___2A3QJ" onClick = {Toggle1}data-tname="togglePasswordVisibility" tabIndex={-1} type="button"><span className="text__text___2g-Dv text__small-copy___bgT96 password-input__toggle-button-text___1PpgB">Show</span></button>
                </div>
                <div className="validated-field__container___1zNgS">
                  <div className="input-with-floating-label__wrapper___368i9">
                    <input autoComplete="new-password" className="input-with-floating-label__input___SyB1U" data-tname="phone no" placeholder="Phone no " id="mobile" type="number" />
                    <label className="input-with-floating-label__label___4HdSN" htmlFor="number"><span className="text__text___2g-Dv text__micro-copy___3xkfL text__veto-baseline___3-Rqq">Phone no</span></label>
                  </div>
                </div>
                <div className="validated-field__container___1zNgS">
                  <div className="input-with-floating-label__wrapper___368i9">
                    <input autoComplete="new-password" className="input-with-floating-label__input___SyB1U" data-tname="CompanyNameInput" id="comp_name" placeholder="Company Name " type="text" />
                    <label className="input-with-floating-label__label___4HdSN" htmlFor="companyName"><span className="text__text___2g-Dv text__micro-copy___3xkfL text__veto-baseline___3-Rqq">Company Name</span></label>
                  </div>
                </div>
                <div className="validated-field__container___1zNgS">
                  <div className="checkbox-large__wrapper___2i1Pl signup-layout__terms-and-conditions___1mfPt">
                    <div className="checkbox-large__inner-wrapper___3jgqh" data-tname="TermsAndConditionsCheckbox">
                      <input onKeyPress={this.handleKeypress} type="checkbox" id="vehicle1" name="vehicle1" className="sign-check" />
                      <span className="text__text___2g-Dv text__small-copy___bgT96 checkbox-large__label___1i8a0" data-tname="CheckboxLargeLabel"><span className="signup-layout__terms-and-conditions-label___csiGB">
                          I have read and I agree to the&nbsp;<a className="link__link___3oFUb link__no-bottom-border___3RpRE" href="#" rel="noreferrer noopener" target="_blank">terms of service</a>&nbsp;and&nbsp;<a className="link__link___3oFUb link__no-bottom-border___3RpRE" href="#" rel="noreferrer noopener" target="_blank">privacy policy</a></span></span>
                    </div>
                  </div>
                </div>
                <button className="button__button___2LnOX signup-layout__button___1rN0b button__primary___3hlTY" type="submit" onClick={Func}><span className>Continue</span></button>
              {/* </form> */}
              <div className="go-home-main ">
                <a href="/"> Go to Home</a>
              </div>
            </div>
          </div>
        </div>
      </div>

        </>
    );
}
}

export default Signup
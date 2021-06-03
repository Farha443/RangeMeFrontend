import React, {useEffect} from 'react';
import Header from '../menubar/Header'
import Footer from '../footer/Footer'
import '../../assets2/signup.css';
import Cookies from 'universal-cookie';
// import BASE_URL from './base';

import { NavLink } from 'react-router-dom';

const axios = require('axios');
const cookies = new Cookies();
var userTypeTitle = cookies.get('userType').charAt(0).toUpperCase()+cookies.get('userType').slice(1);
// alert(cookies.get('userType'));
// var userTypeTitle=cookies.get('userType')
async function Func() {
  debugger
  var first_name = document.getElementById('first_name').value;
  var last_name = document.getElementById('last_name').value;
  var email = document.getElementById('email').value;
  var mobile = document.getElementById('mobile').value;
  var password = document.getElementById('password1').value;
  var comp_name = document.getElementById('comp_name').value;
  var userType = cookies.get('userType');
 
 
  try {
      
      // $(".laoder").show();
      debugger
      const resp = await axios.post('http://127.0.0.1:8000/authentication/signup/',
          {
              user_type : userType,
              first_name: first_name,
              last_name: last_name,
              email: email,
              mobile: mobile,
              password: password,
              comp_name:comp_name,
          });
          
      if (resp.status === 200) {
          debugger
          console.log(resp.status);
          console.log(resp.data);
          cookies.set('email', email, { path: '/' });
          cookies.set('uuid', resp.data.data.uuid, { path: '/' })
          cookies.set('token', resp.data.dataaccessToken, { path: '/' });
         
          // $(".laoder").hide();
      }  window.location = "/login"// var userTypeTitle = cookies.get('userType').charAt(0).toUpperCase()+cookies.get('userType').slice(1);
// alert(cookies.get('userType'));
      return resp.data

  } catch (err) {
      // alert()
      console.error(err.data);

      // window.location = "/signup"
      window.location = "/login"

  }
}


function Signup(){ 
    return(
        <>


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
              <form>
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
                      <input autoComplete="new-password" className="input-with-floating-label__input___SyB1U password-input__input___oDHJw" data-tname="PasswordInput" id="password1" placeholder="Password " type="password"  />
                      <label className="input-with-floating-label__label___4HdSN" htmlFor="password"><span className="text__text___2g-Dv text__micro-copy___3xkfL text__veto-baseline___3-Rqq">Password</span></label>
                    </div>
                  </div>
                  <button className="password-input__toggle-button___2A3QJ" data-tname="togglePasswordVisibility" tabIndex={-1} type="button"><span className="text__text___2g-Dv text__small-copy___bgT96 password-input__toggle-button-text___1PpgB">Show</span></button>
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
                      <input type="checkbox" id="vehicle1" name="vehicle1" className="sign-check" />
                      <span className="text__text___2g-Dv text__small-copy___bgT96 checkbox-large__label___1i8a0" data-tname="CheckboxLargeLabel"><span className="signup-layout__terms-and-conditions-label___csiGB">
                          I have read and I agree to the&nbsp;<a className="link__link___3oFUb link__no-bottom-border___3RpRE" href="#" rel="noreferrer noopener" target="_blank">terms of service</a>&nbsp;and&nbsp;<a className="link__link___3oFUb link__no-bottom-border___3RpRE" href="#" rel="noreferrer noopener" target="_blank">privacy policy</a></span></span>
                    </div>
                  </div>
                </div>
                <button className="button__button___2LnOX signup-layout__button___1rN0b button__primary___3hlTY" type="submit" onClick={Func}><span className>Continue</span></button>
              </form>
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

export default Signup
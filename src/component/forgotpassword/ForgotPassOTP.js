import React from 'react';
import Cookies from 'universal-cookie';
import BASE_URL from '../base';
// import Menu from './Menu';
// import { toastr } from 'react-redux-toastr';
import { NavLink } from 'react-router-dom';
import $, { removeData } from 'jquery';
const axios = require('axios');
const cookies = new Cookies();
console.log(cookies.get('email'));


async function Forgott() {
  $(".laoder").show();
  var code = document.getElementById('code').value;

  var modal = document.getElementById("myModal");

  
    window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
 
  try {
    
    // console.log('Trying')
    // let loader = `<div><div class="loader centered"/></div>`;
    //         document.getElementById('trial').innerHTML = loader;
    $(".laoder").show();
    let res = await axios.post(BASE_URL+'authentication/validate-otp/', {
      validation_type:"forgot password",
      email: cookies.get('email'),
      code:code
    })
    if (res.status === 200) {
      
      // test for status you want, etc
      console.log(res.data);
      cookies.set('change_code',res.data.data,{path:'/'});
      console.log(res.status);
      // $(".modal-body").empty().html(res.data.message);
      // $(".modal").show();
      alert(res.data.message)
      // console.log(res.data);
      $(".laoder").hide();
      // alert(res.data.message);
      window.location = '/change-password';
      // setTimeout(function(){
      //   window.location = '/ChangePasswordd';
      //   }, 2000);
      

    }
    // Don't forget to return something
    return res.data
  }
  catch (err) {
    console.error(err);
    // $(".modal-body").empty().html("Something Went to Wrong");
    // $(".modal").show();
    // alert(err);
    alert("Something Went to Wrong")
    $(".laoder").hide();
    window.location = '/validate-otp';
    // setTimeout(function(){
    //   window.location = '/forgotpassotp';
    //   }, 2000);
  }
}
const handleKeypress = (event) => {
  if(event.key === 'Enter'){
    Forgott();
  }
}


function ForgotPasdOTP(){
  $(".laoder").show(); 

  return(
      <>
       <div data-tname="SignInContainer" className="w-100">
      <div className="with-advertisement__container___2Y-i4">
      <div class="laoder"> <img src="assets/images/ZZ5H.gif" alt="image" /></div>
        <div className="with-advertisement__form___1Tp6K">
          <div className="center-aligned__container___3lBR4">
            <div>
              <div className="auth-form-wrapper__header___3fzg5">
                <a href="/" className="header-bar__logo">
                  {/* {/ <img src="Logo.png"> /} */}
                  <h1> Veniver </h1>
                </a>
                {/* {/ <img alt="Logo" src="/assets/range-me-logo.72d528cf4802493c2b76.svg"> /} */}
              </div>
              <div className="auth-form-wrapper__sign-in-modal___1WSWV" data-tname="form-wrapper">
                <h2 className="wrappers__wrapper___1B_Ho auth-form-wrapper__title___30WhP"><span className="text__text___2g-Dv text__large-heading___31LRE text__display-block___1CZnH">Enter OTP</span></h2>
                <div>
                  {/* <form> */}
                    <div className="sign-in-form__field-container___3Zlii">
                      <div className="input__wrapper___1b5oN" data-tname="InputWrapper">
                        <div className data-tname="Inset" />
                        <input id="code" name="code" placeholder="code" type="text" onKeyPress={handleKeypress} className="input__input___1QUbp" data-tname="TextField"  />
                      </div>
                    </div>
                    <div className="sign-in-form__log-in-button-container___2r6lo">
                      <button className="button__button___2LnOX sign-in-form__primary-button___3edbD button__primary___3hlTY" data-tname="LoginButton" type="submit" onClick={Forgott}><span className>Submit</span></button>
                      {/* <div className="sign-in-form__remember-me-container___3ibWe">
                      <input className="sign-check" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                              <label for="vehicle1"> Remember me</label>
                      </div> */}
                    </div>
                    
                  {/* </form> */}
                </div>
              </div>
              <div className="auth-form-wrapper__footer___1Zu1V">
                <div><a href="#"><span className="text__text___2g-Dv text__small-copy___bgT96">Forgot password</span></a><span className="text__text___2g-Dv text__small-copy___bgT96 sign-in-form-with-wrapper__get-started-link___DfPbs">Don’t have an account? 
                <NavLink to="/Signup" >Get started</NavLink></span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="with-advertisement__advertisement___3T9yG">
          <div className="global-markets-advertisement__container___2Vacv" style={{backgroundImage: 'url("../../assets/login-bg.jpg")'}}>
            <h1> Welcome Back</h1>
            <span className="text__text___2g-Dv text__medium-copy___1Y01K global-markets-advertisement__lead-text___1NZPk text__veto-baseline___3-Rqq" data-tname="CampaignLeadText">The worldwide industry leader in connecting retailers and suppliers brings you a first-of-its-scale food and beverage product discovery experience.</span>
            <a className="link-button__button___1uEaN global-markets-advertisement__cta-link___2fIEH link-button__tertiary___2N0Mu" data-tname="CampaignLink" href="#" rel="noreferrer noopener" target="_blank"><span className>Learn More</span>
            </a>
          </div>
        </div>
      </div>
    </div>
      </>
  );
}

export default ForgotPasdOTP;



import React from 'react';
import Cookies from 'universal-cookie';
// import BASE_URL from './base';
// import { toastr } from 'react-redux-toastr';
// import Menu from './Menu';
import { NavLink } from 'react-router-dom';
import $, { removeData } from 'jquery';
import BASE_URL from '../base';

const cookies = new Cookies();
const axios = require('axios');
async function ChangePasswordd() {
  
    var password = document.getElementById('password').value; 
    var confirmPassword = document.getElementById('confirm_password').value;
    
    var modal = document.getElementById("myModal");

  
    window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


    if (password !== confirmPassword) {
      alert("Passwords don't match");
  } else {
      // make API call
    
    try {
      
      // console.log('Trying')
      // let loader = `<div><div class="loader centered"/></div>`;
      //         document.getElementById('trial').innerHTML = loader;
      $(".laoder").show();
      let res = await axios.patch( BASE_URL +'authentication/change-password/', {
        email:cookies.get('email'),
        code: cookies.get('change_code'),
        password:password
      })
      if (res.status === 200) {
        // test for status you want, etc
        console.log(res.status);
        // console.log(res.data);
        // $(".modal-body").empty().html(res.data.message);
        // $(".modal").show();
        alert(res.data.message)
        $(".laoder").hide();
        // alert(res.data.message);
        window.location = '/login';
        // setTimeout(function(){
        //   window.location = '/Login';
        //   }, 2000);
        
  
      }
      // Don't forget to return something
      return res.data
    }
    catch (err) {
      console.error(err);
      // $(".modal-body").empty().html("Something Went To Wrong");
      // $(".modal").show();
      alert("Something Went To Wrong")
      // alert(err);
      window.location = '/change-password';
      // setTimeout(function(){
      //   window.location = '/ChangePasswordd';
      //   }, 2000);
    }
  }
}

const handleKeypress = (event) => {
  if(event.key === 'Enter'){
    ChangePasswordd();
  }
}
function NewPassword(){

  // handleKeypress = (event) => {
  //   if(event.key === 'Enter'){
  //     this.Submit();
  //   }
  // }
  return(
      <>
       <div data-tname="SignInContainer" className="w-100">
      <div className="with-advertisement__container___2Y-i4">
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
                <h2 className="wrappers__wrapper___1B_Ho auth-form-wrapper__title___30WhP"><span className="text__text___2g-Dv text__large-heading___31LRE text__display-block___1CZnH">Enter New Password</span></h2>
                <div>
                  {/* <form> */}
                    <div className="sign-in-form__field-container___3Zlii">
                      <div className="input__wrapper___1b5oN" data-tname="InputWrapper">
                        <div className data-tname="Inset" />
                        <input id="password" name="password" placeholder="New Password" type="password" className="input__input___1QUbp" data-tname="PasswordInput" />
                      </div>
                    </div>
                    <div className="sign-in-form__field-container___3Zlii">
                      <div className="input__wrapper___1b5oN" data-tname="InputWrapper">
                        <div className data-tname="Inset" />
                        <input id="confirm_password" name="confirm_password" placeholder="Confirm Password" onKeyPress={handleKeypress} type="password" className="input__input___1QUbp" data-tname="PasswordInput"  />
                       <button className="button__button___2LnOX sign-in-form__primary-button___3edbD button__primary___3hlTY" data-tname="LoginButton" type="submit" onClick={ChangePasswordd}><span className>Submit</span></button>
                      </div>
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

export default NewPassword
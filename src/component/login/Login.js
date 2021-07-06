import React from 'react';
import Header from '../menubar/Header'
import Footer from '../footer/Footer'
import Cookies from 'universal-cookie';
import '../../assets2/login.css';
import { NavLink } from 'react-router-dom';
import $ from "jquery";  
import BASE_URL from '../base';

const axios = require('axios');
const cookies = new Cookies();

// cookies.get('uuid')
// cookies.get('sup_uuid')
// cookies.get('buy_uuid')
cookies.get('userType')
function Loginfunction() {
  $(".laoder").show(); 
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
      axios.post(BASE_URL+"authentication/login/",
          {              
              email: email,             
              password: password,              
          }).then(res=>{
            if (res.data.message === "Password is incorrect"){
              alert("Password is incorrect");
            }
            else if (res.data.message === "User does not exist"){
              alert("User does not exist");
            }
            
            // console.log(res.data.data.accessToken)
            cookies.set('logintoken', res.data.data.accessToken, { path: '/' });
            cookies.set('uuid', res.data.data.uuid, { path: '/' });
            cookies.set('first_name', res.data.data.user, {path:'/'});
            // cookies.set('first_name', res.data.data.first_name, { path: '/' });
            cookies.set('user_pic', res.data.data.user_pic, { path: '/' });
            cookies.set('user_type', res.data.data.user_type, { path: '/' }); 
            // alert(res.data.data.user_pic)?
            if(res.data.data.supplier){
              cookies.set('sup_uuid',res.data.data.supplier, { path: '/' } )
            }
            else if(res.data.data.buyer){
              cookies.set('buy_uuid',res.data.data.buyer, { path: '/' } )
            }
            cookies.set('superuser',res.data.data.superuser,{ path: '/' })
            
            // window.location = "/"
            if(res.data.data.superuser===true){
              window.location = "/admin/home"
            }
            else if(cookies.get('user_type')==="supplier"){
              window.location = "/admin_home"
            }
            else{
              window.location = "/admin_home"
            }

            
          }).catch(err=>{
            $(".laoder").hide();
            window.location = "/login"
            // alert(err)
          })
        
}
class Login extends React.Component {
  handleKeypress = (event) => {
    if(event.key === 'Enter'){
      Loginfunction();
    }
  }

  componentDidMount(){
    $(".laoder").hide(); 
  }

  render(){
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
                    <h1> Tayuss </h1>
                  </a>
                  {/* {/ <img alt="Logo" src="/assets/range-me-logo.72d528cf4802493c2b76.svg"> /} */}
                </div>
                <div className="auth-form-wrapper__sign-in-modal___1WSWV" data-tname="form-wrapper">
                  <h2 className="wrappers__wrapper___1B_Ho auth-form-wrapper__title___30WhP"><span className="text__text___2g-Dv text__large-heading___31LRE text__display-block___1CZnH">GİRİŞ YAP </span></h2>
                  <div>
                    {/* <form> */}
                      <div className="sign-in-form__field-container___3Zlii">
                        <div className="input__wrapper___1b5oN" data-tname="InputWrapper">
                          <div className data-tname="Inset" />
                          <input id="email" name="email" placeholder="Email" type="email" className="input__input___1QUbp" data-tname="EmailField"  />
                        </div>
                      </div>
                      <div className="sign-in-form__field-container___3Zlii">
                        <div className="input__wrapper___1b5oN" data-tname="InputWrapper">
                          <div className data-tname="Inset" />
                          <input id="password" name="password" placeholder="Password" type="password" onKeyPress={this.handleKeypress} className="input__input___1QUbp" data-tname="PasswordField" />
                        </div>
                      </div>
                      <div className="sign-in-form__log-in-button-container___2r6lo">
                        <button className="button__button___2LnOX sign-in-form__primary-button___3edbD button__primary___3hlTY" data-tname="LoginButton" type="submit"  onClick={Loginfunction}><span className>Log in</span></button>
                        {/* <div className="sign-in-form__remember-me-container___3ibWe">
                        <input className="sign-check" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                <label for="vehicle1"> Remember me</label>
                        </div> */}
                      </div>
                    {/* </form> */}
                  </div>
                </div>
                <div className="auth-form-wrapper__footer___1Zu1V">
                  <div><a href="/request_forgotpass"><span className="text__text___2g-Dv text__small-copy___bgT96">Forgot password</span></a><span className="text__text___2g-Dv text__small-copy___bgT96 sign-in-form-with-wrapper__get-started-link___DfPbs">Don’t have an account? 
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
}

export default Login
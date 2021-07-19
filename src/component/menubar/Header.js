import React from 'react';
import {NavLink} from 'react-router-dom';
import useState from 'react-hook-use-state';
import {
  Jumbotron,
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Col,
  Container,
  Modal,
  Card,
  Row
} from 'react-bootstrap';
import SignupModal from '../element/SignupModal';
import Cookies from 'universal-cookie';

const axios = require('axios');
const cookies = new Cookies();
cookies.get('uuid')
cookies.get('logintoken')
cookies.get('userType')
var logintoken = cookies.get("logintoken")
var userType = '';
cookies.get('uuid2')


function Click(){
  cookies.remove("userType");
  var supplier = "supplier";
  cookies.set('userType', supplier, { path: '/' });
  userType=cookies.get('userType');                                          
  window.location = "/signup"
  }

function Click1(){
  cookies.remove('userType');
  var buyer = "buyer";
  cookies.set('userType', buyer, { path: '/' });
  userType=cookies.get('userType');
  window.location = "signup"
  }
function Click2(){
  cookies.remove('userType');
  var service = "service provider";
  cookies.set('userType', service, { path: '/' });
  userType=cookies.get('userType');
  window.location = "signup"
  }

function Header(){
  const [modalShow, setModalShow] = useState(false);
    return(
        <>


<div id="header-bar" className="header-bar  with-banner-offset ">
<div className="header-bar__inner">
  <nav id="nav" className="header-bar__nav">
    <NavLink to="/" className="header-bar__logo">
      <img src="assets/images/Savas.png" />
     
    </NavLink>
    <div className="header-bar__actions">
      <a to="" onClick={Click} className="header-bar__link">Satıcılar İçin</a>
      <a href="#"  onClick={Click1} className="header-bar__link">Alıcılar İçin</a>
      <a href="#"  onClick={Click2} className="header-bar__link">For Service Providers</a>
      {/* <div className="header-bar__divider" /> */}
      <div className="header-bar__link sub-nav__toggle">
        <span>Resources</span>
        <div className="header-bar__angle">
        <i class="fa fa-caret-down svg" aria-hidden="true"></i>
        </div>
        <div className="sub-nav" id="resources-sub-nav">
        <NavLink to="/success" className="sub-nav__link">Success Stories</NavLink>
          <a href="/blogs" className="sub-nav__link">Blog</a>
          <a href="#" className="sub-nav__link">In The News</a>
          <a href="#" className="sub-nav__link">Webinars</a>
        </div>
      </div>
      {logintoken === undefined ?<NavLink to="/login" className="header-bar__login button button--border button--compact dark-text">GİRİŞ YAP</NavLink>:<NavLink to="/admin_home" className="header-bar__login button button--border button--compact dark-text">GİRİŞ YAP</NavLink>}
      {/* <NavLink to="/login" className="header-bar__login button button--border button--compact dark-text">Log in</NavLink> */}
      <button className="header-bar__cta button button--green " onClick={() => setModalShow(true)}>Ücretsiz Hesap Aç <i class="fal fa-long-arrow-right"></i></button>
  
      <button id="menu-toggle" className="menu__button">
        <svg xmlns="http://www.w3.org/2000/svg" className="svg" width={24} height={24}>
          <g className="nc-icon-wrapper svg__fill svg__stroke" strokeLinecap="square" strokeWidth={2} stroke="#000">
            <g className="nc-interact_menu-close-2-o-32">
              <path className="svg__stroke" fill="none" strokeMiterlimit={10} d="M0 6h24" />
              <path data-color="color-2" fill="none" strokeMiterlimit={10} d="M0 12h24" />
              <path className="svg__stroke" fill="none" strokeMiterlimit={10} d="M0 18h24" />
            </g>
          </g>
        </svg>
      </button>
    </div>
  </nav>
</div>
<div id="menu" className="menu">
  <div className="menu__inner">
    <nav className="nav nav--menu">
      <a href="#" className="nav__link">Satıcılar İçin</a>
      <a href="#" className="nav__link">Alıcılar İçin</a>
      <a href="#" className="nav__link">For Service Providers</a>
      <div className="nav__divider" />
      <div className="nav__link nav__link--sub-nav">
        <span className="sub-nav__toggle">Resources</span>
        <div className="sub-nav">
          <NavLink to="/success" className="sub-nav__link">Success Stories</NavLink>
          <a href="#" className="sub-nav__link">Blog</a>
          <a href="#" className="sub-nav__link">In The News</a>
          <a href="#" className="sub-nav__link">Webinars</a>
          <a href="#" className="sub-nav__link">Support</a>
        </div>
      </div>
      <div className="nav__link nav__link--sub-nav">
        <span className="sub-nav__toggle">Company</span>
        <div className="sub-nav">
          <a href="#" className="sub-nav__link">About Us</a>
          <a href="#" className="sub-nav__link">Contact</a>
          <a href="#" className="sub-nav__link">Careers</a>
          <a href="#" className="sub-nav__link">Privacy</a>
          <a href="#" className="sub-nav__link">Terms</a>
        </div>
      </div>
      <a href="#" data-signup="supplier" className="nav__signup button button--blue">Get Started</a>
      {/* <NavLink to="/login"  className="nav__login button button--border">Log in</NavLink> */}
      {logintoken === undefined ?<NavLink to="/login" className="header-bar__login button button--border button--compact dark-text">GİRİŞ YAP</NavLink>:<NavLink to="/admin_home" className="header-bar__login button button--border button--compact dark-text">Log In</NavLink>}
    </nav>
  </div>
</div>


<SignupModal show={modalShow} onHide={() => setModalShow(false)} />


<div className="signup-modal signup-modal--is-hidden">
  <div className="signup-modal__overlay" />
  <div className="signup-modal__inner">
    <button className="signup-modal__close">
      
    </button>
  
    
  </div>
</div>
</div>

</>
    );
}

export default Header
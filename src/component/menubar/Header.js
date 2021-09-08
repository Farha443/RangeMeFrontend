import React, {useEffect, userEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';
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
import BASE_URL from '../base';

const axios = require('axios');
const cookies = new Cookies();
cookies.get('uuid')
cookies.get('logintoken')
var type = cookies.get('user_type')
// alert(type)
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
  const[brands, setBrands] = useState([]);
  const [, triggerRender] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
      //  console.log('This will run every second!');
      //  alert(new Date());
    }, 3000);
 
    // This is important, you must clear your interval when component unmounts
    return () => clearInterval(interval);
 
 }, [])  

  useEffect(() => {
        //  alert(logintoken)
    axios.get(BASE_URL+'authentication/getsupplier/'+ cookies.get('uuid') )
    .then(res=>{
        // debugger
        setBrands(res.data.data)
    }).catch(err=>{
        // $(".laoder").hide();
        console.log(err)            
    })
    
},[])

function SignUp(){
  var supplier = "supplier";
  cookies.set('userType', supplier, { path: '/' });
  setModalShow(true)
}

    return(
        <>


<div id="header-bar" className="header-bar  with-banner-offset ">
<div className="header-bar__inner">
 <div className="container">
 <nav id="nav" className="header-bar__nav">
    <NavLink to="/" className="header-bar__logo">
      <img src="assets/images/Savas.png" />
     
    </NavLink>
    <div className="header-bar__actions">
      <NavLink to="/supplier-home"  className="header-bar__link"> <img src="assets/images/icons/01.png" />tedarikçiler</NavLink>
      <NavLink to="/buyer-home"  className="header-bar__link"> <img src="assets/images/icons/01.png" /> alıcı firmalar</NavLink>
      <NavLink to="servicehome"  className="header-bar__link"> <img src="assets/images/icons/01.png" /> hizmet sağlayıcılar</NavLink>
      {/* <div className="header-bar__divider" /> */}
      <NavDropdown title="kaynaklar" id="basic-nav-dropdown" className="menu-drop-1245 men-menu-drop">
      
        <NavDropdown.Item  to="/success">başarı öyküleri</NavDropdown.Item>
        <NavDropdown.Item  href="/blogs"  >tayuss blog</NavDropdown.Item>
        <NavDropdown.Item  >haberler</NavDropdown.Item>
        <NavDropdown.Item  >webinarlar</NavDropdown.Item>
        {/* <NavLink to="/success" className="sub-nav__link">başarı öyküleri</NavLink>
          <a href="/blogs" className="sub-nav__link">tayuss blog</a>
          <a href="#" className="sub-nav__link">haberler</a>
          <a href="#" className="sub-nav__link">webinarlar</a>
        */}
      </NavDropdown>

      {/* <div className="header-bar__link sub-nav__toggle">
        <span>kaynaklar</span>
        <div className="header-bar__angle">
        <i class="fa fa-caret-down svg" aria-hidden="true"></i>
        </div>
        <div className="sub-nav" id="resources-sub-nav">
        <NavLink to="/success" className="sub-nav__link">başarı öyküleri</NavLink>
          <a href="/blogs" className="sub-nav__link">tayuss blog</a>
          <a href="#" className="sub-nav__link">haberler</a>
          <a href="#" className="sub-nav__link">webinarlar</a>
        </div>
      </div> */}
      {logintoken === undefined ?
      <NavLink to="/login" className="header-bar__login button button--border button--compact dark-text l-icn" >
        GİRİŞ YAP
        <i class="fal fa-long-arrow-right"></i>
        </NavLink>
        :type==='supplier'?
        <NavLink to="/admin_home" className="header-bar__login button button--border button--compact dark-text l-icn">
          GİRİŞ YAP
          <i class="fal fa-long-arrow-right"></i>
          </NavLink>:type==='buyer'?<NavLink to="/newbuyerhome" className="header-bar__login button button--border button--compact dark-text l-icn">
            GİRİŞ YAP
            <i class="fal fa-long-arrow-right"></i>
            </NavLink>:""
            }
      {/* {logintoken === undefined ?<button className="header-bar__cta button button--green " onClick={() => SignUp()}>GİRİŞ YAP<i class="fal fa-long-arrow-right"></i></button>
      :""}
   */}
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
 
 </div>
<div id="menu" className="menu">
  <div className="menu__inner">
    <nav className="nav nav--menu">
      <NavLink to="/supplier-home" className="nav__link"> <img src="assets/images/icons/01.png" /> tedarikçiler</NavLink>
      <NavLink to="/buyer-home" className="nav__link"> <img src="assets/images/icons/01.png" /> alıcı firmalar</NavLink>
      <NavLink to="/servicehome" className="nav__link"> <img src="assets/images/icons/01.png" /> hizmet sağlayıcılar</NavLink>
      <div className="nav__divider" />
      <div className="nav__link nav__link--sub-nav">
        <span className="sub-nav__toggle">kaynaklar</span>
        <div className="sub-nav">
          <NavLink to="/success" className="sub-nav__link">başarı öyküleri</NavLink>
          <NavLink to="/blogs" className="sub-nav__link">tayuss blog</NavLink>
          <NavLink to="#" className="sub-nav__link">haberler </NavLink>
          <NavLink to="#" className="sub-nav__link">webinarlar </NavLink>
          <NavLink to="#" className="sub-nav__link">destek </NavLink>
        </div>
      </div>
      <div className="nav__link nav__link--sub-nav">
        <span className="sub-nav__toggle">Kurumsal</span>
        <div className="sub-nav">
          <a href="#" className="sub-nav__link">hakkımızda</a>
          <a href="#" className="sub-nav__link">iletişim</a>
          <a href="#" className="sub-nav__link">kariyer</a>
          <a href="#" className="sub-nav__link">gizlilik</a>
          <a href="#" className="sub-nav__link">kullanım koşulları</a>
        </div>
      </div>
      <a href="#" data-signup="supplier" className="nav__signup button button--blue">Şimdi Başlayın!</a>
      {/* <NavLink to="/login"  className="nav__login button button--border">Log in</NavLink> */}
      {logintoken === undefined ?
      <NavLink to="/login" className="header-bar__login button button--border button--compact dark-text">
        GİRİŞ YAP
        </NavLink>:type==='supplier'?<NavLink to="/admin_home" className="header-bar__login button button--border button--compact dark-text">GİRİŞ YAP</NavLink>:<NavLink to="/newbuyerhome" className="header-bar__login button button--border button--compact dark-text">GİRİŞ YAP</NavLink>}
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

import React from 'react';
import Header from '../menubar/Header'
import Footer from '../footer/Footer'


import '../../assets2/login.css';
import { NavLink } from 'react-router-dom';
import { Col, Form, Row } from 'react-bootstrap';
import $ from "jquery";  
import BASE_URL from '../base';
import Cookies from 'universal-cookie';
import SignupModal from '../element/SignupModal';

const axios = require('axios');
const cookies = new Cookies();
cookies.get('userType')



function Loginfunction() {
  $(".laoder").show(); 
  var email = document.getElementById('get_email').value;
  var password = document.getElementById('get_password').value;
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
            // debugger
            if(res.data.data.supplier){
              cookies.set('sup_uuid',res.data.data.supplier, { path: '/' } )
            }
            else if(res.data.data.buyer){
              cookies.set('buy_uuid',res.data.data.buyer, { path: '/' } )
            }
            else if(res.data.data.user_type==='service provider'){
              
              cookies.set('serviceuuid',res.data.data.uuid, { path: '/' } )
            }
            cookies.set('superuser',res.data.data.superuser,{ path: '/' })
            
            // window.location = "/"
            if(res.data.data.superuser===true){
              window.location = "/admin/home"
            }
            else if(cookies.get('user_type')==="supplier"){
              window.location = "/admin_home"

            
            }
            else if(cookies.get('user_type')==="service provider"){
              window.location = "/service-dashboard"

            
            }
            else{
              window.location = "/newbuyerhome"
            }

            
          }).catch(err=>{
            $(".laoder").hide();
            window.location = "/login"
            // alert(err)
          })
        
}
class Login extends React.Component {
  state ={
    modalShow : false
}
  
  handleKeypress = (event) => {
    if(event.key === 'Enter'){
      Loginfunction();
    }
  }
  
  onCloseModal = ()=>{
    this.setState({modalShow : false})
}
  
  componentDidMount(){
    $(".laoder").hide(); 
  }


  onClickButton = e =>{
    e.preventDefault()
    var supplier = "supplier";
    cookies.set('userType', supplier, { path: '/' });
    this.setState({modalShow : true})
}

 
  render(){
    return(
        <>
        {/* <SignupModal show={this.state.modalShow} onHide={() => this.state.modalShow(false)} />
        
       <SignupModal show={modalShow} onHide={() => setModalShow(false)} /> */}
       <SignupModal show={this.state.modalShow} onHide={this.onCloseModal}></SignupModal>

         <div data-tname="SignInContainer" className="w-100">
        <div className="with-advertisement__container___2Y-i4">
          <div className="with-advertisement__form___1Tp6K left">
            <div className="center-aligned__container___3lBR4">
              <div>
                <div className="auth-form-wrapper__header___3fzg5">
                  <a href="/" className="header-bar__logo">
                    <img src="assets/images/logo.svg" />
                  </a>
                
                </div>
                <div className="auth-form-wrapper__sign-in-modal___1WSWV" data-tname="form-wrapper">
                  <h4 className="tl-tx-hd">
                  Lütfen hesabınıza
                    <span className="tl-tx-span "> giriş yapın.</span>
                    </h4>
                  <div>
                    {/* <form> */}
                    <Row>
                    <Col md="12" xs="12">
                          <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                              <Form.Label>E-Mail Adresi</Form.Label>
                              <Form.Control type="email" id="get_email" placeholder="Adınız..." />
                          </Form.Group>
                    </Col>

                    <Col md="12" xs="12">
                          <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                              <Form.Label>Parola</Form.Label>
                              <Form.Control type="password" onKeyPress={this.handleKeypress} id="get_password" placeholder="Adınız..." />
                          </Form.Group>
                    </Col>

                    <Col md="12" xs="12">
                    <div className="lg-btn-mn-d">
                      <button className="admin-add-btn" onClick={Loginfunction}> GİRİŞ YAP <i class="fal fa-long-arrow-right"></i> </button>
                    </div>

                    <div className="log-link102">
                        <p> Hesabınız yok mu? <NavLink to="" onClick={this.onClickButton}>  Hemen ücretsiz kaydol! </NavLink> </p>
                    </div>
                    </Col>
                    </Row>

                    
                    {/* </form> */}
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="with-advertisement__advertisement___3T9yG" style={{backgroundImage: 'url("../../assets/login-img.jpg")'}}>
            <div className="global-markets-advertisement__container___2Vacv" >
                <div className="lg-right-t t-right">
                <h5>Ürünlerinizi ve marka profilinizi</h5>
              <h3> binlerce alıcıya sergileyerek  </h3>
              <a className="login-link" data-tname="CampaignLink" href="#" rel="noreferrer noopener" target="_blank">satışlarınızı arttırın!
              </a>
                </div>
            </div>
          </div>
        </div>
      </div>
           

      



        
        

        </>
    );
  }
}

export default Login
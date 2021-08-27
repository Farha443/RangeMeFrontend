import React from 'react';
import Header from '../menubar/Header'
import Footer from '../footer/Footer'
import { Link,NavLink } from "react-router-dom";
import useState from 'react-hook-use-state';
import SignupModal from '../element/SignupModal';
import Slider from "react-slick";
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
  import Cookies from 'universal-cookie';
import BASE_URL from '../base';
import Swal from 'sweetalert2';
  
const axios = require('axios');



function Contact(){
 
const[contact, setContact]=useState([]);

function contactUs(){
    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var text = document.getElementById('text').value;
    var url = BASE_URL+'home/contactus/'
    var config = {
        method: 'post',
        url: url,
        data:{
            first_name : first_name,
            last_name : last_name,
            email :email,
            phone : phone,
            text : text,
          }
      };
    
    axios(config).then(res=>{
        Swal.fire({
            title: 'Message Sent Successfully',
            text: 'Redirecting...',
            timerProgressBar: true,
            type: 'success',
            timer: 3000,
            buttons: false,
        })
        .then(() => {
          window.location = "/";
        })
      }
      ).catch(err=>{
        console.error(err);
      })
}

    return(
        <>
        {/* <SignupModal/> */}
         <Header/>   
        
              

          <div className="my-container" >

     
            <main className="content" >

              <section className="other-banner-section" style={{backgroundImage: 'url(../assets/images/banner-1.jpg)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="supplie-banner-text b-detail-hero">
                                <p className="p1"> <NavLink to="" className="bd">  anasayfa </NavLink>  </p>
                                <h1> İLETİŞİM </h1>
                                <p className="p2"> Sorularınız ve destek almak  <span>istedikleriniz ile ilgili </span> </p>
                                <NavLink to=""> bize ulaşın. </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
              </section> 

              <section className="lr-section-main contact-section bg-g"> 
                  <div className="container">

                    <div className="row"> 
                        <div className="col-md-6 co-xs-12">
                            <div className="contact-left-mn-d">
                                <div className="contact-bg-title">
                                    <h5> İletişim Bilgileri </h5>
                                </div>
                                <div className="cont-details-list">
                                    <ul>
                                        <li>
                                            <div className="cont-icn">
                                                <img src="assets/images/icons/location-pin.svg" class="icn-img" />
                                            </div>
                                            <div className="add-text">
                                                <p>
                                                Lorem Ipsum is simply dummy text of the 
                                                printing and typesetting industry.  
                                                </p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="cont-icn">
                                                <img src="assets/images/icons/phone-call.svg" class="icn-img" />
                                            </div>
                                            <div className="add-text">
                                                <p>
                                               <strong> 0212 356 85 69 </strong>  
                                                </p>
                                            </div>
                                        </li>


                                        <li>
                                            <div className="cont-icn">
                                                <img src="assets/images/icons/mail.svg" class="icn-img" />
                                            </div>
                                            <div className="add-text">
                                                <p>
                                                info@tayuss.com 
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="contact-form-d">
                                <h5> Bize Ulaşın </h5>

                                <Row>
                                    <Col md="6" xs="12">
                                        <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                                            <Form.Label>Adınız</Form.Label>
                                            <Form.Control type="text" id="first_name" placeholder="Adınız..." />
                                        </Form.Group>
                                    </Col>

                                    <Col md="6" xs="12">
                                        <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                                            <Form.Label>Adınız</Form.Label>
                                            <Form.Control type="text" id="last_name" placeholder="Soyadınız..." />
                                        </Form.Group>
                                    </Col>

                                    <Col md="6" xs="12">
                                        <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                                            <Form.Label>Adınız</Form.Label>
                                            <Form.Control type="email" id='email' placeholder="E-mail Adresiniz..." />
                                        </Form.Group>
                                    </Col>

                                    <Col md="6" xs="12">
                                        <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                                            <Form.Label>Adınız</Form.Label>
                                            <Form.Control type="text" id="phone" placeholder="Telefon Numaranız..." />
                                        </Form.Group>
                                    </Col>


                                    <Col md="12" xs="12">
                                        <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                                        <Form.Control placeholder="Mesajınız..." id ="text" as="textarea" rows={3} /></Form.Group>
                                    </Col>

                                    <Col md="12" xs="12">
                                        <div className="contact-form-btn">
                                             <Button className="admin-add-btn" onClick={contactUs}> GÖNDER </Button>   
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                        </div>

                    </div>

                  </div>
              </section>


              <section className="map-section">
                <Row>
                    <Col md="12" xs="12">
                        <div className="map-area-div">
                            {/* <img src="assets/images/icons/map.png" /> */}
                            <div style={{width: '100%'}}><iframe width="100%" height={600} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed" /><a href="https://www.maps.ie/draw-radius-circle-map/">Easy radius map</a></div>
                        </div>
                    </Col>
                </Row>
              </section>
            
        
              <section className="btm-banner-section"> 
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div className="btm-banner-cont-m"> 
                                <div className="btm-banner-text">
                                  <h3> <span className="btm-banner-text-yl">HEMEN ÜCRETSİZ  </span>  HESAP OLUŞTUR!  </h3>
                              </div>
                              <div className="btm-banner-btn supplie">
                                 <NavLink to=""> <i class="fal fa-long-arrow-right"></i> </NavLink>
                              </div>
                                </div>
                            </div>
                        </div>
                    </div>
              </section>


              
           
            </main>

           
           

            <Footer/>

     

          </div>
        

        </>
    );
}

export default Contact
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
const cookies = new Cookies();


function Contact(){
 
const[contact, setContact]=useState([]);
const [modalShow, setModalShow] = useState(false);

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

function onClickButton(e){
    e.preventDefault()
    var supplier = "supplier";
    cookies.set('userType', supplier, { path: '/' });
    setModalShow(true)
  }

    return(
        <>
          <SignupModal show={modalShow} onHide={() => setModalShow(false)} />

         <Header/>   
        
              

          <div className="my-container" >

     
            <main className="content" >

              <section className="other-banner-section" style={{backgroundImage: 'url(../assets/images/banner-1.jpg)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="supplie-banner-text b-detail-hero">
                               <NavLink to="/" className="a11">  anasayfa </NavLink> 
                                <h1> İLETİŞİM </h1>
                                <p className="p2"> Sorularınız ve destek almak  <span>istedikleriniz ile ilgili </span> </p>
                                <p className="p1-add-n"> bize ulaşın. </p>
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
                                                Tayuss GIDA LOJİSTİK SANAYİ VE TİCARET A.Ş. <br/>
                                                Küçük Çamlıca Mah. Çilahane yolu Cad. 
                                                Çamlıca Evleri Sitesi No:13/4 Üsküdar/İstanbul
                                                 
                                                </p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="cont-icn">
                                                <img src="assets/images/icons/phone-call.svg" class="icn-img" />
                                            </div>
                                            <div className="add-text">
                                                <p>
                                               <strong> 0216 547 67 00 </strong>  
                                                </p>
                                            </div>
                                        </li>


                                        <li>
                                            <div className="cont-icn">
                                                <img src="assets/images/icons/mail.svg" class="icn-img" />
                                            </div>
                                            <div className="add-text">
                                                <p>
                                                destek@tayuss.com 
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
                                            <Form.Label>Soyadınız</Form.Label>
                                            <Form.Control type="text" id="last_name" placeholder="Soyadınız..." />
                                        </Form.Group>
                                    </Col>

                                    <Col md="6" xs="12">
                                        <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                                            <Form.Label>E-posta</Form.Label>
                                            <Form.Control type="email" id='email' placeholder="E-posta Adresiniz..." />
                                        </Form.Group>
                                    </Col>

                                    <Col md="6" xs="12">
                                        <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                                            <Form.Label>Cep Telefonu</Form.Label>
                                            <Form.Control type="text" id="phone" placeholder="Cep Telefon Numaranız..." />
                                        </Form.Group>
                                    </Col>


                                    <Col md="12" xs="12">
                                        <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                                        <Form.Label>Mesajınız</Form.Label>
                                        <Form.Control placeholder="Mesajınız ya da sorularınız..." id ="text" as="textarea" rows={3} /></Form.Group>
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


             
            
        
              <section className="btm-banner-section"  style={{backgroundImage: 'url("assets/images/btm-banner.jpg")'}}> 
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div className="btm-banner-cont-m"> 
                                <div className="btm-banner-text">
                                  <h3> <span className="btm-banner-text-yl">HEMEN ÜCRETSİZ  </span>  HESAP OLUŞTUR!  </h3>
                              </div>
                              <div className="btm-banner-btn supplie">
                              <p onClick={onClickButton}> <i class="fal fa-long-arrow-right"></i> </p>
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

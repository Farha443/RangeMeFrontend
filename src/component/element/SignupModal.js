import React, {useEffect, userEffect, useState} from 'react';
// import useState from 'react-hook-use-state';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';
import BASE_URL from '../base';
import $ from "jquery";

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

const axios = require('axios');
const cookies = new Cookies();
var userType = '';

function Func() {
  var first_name = document.getElementById('first_name').value;
  var last_name = document.getElementById('last_name').value;
  var email = document.getElementById('email').value;
  var mobile = document.getElementById('mobile').value;
  var password = document.getElementById('password').value;
  var confirm_password = document.getElementById('password1').value;
  var terms =  document.querySelector('input[type=checkbox]:checked')
  var userType = cookies.get('userType');


  if (typeof password !== "undefined" && typeof confirm_password !== "undefined") {
    if (password!= confirm_password) {
      // isValid = false;
      // errors["password"] = "Passwords don't match.";
      alert("Passwords do not match.")
      window.location = "/signup"
    }
} 

  if (typeof email !== "undefined") {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  
    if (!pattern.test(email)) {
      // isValid = false;
      // errors["email"] = "Please enter valid email address.";
        alert("Enter a valid email")
        window.location = "/signup"
    }
  
  }
  if(terms==null){
    alert("Please agree to the terms and conditions first. ");
    window.location = "/"
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
        document.getElementById('s2').className='st-two';
        document.getElementById('s1').className='st-one d-none'
        document.getElementById('s3').className='st-three d-none'
        cookies.set('uuid', res.data.data.uuid, { path: '/' })
        cookies.set('token', res.data.data.access, { path: '/' })
        cookies.set('first_name', res.data.data.user, {path:'/'});
        cookies.set('user_type', res.data.data.user_type, {path:'/'});
         
        var token = cookies.get('token');

      }).catch(err=>{
        // $(".laoder").hide();
        window.location = "/"
        console.log(err)
      })
    }
} 

function click(){
  cookies.remove("userType");
  var supplier = "supplier";
  cookies.set('userType', supplier, { path: '/' });
  userType=cookies.get('userType');  
  // alert(userType)                                        
  // window.location = "/signup"
  }

function Click1(){
  cookies.remove('userType');
  var buyer = "buyer";
  cookies.set('userType', buyer, { path: '/' });
  userType=cookies.get('userType');
  window.location = "signup"
  alert(userType)
  }



function Submit(){
  var token = cookies.get('token');
  var uuid = cookies.get('uuid');
  var year_founded = document.getElementById('year').value;
  var annual_revenue = document.getElementById('revenue').value;
  const selected = document.querySelectorAll('#department option:checked');
  var array = Array.from(selected).map(el => el.value);
  var busiess_type = document.getElementById('buss_type').value;
  // var brand_name = document.getElementById('brand_name').value;
  var comp_location = document.getElementById('city').value;
  var comp_name = document.getElementById('comp_name').value;
  var url = BASE_URL + "authentication/createsupplier/";

var config = {
  method: 'post',
  url: url,
  headers: {
    "Authorization": "Bearer " + token,
  },
  data:{
      user_s : uuid,
      year_founded : year_founded,
      annual_revenue: annual_revenue,
      department: array,
      busiess_type: busiess_type,
      comp_location:comp_location,
      comp_name:comp_name,

    }

};
console.log(config)
axios(config).then(res=>{
    console.log(res.data.data)
  cookies.set('uuid2', res.data.data.uuid, { path: '/' })
  cookies.set('token1', res.data.data.access, { path: '/' })
  document.getElementById('s2').className='st-two d-none';
  document.getElementById('s1').className='st-one  d-none'
  document.getElementById('s3').className='st-three'
}

).catch(err=>{
  console.error(err);
  // $(".laoder").hide(); 
// window.location = "/";
alert("something went wrong")
})

}


function brandSubmit(){
  var token = cookies.get('token');
  var uuid= cookies.get('uuid2');
  var brand_name = document.getElementById('brand_name').value;
  var brand_website = document.getElementById('brand_website').value;
  var url = BASE_URL + "authentication/createsupplier/";

var config = {
  method: 'patch',
  url: url,
  headers: {
    "Authorization": "Bearer " + token,
  }, 
  data:{
      uuid  : uuid,
      brand_name: brand_name,
      brand_webisite: brand_website,

    }

};
console.log(config)
axios(config).then(res=>{
    console.log(res.data.data)
  cookies.set('uuid2', res.data.data.uuid, { path: '/' })
  cookies.set('token', res.data.data.access, { path: '/' })
  
  // $(".laoder").hide(); 
  alert("success")
  window.location = "/login";
}

).catch(err=>{
  console.error(err);
  // $(".laoder").hide(); 
alert("something went wrong")

})

}

function SignupModal(props){
  const [show, setShow] = useState(false);
  const [showcat, setshowcat] = useState([])
  const [startDate, setStartDate] = useState(new Date());
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [years, setyear] = useState([(new Date()).getFullYear()]);

   


  useEffect(() => {
    const year=""
    setyear(Array.from(new Array(100),(val,index) => index+1 + 1950).reverse())
    axios.get(BASE_URL+'authentication/GetCategorysignup/')
    .then(res=>{  
       console.log("this is it")
       console.log(res.data.data)
       setshowcat(res.data.data) 
    }).catch(err=>{
       console.log(err)            
    }) 
    },[])

    return(
        <>
<Modal {...props} 
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered
         className="sign-modal-main">
      <Modal.Header  closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
        Sign up for Veniver
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body className="show-grid">
      <div className="signup-modal-main signup-modal__account-types">
        <div className="col-md-12 pd-0">
            <div className="sign-tabs-mn-2345">
              <Tabs>
                <TabList>
                  <Tab onClick={click}> <div  className="sign-tab-menu"> <i class="fas fa-user-tie"></i> supplier </div> </Tab>
                  <Tab onClick={Click1}> <div className="sign-tab-menu"> <i class="fas fa-store"></i> buyer </div> </Tab>
                  <Tab> <div className="sign-tab-menu"> <i class="fas fa-cog"></i> service providers</div> </Tab>
                </TabList>

                <TabPanel>
            
                 <section id="s1" className="st-one ">

                <section className="sign-d-1 ">
                  <div className="row">
                        <div className="container">
                            <div className="col-md-12 col-xs-12">
                                <div className="sig-text-1">
                                    <p> Ürünlerinizi ve marka profilinizi <span className="sign-text-1-span-2">  binlerce alıcıya sergileyerek </span> <span className="sign-text-1-span-1"> satışlarınızı arttırın! </span> </p>
                                    <h6> HEMEN ÜCRETSİZ TEDARİKÇİ PROFİLİNİZİ OLUŞTURUN. </h6>
                                </div>
                            </div>

                            <div className="col-md-12 col-xs-12">
                                <div className="signup-step-d">
                                    <ul>
                                      <li className="active-step">
                                        <div className="step-circle-d">
                                          <i className="d-none" class="fal fa-check"></i>
                                          <p className="d-b"> 1 </p>
                                        </div>
                                        <div className="step-text">
                                          <p> <span>/personal</span> BİLGİLER/info </p>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="step-circle-d">
                                          <p> 2 </p>
                                        </div>
                                        <div className="step-text">
                                          <p> <span>FİRMA </span> BİLGİLERİ </p>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="step-circle-d">
                                          <p> 3 </p>
                                        </div>
                                        <div className="step-text">
                                          <p> <span>MARKA</span> BİLGİLER </p>
                                        </div>
                                      </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    </section> 

                  <section className="signup-form-section ">
                  <Row> 
                        <Col md="6" xs="12">
                          <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                            <Form.Label>Adınız/Your name</Form.Label>
                            <Form.Control type="email" id="first_name" placeholder="Lütfen adınızı yazın..." />
                          </Form.Group>
                        </Col>
                        <Col md="6" xs="12">
                          <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                            <Form.Label>Soyadınız/Your last name</Form.Label>
                            <Form.Control type="email" id="last_name" placeholder="Lütfen soyadınızı yazın..." />
                          </Form.Group>
                        </Col>
                        <Col md="12" xs="12">
                          <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                            <Form.Label>E-mail Adresiniz/email</Form.Label>
                            <Form.Control type="email"   id="email" placeholder="Lütfen mail adresinizi yazın..." />
                          </Form.Group>
                        </Col>
                        <Col md="12" xs="12">
                          <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                            <Form.Label>Parolanız/password</Form.Label>
                            <Form.Control type="password" id="password" placeholder="Lütfen mail adresinizi yazın..." />
                          </Form.Group>
                        </Col>
                        <Col md="12" xs="12">
                          <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                            <Form.Label>confirm password</Form.Label>
                            <Form.Control type="password" id="password1" placeholder="Lütfen mail adresinizi yazın..." />
                          </Form.Group>
                        </Col>

                        <Col md="12" xs="12">
                          <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                            <Form.Label>Telefon Numaranız/mobile</Form.Label>
                            <Form.Control type="number" id="mobile" placeholder="Lütfen mail adresinizi yazın..." />
                          </Form.Group>
                        </Col>

                        <Col md="12">
                          <div class="form-group form-check signup-check">
                            <label class="form-check-label signup-lab">
                              <input class="form-check-input" type="checkbox" /> <span> Privacy Terms</span> ve <span> Kullanım Koşullarını/
                                  Terms of Use </span> okudum ve kabul ediyorum./I have read and accept.
                            </label>
                          </div>
                        </Col>

                        <Col md="12" xs="12">
                          <div className="signup-btn-d">
                              <button className="signup-btn" onClick={Func}> 
                              <span>  SONRAKİ /NEXT</span> ADIM <i class="fal fa-long-arrow-right"></i>
                              </button>
                          </div>
                        </Col>
                    </Row>
                  
                  </section>
                   </section>

                 <section id="s2" className="st-two d-none">

                   <section className="sign-d-1">
                  <div className="row">
                        <div className="container">
                            <div className="col-md-12 col-xs-12">
                                <div className="sig-text-1">
                                    <p> Ürünlerinizi ve marka profilinizi <span className="sign-text-1-span-2">  binlerce alıcıya sergileyerek </span> <span className="sign-text-1-span-1"> satışlarınızı arttırın! </span> </p>
                                    <h6> HEMEN ÜCRETSİZ TEDARİKÇİ PROFİLİNİZİ OLUŞTURUN. </h6>
                                </div>
                            </div>

                            <div className="col-md-12 col-xs-12">
                                <div className="signup-step-d">
                                    <ul>
                                      <li >
                                        <div className="step-circle-d">
                                          <i className="d-none" class="fal fa-check"></i>
                                          <p className="d-b"> 1 </p>
                                        </div>
                                        <div className="step-text">
                                          <p> <span>PERSONAL</span> INFORMATIONS </p>
                                        </div>
                                      </li>
                                      <li className="active-step">
                                        <div className="step-circle-d">
                                          <p> 2 </p>
                                        </div>
                                        <div className="step-text">
                                          <p> <span>company </span> INFORMATIONS </p>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="step-circle-d">
                                          <p> 3 </p>
                                        </div>
                                        <div className="step-text">
                                          <p> <span>BRAND</span> INFORMATIONS </p>
                                        </div>
                                      </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    </section> 

                    <section className="signup-form-section ">
                    <Row> 
                        <Col md="6" xs="12">
                          <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control type="email" id="comp_name" placeholder="Lütfen  firma adınızı yazın..." />
                          </Form.Group>
                        </Col>
                        <Col md="6" xs="12">
                        <div class="form-group signup-f-group">
                        <Form.Group controlId="exampleForm.ControlSelect1" >
                                                <Form.Label>Year Founded</Form.Label>
                                                <Form.Control as="select" id="year">
                                                {
       years.reverse().map((year, index) => {
         return <option key={`year${index}`} value={year}>{year}</option>
       })
     }
    
   
                                         </Form.Control>
                                                </Form.Group>
                        </div>
                        </Col>

                        <Col md="6" xs="12">
                        <div class="form-group signup-f-group">
                        <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label> Annual Gross Revenue </Form.Label>
                                                <Form.Control as="select" id="revenue">
                                                <option value="0M$-5M$">0M$-5M$</option>
                                                <option value="6M$-10M$">6M$-10M$</option>
                                                <option value="11M$-15M$">11M$-15M$</option>
                                                </Form.Control>
                          </Form.Group>
                        </div>
                        </Col>

                        <Col md="6" xs="12">
                        <div class="form-group signup-f-group">
                        <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label> Select the Department(s) that best describes your industry. </Form.Label>
                                                <Form.Control as="select" multiple="true" id="department">
                                                {showcat.map(cat=>(
                                                <option value={cat.uuid}>{cat.name}</option>))}
                                                
                                                </Form.Control>
                                            </Form.Group>
                        </div>
                        </Col>

                        <Col md="6" xs="12">
                        <div class="form-group signup-f-group">
                        <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Which best describes your business type.</Form.Label>
                                                <Form.Control as="select" id="buss_type">
                                                <option value="manufacturer">Manufacturer</option>
                                                <option value="broker">Broker</option>
                                                <option value="reseller">Reseller</option>
                                                <option value="other">Other</option>
                                                </Form.Control>

                                            </Form.Group>
                        </div>
                        </Col>

                        <Col md="6" xs="12">
                          <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                            <Form.Label>Your Company Location</Form.Label>
                            <Form.Control type="email"  id="city" placeholder="Lütfen  firma adınızı yazın..." />
                          </Form.Group>
                        </Col>

                        <Col md="12" xs="12">
                          <div className="signup-btn-d">
                              <button className="signup-btn" onClick={Submit}> 
                              <span>  next </span> ADIM <i class="fal fa-long-arrow-right"></i>
                              </button>
                          </div>
                        </Col>
                        
                    </Row>
                   
                    </section>
                 </section>

                  <section id="s3" className="st-three d-none" >
                     <section className="sign-d-1">
                      <div className="row">
                        <div className="container">
                            <div className="col-md-12 col-xs-12">
                                <div className="sig-text-1">
                                    <p> Your products and brand profile <span className="sign-text-1-span-2">  exhibiting to thousands of buyers </span> <span className="sign-text-1-span-1"> increase your sales! </span> </p>
                                    <h6> CREATE YOUR FREE SUPPLIER PROFILE NOW. </h6>
                                </div>
                            </div>

                            <div className="col-md-12 col-xs-12">
                                <div className="signup-step-d">
                                    <ul>
                                      <li >
                                        <div className="step-circle-d">
                                          <i className="d-none" class="fal fa-check"></i>
                                          <p className="d-b"> 1 </p>
                                        </div>
                                        <div className="step-text">
                                          <p> <span>KİŞİSEL</span> BİLGİLER </p>
                                        </div>
                                      </li>
                                      <li>
                                        <div className="step-circle-d">
                                          <p> 2 </p>
                                        </div>
                                        <div className="step-text">
                                          <p> <span>FİRMA </span> BİLGİLERİ </p>
                                        </div>
                                      </li>
                                      <li className="active-step">
                                        <div className="step-circle-d">
                                          <p> 3 </p>
                                        </div>
                                        <div className="step-text">
                                          <p> <span>MARKA</span> BİLGİLER </p>
                                        </div>
                                      </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    </section>
                  <section className="signup-form-section">
                  <Row> 
                        <Col md="12" xs="12">
                          <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                            <Form.Label>Brand name</Form.Label>
                            <Form.Control type="email" id="brand_name" placeholder="Lütfen  firma adınızı yazın..." />
                          </Form.Group>
                        </Col>

                        <Col md="6" xs="12">
                          <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                            <Form.Label>Brand website</Form.Label>
                            <Form.Control type="email" id="brand_website" placeholder="Lütfen  firma adınızı yazın..." />
                          </Form.Group>
                        </Col>

                        {/* <Col md="6" xs="12">
                          <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                            <Form.Label>Marka Adı</Form.Label>
                            <Form.Control type="email" placeholder="Lütfen  firma adınızı yazın..." />
                          </Form.Group>
                        </Col> */}
                      
                        <Col md="12" xs="12">
                          <div className="signup-btn-d">
                              <button className="signup-btn" onClick={brandSubmit}> 
                              <span>  SONRAKİ </span> ADIM <i class="fal fa-long-arrow-right"></i>
                              </button>
                          </div>
                        </Col>
                        
                    </Row>
                  
                  </section>     
                   </section>
  

                </TabPanel>
                <TabPanel>
                  <h2> content 2</h2>
                </TabPanel>
                <TabPanel>
                  <h2>content 3</h2>
                </TabPanel>
              </Tabs>
            </div>
        </div>

    </div>
      </Modal.Body>
    
    </Modal>

 {/* <Modal {...props} 
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Sign up for Tayuss
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
      <div className="signup-modal-main signup-modal__account-types">

<NavLink to=""  className="signup-modal__account-type signup-modal__account-type--supplier" data-signup="supplier" onClick={Click}>
  <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 100 100" fill="none" className="signup-modal__icon">
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x={32} y={89} width={41} height={5}>
      <path fillRule="evenodd" clipRule="evenodd" d="M32.2959 89.8169H72.7915V93.1972H32.2959" fill="white" />
    </mask>
    <g mask="url(#mask0)">
      <path fillRule="evenodd" clipRule="evenodd" d="M72.7915 91.507C72.7915 90.5735 63.7264 89.8169 52.5437 89.8169C41.361 89.8169 32.2959 90.5735 32.2959 91.507C32.2959 92.4406 41.361 93.1972 52.5437 93.1972C63.7264 93.1972 72.7915 92.4406 72.7915 91.507Z" fill="#E3E6ED" />
    </g>
    <path fillRule="evenodd" clipRule="evenodd" d="M23 16.1975L63.6205 7.22717L76.7422 13.1316L36.6923 22.3291L23 16.1975Z" fill="white" />
    <path fillRule="evenodd" clipRule="evenodd" d="M23 16.1975L63.6205 7.22717L76.7422 13.1316L36.6923 22.3291L23 16.1975V16.1975Z" stroke="#163968" strokeWidth={2} strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M36.6923 80.2394L23 74.1078V16.1975L36.6923 22.3292V80.2394Z" fill="#E3E6ED" />
    <path fillRule="evenodd" clipRule="evenodd" d="M36.6923 80.2369L23 74.1055V16.1975L36.6923 22.3289V80.2369V80.2369Z" stroke="#163968" strokeWidth={2} strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M76.7423 71.0418L36.6924 80.2394V22.3291L76.7423 13.1316V71.0418Z" fill="white">
    </path>
    <path fillRule="evenodd" clipRule="evenodd" d="M75.8704 43.3753C70.438 54.9785 65.1151 56.1217 53.9655 59.7254C42.8159 63.3292 36.8389 72.0825 36.8389 72.0825L37.4489 55.4064C37.4489 55.4064 43.4259 46.653 54.5752 43.0493C65.7248 39.4456 71.048 38.3024 76.4804 26.6992L75.8704 43.3753Z" fill="#006FCF" />
    <path fillRule="evenodd" clipRule="evenodd" d="M76.7423 71.0418L36.6924 80.2394V22.3291L76.7423 13.1316V71.0418V71.0418Z" stroke="#163968" strokeWidth={2} strokeLinejoin="round" />
    <path d="M62.823 39.1859L57.4248 58.3808" stroke="white" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M69.1457 34.0276L62.9688 55.9735" stroke="white" strokeWidth={3} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M36.7764 54.7129C36.7764 54.7129 43.0731 46.6402 54.2224 43.0365C65.372 39.4328 71.3323 38.3127 76.7647 26.7092" stroke="#163968" strokeWidth={2} strokeLinejoin="round" />
    <path d="M36.5088 72.0704C36.5088 72.0704 42.4629 63.3164 53.6125 59.7127C64.7621 56.1089 71.407 54.9889 76.8394 43.3854" stroke="#163968" strokeWidth={2} strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M71.6076 64.6938L60.9961 67.511V65.4671L71.6076 62.6499V64.6938Z" fill="#B4BAC7">
    </path>
    <path fillRule="evenodd" clipRule="evenodd" d="M67.2461 68.4858L60.9961 70.1439V68.308L67.2461 66.6499V68.4858Z" fill="#B4BAC7">
    </path>
  </svg>
  <div className="signup-modal__account-text">
    <div className="signup-modal__account-name">Satıcılar İçin</div>
    <div className="signup-modal__account-description">I sell products to wholesale buyers</div>
  </div>
</NavLink>
<NavLink to="/signup" className="signup-modal__account-type signup-modal__account-type--buyer" data-signup="buyer" onClick={Click1} >
  <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 100 100" fill="none" className="signup-modal__icon">
    <rect x={21} y={40} width={58} height={47} rx={1} fill="white" stroke="#163968" strokeWidth={2} />
    <path d="M54 73L66 61" stroke="#22304F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M55 66L59 62" stroke="#22304F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M61 72L65 68" stroke="#22304F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <rect x={27} y={56} width={14} height={31} fill="#E3E6ED" stroke="#163968" strokeWidth={2}>
    </rect>
    <rect x={47} y={56} width={26} height={18} fill="#E3E6ED" stroke="#22304F" strokeWidth={2}>
    </rect>
    <path d="M66.3982 56L61 75.1949" stroke="white" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M72.1769 52L66 73.9459" stroke="white" strokeWidth={3} strokeLinecap="square" strokeLinejoin="round" />
    <rect x={47} y={56} width={26} height={18} stroke="#163968" strokeWidth={2} />
    <path d="M72.0539 14.41L72.0804 14.4629L72.113 14.5122L72.9478 13.9617C72.113 14.5122 72.113 14.5123 72.1131 14.5125L72.1136 14.5132L72.1155 14.5161L72.1232 14.5277L72.1534 14.5735L72.2712 14.7522L72.7184 15.431C73.1038 16.0159 73.6543 16.8518 74.3149 17.8558C75.6362 19.8639 77.3977 22.5439 79.1592 25.2322C80.9209 27.9208 82.6816 30.6164 84.0015 32.6559C84.6617 33.6762 85.2099 34.5296 85.5923 35.1351C85.784 35.4387 85.9309 35.675 86.0286 35.8372C86.0332 35.8448 86.0376 35.8521 86.0418 35.8592C85.9911 39.7145 84.7687 42.411 83.0605 44.1477C81.3081 45.9294 78.9658 46.7826 76.6087 46.7826C73.2773 46.7826 70.4162 45.1495 68.7457 42.6376L67.913 41.3854L67.0804 42.6376C65.4099 45.1495 62.5488 46.7826 59.2174 46.7826C55.886 46.7826 53.0249 45.1495 51.3544 42.6376L50.5217 41.3854L49.6891 42.6376C48.0186 45.1495 45.1575 46.7826 41.8261 46.7826C38.4947 46.7826 35.6336 45.1495 33.9631 42.6376L33.1304 41.3854L32.2977 42.6376C30.6273 45.1495 27.7662 46.7826 24.4348 46.7826C22.0777 46.7826 19.7353 45.9294 17.983 44.1477C16.2748 42.411 15.0524 39.7145 15.0016 35.8592C15.0059 35.8521 15.0103 35.8448 15.0149 35.8372C15.1126 35.675 15.2595 35.4387 15.4512 35.1351C15.8336 34.5296 16.3817 33.6762 17.042 32.6559C18.3619 30.6164 20.1225 27.9208 21.8843 25.2322C23.6457 22.5439 25.4073 19.8639 26.7286 17.8558C27.3892 16.8518 27.9397 16.0159 28.3251 15.431L28.7723 14.7522L28.8901 14.5735L28.9203 14.5277L28.9279 14.5161L28.9299 14.5132L28.9303 14.5125C28.9305 14.5123 28.9305 14.5122 28.0957 13.9617L28.9305 14.5122L28.963 14.4629L28.9896 14.41C29.116 14.1578 29.3723 14 29.6522 14H50.5217H71.3913C71.6711 14 71.9275 14.1578 72.0539 14.41Z" fill="#006FCF" stroke="#163968" strokeWidth={2} />
    <rect x={35} y={12} width={30} height={10} rx={1} fill="white" stroke="#163968" strokeWidth={2} />
    <rect x={40} y={16} width={20} height={2} rx={1} fill="#006FCF" />
    <path d="M33.9631 42.6375L33.1304 41.3854L32.2977 42.6375C30.6273 45.1494 27.7662 46.7826 24.4348 46.7826C22.0777 46.7826 19.7353 45.9294 17.983 44.1477C16.3877 42.5257 15.2161 40.0668 15.0269 36.6086H86.0166C85.8273 40.0668 84.6557 42.5257 83.0605 44.1477C81.3081 45.9294 78.9658 46.7826 76.6087 46.7826C73.2773 46.7826 70.4162 45.1494 68.7457 42.6375L67.913 41.3854L67.0804 42.6375C65.4099 45.1494 62.5488 46.7826 59.2174 46.7826C55.886 46.7826 53.0249 45.1494 51.3544 42.6375L50.5217 41.3854L49.6891 42.6375C48.0186 45.1494 45.1575 46.7826 41.8261 46.7826C38.4947 46.7826 35.6336 45.1494 33.9631 42.6375Z" fill="#006FCF" stroke="#163968" strokeWidth={2} />
    <path d="M6 87H94.1053" stroke="#163968" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
  <div className="signup-modal__account-text">
    <div className="signup-modal__account-name">Alıcılar İçin</div>
    <div className="signup-modal__account-description">I purchase products at wholesale</div>
  </div>
</NavLink>

    
    </div>
      </Modal.Body>
    
    </Modal> */}



</>
    );
}

export default SignupModal
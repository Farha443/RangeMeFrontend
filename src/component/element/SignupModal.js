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
import Swal from 'sweetalert2';
import Select from 'react-select';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


const axios = require('axios');
const cookies = new Cookies();
var userType='';
var value_tested = '';//global variable  
var country_value = ''
var region_value = ''

function click(){
  cookies.remove("userType");
  var supplier = "supplier";
  cookies.set('userType', supplier, { path: '/' });
  userType=cookies.get('userType');  
  }

function Click1(){
  cookies.remove('userType');
  var buyer = "buyer";
  cookies.set('userType', buyer, { path: '/' });
  userType=cookies.get('userType');
  }

function Click2(){
  cookies.remove('userType');
  var service = "service provider";
  cookies.set('userType', service, { path: '/' });
  userType=cookies.get('userType');
  }
function Func() {
  var first_name = document.getElementById('first_name').value;
  var last_name = document.getElementById('last_name').value;
  var email = document.getElementById('email').value;
  var mobile = document.getElementById('mobile').value;
  var password = document.getElementById('password').value;
  var confirm_password = document.getElementById('password1').value;
  var terms =  document.querySelector('input[type=checkbox]:checked')
  var userType = cookies.get('userType');


  // if(mobile !== "undefined"){
  //   var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  //   if(!mobile.match(phoneno)){
  //     alert("Please enter correct phone number")
  //   }
  // }

  if (typeof password !== "undefined" && typeof confirm_password !== "undefined") {
    if (password!= confirm_password) {
      // isValid = false;
      // errors["password"] = "Passwords don't match.";
      alert("Passwords do not match.")
      // window.location = "/signup"
    }
} 

  if (typeof email !== "undefined") {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  
    if (!pattern.test(email)) {
        alert("Enter a valid email")
    }
  
  }
  if(terms==null){
    alert("Please agree to the terms and conditions first. ");
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

      }).catch(err=>{
        // $(".laoder").hide();
        
        document.getElementById('s2').className='st-one';
        console.log(err)
      })
    }
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
  // cookies.set('token1', res.data.data.access, { path: '/' })
  document.getElementById('s2').className='st-two d-none';
  document.getElementById('s1').className='st-one  d-none'
  document.getElementById('s3').className='st-three'
}

).catch(err=>{
document.getElementById('s2').className='st-two';
alert("something went wrong");
})

}

function brandSubmit(){
  var token = cookies.get('token');
  var uuid= cookies.get('uuid2');
  var brand_name = document.getElementById('brand_name').value;
  var brand_website = document.getElementById('brand_website').value;
  var url = BASE_URL + "authentication/createsupplier/";
  // if (brand_website.indexOf("http://") == 0 || brand_website.indexOf("https://") == 0 || brand_website==="") {
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
      cookies.set('uuid2', res.data.data.uuid, { path: '/' });
      cookies.set('token', res.data.data.access, { path: '/' });

      Swal.fire({
        title: 'Registeration Successfull',
        text: 'Redirecting...',
        timerProgressBar: true,
        type: 'success',
        timer: 3000,
        buttons: false,
    })
    .then(() => {
      window.location = "/login";
        // dispatch(redirect('/login'));
    })
      // window.location = "/login";
    }

    ).catch(err=>{
      console.error(err);
      // $(".laoder").hide(); 
      document.getElementById('s3').className='st-three'
    alert("something went wrong")
    })
  // }else{
  //   alert("Please Enter a valid URL");
  // }

}


function submitBuyer() {
  var first_name = document.getElementById('first_name').value;
  var last_name = document.getElementById('last_name').value;
  var email = document.getElementById('email').value;
  var mobile = document.getElementById('mobile').value;
  var password = document.getElementById('password').value;
  var confirm_password = document.getElementById('password1').value;
  var comp_name = document.getElementById('comp_name').value;
  var terms =  document.querySelector('input[type=checkbox]:checked')
  var userType = cookies.get('userType');


  if (typeof password !== "undefined" && typeof confirm_password !== "undefined") {
    if (password!= confirm_password) {
      alert("Passwords do not match.")
    }
} 

  if (typeof email !== "undefined") {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  
    if (!pattern.test(email)) {
        alert("Enter a valid email")
    }
  
  }
  if(terms==null){
    alert("Please agree to the terms and conditions first. ");
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
          comp_name:comp_name,

      }).then(res=>{
        
        document.getElementById('b2').className='st-two';
        document.getElementById('b1').className='st-one d-none'
        document.getElementById('b3').className='st-three d-none'
        cookies.set('uuid', res.data.data.uuid, { path: '/' })
        cookies.set('token', res.data.data.access, { path: '/' })

        
      }).catch(err=>{
        document.getElementById('b2').className='st-one';
        alert("something went wrong")
      })
    }
} 

function BuyerStep1() {
  // debugger
  var comp_type = document.getElementById('comp_type').value;
  var job_title = document.getElementById('job_title').value;
  var buyers = document.getElementById('buyers').value;
  var store_count = document.getElementById('store_count').value;
  var comp_website = document.getElementById('comp_website').value;
  var buss_address = document.getElementById('buss_address').value;
  var sample_instruction = document.getElementById('sample_instruction').value;
  var url = BASE_URL + "authentication/createbuyer/";
  var token = cookies.get('token');
  var uuid = cookies.get('uuid');
  var config = {
      method: 'post',
      url: url,
      headers: {
        "Authorization": "Bearer " + token,
      },
      data:{
          user_b : uuid,
          comp_type : comp_type,
          job_title: job_title,
          buyers:buyers,
          store_count: store_count,
          comp_website: comp_website,
          buss_address: buss_address,
          sample_instruction:sample_instruction,

        }
  
    };
    console.log(config)

    axios(config).then(res=>{
      cookies.set('uuid1', res.data.data.uuid, { path: '/' })
      document.getElementById('b2').className='st-two d-none';
      document.getElementById('b1').className='st-one  d-none'
      document.getElementById('b3').className='st-three';

    }
    
    ).catch(err=>{
      document.getElementById('b2').className='st-two';
    })
}



function SignupModal(props){
  const [show, setShow] = useState(false);
  const [showcat, setshowcat] = useState([])
  const [startDate, setStartDate] = useState(new Date());
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [years, setyear] = useState([(new Date()).getFullYear()]);
  const [sO,setSO ] = useState([]);
  const [category, setCategory]= useState([]);
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [select, setSelect] = useState('');
  const [countryService, setCountryService] = useState('');
  const [regionService, setRegionService] = useState('');
  const [sercategory, setServiceCategory]= useState([]);
  const [changecat, setChangeCat]= useState([]);
  const [change, setChange]= useState([]);

  function handleChange(selectedOption){
    setSO(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };
   
  function ChangeSelect(e){
    $('input:checked').prop('checked',false);
    var url1 = BASE_URL+'authentication/service-category/?uuid='+e.target.value;
    var config1 = {
            method: 'get',
            url: url1,
          };
    axios(config1)
      .then(re => {
        setChangeCat(re.data.data)
      })
      .catch(err => {
        console.log(err);
      })
    }

  useEffect(() => {
    const year=""
    setyear(Array.from(new Array(100),(val,index) => index+1 + 1950).reverse())
    axios.get(BASE_URL+'authentication/GetCategorysignup/')
    .then(res=>{  
       setshowcat(res.data.data) 
    }).catch(err=>{
       console.log(err)            
    }) 

    axios.get(BASE_URL +'authentication/getcategory/').then(res=>{
      setCategory(res.data.data)
  }).catch(err=>{
      console.log(err)            
  })

  axios.get(BASE_URL +'authentication/service-category').then(res=>{
    setServiceCategory(res.data.data)
}).catch(err=>{
    console.log(err)            
})
    },[])


const selectCountry  = val => {
  setCountry(val );
}

const selectRegion  = val =>{
  setRegion(val );
  
}
const changefunction = e =>{
  //   debugger
  setSelect(e.target.value);
  
}

function servicechange(f){
  // debugger
var val = f.target.value
setChange(val);
value_tested = change
return value_tested
}

const selectCountryService  = val => {
  setCountryService(val );
  country_value = val
  return country_value
}

const selectRegionService  = val =>{
  setRegionService(val );
  region_value = val
  return region_value
}

function BuyerStep2() {
  var company_logo = document.getElementById('comp_logo').files[0];
  var company_description = document.getElementById('comp_desc').value;
  var b_category = Array.from(sO).map(el => el.value);
  var country = document.getElementById('country').value;
  var selectradio = document.querySelector('input[name = "cover"]:checked').value;
            if(selectradio === "true" ){
        
                var region = "all"
            }
            else{
                var region = document.getElementById('region').value;
            }
  var url = BASE_URL + "authentication/createbuyer/";
  var uuid = cookies.get('uuid1');
  var token = cookies.get("token")
    
    var config = {

      method: 'patch',
      url: url,
      headers: {
        "Authorization": "Bearer " + token,
        "Content-Type": "application/json",
      },
      data:{
        uuid : uuid,
        company_logo:company_logo,
        company_description:company_description,
        b_category:b_category,
        country:country,
        region:region,
    }
    };
  
    axios(config).then(res=>{
      Swal.fire({
        title: 'Registeration Successfull',
        text: 'Redirecting...',
        timerProgressBar: true,
        type: 'success',
        timer: 3000,
        buttons: false,
    })
    .then(() => {
      window.location = "/login";
        // dispatch(redirect('/login'));
    })
    }
    
    ).catch(err=>{
      alert("something went wrong")
    })    

}

function submitService() {
  var first_name = document.getElementById('first_name').value;
  var last_name = document.getElementById('last_name').value;
  var email = document.getElementById('email').value;
  var mobile = document.getElementById('mobile').value;
  var password = document.getElementById('password').value;
  var confirm_password = document.getElementById('password1').value;
  var comp_name = document.getElementById('comp_name').value;
  var terms =  document.querySelector('input[type=checkbox]:checked')
  var userType = cookies.get('userType');


  if (typeof password !== "undefined" && typeof confirm_password !== "undefined") {
    if (password!= confirm_password) {
      alert("Passwords do not match.")
    }
} 

  if (typeof email !== "undefined") {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  
    if (!pattern.test(email)) {
        alert("Enter a valid email")
    }
  
  }
  if(terms==null){
    alert("Please agree to the terms and conditions first. ");
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
          comp_name:comp_name,

      }).then(res=>{
        
        document.getElementById('sp2').className='st-two';
        document.getElementById('sp1').className='st-one d-none'
        document.getElementById('sp3').className='st-three d-none'
        cookies.set('uuid', res.data.data.uuid, { path: '/' })
        cookies.set('token', res.data.data.access, { path: '/' })

        
      }).catch(err=>{
        document.getElementById('sp2').className='st-one';
        alert("something went wrong")
      })
    }
}

function ServiceStep1(){
  var comp_location = document.getElementById('comp_location').value;
  var website = document.getElementById('website').value;
  var url = BASE_URL + "authentication/createserprovider/";
  var token = cookies.get('token');
  var uuid = cookies.get('uuid');
  var userType = cookies.get('userType');
var config = {
  method: 'post',
  url: url,
  headers: {
    "Authorization": "Bearer " + token,
  },
  data:{
      user_sv : uuid,
      comp_location:comp_location,
      website:website

    }

};
console.log(config)
axios(config).then(res=>{
  cookies.set('serviceuuid', res.data.data.uuid, { path: '/' });
      document.getElementById('sp2').className='st-two d-none';
      document.getElementById('sp1').className='st-one  d-none'
      document.getElementById('sp3').className='st-three';
}

).catch(err=>{
  document.getElementById('sp2').className='st-two';
})
}

function ServiceStep2(){
  // debugger
  var array = []
  var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
  for (var i = 0; i < checkboxes.length; i++) {
      array.push(checkboxes[i].value)
  }
  // console.log(value_tested)
  // var service_area = value_tested


  if (value_tested === "true"){
    var service_area = country_value+"/"+region_value 
  }
  else{
    var service_area = value_tested
  }
  var url = BASE_URL + "authentication/createserprovider/";
  var token = cookies.get('token');
  var uuid = cookies.get('serviceuuid');
  var userType = cookies.get('userType');
  var user_uuid = cookies.get('uuid');
  var config = {
    method: 'patch',
    url: url,
    headers: {
      "Authorization": "Bearer " + token,
    },
  data:{
    brandcolor:"",
    website_url:'',
    short_des:'',
    full_des:'',
    company_logo:"",
    service :uuid,
    user_sv:user_uuid,
    service_area:service_area,
    s_category : array,
      
    }

};
console.log(config)
axios(config).then(res=>{
  Swal.fire({
    title: 'Registeration Successfull',
    text: 'Redirecting...',
    timerProgressBar: true,
    type: 'success',
    timer: 3000,
    buttons: false,
})
.then(() => {
  window.location = "/login";
})
}

).catch(err=>{
  alert("something went wrong")
})  
}

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
                  <Tab onClick={click}> <div  className="sign-tab-menu"> <i class="fas fa-user-tie"></i> Tedarikçi </div> </Tab>
                  <Tab onClick={Click1}> <div className="sign-tab-menu"> <i class="fas fa-store"></i> Alıcı</div> </Tab>
                  <Tab onClick={Click2}> <div className="sign-tab-menu"> <i class="fas fa-cog"></i> Servis providers</div> </Tab>
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
                            <Form.Control type="text" id="first_name" placeholder="Lütfen adınızı yazın..." />
                          </Form.Group>
                        </Col>
                        <Col md="6" xs="12">
                          <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                            <Form.Label>Soyadınız/Your Soyad</Form.Label>
                            <Form.Control type="text" id="last_name" placeholder="Lütfen soyadınızı yazın..." />
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
                            <Form.Label>Cep Telefonu</Form.Label>
                            <Form.Control type="text" id="mobile" placeholder="Lütfen mail adresinizi yazın..." />
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
                                          <p> <span>Marka Adı/</span> INFORMATIONS </p>
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
                            <Form.Label>Şirket Adı</Form.Label>
                            <Form.Control type="text" id="comp_name" placeholder="Lütfen  firma adınızı yazın..." />
                          </Form.Group>
                        </Col>
                        <Col md="6" xs="12">
                        <div class="form-group signup-f-group">
                        <Form.Group controlId="exampleForm.ControlSelect1" >
                                                <Form.Label> Kuruluş Tarihi</Form.Label>
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
                                                <Form.Label> Annual Gross Yıllık Ciro </Form.Label>
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
                            <Form.Label>Your Şirket Adresi</Form.Label>
                            <Form.Control type="text"  id="city" placeholder="Lütfen  firma adınızı yazın..." />
                          </Form.Group>
                        </Col>

                        <Col md="12" xs="12">
                          <div className="signup-btn-d">
                              <button className="signup-btn" onClick={Submit}> 
                              <span>  Sonraki  </span> ADIM <i class="fal fa-long-arrow-right"></i>
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
                                    <p> Your products and Marka Adı profile <span className="sign-text-1-span-2">  exhibiting to thousands of buyers </span> <span className="sign-text-1-span-1"> increase your sales! </span> </p>
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
                            <Form.Label>Marka Adı name</Form.Label>
                            <Form.Control type="text" id="brand_name" placeholder="Lütfen  firma adınızı yazın..." />
                          </Form.Group>
                        </Col>

                        <Col md="6" xs="12">
                          <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                            <Form.Label>Marka Adı website</Form.Label>
                            <Form.Control type="text" id="brand_website" placeholder="Lütfen  firma adınızı yazın..." />
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
                  <section  id="b1" className="st-one ">

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
                                  <li className="active-step">
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
                        <Form.Label>Adınız</Form.Label>
                        <Form.Control type="text" id="first_name" placeholder="Lütfen adınızı yazın..." />
                      </Form.Group>
                    </Col>
                    <Col md="6" xs="12">
                      <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                        <Form.Label>Soyadınız</Form.Label>
                        <Form.Control type="text" id="last_name" placeholder="Lütfen soyadınızı yazın..." />
                      </Form.Group>
                    </Col>
                    <Col md="12" xs="12">
                      <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                        <Form.Label>E-mail Adresiniz</Form.Label>
                        <Form.Control type="email" id="email" placeholder="Lütfen mail adresinizi yazın..." />
                      </Form.Group>
                    </Col>
                    <Col md="12" xs="12">
                      <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                        <Form.Label>Parolanız</Form.Label>
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
                        <Form.Label>Telefon Numaranız</Form.Label>
                        <Form.Control type="text" id="mobile" placeholder="Lütfen mail adresinizi yazın..." />
                      </Form.Group>
                    </Col>

                    <Col md="12" xs="12">
                          <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control type="text" id="comp_name" placeholder="Company name" />
                          </Form.Group>
                        </Col>

                    <Col md="12">
                      <div class="form-group form-check signup-check">
                        <label class="form-check-label signup-lab">
                          <input class="form-check-input" type="checkbox" /> <span> Gizlilik Şartları </span> ve <span> Kullanım Koşullarını </span> okudum ve kabul ediyorum.
                        </label>
                      </div>
                    </Col>

                    <Col md="12" xs="12">
                      <div className="signup-btn-d">
                          <button className="signup-btn" onClick={submitBuyer}> 
                          <span>  SONRAKİ </span> ADIM <i class="fal fa-long-arrow-right"></i>
                          </button>
                      </div>
                    </Col>
                  </Row>

                  </section>
                  </section>
                  
                  <section id="b2" className="st-two d-none">

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
                                          <p> <span>KİŞİSEL</span> BİLGİLER </p>
                                        </div>
                                      </li>
                                      <li className="active-step">
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
                        <div class="form-group signup-f-group">
                          <label for="comp_type">Company type</label>
                          <select class="form-control" id="comp_type">
                          <option value="company owned">Company Owened</option>
                          <option value="distributor">Distributor</option>
                          <option value="franchiser"> Franchiser</option>
                          <option value="importer">Importer</option>
                          </select>
                        </div>
                        </Col>

                        <Col md="6" xs="12">
                          <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control type="text" id="job_title" placeholder="Job title" />
                          </Form.Group>
                        </Col>

                        <Col md="6" xs="12">
                        <div class="form-group signup-f-group">
                          <label for="buyers">Alıcı Sayısı</label>
                          <select class="form-control" id="buyers">
                          <option value="1-2">1-2</option>
                          <option value="3-10">3-10</option>
                          <option value="11-20">11-20</option>
                          <option value="21-50">21-50</option>
                          </select>
                        </div>
                        </Col>

                        <Col md="6" xs="12">
                        <div class="form-group signup-f-group">
                          <label for="store_count">Store count</label>
                          <select class="form-control" id="store_count">
                          <option value="1-2">1-2</option>
                          <option value="3-10">3-10</option>
                          <option value="11-20">11-20</option>
                          <option value="21-50">21-50</option>
                          </select>
                        </div>
                        </Col>

                        <Col md="6" xs="12">
                          <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                            <Form.Label>Company website</Form.Label>
                            <Form.Control type="text" id="comp_website" placeholder="www.abc.com" />
                          </Form.Group>
                        </Col>

                        <Col md="6" xs="12">
                          <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                            <Form.Label>Bussiness address</Form.Label>
                            <Form.Control type="text" id="buss_address" placeholder="Lütfen  firma adınızı yazın..." />
                          </Form.Group>
                        </Col>

                        <Col md="12" xs="12">
                          
                        <Form.Group className="signup-f-group" controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Sample instruction</Form.Label>
                          <Form.Control as="textarea" rows={3} id="sample_instruction"  />
                        </Form.Group>
                        </Col>



                        <Col md="12" xs="12">
                          <div className="signup-btn-d">
                              <button className="signup-btn" onClick={BuyerStep1}> 
                              <span>  SONRAKİ </span> ADIM <i class="fal fa-long-arrow-right"></i>
                              </button>
                          </div>
                        </Col>
                        
                    </Row>

                    </section>
                    </section>

                  <section id="b3" className="st-three d-none" >
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
                          <Col md="6" xs="12">
                            <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                              <Form.Label>Choose file</Form.Label>
                              <Form.Control type="file" id="comp_logo" />
                            </Form.Group>
                          </Col>

                          <Col md="6" xs="12">
                            <div className="logo-right-text-01">
                                <div>
                                <h5> Company Logo</h5>
                                <p> Images must be at least 800 x 800px file formats JPG,PNG,SVG  </p>
                                </div>
                            </div>
                          </Col>

                          <Col md="12" xs="12">
                            <Form.Group className="signup-f-group" controlId="exampleForm.ControlTextarea1">
                              <Form.Label>Company Description</Form.Label>
                              <Form.Control as="textarea" id="comp_desc" rows={3} />
                            </Form.Group>
                          </Col>


                            <Col md="6" className="m-auto">

                            <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Ürün Kategorisi seç </Form.Label>
                            <Select
                            id="select_category"
                            isMulti
                            name="colors"
                            value={sO}
                            onChange={handleChange}
                            options={category}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            />
                            </Form.Group>
                            </Col>

                          <Col md="6" xs="12">
                          <div class="form-group signup-f-group">
                          <Form.Label>Choose your country </Form.Label>
                            <CountryDropdown id="country" 
                            value={country}
                            defaultOptionLabel="Ülke Seçiniz"
                            onChange={(val) => selectCountry(val)} />
                            
                          </div>
                          </Col>

                          <Col md="6" >
                              <div className="mb-3 sign-radio">
                              <label htmlFor="basic-url" className="lb">Do you cover all regions within your country</label>
                                <Form.Check
                                  inline
                                  value="true"
                                  label="Event"
                                  name="cover"
                                  type="radio"
                                  id="1"
                                  onChange={changefunction} 
                                />
                                <Form.Check
                                  inline
                                  value="false"
                                  label="hayer"
                                  name="cover"
                                  type="radio"
                                  id="2"
                                  onChange={changefunction}
                                />                    
                              </div>
                          </Col>
                          {select==="false"?
                          <Col md="6" xs="12">
                          <div class="form-group signup-f-group">
                            <label for="sel1">specify state of regions</label>
                            <RegionDropdown
                            country={country}
                            value={region}
                            onChange={(val) => selectRegion(val)} />
                          </div>
                          </Col>:""}

                        
                          <Col md="12" xs="12">
                            <div className="signup-btn-d">
                                <button className="signup-btn" onClick={BuyerStep2}> 
                                <span>  SONRAKİ </span> ADIM <i class="fal fa-long-arrow-right"></i>
                                </button>
                            </div>
                          </Col>
                          
                      </Row>
                    
                    </section>     
                    </section>
                </TabPanel>


                <TabPanel>
                  <section id="sp1" className="st-one ">

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
                                  <li className="active-step">
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
                        <Form.Label>Adınız</Form.Label>
                        <Form.Control type="text" id="first_name" placeholder="Lütfen adınızı yazın..." />
                      </Form.Group>
                      </Col>
                      <Col md="6" xs="12">
                      <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                        <Form.Label>Soyadınız</Form.Label>
                        <Form.Control type="text" id="last_name" placeholder="Lütfen soyadınızı yazın..." />
                      </Form.Group>
                      </Col>
                      <Col md="12" xs="12">
                      <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                        <Form.Label>E-mail Adresiniz</Form.Label>
                        <Form.Control type="email" id="email" placeholder="Lütfen mail adresinizi yazın..." />
                      </Form.Group>
                      </Col>
                      <Col md="12" xs="12">
                      <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                        <Form.Label>Parolanız</Form.Label>
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
                        <Form.Label>Telefon Numaranız</Form.Label>
                        <Form.Control type="text" id="mobile" placeholder="Lütfen mail adresinizi yazın..." />
                      </Form.Group>
                      </Col>

                      <Col md="12" xs="12">
                          <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control type="text" id="comp_name" placeholder="Company name" />
                          </Form.Group>
                        </Col>

                      <Col md="12">
                      <div class="form-group form-check signup-check">
                        <label class="form-check-label signup-lab">
                          <input class="form-check-input" type="checkbox" /> <span> Gizlilik Şartları </span> ve <span> Kullanım Koşullarını </span> okudum ve kabul ediyorum.
                        </label>
                      </div>
                      </Col>

                      <Col md="12" xs="12">
                      <div className="signup-btn-d">
                          <button className="signup-btn" onClick={submitService}> 
                          <span>  SONRAKİ </span> ADIM <i class="fal fa-long-arrow-right"></i>
                          </button>
                      </div>
                      </Col>
                      </Row>

                      </section>
</section>

                  <section id="sp2" className="st-two d-none">

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
                                          <p> <span>KİŞİSEL</span> BİLGİLER </p>
                                        </div>
                                      </li>
                                      <li className="active-step">
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
                            <Form.Label>Sirket adresi</Form.Label>
                            <Form.Control type="text" id="comp_location" placeholder="Lütfen  firma adınızı yazın..." />
                          </Form.Group>
                        </Col>

                        <Col md="6" xs="12">
                          <Form.Group className="signup-f-group" controlId="formBasicEmail" >
                            <Form.Label>Website</Form.Label>
                            <Form.Control type="text" id="website" placeholder="Lütfen  firma adınızı yazın..." />
                          </Form.Group>
                        </Col>

                        <Col md="12" xs="12">
                          <div className="signup-btn-d">
                              <button className="signup-btn" onClick={ServiceStep1}>  
                              <span>  SONRAKİ </span> ADIM <i class="fal fa-long-arrow-right"></i>
                              </button>
                          </div>
                        </Col>
                        
                    </Row>

                    </section>
                    </section>

                  <section id="sp3" className="st-three d-none" >
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
                        <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label> Servis Kategorisi </Form.Label>
                        <Form.Control  onClick={ChangeSelect} as="select" id="department">
                        {sercategory.map(cat=>(  
                        <option  value={cat.uuid}>{cat.categoryname}</option>
                        ))}
                        </Form.Control>
                    </Form.Group>
                      </Col>

                      <Col md="12" xs="12">
                      {(changecat).length != 0   ?   <Form.Group controlId="formBasicEmail">
                        <Form.Label>We Specialize in:</Form.Label>
                        <tbody className="text-left" >
                        {changecat.map(contact => {
                            return <tr>
                            <td><label className="tabl-check"><input type="checkbox" value={contact.uuid}/></label></td>
                            <td>{contact.categoryname ? contact.categoryname : "Unlisted"}</td>
                            </tr>
                        })}
                         </tbody>
                    </Form.Group>: ''}
                    </Col>

                        <Col md="12" >
                              <div className="mb-3 sign-radio">
                              <p>what area can you service ? </p>
                                <Form.Check
                                  inline
                                  label="National"
                                  name="group1"
                                  type="radio"
                                  value="National" 
                                  id="1"
                                  onClick={servicechange}
                                />
                                <Form.Check
                                  inline
                                  label="State"
                                  name="group1"
                                  value="true"
                                  type="radio"
                                  id="2"
                                  onClick={servicechange}
                                />     

                                 <Form.Check
                                  inline
                                  label="Global"
                                  value="Global"
                                  name="group1"
                                  type="radio"
                                  id="2"
                                  onClick={servicechange}
                                />     

                                {change === "true" ?<div>
                                <CountryDropdown id="country" className="form-control"
                                value={countryService}
                                onChange={(val) => selectCountryService(val)} />
                                </div> : ""}
                                {change === "true" ? <div>
                                <RegionDropdown  id ="state" className = "form-control"
                                country={countryService}
                                value={regionService}
                                onChange={(val) => selectRegionService(val)} />
                                </div>:""}

                              </div>
                          </Col>

                          <Col md="12" xs="12">
                            <div className="signup-btn-d">
                                <button className="signup-btn" onClick={ServiceStep2}> 
                                <span>  SONRAKİ </span> ADIM <i class="fal fa-long-arrow-right"></i>
                                </button>
                            </div>
                          </Col>
                          
                      </Row>
                    
                    </section>     
                    </section>

                </TabPanel>

              </Tabs>
            </div>
        </div>

    </div>
      </Modal.Body>
    
    </Modal>



</>
    );
}

export default SignupModal
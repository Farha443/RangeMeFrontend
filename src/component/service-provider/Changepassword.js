import React from 'react';
import '../../assets2/admin.css';
// import AdminNavbar from './AdminNavbar'
import { NavLink } from 'react-router-dom';


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
    Card,
    Row
} from 'react-bootstrap';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import $, { removeData } from 'jquery';
import context from 'react-bootstrap/esm/AccordionContext';
// import MyEditor from './MyEditor';
// import ImgUploader from './ImgUpload';
// import ProfileUploader from './ProfileUploader';
import BASE_URL from '../base';
import ServiceNavbar from './ServiceNavbar';
const cookies = new Cookies();
const axios = require('axios');
cookies.get("uuid")
cookies.get("userType")

async function ChangecurrentPassword() {
    $(".laoder").show(); 
    var current_password = document.getElementById('current_pass').value; 
    var password = document.getElementById('new_pass').value; 
    var confirmPassword = document.getElementById('confirm_new').value;
    var url = BASE_URL+"authentication/changepassword/"
    var token = cookies.get('logintoken')
    if (password !== confirmPassword) {
        
        alert("Passwords don't match");
        $(".laoder").hide(); 
    } else {
    var config = {
        method: 'put',
        url: url,
        headers: {
            "Authorization": "Bearer " + token,
          },
        data:{
            old_password:current_password,
            new_password:password,
            // password:password,
        }

    };
    console.log(config)
 
    axios(config).then(res=>{
        console.log(res.data.data)
        // cookies.set('uuid1', res.data.data.uuid, { path: '/' })
        // alert(cookies.set('uuid1', res.data.data.uuid, { path: '/' }))
        $(".laoder").hide(); 
        window.location = '/service-dashboard'
    }
    
    ).catch(err=>{
        console.error(err);
        $(".laoder").hide(); 
        window.location = "/change-password-service";
    })
   
}
}

function Changepassword() {
    return (
        <>
            <ServiceNavbar />


            <div class="laoder"> </div>
            <section className="product-form-section">
                <Container fluid>
                    <Row className="justify">
                    <Col md="3">
                    <aside>
                                <div className="admin-sidebar-main">
                                    <p className="p1"> Hesap Ayarları</p>
                                    <ul>
                                        <li>
                                            <NavLink to="/service-provider-profile"
                                            inactiveClassName="text-gray-800"
                                            >
                                                <img src="assets/images/list-searching-variant.png" />
                                                <div className="sidebar-title">Senin profil </div>
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/change-password-service"
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                               
                                                <div className="sidebar-title">Şifre Değiştirme</div>
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/service-provider-profile"
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/moving-truck.png" />
                                                <div className="sidebar-title"> Plan and BIlling  </div>
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </aside>
                        </Col>
                        <Col md="8">

                            <Card>

                                <Card.Body>
                                    <div className="product-form-main">

                                        <div className="p-inside-title">
                                            <h5> <img src="assets/images/padlock.png" /> Şifre değiştir </h5>

                                        </div>

                                        <div className="overview-form">

                                           <Row>

                                           <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Mevcut Şifre</Form.Label>
                                                <Form.Control type="password" id='current_pass' />

                                            </Form.Group>

                                            </Col>

                                            <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Yeni Şifre</Form.Label>
                                                <Form.Control type="password" id='new_pass' />

                                            </Form.Group>

                                            </Col>

                                            <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Yeni Şifre - Tekrar</Form.Label>
                                                <Form.Control type="password" id='confirm_new'/>

                                            </Form.Group>

                                            </Col>

                                        
                                    
                                            <Col md="12" className="text-center">
                                            <button class="admin-add-btn" onClick={ChangecurrentPassword}>Şifre değiştir</button>
                                            </Col>

                                           </Row>
                                            
                                        </div>

                                    </div>

                                </Card.Body>
                            </Card>

                        </Col>



                    </Row>
                </Container>
            </section>



        </>
    );
}

export default Changepassword
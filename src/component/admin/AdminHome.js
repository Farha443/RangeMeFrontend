import React from 'react';
import useState from 'react-hook-use-state';
import '../../assets2/admin.css';
import AdminNavbar from './AdminNavbar'
import $ from 'jquery';
import BASE_URL from '../base';
import Cookies from "universal-cookie";
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

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
const axios = require('axios').default;
const cookies = new Cookies();


async function AddProduct(){
    // debugger
    var product_name = document.getElementById("addproduct").value;
    var token = cookies.get("logintoken");
    try {
        const resp = await axios({
            method: 'post',
            url: BASE_URL + 'product/create_product/',
            data: {
               
                product_name: product_name
            },
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json",
            }
        });
        if (resp.status === 201) {
            alert(resp.data.data.uuid)
            cookies.set('productuuid', resp.data.data.uuid, { path: '/' })
            window.location = "/product_form"
        }
        return resp.data
        
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
}

function AdminHome(){
    const [show2, setShow2] = useState(false);
    return(
        <>
            <AdminNavbar/>


            <section className="admin-home-section"> 
            <Container>
                <Row>
                    <Col md="12">
                    <Card>
                      
                        <Card.Body>
                            <div className="p-insight-d-main">
                                <div className="p-inside-title">
                                    <h5> Profile Insights </h5>
                                    <p> Profile Status : <span> Unpublished </span> </p>
                                </div>
                            </div>
                        <Row>
                            <Col md="4">
                                <div className="admin-count-box">
                                <i class="fa fa-eye" aria-hidden="true"></i>
                                    <h2> 200 </h2>
                                    <p> VIEWS </p>
                                </div>
                            </Col>

                            <Col md="4">
                                <div className="admin-count-box">
                                <i class="fa fa-users" aria-hidden="true"></i>
                                <h2> 165 </h2>
                                    <p> PROFILE VISITS </p>
                                </div>
                            </Col>

                            <Col md="4">
                                <div className="admin-count-box">
                                <i class="fa fa-commenting-o" aria-hidden="true"></i>
                                <h2> 145 </h2>
                                    <p> CONVERSIONS </p>
                                </div>
                            </Col>  
                        </Row>
                        </Card.Body>
                    </Card>
                       
                    </Col>
                </Row>
            </Container>
            </section>



            <section className="admin-home-section2"> 
            <Container>
                <Row>
                    <Col md="12">
                    <Card>
                      
                        <Card.Body>
                            <div className="p-insight-d-main">
                                <div className="p-inside-title">
                                    <h5> Profile Insights </h5>
                                    <p>Complete your profile to get insights</p>
                                </div>
                            </div>
                        <Row>
                            <Col md="12">
                            <ul class="process">
                                <li class="process__item">
                                    <span class="process__number">1</span>
                                    <span class="process__title">Create account</span>
                                    <span class="process__subtitle">We analyse your problem and develop a strategy</span>
                                </li>

                                <li class="process__item active">
                                    <span class="process__number">2</span>
                                    <span class="process__title">Add product</span>
                                    <span class="process__subtitle">Add your first product to attract interest from buyers</span>

                                    <button class="admin-add-btn" onClick={() => setShow2(true)}>Add Product</button>

                                </li>

                                <li class="process__item">
                                    <span class="process__number">3</span>
                                    <span class="process__title">
                                        Confirm email</span>
                                    <span class="process__subtitle">We analyse your problem and develop a strategy</span>
                                </li>

                                <li class="process__item">
                                    <span class="process__number">4</span>
                                    <span class="process__title">Add logo</span>
                                    <span class="process__subtitle">We analyse your problem and develop a strategy</span>
                                </li>
                             
                                </ul>
                            </Col>

    
                        </Row>
                        </Card.Body>
                    </Card>
                       
                    </Col>
                </Row>
            </Container>
            
            </section>
            <Modal
                size="lg"
                centered
                show={show2}
                onHide={() => setShow2(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    <h5 style={{ marginBottom: '0px' }}> Add product </h5>
                    {/* <p> Start with adding your product’s name </p> */}
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col xs={12} md={10} className="m-auto">
                         <div className="text-center mb-3">
                         <h5> Add new product </h5>  
                         <p style={{ marginTop: '0px' }}> Start with adding your product’s name </p>
                         </div>
                            <Col xs={12} md={10} className="m-auto"> 
                                <Form.Group controlId="formBasicEmail">
                                
                                    <Form.Control id="addproduct" type="text" placeholder="e.g. Corn Flakes"/>

                                </Form.Group>
                            </Col>
                            </Col>

                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className="col-md-12 text-center">
                        <button className="admin-add-btn" onClick={AddProduct} >  Add product  </button>
                    </div>
                </Modal.Footer>
            </Modal>

            
        </> 
    );
}

export default AdminHome
import React from 'react';
import '../../assets2/admin.css';
import AdminNavbar from './AdminNavbar'
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

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

function AdminHome(){
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

                                    <button className="admin-add-btn"> <NavLink to="/product_form"> Complete Product </NavLink>  </button>

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
         
        </> 
    );
}

export default AdminHome
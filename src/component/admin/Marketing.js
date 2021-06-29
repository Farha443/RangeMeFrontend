import React from 'react';
import '../../assets2/admin.css';
import AdminNavbar from './AdminNavbar'
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
    Row,
    InputGroup
} from 'react-bootstrap';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import context from 'react-bootstrap/esm/AccordionContext';
const colourOptions=[
    { value: 'Red', label: 'Red' },
    { value: 'Black', label: 'Black' },
    { value: 'Blue', label: 'Blue' },
    { value: 'Green', label: 'Green' },
]

function Marketing() {
    return (
        <>
            <AdminNavbar />

            <section className="product-header-section">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="p-header-main">

                                <div className="p-header-left">
                                    <div className="p-title">
                                        <h4> Headphone </h4> <span> Product </span>
                                    </div>
                                </div>

                                <div className="p-header-right">
                                    <div className="p-right-content">
                                        <div className="p-icn-01">
                                            <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                            <span> All changes saved </span>
                                        </div>

                                        <div className="p-icn-02">
                                            <button className="pre-btn"> Preview </button>
                                            <button className="appro-btn"> Submit Approval </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="product-form-section">
                <Container fluid>
                    <Row className="justify">
                        <Col md="3">
                            <aside>
                                <div className="admin-sidebar-main">
                                    <ul>
                                        <li>
                                            <NavLink to="/product_form"
                                            inactiveClassName="text-gray-800"
                                            >
                                                <img src="assets/images/list-searching-variant.png" />
                                                <div className="sidebar-title"> Product Overview  </div>
                                                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/products_detail"
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/detail.png" />
                                                <div className="sidebar-title"> Product Details  </div>
                                                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/distribution"
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/moving-truck.png" />
                                                <div className="sidebar-title"> Distribution  </div>
                                                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/marketing"  
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/megaphone.png" />
                                                <div className="sidebar-title"> Marketing </div>
                                                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </Col>
                        <Col md="6">

                            <Card>

                                <Card.Body>
                                    <div className="product-form-main">

                                        <div className="p-inside-title">
                                            <h5>Marketing </h5>

                                        </div>

                                        <div className="overview-form">

                                           <Row>

                                           <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Product name</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />

                                            </Form.Group>

                                            </Col>

                                            <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Variant SKU/Style number (optional)</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />

                                            </Form.Group>

                                            </Col>

                                            <Col md="6">
                                                <div className="prod-img-011" >
                                                    <img src="assets/images/product03.jpg" />
                                                </div>
                                            </Col>
                            
                                    

                                

                                           
                                           </Row>
                                            
                                        </div>

                                    </div>

                                </Card.Body>
                            </Card>


                            <Col md="12" className="text-center mt-4 two-btn-main">
                            <button class="admin-add-btn"> <NavLink to="/product_form"> Back </NavLink>    </button>
                                 <button class="admin-add-btn"> <NavLink to="/distribution"> Next </NavLink>  </button>
                            </Col>

                        </Col>


                        <Col md="3">
                            <div className="right-bar-main">
                                <div className="right-cont-img-d">
                                    <img src="assets/images/blog1.jpg" />
                                </div>      
                                <div className="prod-info-text">
                                    <h5> Brand Name </h5>
                                    <h6> product </h6>
                                </div>
                                <div className="pro-margin">
                                    <span> 10$ Cost/item </span>
                                    <span> 33.00%  Margin </span>
                                </div>

                                <div className="prod-help">
                                    <button className="prev-prod-btn"> <i class="fa fa-eye" aria-hidden="true"></i> Preview Product Profile </button>
                                    <p> We will help guide you along the process. <NavLink to=""> Need Help </NavLink> </p>
                                </div>

                            </div>
                        </Col>


                    </Row>
                </Container>
            </section>



        </>
    );
}

export default Marketing
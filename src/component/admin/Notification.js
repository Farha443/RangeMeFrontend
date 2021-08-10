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
    Row
} from 'react-bootstrap';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import context from 'react-bootstrap/esm/AccordionContext';
import MyEditor from './MyEditor';
import ImgUploader from './ImgUpload';
import ProfileUploader from './ProfileUploader';


function Notification() {
    return (
        <>
            <AdminNavbar />



            <section className="product-form-section">
                <Container fluid>
                    <Row className="justify">
                    <Col md="2">
                        <aside>
                                <div className="admin-sidebar-main">
                                    <p className="p1"> Account Setting </p>
                                    <ul>
                                        <li>
                                            <NavLink to="/admin_profile"
                                            inactiveClassName="text-gray-800"
                                            >
                                                <img src="assets/images/list-searching-variant.png" />
                                                <div className="sidebar-title">Your Profile </div>
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/change_password"
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/detail.png" />
                                                <div className="sidebar-title"> Change Password  </div>
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/notification"
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/moving-truck.png" />
                                                <div className="sidebar-title"> Notifications  </div>
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <p className="p2"> Company Setting </p>
                                        <li>
                                            <NavLink to="/company_details"  
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/megaphone.png" />
                                                <div className="sidebar-title"> Company Details </div>
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink to="/team_access"  
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/megaphone.png" />
                                                <div className="sidebar-title"> Team Access </div>
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
                                            <h5> <img src="assets/images/bell.png" /> Notifications </h5>

                                        </div>

                                        <div className="overview-form">

                                            <Row>
                                                <Col md="12 " className=" mt-4">
                                                    <h3> Web </h3>
                                                </Col>
                                                <hr />
                                            </Row>
                                            <Row>

                                                <Col md="6" className="mt-3" >
                                                    <h5> Brand </h5>
                                                    <div className="step-four-radio noti-check">

                                                        <Form.Group controlId="formBasicEmail">

                                                            <Form.Check inline name="group1" type="checkbox" id="1" checked />
                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Updates to your Vaniver Verified™ status</label>
                                                        </Form.Group>

                                                        <Form.Group controlId="formBasicEmail">

                                                            <Form.Check inline name="group1" type="checkbox" id="1" />
                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Reminders to finish brand submissions</label>
                                                        </Form.Group>

                                                    </div>
                                                </Col>
                                            </Row>


                                            <Row>

                                                <Col md="6" className="mt-2"  >
                                                    <h5> Team collaboration </h5>
                                                    <div className="step-four-radio noti-check">

                                                        <Form.Group controlId="formBasicEmail">

                                                            <Form.Check inline name="group1" type="checkbox" id="1" />
                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Updates when new team members are added to your brand</label>
                                                        </Form.Group>

                                                        <Form.Group controlId="formBasicEmail">

                                                            <Form.Check inline name="group1" type="checkbox" id="1" />
                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Reminders for pending team member invites</label>
                                                        </Form.Group>

                                                    </div>
                                                </Col>
                                            </Row>


                                            <Row>

                                                <Col md="6" className="mt-2"  >
                                                    <h5> Multiple brands  </h5>
                                                    <div className="step-four-radio noti-check">

                                                        <Form.Group controlId="formBasicEmail">

                                                            <Form.Check inline name="group1" type="checkbox" id="1" />
                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">See notifications from all your brands</label>
                                                        </Form.Group>


                                                    </div>
                                                </Col>
                                            </Row>

                                        </div>

                                    </div>

                                </Card.Body>
                            </Card>





                            <Card className="mt-4">

                                <Card.Body>
                                    <div className="product-form-main">

                                        <div className="p-inside-title">
                                            <h5> <img src="assets/images/mail.png" /> Email </h5>

                                        </div>

                                        <div className="overview-form">

                                            <Row>

                                                <Col md="6" className="mt-3" >
                                                    <h5> Buyer activity </h5>
                                                    <div className="step-four-radio noti-check">

                                                        <Form.Group controlId="formBasicEmail">

                                                            <Form.Check inline name="group1" type="checkbox" id="1" checked />
                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">When buyers request a product sample</label>
                                                        </Form.Group>

                                                        <Form.Group controlId="formBasicEmail">

                                                            <Form.Check inline name="group1" type="checkbox" id="1" />
                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">When buyers send you messages</label>
                                                        </Form.Group>

                                                        <Form.Group controlId="formBasicEmail">

                                                            <Form.Check inline name="group1" type="checkbox" id="1" />
                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">When I have unread messages</label>
                                                        </Form.Group>


                                                    </div>
                                                </Col>
                                            </Row>

                                        </div>

                                    </div>

                                </Card.Body>
                            </Card>


                            <Col md="12" className="text-center mt-3">
                                <button class="admin-add-btn">   Save Changes </button>
                            </Col>
                        </Col>



                    </Row>
                </Container>
            </section>



        </>
    );
}

export default Notification
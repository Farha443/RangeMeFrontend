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
    Tab,
    Tabs
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

function Preview() {
    return (
        <>
            <AdminNavbar />

            <section className="product-header-section">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="p-header-main">

                                <div className="p-header-left">
                                    <div className="prod-preview-img-d">
                                        <img src="assets/images/3.jpg" />
                                    </div>
                                    <div className="p-pre-brand-text">
                                        <h5> Headphone </h5>
                                        <p> Brand Name </p>
                                    </div>

                                </div>

                                <div className="p-header-right">
                                    <div className="p-right-content">
                                

                                        <div className="p-icn-02">
                                          
                                            <button className="appro-btn"> Edit </button>
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
                    
                        <Col md="8">

                            <Card>

                                <Card.Body>

                                    <h1> Product Preview </h1>

                                {/* <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                    <Tab eventKey="home" title="Home">
                                       lorem 0
                                    </Tab>
                                    <Tab eventKey="profile" title="Profile">
                                        lorem 1
                                    </Tab>
                                    <Tab eventKey="contact" title="Contact" disabled>
                                        lorem 2
                                    </Tab>
                                </Tabs>
                                    <div className="product-form-main">

                                        <div className="p-inside-title">
                                            <h5> Product Overview </h5>

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

                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Select category</Form.Label>
                                                <Form.Control as="select">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                </Form.Control>
                                            </Form.Group>

                                            </Col>
                                            

                                            <Col md="6">
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Approvals & certifications </Form.Label>
                                                <Form.Control as="select">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                </Form.Control>
                                            </Form.Group>
                                            </Col>

                                            <Col md="6" className="m-auto">

                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Specify States or regions </Form.Label>
                                                <Select
                                                defaultValue={[colourOptions[2], colourOptions[3]]}
                                                isMulti
                                                name="colors"
                                                options={colourOptions}
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                            />
                                            </Form.Group>

                                           
                                            </Col>

                                            <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Unique selling propositions (USPs)</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />

                                            </Form.Group>

                                            </Col>

                                            <Col md="6">
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Short product description</Form.Label>
                                                <Form.Control as="textarea" rows={3} />
                                            </Form.Group>
                                            </Col>

                                            <Col md="12" className="text-center">
                                            <button class="admin-add-btn"> <NavLink to="products_detail">  Next </NavLink> </button>
                                            </Col>

                                           </Row>
                                            
                                        </div>

                                    </div> */}

                                </Card.Body>
                            </Card>

                        </Col>


                

                    </Row>
                </Container>
            </section>



        </>
    );
}

export default Preview
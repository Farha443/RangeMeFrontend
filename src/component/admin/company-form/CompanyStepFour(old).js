import React from 'react';
import '../../../assets2/admin.css';
import AdminNavbar from '../AdminNavbar'
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
import { NavLink } from 'react-router-dom';
import $ from "jquery";  



const colourOptions=[
    { value: 'Red', label: 'Red' },
    { value: 'Black', label: 'Black' },
    { value: 'Blue', label: 'Blue' },
    { value: 'Green', label: 'Green' },
]


function CompanyStepFour(){
    

    return(
        <>
        
        <section className="company-form-section">
                <Container fluid>
                    <Row className="justify">
                
                        <Col md="6">

                            <Card>

                                <Card.Body>
                                    <div className="product-form-main">

                                        <div className="p-inside-title">
                                            <p> Step 4 of 1 </p>
                                            <h5> Select your Coverage areas </h5>

                                        </div>

                                        <div className="overview-form">

                                        <Row>
                                            <Col md="9" className="m-auto">
                                                    <div className="step-form-pera2">
                                                        <p className="text-center"> This is Where Consumers Can Purchase from Your Business
                                                          
                                                        </p>
                                                        
                                                    </div>
                                                </Col>
                                            </Row>

                                           <Row>

                                           <Col md="6" className="m-auto">

                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Choose Your Company</Form.Label>
                                                <Form.Control as="select">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                </Form.Control>
                                            </Form.Group>

                                            </Col>

                                           </Row>

                                           <Row>
                                               <Col md="6" className="m-auto" >
                                               <div className="step-four-radio">
                                                <Form.Check inline label="Evet" name="group1" type="radio" id="1" />
                                                <Form.Check inline label="No" name="group1" type="radio" id="2" />
                                                </div>
                                               </Col>
                                           </Row>

                                           <Row>

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

                                           </Row>

                                           <Row>
                                           <Col md="12">
                                                <div className="company-form-btn-main text-center">
                                                    <button class="admin-add-btn"> <NavLink to="/company_form_two"> Continue </NavLink>  </button>
                                                </div>
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

export default CompanyStepFour
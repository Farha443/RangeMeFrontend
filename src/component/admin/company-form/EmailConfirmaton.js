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


const colourOptions=[
    { value: 'Red', label: 'Red' },
    { value: 'Black', label: 'Black' },
    { value: 'Blue', label: 'Blue' },
    { value: 'Green', label: 'Green' },
]


function EmailConfirmation(){
    

    return(
        <>
        
        
        <section className="company-form-section">
                <Container fluid>
                    <Row className="justify">
                
                        <Col lg="5" md="8">

                            <Card>

                                <Card.Body>

                                   <div className="email-confirm-main">
                                   <h4 className="text-center"> Excellent! Confirma Your Email </h4>
                                    <img src="assets/images/email-confirmation2.jpg" />
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </p>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua  
                                    </p>
                                    <button className=""> I Haven't received This email  </button>
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

export default EmailConfirmation
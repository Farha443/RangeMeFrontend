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

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';
import BASE_URL from '../../base';
import $ from "jquery";  

const axios = require('axios');
const cookies = new Cookies();
var userTypeTitle=cookies.get('userType');
// var uuid = cookies.get('uuid');

// alert(token)

 function Func() {
    $(".laoder").show();
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
    var userType = cookies.get('userType');
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
          console.log(res.status)
        cookies.set('uuid1', res.data.data.uuid, { path: '/' })
        // alert(cookies.set('uuid1', res.data.data.uuid, { path: '/' }))
        $(".laoder").hide();
        window.location = '/company_form_two'
      }
      
      ).catch(err=>{
        console.error(err);
        $(".laoder").hide();
        window.location.reload();
      })
  }


  class CompanyStepOne extends React.Component {
    handleKeypress = (event) => {
      if(event.key === 'Enter'){
        Func();
      }
    }
    render(){
        // var token = cookies.get('logintoken');
        // if (token === undefined){
        // window.location="/login"
        // }
    return(
        <>
         <div class="laoder"> <img src="assets/images/ZZ5H.gif" alt="image" /></div>
       
        
        <section className="company-form-section">
                <Container fluid>
                    <Row className="justify">
                
                        <Col md="6">

                            <Card>

                                <Card.Body>
                                    <div className="product-form-main">

                                        <div className="p-inside-title">
                                            <p> Step 1 of 3 </p>
                                            <h5> Tell us about your company </h5>

                                        </div>

                                        <div className="overview-form">

                                           <Row>

                                           <Col md="6">

                                            <Form.Group controlId="exampleForm.ControlSelect1" >
                                                <Form.Label>Company Type</Form.Label>
                                                <Form.Control as="select" id="comp_type">
                                                <option value="company owned">Company Owened</option>
                                                <option value="distributor">Distributor</option>
                                                <option value="franchiser"> Franchiser</option>
                                                <option value="importer">Importer</option>
                                                </Form.Control>
                                            </Form.Group>

                                            </Col>
                                            

                                           <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Job title</Form.Label>
                                                <Form.Control type="text" placeholder="job title" id="job_title" />

                                            </Form.Group>

                                            </Col>
                                            
                                            <Col md="6">
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label> Alıcı Sayısı</Form.Label>
                                                <Form.Control as="select" id="buyers">
                                                <option value="1-2">1-2</option>
                                                <option value="3-10">3-10</option>
                                                <option value="11-20">11-20</option>
                                                <option value="21-50">21-50</option>
                                                <option>5</option>
                                                </Form.Control>
                                            </Form.Group>
                                            </Col>

                                            <Col md="6">
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label> Store Count </Form.Label>
                                                <Form.Control as="select" id="store_count">
                                                <option value="1-2">1-2</option>
                                                <option value="3-10">3-10</option>
                                                <option value="11-20">11-20</option>
                                                <option value="21-50">21-50</option>
                                                </Form.Control>
                                            </Form.Group>
                                            </Col>

                                            <Col md="12">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Company website</Form.Label>
                                                <Form.Control type="text" placeholder="abc@domain.com"  id="comp_website"/>

                                            </Form.Group>

                                            </Col>


                                            <Col md="12">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Business address (requested sample will be sent to this address)</Form.Label>
                                                <Form.Control type="text" id="buss_address"/>

                                            </Form.Group>

                                            </Col>

                                            <Col md="12">
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Sample instruction</Form.Label>
                                                <Form.Control as="textarea" rows={3} id="sample_instruction" onKeyPress={this.handleKeypress}/>
                                            </Form.Group>
                                            </Col>

                                            <Col md="12">
                                                <div className="company-form-btn-main text-center">
                                                    <button class="admin-add-btn" onClick={Func}> <NavLink to="/company_form_two"> Continue </NavLink>  </button>
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
  }

export default CompanyStepOne
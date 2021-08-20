import React from 'react';
import '../../../assets2/admin.css';
import AdminNavbar from '../AdminNavbar'
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
  Card,
  Row
} from 'react-bootstrap';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';
import BASE_URL from '../../base';


const axios = require('axios');
const cookies = new Cookies();
var userTypeTitle=cookies.get('userType');


  class ServiceStepOne extends React.Component{
  
   
    state = {
        data: [],
        message1: "message"
    
      };

    async Submit(){
        $(".laoder").show(); 
        var comp_location = document.getElementById('comp_location').value;
        var website = document.getElementById('website').value;
        var url = BASE_URL + "authentication/createserprovider/";
        var token = cookies.get('token');
        var uuid = cookies.get('uuid');
        var userType = cookies.get('userType');
        if (website.indexOf("http://") == 0 || website.indexOf("https://") == 0 || website==="") {
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
          console.log(res.data.data)
        cookies.set('serviceuuid', res.data.data.uuid, { path: '/' })
        $(".laoder").hide(); 
        window.location = '/service_step_two'
      }
      
      ).catch(err=>{
        console.error(err);
        $(".laoder").hide(); 
        window.location.reload();
      })
    }else{
        alert("Please Enter a valid URL");
      }
    }
    handleKeypress = (event) => {
      if(event.key === 'Enter'){
        this.Submit();
      }
    }
  render() {

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
                                            <p> Step 2 of 3 </p>
                                            <h5> Tell us about your company </h5>
                                        </div>
                                        <div className="overview-form">
                                           <Row>

                                            <Col md="12">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Şirket Adresi</Form.Label>
                                                <Form.Control type="text"  id="comp_location"/>

                                            </Form.Group>

                                            </Col>

                                            <Col md="12">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Website</Form.Label>
                                                <Form.Control type="email"  id="website"/>

                                            </Form.Group>

                                            </Col>

                                           
                                            <Col md="12">
                                                <div className="company-form-btn-main text-center">
                                                    <button class="admin-add-btn" onClick={() => this.Submit()}> Devam et </button>
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

export default ServiceStepOne
import React from 'react';
import '../../../assets2/admin.css';
import AdminNavbar from '../AdminNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import context from 'react-bootstrap/esm/AccordionContext';

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
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector'
import Cookies from 'universal-cookie';
import BASE_URL from '../../base';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import $ from "jquery";  

const axios = require('axios');
const cookies = new Cookies();

const colourOptions=[
    { value: 'Red', label: 'Red' },
    { value: 'Black', label: 'Black' },
    { value: 'Blue', label: 'Blue' },
    { value: 'Green', label: 'Green' },
]



class CompanyStepFour extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            country:'',
            disCountry:'',
            data: [],
            data1:[], 
            region: '' ,
            dis_country : '',
            product_dis:'',
            no_select : "true",
            
            }
            this.changefunction = this.changefunction.bind(this)
        }


     Func() {
            $(".laoder").show(); 
            // console.log(this.state.no_select)
            var country = document.getElementById('country').value;
            var slectradio = document.querySelector('input[name = "sakshi"]:checked').value;
            if(slectradio === "true" ){
        
                var region = "all"
            }
            else{
                var region = document.getElementById('region').value;
            }

            // var area = country+"/"+region
           
            var token = cookies.get('token')
            var url =  BASE_URL + "authentication/createbuyer/"
            var config = {
                method: 'patch',
                url: url,
                headers: {
                  "Authorization": "Bearer " + token,
                },
                data:{
                    country : country,
                    region : region,
                    
                  }
            
              };
            //  debugger
         axios(config).then(res=>{
                //   if (res.data.message === "Buyer updated"){
                //     alert("Alıcı updated");
                    
                //   }
                //   else 
                  if (res.data.message === "Could not update buyer"){
                    alert("Could not update Alıcı");
                  }
         
                  cookies.set('uuid', res.data.data.uuid, { path: '/' })
                  cookies.set('token', res.data.data.access, { path: '/' })
                  window.location = "/login"
                  
                }).catch(err=>{
                  window.location = "/company_form_Four"
                  console.log(err)
                })
              
        } 
        


        selectCountry (val) {
            // debugger
            this.setState({ country: val });
          }
    
        selectRegion (val) {
            this.setState({ region: val });
          }
    
          changefunction(e){
            //   debugger
            this.setState({ no_select : e.target.value });
            
          } 
    
    render() {
        console.log(this.state.country)
        const { country, region  } = this.state;

        var token = cookies.get('logintoken');
        if (token === undefined){
        window.location="/login"
        }

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
                                                <Form.Label>Choose Your Country</Form.Label>
                                                <CountryDropdown id="country" 
                                                className="form-control"
                                                    value={country}
                                                    defaultValue={this.state.country}
                                                    onChange={(val) => this.selectCountry(val)} />
                                            </Form.Group>

                                            </Col>

                                           </Row>

                                           <Row>
                                               <Col md="6" className="m-auto" >
                                               <div className="step-four-radio">
                                               <div>
                                                <label htmlFor="basic-url" className="lb">Do you cover all regions within your country</label>
                                                </div>
                                                <Form.Check inline onChange={this.changefunction} label="Yes" value="true" name="sakshi" type="radio" id="yes" />
                                               <Form.Check onChange={this.changefunction} inline label="No" value="false" name="sakshi" type="radio" id="no" />
                                                </div>
                                               </Col>
                                           </Row>

                                           <Row>

                                           <Col md="6" className="m-auto">

                                           {this.state.no_select==="false" ?   <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Specify States or regions </Form.Label>
                                                <RegionDropdown  id ="region" className = "form-control"
                                                    country={country}
                                                    value={region}
                                                    defaultValue={this.state.state1}
                                                    onChange={(val) => this.selectRegion(val)} />
                                                    </Form.Group>:""}
                                           

                                           
                                            </Col>

                                           </Row>

                                           <Row>
                                           <Col md="12">
                                                <div className="company-form-btn-main text-center">
                                                    <button class="admin-add-btn" onClick={this.Func}> <NavLink to="/company_form_two"> Continue </NavLink>  </button>
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

export default CompanyStepFour
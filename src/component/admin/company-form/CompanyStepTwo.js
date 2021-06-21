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

// import ImageUploader from 'react-images-upload';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'universal-cookie';
import BASE_URL from '../../base';

const axios = require('axios');
const cookies = new Cookies();
var userTypeTitle=cookies.get('userType');

function skip(){
    window.location='/company_form_three';
}

 function Func() {
    debugger
    var company_logo = document.getElementById('comp_logo').files[0];
    var company_description = document.getElementById('comp_desc').value;
    var url = BASE_URL + "authentication/createbuyer/";
    // var token = cookies.get('token');
    var uuid = cookies.get('uuid1');
    alert(uuid)
    var userType = cookies.get('userType');
    var data = new FormData();
    data.append('company_logo', company_logo);
    data.append('uuid', uuid);
    data.append('company_description', company_description);
    var token = cookies.get("token")
      
      var config = {
  
        method: 'put',
        url: url,
        headers: {
          'content-type': `multipart/form-data; boundary=${data._boundary}`,
          "Authorization": "Bearer " + token,
        },
        data: data
      };
    // var config = {
    //     method: 'put',
    //     url: url,
    //     // headers: {
    //     //     'content-type': `multipart/form-data;`,
    //     // },
    //     data:{
    //         uuid : uuid1,
    //         company_logo : company_logo,
    //         company_description: company_description,
    //       }
    //   };
      axios(config).then(res=>{
          console.log(res.data.data)
        window.location = '/company_form_three'
      }
      
      ).catch(err=>{
        console.error(err);
      window.location = "company_form_two";
      })    

  }

function CompanyStepTwo(){
    return(
        <>
        <AdminNavbar/>
        
        <section className="company-form-section">
                <Container fluid>
                    <Row className="justify">
                   
                        <Col md="6">

                            <Card>

                                <Card.Body>
                                    <div className="product-form-main">

                                        <div className="p-inside-title">
                                            <p> Step 2 of 3 </p>
                                            <h5> Get Your profile Looking your great </h5> 
                                        </div>

                                    
                                        
                                            <div className="overview-form">
                                            <Row>
                                            <Col md="9" className="m-auto">
                                                    <div className="step-form-pera">
                                                        <p className="text-center"> Get started with your company profile by uploading your logo and adding a description
                                                            <br/>
                                                            this information will be available to all supplier on Veniver.
                                                        </p>
                                                        
                                                    </div>
                                                </Col>
                                            </Row>
                                               

                                           <Row className="justify">

                                           <Col md="5">
                                           <div className="logo-right-text-01">
                                           <Form.Group>
                                               <input type="file" id="comp_logo" ></input>
                                                {/* <Form.File

                                                className="position-relative"
                                                required
                                                name="file"
                                                label="File"
                                                // onChange={handleChange}
                                                // isInvalid={!!errors.file}
                                                // feedback={errors.file}
                                                id="comp_logo"
                                                feedbackTooltip
                                                /> */}
                                            </Form.Group>
                                            </div>
                                            </Col>
                                            
                                           <Col md="6">
                                                <div className="logo-right-text-01">
                                                    <div>
                                                    <h5> Company Logo</h5>
                                                    <p> Images must be at least 800 x 800px file formats JPG,PNG,SVG  </p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md="11">
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>company description</Form.Label>
                                                <Form.Control as="textarea" rows={3} id="comp_desc" />
                                            </Form.Group>
                                            </Col>
                                            
                                

                                            <Col md="12">
                                                <div className="company-form-btn-main text-center">
                                                <button class="skip-btn" onClick={skip}> Skip This Step </button>
                                                    <button class="admin-add-btn" onClick={Func}> Continue </button>
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

export default CompanyStepTwo
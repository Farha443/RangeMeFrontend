import React, {useEffect, userEffect, useState} from 'react';
import '../../../assets2/admin.css';
import AdminNavbar from '../AdminNavbar'
import {NavLink} from 'react-router-dom';
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
import axios from 'axios';
import Cookies from 'universal-cookie';
import BASE_URL from '../../base';

const cookies = new Cookies();

function SelectCategory(){
    var b_category = document.getElementById("category").value;
    var token = cookies.get('token');
    var uuid = cookies.get('uuid1');
    var url = BASE_URL + "authentication/createbuyer/";
    var config = {
        method: 'put',
        url: url,
        data:{
            uuid : uuid,
            b_category : b_category,
          }
      };
      axios(config).then(res=>{

        window.location = '/login'
      }
      
      ).catch(err=>{
        console.error(err);
      window.location = "company_form_three";
      })  
}

function CompanyStepThree(){
    const [category, setCategory]= useState([])
    useEffect(() => {
        axios.get(BASE_URL+'authentication/getcategory/').then(res=>{
            setCategory(res.data.data)
        }).catch(err=>{
            console.log(err)            
        })
        console.log(category)
    },[])
    
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
                                            <p> Step 1 of 3 </p>
                                            <h5> Select Your Departments </h5> 
                                        </div>

                                    
                                        
                                            <div className="overview-form">
                                            <Row>
                                            <Col md="9" className="m-auto">
                                                    <div className="step-form-pera">
                                                        <p className="text-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                         
                                                        
                                                        </p>
                                                        
                                                    </div>
                                                </Col>
                                            </Row>
                                               

                                           <Row>
                                           
                                          {category.map(cat=>( 
                                              
                                          <Col md="3">
                                                <div className="step-three-category-box">
                                                    
                                                        <img src="assets/images/tshirt.png" />
                                                        <p id="category">{cat.name} </p>
                                                        
                                                </div>
                                            </Col>))}

                                            {/* <Col md="3">
                                                <div className="step-three-category-box">
                                                    <NavLink to="">
                                                        <img src="assets/images/baby.png" />
                                                        <p> Baby  </p>
                                                    </NavLink>
                                                </div>
                                            </Col>  */}

{/* 
                                            <Col md="3">
                                                <div className="step-three-category-box">
                                                    <NavLink to="">
                                                        <img src="assets/images/skincare.png" />
                                                        <p> Beauty  </p>
                                                    </NavLink>
                                                </div>
                                            </Col>

                                            <Col md="3">
                                                <div className="step-three-category-box">
                                                    <NavLink to="">
                                                        <img src="assets/images/laptop.png" />
                                                        <p> Electronics  </p>
                                                    </NavLink>
                                                </div>
                                            </Col>

                                            <Col md="3">
                                                <div className="step-three-category-box">
                                                    <NavLink to="">
                                                        <img src="assets/images/beverage.png" />
                                                        <p> Food & Beverage  </p>
                                                    </NavLink>
                                                </div>
                                            </Col>

                                            <Col md="3">
                                                <div className="step-three-category-box">
                                                    <NavLink to="">
                                                        <img src="assets/images/sofa.png" />
                                                        <p> Home  </p>
                                                    </NavLink>
                                                </div>
                                            </Col>


                                            <Col md="3">
                                                <div className="step-three-category-box">
                                                    <NavLink to="">
                                                        <img src="assets/images/pet-house.png" />
                                                        <p> Pet  </p>
                                                    </NavLink>
                                                </div>
                                            </Col>

                                            <Col md="3">
                                                <div className="step-three-category-box">
                                                    <NavLink to="">
                                                        <img src="assets/images/stationery.png" />
                                                        <p> School & Office  </p>
                                                    </NavLink>
                                                </div>
                                            </Col>


                                            <Col md="3">
                                                <div className="step-three-category-box">
                                                    <NavLink to="">
                                                        <img src="assets/images/ball.png" />
                                                        <p>Sports &  Toys </p>
                                                    </NavLink>
                                                </div>
                                            </Col>

                                            <Col md="3">
                                                <div className="step-three-category-box">
                                                    <NavLink to="">
                                                        <img src="assets/images/growth.png" />
                                                        <p> Farm & Ranch  </p>
                                                    </NavLink>
                                                </div>
                                            </Col>


                                            <Col md="3">
                                                <div className="step-three-category-box">
                                                    <NavLink to="">
                                                        <img src="assets/images/heart.png" />
                                                        <p> Health  </p>
                                                    </NavLink>
                                                </div>
                                            </Col>

                                            <Col md="3">
                                                <div className="step-three-category-box">
                                                    <NavLink to="">
                                                        <img src="assets/images/customer-support.png" />
                                                        <p> Home Improvement  </p>
                                                    </NavLink>
                                                </div>
                                            </Col> */}

                                            

                                            <Col md="12">
                                                <div className="company-form-btn-main text-center">
                                               
                                                    <button class="admin-add-btn" onClick={SelectCategory}> Continue </button>
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

export default CompanyStepThree
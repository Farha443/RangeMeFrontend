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
import $ from "jquery";  

const cookies = new Cookies();

function SelectCategory(){
    $(".laoder").show();
    var array = []
    var b_category = document.querySelectorAll('input[type=checkbox]:checked')
    for (var i = 0; i < b_category.length; i++) {
        array.push(b_category[i].value)
    }
    var uuid1 = cookies.get('uuid1');
    // alert(uuid)
    var url = BASE_URL + "authentication/createbuyer/";
    var config = {
        method: 'put',
        url: url,
        data:{
            uuid : uuid1,
            b_category : array,
          }
      };
      axios(config).then(res=>{
        console.log(res.data )
        $(".laoder").hide();
        window.location = '/login'
      }
      
      ).catch(err=>{
        console.error(err);
        $(".laoder").hide();
      window.location = "company_form_three";
      })  
}
const handleKeypress = (event) => {
    if(event.key === 'Enter'){
    SelectCategory();
    }
  }

function CompanyStepThree(){
    const [category, setCategory]= useState([])
    useEffect(() => {
        axios.get(BASE_URL+'authentication/getcategory/').then(res=>{
            setCategory(res.data.data)
        }).catch(err=>{
            $(".laoder").hide();
            console.log(err)            
        })
        console.log(category)
    },[])
    
    return(
        <>
        <AdminNavbar/>
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
                                                <input type="checkbox" id="category" name="type" onKeyPress={handleKeypress} value={cat.uuid}/>
                                                        <img src="assets/images/tshirt.png" />
                                                        <p>{cat.name} </p>
                                                        
                                                </div>
                                            </Col>))}

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
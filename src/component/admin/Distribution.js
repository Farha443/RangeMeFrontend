import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
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
    InputGroup
} from 'react-bootstrap';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector'
import '../../assets2/admin.css';
import AdminNavbar from './AdminNavbar'
import { NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';
import BASE_URL from '../base';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import context from 'react-bootstrap/esm/AccordionContext';
const axios = require('axios');
const cookies = new Cookies();





// async function distribution() {
//       var country = document.getElementById('country').value;
//       var state = document.getElementById('state').value;
//       var distributors = document.getElementById('distributors').value;
//       var selling_Platform = document.getElementById('selling_Platform').value;
//       var distribution_location = document.getElementById('distribution_location').value;
//       var global_distribution = document.getElementById('global_distribution').value;
//       var drop_ship = document.getElementById('drop_ship').value;
//       var private_label = document.getElementById('drop_ship').value;
//       var storage_required = document.getElementById('storage_required').value;
      


//     //   cookies.set('email',email,{path:'/'});
//     //   console.log(cookies.get('email'));
 
         
//           console.log('Trying to send request');

//           try {
//               // alert('err')
//               // let loader = `<div><div class="loader centered"/></div>`;
//               // document.getElementById('trial').innerHTML = loader;
//               console.log('Trying')
//               let res = await axios.post(BASE_URL + 'user/', {
//                 country : country,
//                 state:state,
//                 distributors: distributors,
//                 selling_Platform: selling_Platform,
//                 distribution_location: distribution_location,
//                 global_distribution: global_distribution,
//                 drop_ship:drop_ship,
//                 private_label:private_label,
//                 storage_required: storage_required,
//               })
              
//               if (res.status === 200) {
//                   // test for status you want, etc
//                   console.log(res.status);
//                   console.log(res.data);
//                   // alert(res.data.message);
    
//                   window.location='/marketing';
                 
    
//               }
//               // Don't forget to return something
//               return res.data
//           }
//           catch (err) {
//               console.error('Signup Failed , Please try again.');
//               window.location='/distribution'
//               alert(err)
//           }
//       }
    

class Distribution extends React.Component {
    constructor (props) {
        super(props);
        this.state = { 
            country: '', 
            region: '' };
      }
    
      selectCountry (val) {
        this.setState({ country: val });
      }
    
      selectRegion (val) {
        this.setState({ region: val });
      }
    render() {
        const { country, region } = this.state;
        const colourOptions=[
                { value: 'Red', label: 'Red' },
                { value: 'Black', label: 'Black' },
                { value: 'Blue', label: 'Blue' },
                { value: 'Green', label: 'Green' },
            ]
    return (
        <>
            <AdminNavbar />

            <section className="product-header-section">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="p-header-main">

                                {/* <div className="p-header-left">
                                    <div className="p-title">
                                        <h4> Headphone </h4> <span> Product </span>
                                    </div>
                                </div> */}

                                <div className="p-header-right">
                                    <div className="p-right-content">
                                        <div className="p-icn-01">
                                            <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                            <span> All changes saved </span>
                                        </div>

                                        <div className="p-icn-02">
                                            <button className="pre-btn"> Preview </button>
                                            <button className="appro-btn"> Submit Approval </button>
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
                        <Col md="3">
                        <aside>
                                <div className="admin-sidebar-main">
                                    <ul>
                                        <li>
                                            <NavLink to="/product_form"
                                            inactiveClassName="text-gray-800"
                                            >
                                                <img src="assets/images/list-searching-variant.png" />
                                                <div className="sidebar-title"> Product Overview  </div>
                                                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/products_detail"
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/detail.png" />
                                                <div className="sidebar-title"> Product Details  </div>
                                                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/distribution"
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/moving-truck.png" />
                                                <div className="sidebar-title"> Distribution  </div>
                                                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/marketing"  
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/megaphone.png" />
                                                <div className="sidebar-title"> Marketing </div>
                                                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </Col>
                        <Col md="6">

                            <Card>

                                <Card.Body>
                                    <div className="product-form-main">

                                        <div className="p-inside-title">
                                            <h5>Distribution </h5>

                                        </div>

                                        <div className="overview-form">

                                           <Row>

                                           <Col md="6">
                                           <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>What country/region is your product manufactured in?</Form.Label>
                                                
                                                <CountryDropdown className="form-control"
                                                    value={country}
                                                    onChange={(val) => this.selectCountry(val)} />
                                        </Form.Group>                                
                                            </Col>

                                            <Col md="6">
                                           <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>What state is your product manufactured in?</Form.Label>
                                                
                                                <RegionDropdown className = "form-control"
                                                    country={country}
                                                    value={region}
                                                    onChange={(val) => this.selectRegion(val)} />
                                                    </Form.Group>
                                            
                                            </Col>

                                            <Col md="6" className="" >
                                                <div className="step-four-radio">
                                                <div>
                                                <label htmlFor="basic-url" className="lb">Is this product available now? </label>
                                                </div>
                                                <Form.Check inline label="Yes" name="group1" type="radio" id="1" />
                                                <Form.Check inline label="No" name="group1" type="radio" id="2" />
                                                </div>
                                            </Col>

                                            <Col md="6">
                                           <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>What country/region is your product manufactured in?</Form.Label>
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

                                            <Col md="6" className="" >
                                                <div className="step-four-radio">
                                                    <div>
                                                    <label htmlFor="basic-url" className="lb">Is this product available through distributors? </label>
                                                    </div>
                                                    <Form.Check inline label="Yes" name="group1" type="radio" id="1" />
                                                    <Form.Check inline label="No" name="group1" type="radio" id="2" />
                                                </div>
                                            </Col>
                                            

                                            <Col md="6">
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
                                                     
                                            <Col md="6" className="" >
                                                    <div className="step-four-radio">
                                                        <div>
                                                        <label htmlFor="basic-url" className="lb">Can you drop-ship this product to consumers? </label>
                                                        </div>
                                                        <Form.Check inline label="Yes" name="group1" type="radio" id="1" />
                                                        <Form.Check inline label="No" name="group1" type="radio" id="2" />
                                                    </div>
                                                </Col>

                                                <Col md="6">
                                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                                    <Form.Label>Where can you distribute your products? </Form.Label>
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
                                                     
                                                <Col md="6" className="" >
                                                    <div className="step-four-radio">
                                                        <div>
                                                        <label htmlFor="basic-url" className="lb">Is this product available for private label? </label>
                                                        </div>
                                                        <Form.Check inline label="Yes" name="group1" type="radio" id="1" />
                                                        <Form.Check inline label="No" name="group1" type="radio" id="2" />
                                                    </div>
                                                </Col>
         
                                                <Col md="6" className="" >
                                                    <div className="step-four-radio">
                                                        <div>
                                                        <label htmlFor="basic-url" className="lb">Does your product require cold storage?</label>
                                                        </div>
                                                        <Form.Check inline label="Yes" name="group1" type="radio" id="1" />
                                                        <Form.Check inline label="No" name="group1" type="radio" id="2" />
                                                    </div>
                                                </Col>
                                                    
         
         
                                            </Row>

                                        </div>

                                    </div>

                                </Card.Body>
                            </Card>



                            <Col md="12" className="text-center mt-4 two-btn-main">
                            <button class="admin-add-btn"> <NavLink to="/products_detail"> Back </NavLink>    </button>
                                 <button class="admin-add-btn"> <NavLink to=""> Next </NavLink>  </button>
                            </Col>

                        </Col>


                        <Col md="3">
                            <div className="right-bar-main">
                                <div className="right-cont-img-d">
                                    <img src="assets/images/blog1.jpg" />
                                </div>      
                                <div className="prod-info-text">
                                    <h5> Brand Name </h5>
                                    <h6> product </h6>
                                </div>
                                <div className="pro-margin">
                                    <span> 10$ Cost/item </span>
                                    <span> 33.00%  Margin </span>
                                </div>

                                <div className="prod-help">
                                    <button className="prev-prod-btn"> <i class="fa fa-eye" aria-hidden="true"></i> Preview Product Profile </button>
                                    <p> We will help guide you along the process. <NavLink to=""> Need Help </NavLink> </p>
                                </div>

                            </div>
                        </Col>


                    </Row>
                </Container>
            </section>



        </>
    );
}
}

export default Distribution
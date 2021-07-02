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
import moment from 'moment';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector'
import '../../assets2/admin.css';
import AdminNavbar from './AdminNavbar'
import { NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';
import BASE_URL from '../base';
import Select from 'react-select';
import $ from "jquery"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import context from 'react-bootstrap/esm/AccordionContext';
const axios = require('axios');
const cookies = new Cookies();


class Distribution extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [],
            data1:[], 
            country: '', 
            region: '' ,
            dis_country : '',
            product_dis:'',
            // ProductSel_country: '',
            storage:'',
            storage1:'',
            drop_ship:'',
            private_label : '',
            productAvailable: '',
           
            }

            this.storageChange = this.storageChange.bind(this);
            this.storage1 = this.storage1.bind(this);
            this.productAvailable = this.productAvailable.bind(this);
            // this.productAvailable11 = this.productAvailable11.bind(this);
            // this.ProductSel_country = this.ProductSel_country.bind(this);
            this.product_dis = this.product_dis.bind(this);
            this.private_label = this.private_label.bind(this);
            this.drop_ship = this.drop_ship.bind(this)
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
      }
      storageChange(e){
        this.setState({ storage : e.target.value });
      }
      storage1(e){
        this.setState({ storage1 : e.target.value });
      }
      productAvailable(f){
        //   alert(f.target.value)
          this.setState({ productAvailable : f.target.value })
         
      }

      selectCountry (val) {
        this.setState({ country: val });
      }
      drop_ship(e){
          this.setState({ drop_ship : e.target.value})
      }

      private_label(e){
        this.setState({ private_label : e.target.value})
      }

      DistributionCountry (val1) {
        this.setState({ dis_country: val1 });
      }

      product_dis(e){
        this.setState({ product_dis : e.target.value });
      }
    //   ProductSel_country(val2){
    //       this.setState({ ProductSel_country : val2})
    //   }
    
      selectRegion (val) {
        this.setState({ region: val });
      }

      handleChange(date) {
        this.setState({
          startDate: date
        })
      }
    
      handleSubmit(e) {
        e.preventDefault();
        let main = this.state.startDate
        console.log(main.format('L'));
      }

      async componentDidMount(){
        var url = BASE_URL+'product/getsellPlatform/';
        var url1 = BASE_URL + 'product/get_distributors/';
        
        var config = {
            method: 'get',
            url: url,
        };
          axios(config)
      .then(res => {
        this.setState({
          data: res.data.data
        });
        console.log(res.data.data);
      })
      .catch(err => {
        alert(err);
      })
       
      var config1 = {
        method: 'get',
        url: url1,
    };
      axios(config1)
  .then(res => {
    this.setState({
      data1: res.data.data
    });
    console.log(res.data.data);
  })
  .catch(err => {
    alert(err);
  })
    }

    async Submit(){
        // $(".laoder").show(); 
        debugger
        var country = this.state.country;
        var state = this.state.region;
        const selected = document.querySelectorAll('#distributors option:checked');
        var distributors = Array.from(selected).map(el => el.value);
        const selected1 = document.querySelectorAll('#selling_Platform option:checked');
        var selling_Platform = Array.from(selected1).map(elv => elv.value);
        // var all_stores = document.getElementById('all_stores').value;
        // var no_of_stores = document.getElementById('no_of_stores').value;
        var drop_ship = this.state.drop_ship;
        var product_availability =  document.getElementById('product_availability').value;
        var distribution_location = this.state.dis_country;
        var global_distribution = document.querySelector('input[type=checkbox]:checked')
        var private_label = this.state.private_label;
        var storage_required = this.state.storage1

        var url2 = BASE_URL+ 'product/create_product_distribution/';
        var token = cookies.get('token');
        var uuid = cookies.get('sup_uuid');
        var userType = cookies.get('userType');
    var config = {
        method: 'post',
        url: url2,
        headers: {
          "Authorization": "Bearer " + token,
        },
        data:{
            country : country,
            state: state,
            distributors: distributors,
            selling_Platform: selling_Platform,
            drop_ship : drop_ship,
            product_availability:product_availability,
            distribution_location:distribution_location,
            global_distribution:global_distribution,
            private_label:private_label,
            storage_required:storage_required,
          }
    
      };
      console.log(config)
      axios(config).then(res=>{
          console.log(res.data.data)
        cookies.set('uuid2', res.data.data.uuid, { path: '/' })
        // alert(cookies.set('uuid1', res.data.data.uuid, { path: '/' }))
        $(".laoder").hide(); 
        window.location = '/marketing'
      }
      
      ).catch(err=>{
        console.error(err);
        $(".laoder").hide(); 
      window.location = "/distribution";
      })
    }
      
    render() {
        const { country, region,dis_country } = this.state;
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

                                           <Col md="12">
                                           <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>What country/region is your product manufactured in?</Form.Label>
                                                
                                                <CountryDropdown id="country" className="form-control"
                                                    value={country}
                                                    onChange={(val) => this.selectCountry(val)} />
                                        </Form.Group>                                
                                            </Col>

                                            <Col md="12">
                                           <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>What state is your product manufactured in?</Form.Label>
                                                
                                                <RegionDropdown  id ="state" className = "form-control"
                                                    country={country}
                                                    value={region}
                                                    onChange={(val) => this.selectRegion(val)} />
                                                    </Form.Group>
                                            
                                            </Col>

                                            <Col md="12" className="" >
                                                <div className="step-four-radio">
                                                <div>
                                                <label htmlFor="basic-url" className="lb">Is this product available now? </label>
                                                </div>
                                                <Form.Check inline label="yes" name="group2" type="radio" value="true" onClick={this.productAvailable}  />
                                                <Form.Check inline label="No" name="group2" type="radio" value="false" onClick={this.productAvailable}  />
                                                </div>
                                                {this.state.productAvailable === "true" ?<Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Where is the product currently sold? </Form.Label>
                                                <Form.Control as="select" multiple="true" id="selling_Platform">
                                                {this.state.data.map(sell=>(  
                                                <option value={sell.uuid}>{sell.name}</option>))}
                                                
                                                </Form.Control>
                                            </Form.Group>: ""}
                                            {this.state.productAvailable === "false" ? <input class="form-control" id="product_availability" type="date"></input>:""}
                                            </Col>

                                            <Col md="12" className="" >
                                                <div className="step-four-radio">
                                                <div>
                                                <label htmlFor="basic-url" className="lb">Is this product available through distributors? </label>
                                                </div>
                                                <Form.Check inline label="Yes" name="group7" type="radio" value="true" onClick={this.product_dis}  />
                                                <Form.Check inline label="No" name="group7" type="radio" value="false" onClick={this.product_dis}  />
                                                </div>
                                                {this.state.product_dis === "true" ?<Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Which distributors? </Form.Label>
                                                <Form.Control as="select" multiple="true" id="distributors">
                                                {this.state.data1.map(dis=>(  
                                                <option value={dis.uuid}>{dis.name}</option>))}
                                                
                                                </Form.Control>
                                            </Form.Group>:""}
                                            </Col>


                                           </Row>

                                            <Row> 

                                            <Col md="12">
                                           <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Where can you Distribute the Products?</Form.Label>
                                                
                                                <CountryDropdown  id = "distribution_location" className="form-control"
                                                    value={dis_country}
                                                    onChange={(val1) => this.DistributionCountry(val1)} />
                                                    <label>If you can distribute to an entire country, add that country. Otherwise, please add the specific states or provinces (Texas, Quebec, etc.).</label>
                                                    <div className="validated-field__container___1zNgS">
                  <div className="checkbox-large__wrapper___2i1Pl signup-layout__terms-and-conditions___1mfPt">
                    <div className="checkbox-large__inner-wrapper___3jgqh" data-tname="TermsAndConditionsCheckbox">
                      <input onKeyPress={this.GlobalCheck} type="checkbox" id="vehicle1" name="vehicle1" className="sign-check" />
                      <span className="text__text___2g-Dv text__small-copy___bgT96 checkbox-large__label___1i8a0" data-tname="CheckboxLargeLabel"><span className="signup-layout__terms-and-conditions-label___csiGB">
                      I can distribute to all countries globally.</span></span>
                    </div>
                  </div>
                </div>
                                        </Form.Group>                                
                                            </Col>
                                            
                                            </Row>

                                            <Row> 
                                                     
                                            <Col md="12" className="" >
                                                    <div className="step-four-radio">
                                                        <div>
                                                        <label htmlFor="basic-url" className="lb">Can you drop-ship this product to consumers? </label>
                                                        </div>
                                                        <Form.Check inline label="Yes" name="group9" type="radio" value="true" onClick={this.drop_ship}  />
                                                        <Form.Check inline label="No" name="group9" type="radio" value="false" onClick={this.drop_ship}  />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row> 
                                                     
                                                <Col md="12" className="" >
                                                    <div className="step-four-radio">
                                                        <div>
                                                        <label htmlFor="basic-url" className="lb">Is this product available for private label? </label>
                                                        </div>
                                                        <Form.Check inline label="yes" name="group10" type="radio" value="true" onClick={this.private_label}  />
                                                        <Form.Check inline label="No" name="group10" type="radio" value="false" onClick={this.private_label}  />
                                                    </div>
                                                </Col>
         
                                                <Col md="12" className="" >
                                                    <div className="step-four-radio">
                                                        <div>
                                                        <label htmlFor="basic-url" className="lb">Does your product require cold storage?</label>
                                                        </div>
                                                        <Form.Check inline label="yes" name="group3" type="radio" value="true" onClick={this.storageChange}  />
                                                        <Form.Check inline label="NO" name="group3" type="radio" value="false" onClick={this.storageChange}  />
                                                    </div>
                                                   {this.state.storage === "true" ?<div className="step-four-radio">
                                                        <div>
                                                        <label htmlFor="basic-url" className="lb">What type of storage is required?</label>
                                                        </div>
                                                        <Form.Check inline label="Refrigerated" name="group6" type="radio" value="Refrigerated" onClick={this.storage1}  />
                                                        <Form.Check inline label="Frozen" name="group6" type="radio" value="Frozen" onClick={this.storage1}  />
                                                    </div>:""}
                                                </Col>
                                                    
         
         
                                            </Row>

                                        </div>

                                    </div>

                                </Card.Body>
                            </Card>



                            <Col md="12" className="text-center mt-4 two-btn-main">
                            <button class="admin-add-btn"> <NavLink to="/products_detail"> Back </NavLink>    </button>
                                 <button class="admin-add-btn"> <NavLink to="" onClick={() => this.Submit()}> Next </NavLink>  </button>
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
import React, {useEffect, userEffect, useState} from 'react';
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
  Modal,
  Row,
  Tab,
  InputGroup
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import BuyerNavbar from '../BuyerNavbar';
import BASE_URL from '../../base';
import axios from 'axios';


function HomeBuyer(){
    const [show, setShow] = useState(false);
    const [catwiseProduct , setCatwiseProduct] = useState([])


    useEffect(() => {

         axios.get(BASE_URL+'product/getcatwise_product/?search=clean')
    .then(res=>{  
        setCatwiseProduct(res.data) 
        console.log(res.data.serviceprovider)  
      }).catch(err=>{
          console.log(err)            
      })
  
  
  },[])


function myfunc(){
    var cat_name = document.getElementById("category").value
    axios.get(BASE_URL+'product/getcatwise_product/?search='+cat_name)
    .then(res=>{  
        console.log(res.data)  
        setCatwiseProduct(res.data) 
    }).catch(err=>{
        console.log(err)            
    })
    // console.log(home)

}
   
    return(
        <>
           <BuyerNavbar/>
                <div className="container">
                <Row>
                    <Col md="12" xs="12">
                        <div className="buyer-filter-br-m">
                            <Row>
                            <div class="col-md-4 col-xs-12">
                            <div class="form-group">
                                <label for="sel1" style={{margin:"0px"}} className="mb-1">Select Category</label>
                                <select class="form-control" id="sel1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                            </div>
                            <div class="col-md-4 col-xs-12 ml-auto prod-search-inp">
                            <Form.Label htmlFor="basic-url" style={{margin:"0px"}} className="mb-1">Search Products By Category</Form.Label>
                                <InputGroup>
                                <FormControl
                                    placeholder="Username"
                                    id="category"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    />
                                    <InputGroup.Text id="basic-addon1" onClick={myfunc}><i class="fa fa-search" aria-hidden="true"></i></InputGroup.Text>
                                  
                                </InputGroup>
                            </div>
                            </Row>
                        </div>
                    </Col>
                </Row>
                
                <Row>
                {catwiseProduct.map(cat=>(
                    <Col md="4" xs="12">

                        <div className="brand-product-box-d">
                            <div className="p-img">
                                {/* <img src="assets/images/blog1.jpg" alt="p-image"/> */}
                                <img src={BASE_URL.slice(0,-5)+ cat.images}/>
                            </div>
                            <div className="p-text-d-12458">
                                <h6> {cat.product_name} </h6>
                                <p style={{margin: "0px"}}> Lorem ipsum dollar </p>
                                <div className="cost-text by-h-bt">
                                    <button className="admin-add-btn"> Save</button> 
                                    <button className="admin-add-btn ml-2"> Contact </button> 
                                </div>
                                </div>
                        </div>

                    </Col>
                ))}
                    {/* <Col md="4" xs="12">
                        <div className="brand-product-box-d">
                            <div className="p-img">
                                <img src="assets/images/blog1.jpg" alt="p-image"/>
                            </div>
                            <div className="p-text-d-12458">
                                <h6> Candles </h6>
                                <p style={{margin: "0px"}}> Lorem ipsum dollar </p>
                                <div className="cost-text by-h-bt">
                                    <button className="admin-add-btn"> Save</button> 
                                    <button className="admin-add-btn ml-2"> Contact </button> 
                                
                                </div>
                                </div>
                        </div>
                    </Col> 

                     <Col md="4" xs="12">
                        <div className="brand-product-box-d">
                            <div className="p-img">
                                <img src="assets/images/blog1.jpg" alt="p-image"/>
                            </div>
                            <div className="p-text-d-12458">
                                <h6> Candles </h6>
                                <p style={{margin: "0px"}}> Lorem ipsum dollar </p>
                                <div className="cost-text by-h-bt">
                                    <button className="admin-add-btn"> Save</button> 
                                    <button className="admin-add-btn ml-2"> Contact </button> 
                                
                                </div>
                                </div>
                        </div>
                    </Col>    */}
                </Row>
            </div>
        </> 
    );
}

export default HomeBuyer
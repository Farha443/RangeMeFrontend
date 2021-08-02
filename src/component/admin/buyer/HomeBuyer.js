import React, {useEffect, userEffect, useState} from 'react';
import '../../../assets2/admin.css';
import Cookies from 'universal-cookie';
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


const cookies = new Cookies();

var uuid =cookies.get("uuid")
var uuid =cookies.get("logintoken")

function HomeBuyer(){
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [catwiseProduct , setCatwiseProduct] = useState([])
    const [showcat, setshowcat] = useState([])
   

    useEffect(() => {

         
         axios.get(BASE_URL+'product/getcatwise_product/?search=null')
    .then(res=>{  
       
        setCatwiseProduct(res.data) 
        // console.log(res.data.serviceprovider)  
      }).catch(err=>{
          console.log(err)            
      })

      
   
      axios.get(BASE_URL+'authentication/GetCategorysignup/')
      .then(res=>{  
          console.log("this is it")
          console.log(res.data.data)

          setshowcat(res.data.data ) 
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
function myfunc1(){
   
    var categoryname = document.getElementById("department").value
    alert(categoryname)
    axios.get(BASE_URL+'product/getcatwise_product/?search='+categoryname)
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
                                {/* <select class="form-control" id="sel1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select> */}
                             <Form.Control  onChange={myfunc1} as="select" id="department">
                             {showcat.map(cat=>(
                                                <option value={cat.name}>{cat.name}</option>
                                                ))}
                                                
                                                </Form.Control>
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
                {catwiseProduct.map(catt=>(
                    <Col md="4" xs="12">

                        <div className="brand-product-box-d">
                            <div className="p-img">
                                {/* <img src="assets/images/blog1.jpg" alt="p-image"/> */}
                                <img src={catt.images?BASE_URL.slice(0,-5)+ catt.images:"assets/images/blog1.jpg" }alt="p-image"/>
                                
                            </div>
                            <div className="p-text-d-12458">
                                <h6> {catt.product_name} </h6>
                                <p style={{margin: "0px"}}> Lorem ipsum dollar </p>
                                <div className="cost-text by-h-bt">
                                    <button className="admin-add-btn f-w-500" onClick={() => setShow2(true)}><i class="fa fa-plus" aria-hidden="true"></i>  view detail</button>
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

                    {/* add product modal */}
            <Modal
                size="lg"
                centered
                show={show2}
                onHide={() => setShow2(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    <h5 style={{ marginBottom: '0px' }}> Add product </h5>
                    {/* <p> Start with adding your product’s name </p> */}
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col xs={12} md={10} className="m-auto">
                         <div className="text-center mb-3">
                         <h5> Product details </h5>  
                         <p style={{ marginTop: '0px' }}> Start with adding your product’s name </p>
                         </div>
                            <Col xs={12} md={10} className="m-auto"> 
                                <Form.Group controlId="formBasicEmail">
                                
                                    <Form.Control id="addproduct" type="text" placeholder="e.g. Corn Flakes"/>

                                </Form.Group>
                            </Col>
                            </Col>

                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className="col-md-12 text-center">
                        <button className="admin-add-btn" >  contact supplier  </button>
                    </div>
                </Modal.Footer>
            </Modal>


            </div>
        </> 
    );
}

export default HomeBuyer
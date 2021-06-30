import React,{useState,useEffect} from 'react';
import '../../assets2/admin.css';
import AdminNavbar from './AdminNavbar'
import { NavLink } from 'react-router-dom';
// import useState from 'react-hook-use-state';
import InputTags from './InputTags';
import Cookies from 'universal-cookie';
import BASE_URL from '../base';
// import { TagInput } from 'reactjs-tag-input'

// import NutritionPic from './NutritionPic';
// import Pimage from './Pimage';

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
    DropdownButton,
    Dropdown,
    Modal,
    InputGroup
} from 'react-bootstrap';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import context from 'react-bootstrap/esm/AccordionContext';
import NutritionPic from './NutritionPic';
import Pimage from './Pimage';
const colourOptions=[
    { value: 'Red', label: 'Red' },
    { value: 'Black', label: 'Black' },
    { value: 'Blue', label: 'Blue' },
    { value: 'Green', label: 'Green' },
]


const axios = require('axios');
const cookies = new Cookies();

function productdetail() {
    debugger
    var product_name = document.getElementById('product_name').value;
    var product_variant = document.getElementById('product_variant').value;
    var product_cost = document.getElementById('product_cost').value;
    var cost_msrp = document.getElementById('cost_msrp').value;
    var product_percase=document.getElementById('product_percase').value;
    var case_price = document.getElementById('case_price').value;
    var pricing_comments = document.getElementById('pricing_comments').value;
    document.getElementById("product_name")
    const selected = document.querySelectorAll('#product_name');
    var array = Array.from(selected).map(el => el.value);
        

    // var barcode = document.getElementById('yes_barcode').value;
        
        axios.post(BASE_URL+"product/create_product_details/",

            {   
                cost:  product_cost,
                mrp: cost_msrp,             
                products_per_case:product_percase,
                pricing_comments:pricing_comments
                

            }).then(res=>{
              // debugger
              if (res.data.message === "product detail is created"){
                alert("product detail is created");
              }
              else if (res.data.message === "error...error..error"){
                alert("product detail is not created");
              }
              
              console.log(res.data.message)
            //   cookies.set('logintoken', res.data.data.accessToken, { path: '/' })
            //   cookies.set('uuid', res.data.data.uuid, { path: '/' })
            //   cookies.set('first_name', res.data.data.first_name, { path: '/' })
            //   cookies.set('user_pic', res.data.data.user_pic, { path: '/' })
              // window.location = "/"
            //   if(res.data.data.superuser===true){
            //     alert("is superuser")
            //     window.location = "/product_form"
            //   }
            }).catch(err=>{
              // alert(err)
            })
          
  }

function ProductDetail() {
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    const [show, setShow] = useState(false);
    const [category, setCategory]= useState([])
    useEffect(() => {
        axios.get(BASE_URL+'product/create_product/').then(res=>{
            setCategory(res.data.data)
            
        }).catch(err=>{
            console.log(err)            
        })
        console.log(category)
    },[])

    return (
        <>
            <AdminNavbar />

            <section className="product-header-section">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="p-header-main">

                                <div className="p-header-left">
                                    <div className="p-title">
                                        <h4> Headphone </h4> <span> Product </span>
                                    </div>
                                </div>

                                <div className="p-header-right">
                                    <div className="p-right-content">
                                        <div className="p-icn-01">
                                            <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                            <span> All changes saved </span>
                                        </div>

                                        <div className="p-icn-02">
                                            <button className="pre-btn"> <NavLink to="/preview"> <i class="fa fa-eye" aria-hidden="true"></i> Preview </NavLink>  </button>
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
                <Container>
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
                                            <h5>Product Details </h5>

                                        </div>

                                        <div className="overview-form">

                                           <Row>

                                           <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Product name</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" id="product_name"/>

                                            </Form.Group>

                                            </Col>

                                            <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Variant SKU/Style number</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" id="product_variant"/>

                                            </Form.Group>

                                            </Col>

                                            <Col md="6">
                                                <button className="admin-add-btn" onClick={() => setShow4(true)} >  <i class="fa fa-plus" aria-hidden="true"></i> Add Image</button>
                                        
                                            </Col>
                            
                                    

                                

                                           
                                           </Row>
                                            
                                        </div>

                                    </div>

                                </Card.Body>
                            </Card>

                            <Card className="mt-4">

                                <Card.Body>
                                <div className="product-form-main">

                                    <div className="p-inside-title">
                                        <h5>PRODUCT PRICING </h5>

                                    </div>

                                    <div className="overview-form">

                                        <Row>

                                        <Col md="6">
                                        <label htmlFor="basic-url" className="lb">Cost
                                            <p>  (Suggested cost to the retailer) </p>
                                        </label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1">US Dollar</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl
                                                placeholder="10.00"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                id="product_cost"
                                                />
                                            </InputGroup>

                                        </Col>


                                        <Col md="6">
                                            <label htmlFor="basic-url" className="lb">MSRP
                                                <p>   (Suggested selling price for retailers) </p>
                                            </label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1">US Dollar</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl
                                                placeholder="10.00"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                id="cost_msrp"
                                                />
                                            </InputGroup>

                                        </Col>
                                        
                                        <Col md="6">
                                        <label htmlFor="basic-url" className="lb">Products per case
                                            <p>  (Default as 1) </p>
                                        </label>
                                        <Form.Control type="number" placeholder="1" id="product_percase"/>

                                        </Col>

                                        <Col md="6">
                                        <label htmlFor="basic-url" className="lb">Case Price
                                         <p>  (Default as $10) </p>
                                        </label>
                                        <Form.Control type="number" placeholder="$10.00" id="case_price"/>

                                        </Col>

                                        
                                        <Col md="12">
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Pricing comments (Optional)</Form.Label>
                                                <Form.Control as="textarea" rows={3}  id="pricing_comments"/>
                                            </Form.Group>
                                        </Col>
                                       
                                        </Row>
                                        
                                    </div>

                                </div>

                                </Card.Body>
                                </Card>


                                <Card className="mt-4">

                                <Card.Body>
                                <div className="product-form-main">

                                    <div className="p-inside-title">
                                        <h5>PRODUCT BARCODE </h5>

                                    </div>

                                    <div className="overview-form">

                                        <Row>

                                        <Col md="12" className="" >
                                               <div className="step-four-radio">
                                                <div>
                                                <label htmlFor="basic-url" className="lb">Does your product have a barcode? </label>
                                                </div>
                                                <Form.Check inline label="Yes" name="group1" type="radio" id="yes_barcode"/>
                                                <Form.Check inline label="No" name="group1" type="radio" id="no_barcode" />

                                                <div >
                                                <InputGroup className="mb-3 mt-3">
                                                <Form.Control as="select" className="col-md-3">
                                                    <option>Un</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    </Form.Control>
                                                    <FormControl className="col-md-9" aria-describedby="basic-addon1" defaultValue="enter barcode"/>

                                                 

                                                </InputGroup>
                                                </div>
                                               
                                                </div>
                                               </Col>
                                        </Row>
                                        
                                    </div>

                                </div>

                                </Card.Body>
                                </Card>


                                <Card className="mt-4">

                                <Card.Body>
                                <div className="product-form-main">

                                    <div className="p-inside-title">
                                        <h5>PRODUCT PACKAGING </h5>

                                    </div>

                                    <div className="overview-form">

                                        <Row>

                                        <Col md="12" className="" >
                                            <div className="step-four-radio">
                                                <div>
                                                <label htmlFor="basic-url" className="lb">Does your product have packaging? (Optional)</label>
                                                </div>
                                                <Form.Check inline label="Yes" name="group1" type="radio" id="yes_packaging" />
                                                <Form.Check inline label="No" name="group1" type="radio" id="no_packaging" />
                                                </div>

                                                <div >
                                                <label className="col-md-12" htmlFor="basic-url" className="lb">Product dimensions (Optional)</label>
                                                <InputGroup className="mb-3">
                                                <Form.Control as="select" className="col-md-3">
                                                    <option>Un</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    </Form.Control>
                                                    <FormControl className="col-md-3" aria-describedby="basic-addon1" defaultValue="Width"/>
                                                    <FormControl className="col-md-3" aria-describedby="basic-addon1" defaultValue="Hight"/>
                                                    <FormControl className="col-md-3" aria-describedby="basic-addon1" defaultValue="Depth"/>

                                                 

                                                </InputGroup>
                                                </div>

                                            </Col>


                                             <Col md="6" xs="12">
                                             <div >
                                                <label className="col-md-12" htmlFor="basic-url" className="lb">Product volume (Optional)</label>
                                                <InputGroup className="mb-3">
                                                <Form.Control as="select" className="col-md-4">
                                                    <option>In</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    </Form.Control>
                                                    <FormControl className="col-md-8" aria-describedby="basic-addon1" defaultValue="Width"/>
                                                  
                                                 

                                                </InputGroup>
                                                </div>
                                            </Col>

                                            <Col md="6" xs="12">
                                             <div >
                                                <label className="col-md-12" htmlFor="basic-url" className="lb">Product weight (Optional)</label>
                                                <InputGroup className="mb-3">
                                                <Form.Control as="select" className="col-md-4">
                                                    <option>In</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    </Form.Control>
                                                    <FormControl className="col-md-8" aria-describedby="basic-addon1" defaultValue="Width"/>
                                                  
                                                 

                                                </InputGroup>
                                                </div>
                                            </Col>


                                            <Col md="6" xs="12">
                                             <div >
                                                <label className="col-md-12" htmlFor="basic-url" className="lb">Product size (Optional)</label>
                                                <InputGroup className="mb-3">
                                                <Form.Control as="select" className="col-md-4">
                                                    <option>In</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    </Form.Control>
                                                    <FormControl className="col-md-8" aria-describedby="basic-addon1" defaultValue="Width"/>
                                                  
                                                 

                                                </InputGroup>
                                                </div>
                                            </Col>
                                        </Row>
                                        
                                    </div>

                                </div>

                                </Card.Body>
                                </Card>

                                <Card className="mt-4">

                                    <Card.Body>
                                    <div className="product-form-main">

                                        <div className="p-inside-title">
                                            <h5>PRODUCT SHELF LIFE AND INGREDIENTS </h5>

                                        </div>

                                        <div className="overview-form">

                                            <Row>

                                            <Col md="12" xs="12" className="" >
                                                <div className="step-four-radio">
                                                    <div>
                                                    <label htmlFor="basic-url" className="lb">Does your product have a shelf life? (optional)</label>
                                                    </div>
                                                    <Form.Check inline label="Yes" name="group1" type="radio" id="1" />
                                                    <Form.Check inline label="No" name="group1" type="radio" id="2" />
                                                    </div>
                                                </Col>

                                                <Col md="12" xs="12">
                                         
                                                 <InputGroup className="mt-2">
                                                <Form.Control as="select" className="col-md-3">
                                                    <option>Days</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    </Form.Control>
                                                    <FormControl className="col-md-9" aria-describedby="basic-addon1"/>
                                                  
                                                 

                                                </InputGroup>
                                            
                                            </Col>
                                            </Row>

                                            <Row>

                                            <Col md="12" xs="12" className="" >
                                                <div className="step-four-radio">
                                                    <div>
                                                    <label htmlFor="basic-url" className="lb">Does your product have ingredients? (optional)</label>
                                                    </div>
                                                    <Form.Check inline label="Yes" name="group1" type="radio" id="1" />
                                                    <Form.Check inline label="No" name="group1" type="radio" id="2" />
                                                    </div>
                                                </Col>

                                                <Col md="12" xs="12">                                               
                                                    <div className="input-tags-main-1024">
                                                        <InputTags />
                                                    </div>                                             
                                                </Col>

                                            </Row>

                                            <Row>

                                             <Col md="12" xs="12" className="" >
                                                <div className="step-four-radio">
                                                    <div>
                                                    <label htmlFor="basic-url" className="lb">Does your product have a nutritional label? (optional) </label>
                                                    </div>
                                                    <Form.Check inline label="Yes" name="group1" type="radio" id="yes_nutrition"/>
                                                    <Form.Check inline label="No" name="group1" type="radio" id="no_nutrition" />
                                                    </div>
                                                </Col>

                                                <Col md="12" xs="12">                                               
                                                    <button className="admin-add-btn" onClick={() => setShow3(true)}> <i class="fa fa-plus" aria-hidden="true"></i> Nutritional Label </button>
                                                </Col>
                                            </Row>
                                            
                                        </div>

                                    </div>

                                    </Card.Body>
                                    </Card>




                            <Col md="12" className="text-center mt-4 two-btn-main">
                            <button class="admin-add-btn"> <NavLink to="/product_form"> Back </NavLink>    </button>
                                 <button class="admin-add-btn" onClick={productdetail}> <NavLink to="/distribution"> Next </NavLink>  </button>
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
                                    <button className="prev-prod-btn">  <NavLink to="/preview"> <i class="fa fa-eye" aria-hidden="true"></i> Preview Product Profile </NavLink>   </button>
                                    <p> We will help guide you along the process. <NavLink to=""> Need Help </NavLink> </p>
                                </div>

                            </div>
                        </Col>


                    </Row>
                </Container>
            </section>


            <Modal
                size="lg"
                centered
                show={show4}
                onHide={() => setShow4(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    <h5 style={{margin: '0px'}}>  Upload your image </h5>
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col xs={12} md={12} >
                                <div className="nutri-upload">
                                <Pimage/>
                                </div>
                                
                               
                            </Col>

                            <Col xs={12} md={6} >
                            <div className="nutri-text-right">
                                    <h5> PRODUCT IMAGE </h5>
                                    <p>
                                    The product image is your first impression to buyers and one of the most important elements of your listing. </p>

                                 
                                </div>
                            </Col>

                            <Col xs={12} md={6} >
                            <div className="nutri-text-right-22">
                                    <h6> IMAGE REQUIREMENTS </h6>
                                    <ul>
                                       
                                        <li> Your product should be the focus of the image </li>
                                        <li> Use a white background </li>
                                        <li> Avoid words, logos and watermarks on the image </li>
                                        <li> Show the entire product </li>
                                    </ul>
                                 
                                </div>
                            </Col>

                       


                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className="col-md-12 text-center">
                        <button class="admin-add-btn f-w-500">  Save  </button>
                    </div>
                </Modal.Footer>
            </Modal>


            <Modal
                size="lg"
                centered
                show={show3}
                onHide={() => setShow3(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    <h5 style={{margin: '0px'}}>  Upload your nutritional label </h5>
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col xs={12} md={12} >
                                <div className="nutri-upload">
                                <NutritionPic/>
                                </div>
                                
                               
                            </Col>

                            <Col xs={12} md={12} >
                            <div className="nutri-text-right text-center">
                                    <h5> NUTRIONAL LABEL </h5>
                                    <p>
                                    Nutrition facts are important for buyers to evaluate products just as it is for consumers.
                                    </p>

                                 
                                </div>
                            </Col>

                            {/* <Col xs={12} md={4} >
                                <div className="nutri-img-main">
                                        <p>
                                        WHAT DOES A NUTRITIONAL LABEL LOOK LIKE?
                                        </p>
                                    <img src="assets/images/nutri.png"/>
                                </div>
                            </Col> */}


                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className="col-md-12 text-center">
                        <button class="admin-add-btn f-w-500">  Save  </button>
                    </div>
                </Modal.Footer>
            </Modal>


        </>
    );
}

export default ProductDetail
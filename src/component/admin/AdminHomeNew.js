import React, {useEffect, userEffect, useState} from 'react';
import '../../assets2/admin.css';
import AdminNavbar from './AdminNavbar'
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
  Tab
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import Cookies from "universal-cookie";
import BASE_URL from '../base';
// import BrandLogoHome from './BrandLogoHome';
const axios = require('axios').default;
const cookies = new Cookies();


var user_uuid = cookies.get("uuid")

function AdminHomeNew(){
    const [show, setShow] = useState(false);
    const [show3, setShow3] = useState(false);
    const [isActive, setActive] = useState("false");
    const[brands, setBrands] = useState([])
    const[Allbrands, setAllbrands] = useState([])
    const[singleBrand , setSingleBrand] = useState([]);
    const handleToggle = () => {
        setActive(!isActive);
      };

      useEffect(() => {
         
        axios.get(BASE_URL+'authentication/getsupplier/'+ user_uuid )
        .then(res=>{
            setBrands(res.data.data[0])
            setAllbrands(res.data.data)
            // console.clear()
            console.log("------brands------")
            console.log(res.data.data)
        }).catch(err=>{
            // $(".laoder").hide();
            console.log(err)            
        })
        
    },[])

    function GetSingleBrand(uuid){
        // alert(uuid)
        axios.get(BASE_URL+'authentication/singlebrand/'+ uuid )
        .then(res=>{
            setBrands(res.data.data)
            alert(res.data.data.brand_name)
            console.log(res.data.data.length)
            // console.clear()
            // console.log("------Single Brand------")
            // console.log(res.data.data)
        }).catch(err=>{
            console.log(err)            
        })     
        // console.log(brands);
        
    }


    return(
        <>
            <AdminNavbar/>

           
                <div className="admin-container">
                <div className="row">
                <div className="rgm-left-content col-md-9">
            <section className="admin-home-section"> 
         
                <Row>
                    <Col md="12">
                    <div className="cover-md-left-cont">
                    <div className="ad-hm-logo-main">
                                     
                                     {/* <img src="assets/images/brand-logo.jpg" /> */}
                                     <img src = {BASE_URL.slice(0,-5)+brands.brand_logo}></img>
                                        <div className="prof-img-btn">
                                            <button className="clickable-cover-image__change-image___JnYhU" type="button" onClick={() => setShow3(true)}>
                                                <div className="clickable-cover-image__change-image-hint___3NLUs"><img alt="camera" className="clickable-cover-image__change-image-icon___1k392" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMxIDZoLTcuNmwtMy43LTMuN2MtLjItLjItLjQtLjMtLjctLjNoLTZjLS4zIDAtLjUuMS0uNy4zTDguNiA2SDFjLS42IDAtMSAuNC0xIDF2MjJjMCAuNi40IDEgMSAxaDMwYy42IDAgMS0uNCAxLTFWN2MwLS42LS40LTEtMS0xek0xNiAyNWMtMy45IDAtNy0zLjEtNy03czMuMS03IDctNyA3IDMuMSA3IDctMy4xIDctNyA3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNiA1SDNjLS42IDAtMS0uNC0xLTFzLjQtMSAxLTFoM2MuNiAwIDEgLjQgMSAxcy0uNCAxLTEgMXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=" />
                                                    <div className="clickable-cover-image__change-image-text___1kIxy"></div>
                                                </div>
                                            </button>
                                        </div>
                                   
                                     

                                    </div>

                                    <div className="cover-brand-title ad-hm-b-title">
                                        <h5> {brands.brand_name} </h5>
                                      
                                        <p onClick={handleToggle}> Switch Brand <i class="fa fa-angle-down" aria-hidden="true"></i> </p>
                                        <div className={isActive ? "drop-d-101 " : "drop-d-101 open-drop"}>
                                        {Allbrands.map(function(bt, index){
                                            if(index!==1){
                                                return <ul>
                                                   <li onClick={() => GetSingleBrand(bt.uuid)}> <NavLink to="/admin_home1">{bt.brand_name}</NavLink> </li>
                                               </ul>
                                               }
                                               else{
                                                return 
                                              
                        }
                    })}
                                           </div>
                                    </div>
                    </div>
                                   
                    </Col>
                    <Col md="12">
                    <Card>
                        <Card.Body className="mb-2">
                            <div className="p-insight-d-main">
                                <div className="p-inside-title">
                                    <h5> Profile Insights </h5>
                                    <p> Profile Status : <span> Unpublished </span> </p>
                                </div>
                            </div>
                        <Row>
                            <Col md="12">
                                <div className="hm-insight-m-div">
                                    <ul>
                                        <li>
                                            <div className="in-content">
                                                <div className="in-cont-first">
                                                <i class="fal fa-check-circle"></i>
                                                    <p>  Create account </p>          
                                                </div>           
                                            </div>
                                        </li>

                                        <li className="ad-home-active">
                                            <div className="in-content">
                                                <div className="in-cont-first">
                                                <i class="fal fa-check-circle"></i>
                                                    <p>  Add product </p> 
                                                    <p> Add your first product to attract interest from buyers</p>         
                                                </div>
                                                <div className="in-content-two">
                                                    <button className="admin-add-btn"> Complete Product  </button>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="in-content">
                                                <div className="in-cont-first">
                                                <i class="fal fa-check-circle"></i>
                                                    <p> Confirm email </p>          
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="in-content">
                                                <div className="in-cont-first">
                                                <i class="fal fa-check-circle"></i>
                                                    <p> Add logo (optional) </p>          
                                                </div>                     
                                            </div>
                                        </li>

                                        <li>
                                            <div className="in-content">
                                                <div className="in-cont-first">
                                                <i class="fal fa-check-circle"></i>
                                                    <p>  Add cover image (optional) </p>          
                                                </div>      
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Col>

                    
                        </Row>
                        </Card.Body>
                    </Card>
                       
                    </Col>
             
                </Row>
       
            </section>


            <section className="admin-home-section"> 
            <Container>
                <Row>
                    <Col md="12">
                    <Card style={{width: '80%',marginTop:"5px"}}>
                      
                        <Card.Body>
                            <div className="p-insight-d-main">
                                <div className="p-inside-title">
                                    <h5> Profile Insights </h5>
                                    <p> Profile Status : <span> Unpublished </span> </p>
                                </div>
                            </div>
                        <Row>
                            <Col md="4">
                                <div className="admin-count-box">
                                {/* <i class="fa fa-eye" aria-hidden="true"></i> */}
                                    <h2> {brands.brand_views}</h2>
                                    <p> VIEWS </p>
                                </div>
                            </Col>

                            <Col md="4">
                                <div className="admin-count-box">
                                {/* <i class="fa fa-users" aria-hidden="true"></i> */}
                                <h2> - </h2>
                                    <p> PROFILE VISITS </p>
                                </div>
                            </Col>

                            <Col md="4">
                                <div className="admin-count-box">
                                {/* <i class="fa fa-commenting-o" aria-hidden="true"></i> */}
                                <h2> - </h2>
                                    <p> CONVERSIONS </p>
                                </div>
                            </Col>  
                        </Row>
                        </Card.Body>
                    </Card>
                       
                    </Col>
                </Row>
            </Container>
            </section>
            {/* <section className="admin-home-section2"> 
         
                <Row>
                    <Col md="12">
                    <Card>
                      
                        <Card.Body className="mb-4">
                            <div className="p-insight-d-main">
                                <div className="p-inside-title with-btn">
                                    <h5> Profile Insights </h5>
                                    <p> <button className="admin-add-btn"  onClick={() => setShow(true)}> <i class="fa fa-plus" aria-hidden="true"></i> Add Brand </button> </p>
                                      
                                </div>
                            </div>
                        <Row>
                            <Col md="12">
                            <ul class="process">
                                <li class="process__item">
                                    <span class="process__number">1</span>
                                    <span class="process__title">Create account</span>
                                    <span class="process__subtitle">We analyse your problem and develop a strategy</span>
                                </li>

                                <li class="process__item active">
                                    <span class="process__number">2</span>
                                    <span class="process__title">Add product</span>
                                    <span class="process__subtitle">Add your first product to attract interest from buyers</span>

                                    <button className="admin-add-btn"> <NavLink to="/product_form"> Complete Product </NavLink>  </button>

                                </li>

                                <li class="process__item">
                                    <span class="process__number">3</span>
                                    <span class="process__title">
                                        Confirm email</span>
                                    <span class="process__subtitle">We analyse your problem and develop a strategy</span>
                                </li>

                                <li class="process__item">
                                    <span class="process__number">4</span>
                                    <span class="process__title">Add logo</span>
                                    <span class="process__subtitle">We analyse your problem and develop a strategy</span>
                                </li>
                             
                                </ul>
                            </Col>

    
                        </Row>
                        </Card.Body>
                    </Card>
                       
                    </Col>
                </Row>
        
            </section> */}

            <section className="adm-hm-side-tabs-section">
                <Row>
                    <Col md="12">
                      <Card>
                          <Card.Body className="pb-0">
                          <div className="side-tabs-main">
                              <Row>
                              <Col sm={12}>
                                  <div className="side-tb-title-main">
                                        <h5> Improve your profile </h5>
                                  </div>
                              </Col>
                              </Row>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                        <Row>
                            <Col sm={3}>
                            <Nav variant="pills" className="flex-column side-tabs-menu-main">
                                <Nav.Item>
                                     <Nav.Link eventKey="1">Invite your team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                     <Nav.Link eventKey="2">Create Sell Sheets</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                     <Nav.Link eventKey="3">Share your profile</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                     <Nav.Link eventKey="4">Add more products</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                     <Nav.Link eventKey="5">Get Vaniver Verified™</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                     <Nav.Link eventKey="6">Get a free consultation</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                     <Nav.Link eventKey="7">Optimize your profile</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                     <Nav.Link eventKey="8">Submit to retailers</Nav.Link>
                                </Nav.Item>
                                
                            </Nav>
                            </Col>
                            <Col sm={8}>
                            <Tab.Content className="side-tabs-content-main">
                                <Tab.Pane eventKey="1">
                                    <div className="improve-your-profile-tab-panel__top___2wZZo">
                                        <h4> Invite your team </h4>
                                        <div className="improve-your-profile-tab-panel__icon___29Tsa">
                                            <img src="assets/images/two-people-blue.svg"/>
                                        </div>
                                        <p>
                                        Add your marketing and sales colleagues to your RangeMe account,
                                        so that you can more quickly attract interest from buyers,
                                        get buyer feedback, track prospects, and win new business.
                                        </p>
                                        <button className="admin-add-btn"> <NavLink to="/team_access"> Invite Team </NavLink>  </button>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="2">
                                     <div className="improve-your-profile-tab-panel__top___2wZZo">
                                        <h4> Create and share downloadable sell sheets </h4>
                                        <div className="improve-your-profile-tab-panel__icon___29Tsa">
                                            <img src="assets/images/sales-sheet.svg"/>
                                        </div>
                                        <p>
                                        Turn your RangeMe profile into a downloadable sell sheet that you can 
                                        share via PDF or print for in-person use.
                                        </p>
                                        <button className="admin-add-btn">  Create Sell Sheet </button>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="3">
                                     <div className="improve-your-profile-tab-panel__top___2wZZo">
                                        <h4> Share your profile with buyers </h4>
                                        <div className="improve-your-profile-tab-panel__icon___29Tsa">
                                            <img src="assets/images/laptop-share.svg"/>
                                        </div>
                                        <p>
                                        Increase visits to your profile by sharing it with buyers via 
                                        a URL that you can post anywhere, or by sending them an invite via email.
                                        </p>
                                        <button className="admin-add-btn"> Share Profile </button>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="4">
                                    <div className="improve-your-profile-tab-panel__top___2wZZo">
                                        <h4> Add more products </h4>
                                        <div className="improve-your-profile-tab-panel__icon___29Tsa">
                                            <img src="assets/images/two-boxes-b.svg"/>
                                        </div>
                                        <p>
                                        Add your full product assortment to ensure your best chances of success.
                                        </p>
                                        <button className="admin-add-btn"> Add a product </button>
                                    </div>
                                
                                </Tab.Pane>
                                <Tab.Pane eventKey="5">
                                    <div className="improve-your-profile-tab-panel__top___2wZZo">
                                        <h4> Get Veniver Verified™ </h4>
                                        <div className="improve-your-profile-tab-panel__icon___29Tsa">
                                            <img src="assets/images/laptop-verified.svg"/>
                                        </div>
                                        <p>
                                        Learn how to optimize your profile by getting helpful tips from a member of our Customer Success team.
                                        </p>
                                        <button className="admin-add-btn">Get Verified </button>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="6">
                                    <div className="improve-your-profile-tab-panel__top___2wZZo">
                                        <h4> Get a free consultation </h4>
                                        <div className="improve-your-profile-tab-panel__icon___29Tsa">
                                            <img src="assets/images/laptop-verified.svg"/>
                                        </div>
                                        <p>
                                        Complete verification to show buyers that you're
                                        retail-ready and start experiencing up to 7x the visibility for your brand.
                                        </p>
                                        <button className="admin-add-btn"> Request a phone call </button>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="7">
                                    <div className="improve-your-profile-tab-panel__top___2wZZo">
                                        <h4> Optimize your profile </h4>
                                        <div className="improve-your-profile-tab-panel__icon___29Tsa">
                                            <img src="assets/images/laptop-thumbs-up.svg"/>
                                        </div>
                                        <p>
                                        Add the most relevant keywords, and consider updating your pricing, to make sure buyers see your profile when searching.
                                        </p>
                                        <button className="admin-add-btn"> Get insights </button>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="8">
                                    <div className="improve-your-profile-tab-panel__top___2wZZo">
                                        <h4> Submit to retailers </h4>
                                        <div className="improve-your-profile-tab-panel__icon___29Tsa">
                                            <img src="assets/images/inbox-with-arrow-blue.svg"/>
                                        </div>
                                        <p>
                                        Submit to the right retailer for you at the right time, by reviewing those accepting new product submissions for specific categories.
                                        </p>
                                        <button className="admin-add-btn"> Browse retailers </button>
                                    </div>
                                </Tab.Pane>

                            </Tab.Content>
                            </Col>
                        </Row>
                        </Tab.Container>

                        </div>
                          </Card.Body>
                      </Card>
                    </Col>
                </Row>
            </section>
  
            </div>



        {/* right sidebar div start  */}

        <div className="col-md-3">
            <div className="rgm-right-bar">
                <div className="right-side-header">
                    <h5>Current buyer activity on Vaniver</h5>
                    <p> See buyer actions across all suppliers on Vaniver </p>
                </div> 

                <ul>
                    <li>
                        <div className="right-side-img-d-1">
                            <img src="assets/images/101.jpg" alt="img"/>
                        </div>
                       <div className="tx-1021">
                       <h6>A buyer from QVC / HSN</h6>
                        <p> saved a brand </p>
                       </div>
                    </li>

                    <li>
                        <div className="right-side-img-d-1">
                            <img src="assets/images/101.jpg" alt="img"/>
                        </div>
                       <div className="tx-1021">
                       <h6>A buyer from QVC / HSN</h6>
                        <p> saved a brand </p>
                       </div>
                    </li>

                    <li>
                        <div className="right-side-img-d-1">
                            <img src="assets/images/101.jpg" alt="img"/>
                        </div>
                       <div className="tx-1021">
                       <h6>A buyer from QVC / HSN</h6>
                        <p> saved a brand </p>
                       </div>
                    </li>

                    <li>
                        <div className="right-side-img-d-1">
                            <img src="assets/images/101.jpg" alt="img"/>
                        </div>
                       <div className="tx-1021">
                       <h6>A buyer from QVC / HSN</h6>
                        <p> saved a brand </p>
                       </div>
                    </li>

                    <li>
                        <div className="right-side-img-d-1">
                            <img src="assets/images/101.jpg" alt="img"/>
                        </div>
                       <div className="tx-1021">
                       <h6>A buyer from QVC / HSN</h6>
                        <p> saved a brand </p>
                       </div>
                    </li>
                    
                    <div className="verif-text-hm">
                        <p> 15821 verified buyers on vaniver </p>
                    </div>
                    

                </ul> 
            </div>
         
        </div>
                </div>
            </div>
              
            <Modal
        size="lg"
        // dialogClassName="modal-90w"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
            Add new brand
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Container>
                
                <Row>
                <Col xs={12} md={12}>
                
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label  style={{marginTop: '0px'}}>Band Name</Form.Label>
                        <Form.Control type="email" placeholder="abc" />

                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label  style={{marginTop: '0px'}}>Location</Form.Label>
                        <Form.Control type="email" placeholder="abc" />

                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label  style={{marginTop: '0px'}}>Year founded</Form.Label>
                      <Form.Control as="select">
                      <option>Select</option>
                      <option>brand 1</option>
                      <option>brand 2</option>
                      <option>brand 3</option>
                      <option>brand 3</option>
                      </Form.Control>
                  </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label  style={{marginTop: '0px'}}>Revenue</Form.Label>
                      <Form.Control as="select">
                      <option>Select</option>
                      <option>brand 1</option>
                      <option>brand 2</option>
                      <option>brand 3</option>
                      <option>brand 3</option>
                      </Form.Control>
                    
                    <p className="mt-2"> Buyers use this information to search for products </p>
                  </Form.Group>

                    
                </Col>
                {/* <Col xs={6} md={6}>
                .col-xs-6 .col-md-4
                </Col> */}
            </Row>
            </Container>
            </Modal.Body>
            <Modal.Footer>
                <div className="col-md-12 text-center">
                <button class="admin-add-btn f-w-500">  <i class="fa fa-plus" aria-hidden="true"></i> Add Brand </button>
                </div>
            </Modal.Footer>
      </Modal>


    {/* Brand logo modal  */}
    {/* <Modal
                size="lg"
                centered
                show={show3}
                onHide={() => setShow3(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Brand Logo
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col xs={12} md={12}>

                              <BrandLogoHome/>

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
 */}


        </> 
    );
}

export default AdminHomeNew
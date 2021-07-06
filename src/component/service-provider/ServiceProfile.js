import React from 'react';
import '../../../assets2/admin.css';
import AdminNavbar from '../AdminNavbar'
import BrandLogoHome from '../BrandLogoHome';
import ServiceComLogo from './ServiceComLogo';
import GalleryPhotoUpload from './GalleryPhotoUpload';
import InputColor from 'react-input-color';

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
import useState from 'react-hook-use-state';


function ServiceProfile(){
    const [color, setColor] = React.useState({});
    const [isActive, setActive] = useState("false");
   
    return(
        <>
            <AdminNavbar/>

           
            <div className="admin-container">
            <div className="row">

            <div className="rgm-left-content col-md-9">

                <section className="service-pro-title-sction">
                    <Row>
                        <Col md="12" xs="12">
                            <div className="service-p-title">
                                <h5> Edit your profile </h5>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="serv-com-details-section">
                    <Row>
                        <Col md="12">
                        <Card>

                <Card.Body>
                    <div className="product-form-main">

                        <div className="p-inside-title">
                            <h5> <img src="assets/images/office.png" /> Company Details </h5>

                        </div>

                        <div className="overview-form">

                        <Row>

                            <Col md="12">    
                                <ServiceComLogo/>
                            </Col>

                                <Col md="6">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Company Name</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />

                                    </Form.Group>

                                    </Col>

                                    <Col md="6">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Website URL</Form.Label>
                                        <Form.Control type="email" placeholder="abc.com" />

                                    </Form.Group>

                                    </Col>

                                    <Col md="6" xs="12">
                                        <div className="color-pick-inp-m">
                                        <Form.Label>Brand color</Form.Label>
                                        <InputColor
                                            initialValue="#38B5E6"
                                            onChange={setColor}
                                            placement="right"
                                        />
                                         <div className="color-pic-div"
                                            style={{
                                            backgroundColor: color.rgba
                                            }}
                                        />
                                        </div>
                                    </Col>

                           
                                    <Col md="12" className="text-center">
                                    <button class="admin-add-btn">   Save Changes  </button>
                                    </Col>

                                </Row>
                                    
                                </div>

                            </div>

                        </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </section>

                <section className="serv-com-details-section-2">
                    <Row>
                        <Col md="12">
                        <Card>

                <Card.Body>
                    <div className="product-form-main">

                        <div className="p-inside-title">
                            <h5>  About </h5>

                        </div>

                        <div className="overview-form">

                        <Row>

                                <Col md="12">
                                    <Form.Group className="abt-tet125" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Short description</Form.Label>
                                        <p> Provide a short introduction to your company that will be at the top of your profile and visible in your profile preview. </p>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                 </Col>

                                 <Col md="12">
                                    <Form.Group className="abt-tet125" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Full description</Form.Label>
                                        <p> Share details about your company and what you specialize in. </p>
                                        <Form.Control as="textarea" rows={5} />
                                    </Form.Group>
                                 </Col>

                                <Col md="12" className="text-center">
                                <button class="admin-add-btn">   Save Changes  </button>
                                </Col>

                                </Row>
                                    
                                </div>

                            </div>

                        </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </section>

                 <section className="serv-com-details-section-2">
                    <Row>
                        <Col md="12">
                        <Card>

                <Card.Body>
                    <div className="product-form-main">

                        <div className="p-inside-title">
                            <h5>  About </h5>

                        </div>

                        <div className="overview-form">

                        <Row>

                                <Col md="6">
                                    <GalleryPhotoUpload/>
                                 </Col>

                                 <Col md="6">
                                    <div className="embed-link-d">
                                        <button className="border-btn">
                                            Embed video link
                                        </button>
                                    </div>
                                 </Col>

                                <Col md="12" className="text-center">
                                <button class="admin-add-btn">   Save Changes  </button>
                                </Col>

                                </Row>
                                    
                                </div>

                            </div>

                        </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </section>
                  

            </div>


             {/* right sidebar div start  */}

            <div className="col-md-3">
                <div className="rgm-right-bar serv-p-side-left">

                    <div className="serv-comp-leftbar">
                        <img src="assets/images/brand-logo.jpg" />
                    </div> 

                    <div className="serv-comp-title">
                        <h5> Company Name  </h5>
                    </div>

                    <div className="p-text-45878">
                        <span className="span-1"> Preview :</span>
                        <span className="span-2">
                            <NavLink to=""> Profile </NavLink>
                            <NavLink to=""> search Listing </NavLink>
                        </span>
                    </div>

                    <div className="serv-com-btn-m">
                        <button className="admin-add-btn"> Complete Profile </button>
                    </div>

                    <div className="p-text-45878 text-center">
                        <p> <i class="fa fa-check-circle-o" aria-hidden="true"></i> All changes saved </p>
                        <span className="span-1"> Profile status :</span>
                        <span className="span-2 " style={{fontSize: '14px', marginLeft: '0.5rem'}}>
                        Unpublished
                        </span>
                    </div>

                
                </div>
         
            </div>

                </div>
            </div>

        </> 
    );
}

export default ServiceProfile
import React from 'react';
import '../../../assets2/admin.css';
import AdminNavbar from '../AdminNavbar'
import BrandLogoHome from '../BrandLogoHome';
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


function ServiceProviderDashboard(){
   
    const [isActive, setActive] = useState("false");
   
    return(
        <>
            <AdminNavbar/>

           
                <div className="admin-container">
                <div className="row">

                    
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
                    <span className="span-1"> Preview :</span>
                    <span className="span-2 " style={{fontSize: '14px', marginLeft: '0.5rem'}}>
                       Unpublished
                    </span>
                </div>

            
            </div>
         
        </div>
                <div className="rgm-left-content col-md-9">
            <section className="admin-home-section">

               <Row>
               <Col md="12" xs="12">
                    <div className="servi-welcome-main">
                        <div className="wel-text">
                        <h4> Welcome to your dashboard! </h4>
                        <p>
                        Manage your profile, view your messages, and track profile visits.
                        </p>
                        <p>
                         <NavLink to=""> Complete your profile </NavLink> to become discoverable by thousands of suppliers.
                        </p>
                        </div>

                        <div className="wel-img">
                            <img src="assets/images/welcome-img.svg" />
                        </div>
                    </div>
                </Col> 
               </Row>


                <Row>
                    
                    <Col md="12">
                    <Card>
                        <Card.Body className="mb-2">
                            <div className="p-insight-d-main">
                                <div className="p-inside-title">
                                    <h5> Title </h5>
                                  
                                </div>
                            </div>
                            <Row>
                                <Col md="12" xs="12">
                                    <div className="serv-p-dash-box-main">
                                        <ul>
                                            <li>
                                                <div className="b-cont">
                                                {/* <i class="fa fa-eye" aria-hidden="true"></i> */}
                                                <h2> - </h2>
                                                <p> Profile impressions </p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="b-cont">
                                                {/* <i class="fa fa-eye" aria-hidden="true"></i> */}
                                                <h2> - </h2>
                                                <p> Profile visits   </p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="b-cont">
                                                {/* <i class="fa fa-eye" aria-hidden="true"></i> */}
                                                <h2> - </h2>
                                                <p> Website clicks </p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="b-cont">
                                                {/* <i class="fa fa-eye" aria-hidden="true"></i> */}
                                                <h2> - </h2>
                                                <p> Messages </p>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="b-cont">
                                                {/* <i class="fa fa-eye" aria-hidden="true"></i> */}
                                                <h2> - </h2>
                                                <p> Endorsements </p>
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



            <section className="admin-home-section2"> 
         
                <Row>
                    <Col md="12">
                    <Card>
                      
                        <Card.Body className="mb-4">
                            <div className="p-insight-d-main">
                                <div className="p-inside-title with-btn">
                                    <h5> Endorsements </h5>
                                           
                                </div>
                            </div>
                     
                        </Card.Body>
                    </Card>
                       
                    </Col>
                </Row>
        
            </section>

            <section className="admin-home-section2"> 
         
                <Row>
                    <Col md="12">
                    <Card>
                    
                        <Card.Body className="mb-4">
                            <div className="p-insight-d-main">
                                <div className="p-inside-title with-btn">
                                    <h5>  Impressions </h5>
                                            
                                </div>
                            </div>
                    
                        </Card.Body>
                    </Card>
                        
                    </Col>
                </Row>
        
            </section>


            <section className="admin-home-section2"> 
         
                <Row>
                    <Col md="12">
                    <Card>
                      
                        <Card.Body className="mb-4">
                            <div className="p-insight-d-main">
                                <div className="p-inside-title with-btn">
                                    <h5> Audience Insights </h5>
                                           
                                </div>
                            </div>
                     
                        </Card.Body>
                    </Card>
                       
                    </Col>
                </Row>
        
            </section>

  
            </div>

                </div>
            </div>

        </> 
    );
}

export default ServiceProviderDashboard
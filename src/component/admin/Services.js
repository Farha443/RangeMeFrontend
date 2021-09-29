import React from 'react';
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
    InputGroup,
    ProgressBar,
    Row,
} from 'react-bootstrap';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import useState from 'react-hook-use-state';
// import BrandLogoHome from './BrandLogoHome';
import Slider from "react-slick";
import InnerFooter from './InnerFooter';

function Services() {
    const [show, setShow] = useState(false);
    const [show11, setShow11] = useState(false);
    
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (
        <>
        <AdminNavbar />
        <section className="insight-section-1024 pd-0">
            <Container>
                <Row>

                    <Col md="12" xs="12">
                        <div className="cover-md-left-cont top-b-hero-new">
                           

                            <div className="cover-brand-title ad-hm-b-title insight-swtich-b-1254">
                                <h6> Tayuss Hizmetler </h6>
                                <p>Track, manage, and grow your retail relationships in a single place.</p>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>

        <section className="serv-top-2-section">
            <Container>
                <Row>
                <Col md="12" xs="12">
                        <div className="tbs-bg-dv">
                            <Container>
                            <div className="b-profile-tabs-inner-d">
                                <div className="serv-ht-text"> 
                                <p>   POPÜLER HİZMET KATEGORİLERİ </p>
                                    <ul>
                                    
                                            <li> <NavLink to=""> tasarım </NavLink> </li>
                                            <li> <NavLink to=""> sigorta </NavLink> </li>
                                            <li> <NavLink to=""> nakliye </NavLink> </li>
                                            <li> <NavLink to=""> reklam </NavLink> </li>
                                            <li> <NavLink to=""> temizlik </NavLink> </li>
                                            <li> <NavLink to=""> araç kiralama </NavLink> </li>
                                       
                                    </ul>
                                </div>
                                <div className="bprofil-btn-d">
                                    <button>
                                    DAHA FAZLA <span> BİLGİ </span>
                                
                                    </button>
                                </div>
                            </div>   
                            
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        
       <section className="services-section">
       <Container>
        <Row>
            <Col md="12" xs="12">

                <div class="count-product-title pt-0 mt-2 pb-0">
                    <p> Devam Eden Toplam  <span> 90 İlan </span> </p>
                </div>

            </Col>

            <Col md="12" xs="12">
                <div className="filter-d-4574 inner-filter-main filter-service">
                    <div className="filter-d1 inner-filter">

                        <InputGroup>

                            <FormControl
                                placeholder="Search by product name"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Prepend>
                                <Button variant="outline-dark"><i class="fa fa-search" aria-hidden="true"></i></Button>
                            </InputGroup.Prepend>

                        </InputGroup>
                        <div className="filter-i-2">
                            <Button variant="outline-dark"><i class="fas fa-filter"></i></Button>

                        </div>
                    </div>

                    
                </div>
                            
            </Col>
        </Row>

        <Row>
            <Col lg="6" md="12" xs="12">
                <div className="slider-box-main">
                    <div className="hm-slider-img-d">
                        <img src="assets/images/h3.jpg" />
                    </div>
                    <div className="hm-slider-tect-cont">
                    <p> <strong>  Sertifika </strong> </p>
                        <h5>Markanızın öne çıkmasını sağlayın </h5>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                      
                    </div>
                    <div className="service-bx-btn-d">
                    <button className="admin-add-btn">
                    DETAYLARI <span> İNCELEYİN </span>
                    </button>
                </div>
                </div>
               
            </Col>

            <Col lg="6" md="12" xs="12">
                <div className="slider-box-main">
                    <div className="hm-slider-img-d">
                        <img src="assets/images/h3.jpg" />
                    </div>
                    <div className="hm-slider-tect-cont">
                    <p> <strong>  Sertifika </strong> </p>
                        <h5>Markanızın öne çıkmasını sağlayın </h5>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                      
                    </div>
                    <div className="service-bx-btn-d">
                    <button className="admin-add-btn">
                    DETAYLARI <span> İNCELEYİN </span>
                    </button>
                </div>
                </div>
               
            </Col>


        </Row>
        </Container>
       </section>


    <InnerFooter />


    </>

    );
}

export default Services
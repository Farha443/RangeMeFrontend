import React from 'react';
import useState from 'react-hook-use-state';
import '../../assets2/admin.css';
import AdminNavbar from './AdminNavbar'
import $ from 'jquery';
import BASE_URL from '../base';
import Cookies from "universal-cookie";
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
  Modal,
  Card,
  Row
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import BuyerNavbar from './BuyerNavbar';
// const axios = require('axios').default;
// const cookies = new Cookies();
const cookies = new Cookies();
const axios = require('axios');
var first_name= cookies.get("first_name")
var user_pic= cookies.get("user_pic")
var user_uuid = cookies.get("uuid")
var token = cookies.get("token")

function Buyerhome(){
    const [show2, setShow2] = useState(false);
    return(
        <>
            <BuyerNavbar/>
            <section className="admin-home-section"> 
            <Container>
                <Row>
                    <Col md="12">
                    <Card>
                      
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
                                <i class="fa fa-eye" aria-hidden="true"></i>
                                    <h2> 200 </h2>
                                    <p> VIEWS </p>
                                </div>
                            </Col>

                            <Col md="4">
                                <div className="admin-count-box">
                                <i class="fa fa-users" aria-hidden="true"></i>
                                <h2> 165 </h2>
                                    <p> PROFILE VISITS </p>
                                </div>
                            </Col>

                            <Col md="4">
                                <div className="admin-count-box">
                                <i class="fa fa-commenting-o" aria-hidden="true"></i>
                                <h2> 145 </h2>
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
        </> 
    );
}

export default Buyerhome
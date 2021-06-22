import React from 'react';
import '../../assets2/admin.css';
import AdminNavbar from './AdminNavbar'
import { NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';
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
    Row
} from 'react-bootstrap';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import context from 'react-bootstrap/esm/AccordionContext';
import MyEditor from './MyEditor';
import ImgUploader from './ImgUpload';

import ProfileUploader from './ProfileUploader';
import BASE_URL from '../base';
const colourOptions=[
    { value: 'Red', label: 'Red' },
    { value: 'Black', label: 'Black' },
    { value: 'Blue', label: 'Blue' },
    { value: 'Green', label: 'Green' },
    
]
const cookies = new Cookies();
const axios = require('axios');
async function save(){
    // debugger
    var first_name = document.getElementById('first_name').value;
    var last_name = document.getElementById('last_name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('phone').value;
    var user_pic = document.getElementById('user_pic').files[0];
    var url = BASE_URL+'authentication/signup/'
    
    var uuid = cookies.get('uuid');
    var userType = cookies.get('userType');
    var data = new FormData();
    data.append('first_name', first_name);
    data.append('last_name', last_name);
    data.append('email', email);
    data.append('mobile', mobile);
    data.append('user_pic', user_pic);
    var token = cookies.get('logintoken');
    // data.append('last_name', last_name);
        var config = {
            method: 'put',
            url: url,
            headers: {
                'content-type': `multipart/form-data; boundary=${data._boundary}`,
                "Authorization": "Bearer " + token,
              },
            data:{
                data:data,
            }

        };
        console.log(config)
        //   debugger
        axios(config).then(res=>{
            console.log(res.data.data)
            // alert("success")
            // cookies.set('uuid1', res.data.data.uuid, { path: '/' })
            // alert(cookies.set('uuid1', res.data.data.uuid, { path: '/' }))
            window.location = '/admin_home'
        }
        
        ).catch(err=>{
            console.error(err);
            window.location = "/admin_profile";
        })
}
class AdminProfile extends React.Component {


    render() {
    return (
        <>
            <AdminNavbar />



            <section className="product-form-section">
                <Container fluid>
                    <Row className="justify">
                        <Col md="2">
                        <aside>
                                <div className="admin-sidebar-main">
                                    <p className="p1"> Account Setting </p>
                                    <ul>
                                        <li>
                                            <NavLink to="/admin_profile"
                                            inactiveClassName="text-gray-800"
                                            >
                                                <img src="assets/images/list-searching-variant.png" />
                                                <div className="sidebar-title">Your Profile </div>
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/change_password"
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/detail.png" />
                                                <div className="sidebar-title"> Change Password  </div>
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/notification"
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/moving-truck.png" />
                                                <div className="sidebar-title"> Notifications  </div>
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <p className="p2"> Company Setting </p>
                                        <li>
                                            <NavLink to="/company_details"  
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/megaphone.png" />
                                                <div className="sidebar-title"> Company Details </div>
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink to="/team_access"  
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/megaphone.png" />
                                                <div className="sidebar-title"> Team Access </div>
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </Col>
                        <Col md="8">

                            <Card>

                                <Card.Body>
                                    <div className="product-form-main">

                                        <div className="p-inside-title">
                                            <h5> Your Profile </h5>
                                            <input type="file" id="user_pic"></input>
                                        </div>

                                        <div className="overview-form">

                                           <Row>

                                           

                                           <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control id='first_name' type="text" placeholder="Enter email" />

                                            </Form.Group>

                                            </Col>

                                            <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control id='last_name' type="text" placeholder="Enter email" />

                                            </Form.Group>

                                            </Col>

                                            <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" id="email" placeholder="Enter email" />

                                            </Form.Group>

                                            </Col>

                                            <Col md="6">

                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Phone</Form.Label>
                                                <Form.Control type="text" id="phone" >
                                                
                                                </Form.Control>
                                            </Form.Group>

                                            </Col>

                                            <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Job Title</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />

                                            </Form.Group>

                                            </Col>    

                                            
                                    
                                            <Col md="12" className="text-center">
                                            <button class="admin-add-btn" onClick={save}>  Save Changes  </button>
                                            </Col>

                                           </Row>
                                            
                                        </div>

                                    </div>

                                </Card.Body>
                            </Card>

                        </Col>



                    </Row>
                </Container>
            </section>



        </>
    );
}
}
export default AdminProfile
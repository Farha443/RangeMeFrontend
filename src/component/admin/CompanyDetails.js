// import React from 'react';
import '../../assets2/admin.css';
import AdminNavbar from './AdminNavbar'
import { NavLink } from 'react-router-dom';
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
    Row
} from 'react-bootstrap';
import Select from 'react-select';
import CompanyLogo from './CompanyLogo';
import Cookies from 'universal-cookie';
import BASE_URL from '../base';
const cookies = new Cookies();
const axios = require('axios');

const colourOptions=[
    { value: 'Red', label: 'Red' },
    { value: 'Black', label: 'Black' },
    { value: 'Blue', label: 'Blue' },
    { value: 'Green', label: 'Green' },
]
// alert(cookies.get("uuid2"))
class CompanyDetails extends React.Component {
     constructor(props) {
        super(props);
        this.state = { pictures: [],
            user_pic:null,
            first_name: null,
            last_name: null,
            email: null,
            mobile: null,
            email: null,
            getsupplierdata:[],
            getcat:[], };
            this.onDrop = this.onDrop.bind(this);
    }

    onDrop(pictureFiles, pictureDataURLs) {
        this.setState({
            pictures: pictureFiles
        });
    }
    
save(){
        // debugger
        var product_name = document.getElementById('product_name').value;
        var email = document.getElementById('email').value;
        var comp_location = document.getElementById('comp_location').value;
        // var department = document.getElementById('department').value;
    
        const selected = document.querySelectorAll('#department option:checked');
        var array = Array.from(selected).map(el => el.value);
        var busiess_type = document.getElementById('busiess_type').value;
        var company_logo = (this.state.pictures)[0];
        var url = BASE_URL+'authentication/createsupplier/'
        var uuid = cookies.get('uuid');
        var userType = cookies.get('user_type');
        var data = new FormData();
        data.append('product_name', product_name);
        data.append('email', email);
        data.append('comp_location', comp_location);
        data.append('department', array);
        data.append('busiess_type', busiess_type);
        data.append('company_logo', company_logo);
        data.append('uuid', uuid);
        var token = cookies.get('logintoken');
            // debugger
            var config = {
                method: 'patch',
                url: url,
                headers: {
                    'content-type': `multipart/form-data; boundary=${data._boundary}`,
                    // "Authorization": "Bearer" + token,
                  },
                data:data,
            };
            console.log(config)
            //   debugger
         axios(config)
         .then(res=>{
                console.log(res.data.data)
                alert("success")
                window.location = '/admin_home'
            }
            
            ).catch(err=>{
                console.error(err);
            window.location = "/admin_profile";
            })
    }



    async componentDidMount(){
        var url = BASE_URL+'authentication/getcategory/';
        var config = {
            method: 'get',
            url: url,
      
          };
          axios(config)

      .then(res => {
        this.setState({
          getcat: res.data.data
        });
        
        console.log(res.data.data);
      })
      .catch(err => {
        alert(err);
      })
       


      var url1 = BASE_URL+'authentication/getcategory/';
        var config1 = {
            method: 'get',
            url: url1,
      
          };
          axios(config1)

      .then(res => {
        this.setState({
          getsupplierdata: res.data.data
        });
        
        console.log(res.data.data);
      })
      .catch(err => {
        alert(err);
      })

    }
     render() {
        return (
        <>
            <AdminNavbar />



            <section className="product-form-section">
                <Container fluid>
                    <Row className="justify">
                    <Col md="3">
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
                                            <h5> <img src="assets/images/office.png" /> Company Details </h5>

                                        </div>

                                        <div className="overview-form">

                                           <Row>
                                           <Col md="6 m-auto">

                                              
                                            <div className="profile-up-main jio22">
                                            <div className="upload-imf-direction-text ">
                                            <h6> Company Logo </h6>
                                           
                                            </div>
                                            <ImageUploader
                                            id="company_logo"
                                            withIcon={false}
                                            buttonText='Change'
                                            onChange={this.onDrop}
                                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                            maxFileSize={5242880}
                                            withPreview="true"
                                            />
                                            </div>
                                            
                                            </Col>
                                           </Row> 
                                           <Row>

                                           

                                            <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Company Name</Form.Label>
                                                <Form.Control id="product_name" type="text" placeholder="Ssoution" />

                                            </Form.Group>

                                            </Col>

                                            <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control id="email" type="email" placeholder="abc.com" />

                                            </Form.Group>

                                            </Col>

                                            <Col md="6">

                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>comp_location</Form.Label>
                                                <Form.Control id="comp_location" type="text">
                                              
                                                </Form.Control>
                                            </Form.Group>

                                            </Col>

                                            <Col md="6">
                                            
                                            
                                                <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Select the department(s) that best describe your industry. </Form.Label>
                                                <Form.Control as="select" multiple="true" id="department">
                                                {this.state.getcat.map(cat=>(  
                                                <option value={cat.uuid}>{cat.name}</option>))}
                                                
                                                </Form.Control>
                                                {/* <Select
                                                id="department"
                                                defaultValue={[colourOptions[2], colourOptions[3]]}
                                                isMulti
                                                name="colors"
                                                options={colourOptions}
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                                
                                            /> */}
                                            </Form.Group>
                                            </Col>

                                            <Col md="6">

                                                <Form.Group controlId="exampleForm.ControlSelect1">
                                                    <Form.Label>busiess_type</Form.Label>
                                                    <Form.Control id="busiess_type" as="select">
                                                    
                                                    
                                                    <option value="none">None</option>
                                                    <option value="manufacturer">manufacturer</option>
                                                    <option value="broker">broker</option>
                                                    <option value="reseller">reseller</option>
                                                    <option value="other">other</option>
                                                    </Form.Control>
                                                </Form.Group>

                                                </Col>

                                          

                                        
                                    
                                            <Col md="12" className="text-center">
                                            <button class="admin-add-btn" onClick={()=>this.save()}>   Save Changes  </button>
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
export default CompanyDetails

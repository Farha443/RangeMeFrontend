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
cookies.get('sup_uuid')
cookies.get('buy_uuid')
// var busssiness_type = ""
class CompanyDetails extends React.Component {
     constructor(props) {
        super(props);
        this.state = { pictures: [],
            email: null,
            email: null,
            getsupplierdata:[],
            getcat:[],
            comp_name : null,
            comp_email : null,
            comp_location:null,
            comp_category : null,
            buss_type : null,
            company_logo:null,
            mobile:null,};
            this.onDrop = this.onDrop.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.handleChange1 = this.handleChange1.bind(this);
    }

    handleChange(e) {
        this.setState({ comp_category: e.target.value });
      }
    handleChange1(v) {
        this.setState({ buss_type: v.target.value });
    }
    handleChange2(event) {
    var reader = new FileReader();
    reader.onload = function(){
        var output = document.getElementById('output');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}
    onDrop(pictureFiles, pictureDataURLs) {
        this.setState({
            pictures: pictureFiles
            
        });
    }
    
savechange(){
    // debugger
        var comp_name = document.getElementById('comp_name').value;
        var email = document.getElementById('email').value;
        // var comp_location = document.getElementById('comp_location').value;
        // var department = document.getElementById('department').value;
    
        const selected = document.querySelectorAll('#department option:checked');
        var array = Array.from(selected).map(el => el.value);
        // var busiess_type = document.getElementById('busiess_type').value;
        var company_logo = document.getElementById('company_logo').files[0];
        // var url = BASE_URL+'authentication/createsupplier/'
        var url = BASE_URL+'authentication/signup/';
        var uuid = cookies.get('sup_uuid');
        var userType = cookies.get('user_type');
        var data = new FormData();
        data.append('comp_name', comp_name);
        data.append('email', email);
        // data.append('comp_location', comp_location);
        data.append('department', array);
        // data.append('busiess_type', busiess_type);
        // data.append('company_logo', company_logo);
        if(company_logo){
            data.append('company_logo', company_logo);
        }
        data.append('uuid', uuid);
        var token = cookies.get('logintoken');
            var config = {
                method: 'patch',
                url: url,
                headers: {
                    'content-type': `multipart/form-data; boundary=${data._boundary}`,
                    "Authorization": "Bearer " + token,
                  },
                data:data,
            };
            console.log(config)
    
         axios(config)
         .then(res=>{
                console.log(res.data.data)
                alert("success")
                window.location = '/admin_home'
            }
            
            ).catch(err=>{
                console.error(err);
            window.location = "/company_details";
            })
    }


    savebuyer(){

    var comp_name = document.getElementById('comp_name').value;
    var email = document.getElementById('email').value;
    var comp_location = document.getElementById('comp_location').value;
    // var department = document.getElementById('department').value;

    const selected = document.querySelectorAll('#department option:checked');
    var array = Array.from(selected).map(el => el.value);
    var busiess_type = document.getElementById('busiess_type').value;
    var company_logo = document.querySelector('#company_logo');
    var url = BASE_URL+'authentication/createbuyer/'
    var uuid = cookies.get('buy_uuid');
    var userType = cookies.get('user_type');
    var data = new FormData();
    data.append('comp_name', comp_name);
    data.append('email', email);
    data.append('comp_location', comp_location);
    data.append('department', array);
    data.append('busiess_type', busiess_type);
    if(company_logo.files[0]){
        data.append('company_logo', company_logo.files[0]);
    }
    data.append('uuid', uuid);
    var token = cookies.get('logintoken');
        var config = {
            method: 'patch',
            url: url,
            headers: {
                'content-type': `multipart/form-data; boundary=${data._boundary}`,
                "Authorization": "Bearer " + token,
              },
            data:data,
        };
        console.log(config)

     axios(config)
     .then(res=>{
            console.log(res.data.data)
            alert("success")
            window.location = '/admin_home'
        }
        
        ).catch(err=>{
            console.error(err);
        window.location = "/company_details";
        })
}


    async componentDidMount(){
        var url = BASE_URL+'authentication/GetCategorysignup/';
        if(cookies.get('sup_uuid')){
            var uuid = cookies.get('sup_uuid');
            var url1 = BASE_URL + 'authentication/getsupplier/' + uuid +'/';
        }
        else{
            var uuid = cookies.get('buy_uuid');
        var url1 = BASE_URL + 'authentication/getbuyer/' + uuid +'/';
        }
        
        var user_uuid = cookies.get('uuid')
        var url3 = BASE_URL + 'authentication/getuser/' + user_uuid+'/';
        var config = {
            method: 'get',
            url: url,
      
          };
          axios(config)

      .then(res => {
        //   debugger
        this.setState({
            
          getcat: res.data.data
        });
        
        console.log(res.data.data);
      })
      .catch(err => {
        alert(err);
      })
       
            var config1 = {
                method: 'get',
                url: url1,         
            };
                axios(config1).then(re => {
                    console.log(re.data.data)
                    this.setState({
                    
                    comp_category: re.data.data.department,
                    // buss_type: re.data.data.busiess_type, 
                    // company_logo : re.data.data.company_logo,  
                    });
                })
                .catch(err => {
                    // alert(err);
                    alert('Something went wrong')
                })
        
                
            var config2 = {
                method: 'get',
                url: url3,     
                
            };
            
            axios(config2).then(re => {
                console.log('hello')
                console.log(re.data.data)
                this.setState({
                    
                    email: re.data.data.email,
                    comp_name: re.data.data.comp_name,
                    company_logo:re.data.data.company_logo,
                    comp_location:re.data.data.comp_location,
                    // buss_type:re.data.data.busiess_type,
                    mobile : re.data.data.mobile,
                    
                
                 });
                //  alert(this.state.buss_type)
                    
                })
                .catch(err => {
                // alert(err);

                alert('Something went wrong')
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
                                            <h5> Company Details </h5>

                                        </div>

                                        <div className="overview-form">

                                           <Row>
                                           <Col md="6 m-auto">

                                              
                                            <div className="profile-up-main jio22">
                                            <div className="upload-imf-direction-text ">
                                            <h6> Company Logo </h6>
                                           
                                            </div>
                                            {/* <ImageUploader
                                            id="company_logo"
                                            withIcon={false}
                                            buttonText='Change'
                                            onChange={this.onDrop}
                                            imgExtension={['.jpg', '.gif', '.png', '.gif','jpeg']}
                                            maxFileSize={5242880}
                                            withPreview="true"
                                            
                                            /> */}
                                            <div className="change-img-maind">
                                            {this.state.company_logo ?   
                                            <div className="pic-1101">
                                                <img id="output" src={BASE_URL.slice(0,-5)+ this.state.company_logo} width="180px" height="120px" />
                                            
                                                </div>
                                                : <img className="" id="output" width="180px" height="120px" src=""/>}
                                                <div className="pic202">
                                                
                                                <input  type="file" id="company_logo" onChange={this.handleChange2} placeholder="Change"/>
                                            
                                            </div>

                                        </div>
                                            </div>
                                            
                                            </Col>
                                           </Row> 
                                           <Row>

                                           

                                            <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Company Name</Form.Label>
                                                <Form.Control id="comp_name" type="text" placeholder="Enter name"
                                                defaultValue={this.state.comp_name} />

                                            </Form.Group>

                                            </Col>

                                            <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control id="email" type="email"
                                                defaultValue={this.state.email} placeholder="abc.com" />

                                            </Form.Group>

                                            </Col>

                                            <Col md="6">
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Mobile</Form.Label>
                                                <Form.Control id="comp_location" defaultValue={this.state.mobile}type="text">
                                              
                                                </Form.Control>
                                            </Form.Group>
                                            </Col>

                                            <Col md="6">
                                                <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Company Location</Form.Label>
                                                <Form.Control id="email" type="email"
                                                defaultValue={this.state.comp_location} placeholder="abc.com" />
                                                {/* <Form.Label>Category</Form.Label> */}
                                                {/* <Form.Control as="select" multiple="true" 
                                                value={this.state.comp_category}
                                                id="department" onChange={this.handleChange}>
                                                {this.state.getcat.map(cat=>(  
                                                <option value={cat.uuid}>{cat.name}</option>))}
                                                </Form.Control> */}
                                                {/* <div className="select-container">
                                                <select value={this.state.comp_category} onChange={this.handleChange}  id = "department">
                                                {this.state.map(cat=>( 
                                                   <option value={cat.uuid}>{cat.name}</option>))}
                                                </select>
                                                </div> */}
                                                
                                            </Form.Group>
                                            </Col>

                                            {/* <Col md="6">

                                                <Form.Group  controlId="exampleForm.ControlSelect1">
                                                    <Form.Label>business Type</Form.Label>
                                                    <Form.Control id="busiess_type" as="select" value={this.state.buss_type}
                                                    
                                                    onChange={this.handleChange1}>
                                                    <option value="none">None</option>
                                                    <option value="manufacturer">manufacturer</option>
                                                    <option value="broker">broker</option>
                                                    <option value="reseller">reseller</option>
                                                    <option value="other">other</option>
                                                    </Form.Control>
                                                   
                                                </Form.Group>

                                                </Col> */}
                                    
                                            <Col md="12" className="text-center">
                                            <button class="admin-add-btn" onClick={cookies.get('sup_uuid')?()=>this.savechange():()=>this.savebuyer()}>   Save Changes  </button>
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

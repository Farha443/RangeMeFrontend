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
import InnerFooter from './InnerFooter';

const colourOptions=[
    { value: 'Red', label: 'Red' },
    { value: 'Black', label: 'Black' },
    { value: 'Blue', label: 'Blue' },
    { value: 'Green', label: 'Green' },
    
]
const cookies = new Cookies();
const axios = require('axios');
var token = cookies.get('logintoken');
// alert(cookies.get("logintoken"))

class AdminProfile extends React.Component {
    state = {
    user_pic:null,
    first_name: null,
    last_name: null,
    email: null,
    mobile: null,
    email: null,
    
     };
     Preview(id){
        console.log(id)

    }
    handleChange(event) {
        
        var reader = new FileReader();
        reader.onload = function(){
            var output = document.getElementById('output');
            output.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);    
        
    }
     
  save(){
        var first_name = document.getElementById('first_name').value;
        var last_name = document.getElementById('last_name').value;
        var email = document.getElementById('email').value;
        var mobile = document.getElementById('phone').value;
        var user_pic = document.getElementById('user_pic').files[0]
        var url = BASE_URL+'authentication/signup/'
        var uuid = cookies.get('uuid');
        var userType = cookies.get('userType');
        var data = new FormData();
        data.append('first_name', first_name);
        data.append('last_name', last_name);
        data.append('email', email);
        data.append('mobile', mobile);
        if(user_pic){
            data.append('user_pic', user_pic);
        }
        data.append('uuid', uuid);
        var token = cookies.get('logintoken');
        // data.append('last_name', last_name);
            var config = {
                method: 'patch',
                url: url,
                headers: {
                    'content-type': `multipart/form-data; boundary=${data._boundary}`,
                    // "Authorization": "Bearer " + token,
                  },
                data:data,
            };
            console.log(config)

         axios(config)
         .then(res=>{
                console.log(res.data.data)
                alert("success")
                // cookies.set('uuid1', res.data.data.uuid, { path: '/' })
                // alert(cookies.set('uuid1', res.data.data.uuid, { path: '/' }))
                window.location = '/admin_home'
            }
            
            ).catch(err=>{
                console.error(err);
            window.location = "/admin_profile";
            })
    }

    componentDidMount() {
        // cookies.remove('pro_pic');
        // alert(cookies.get('logintoken'))
        var uuid = cookies.get('uuid');
        // var token = cookies.get('logintoken');
        
        var url = BASE_URL + 'authentication/getuser/' + uuid+'/';
        var config = {
            method: 'get',
            url: url,
            
            
        };
    
        axios(config).then(re => {
        
            this.setState({
              first_name: re.data.data.first_name,
              last_name: re.data.data.last_name,
              user_pic:re.data.data.user_pic,
              mobile: re.data.data.mobile,
              email: re.data.data.email,
             
    
            });
            // alert(BASE_URL.slice(0,-1)+ this.state.user_pic)
            // cookies.set('user_pic',re.data.data.user_pic,{path:'/'})
            cookies.set('first_name',re.data.data.first_name,{path:'/'})
          })
          .catch(err => {
            // alert(err);
            alert('Something went wrong')
          })
    
      }
    render() {
        var token = cookies.get('logintoken');
        if (token === undefined){
        window.location="/login"
        }
    return (
        <>
            <AdminNavbar />
            <section className="product-form-section">
                <Container fluid>
                    <Row className="justify">
                        <Col md="3">
                        <aside>
                                <div className="admin-sidebar-main">
                                    <p className="p1"> Hesap Ayarları </p>
                                    <ul>
                                        <li>
                                            <NavLink to="/admin_profile"
                                            inactiveClassName="text-gray-800"
                                            >
                                                <img src="assets/images/list-searching-variant.png" />
                                                <div className="sidebar-title">Senin profil</div>
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/change_password"
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/detail.png" />
                                                <div className="sidebar-title"> Şifre Değiştirme  </div>
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/notification"
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/moving-truck.png" />
                                                <div className="sidebar-title"> Bildirimler  </div>
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <p className="p2"> Şirket Ayarları </p>
                                        <li>
                                            <NavLink to="/company_details"  
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/megaphone.png" />
                                                <div className="sidebar-title"> Şirket Detayları</div>
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink to="/team_access"  
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/megaphone.png" />
                                                <div className="sidebar-title"> Ekip Erişimi </div>
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
                                            <h5> Senin profil</h5>
                                          
                                              
                                        </div>

                                        <div className="change-img-maind">
                                            {this.state.user_pic ?   
                                            <div className="pic-1101">
                                                <img id="output" src={BASE_URL.slice(0,-5)+ this.state.user_pic} width="180px" height="120px" />
                                            
                                                </div>
                                                : <img className="" id="output" width="180px" height="120px" src=""/>}
                                                <div className="pic202">

                                                <label for="user_pic" class="btn btn-primary">Choose Picture</label>
                                                <input style={{display:'none'}} type="file" id="user_pic" onChange={this.handleChange} placeholder="Change"/>
                                            
                                            </div>

                                        </div>

                                        <div className="overview-form">

                                           <Row>

                                           

                                           <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Ad</Form.Label>
                                                <Form.Control defaultValue={this.state.first_name} id='first_name' type="text" placeholder="Enter email" />

                                            </Form.Group>

                                            </Col>

                                            <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Soyad</Form.Label>
                                                <Form.Control defaultValue={this.state.last_name} id='last_name' type="text" placeholder="Enter email" />

                                            </Form.Group>

                                            </Col>

                                            <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>E-posta</Form.Label>
                                                <Form.Control  defaultValue={this.state.email} type="email" id="email" placeholder="Enter email" />

                                            </Form.Group>

                                            </Col>

                                            <Col md="6">

                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Cep Telefonu</Form.Label>
                                                <Form.Control defaultValue={this.state.mobile} type="text" id="phone" >
                                                
                                                </Form.Control>
                                            </Form.Group>
                                            </Col>
                                             
                                            <Col md="12" className="text-center">
                                            <button class="admin-add-btn" onClick={()=>this.save()}>  Değişiklikleri Kaydet  </button>
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

            <InnerFooter/>
        </>
    );
}
}
export default AdminProfile
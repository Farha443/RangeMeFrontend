import React, {useEffect, userEffect, useState} from 'react';
import '../../assets2/admin.css';
import {NavLink} from 'react-router-dom';
import Cookies from 'universal-cookie';
import BASE_URL from '../base';
import $ from "jquery";  
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
  Row
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import useState from 'react-hook-use-state';
const cookies = new Cookies();
const axios = require('axios');
var first_name= cookies.get("first_name")
var user_pic= cookies.get("user_pic")
var user_uuid = cookies.get("uuid")


const year = (new Date()).getFullYear()-50;
const years = Array.from(new Array(80),(val, index) => index + year);

function logout() {
  var allCookies = document.cookie.split(";");
   for (var i = 0; i < allCookies.length; i++)
 document.cookie = allCookies[i] + "=;expires="
 + new Date(0).toUTCString();
   window.location.href = '/';
}


function BuyerNavbar(){
  const [show4, setShow4] = useState(false);
  const [isActive, setActive] = useState("false");
  const[brands, setBrands] = useState([])
  const handleToggle = () => {
    setActive(!isActive);
  };
  
  const [profilephoto, setProfilephoto]= useState(null)
    useEffect(() => {
        axios.get(BASE_URL+'authentication/getuser/'+cookies.get("buyeruseruuid")).then(res=>{
          debugger
          console.log(res)
          setProfilephoto(res.data.data.user_pic)

        }).catch(err=>{
            console.log(err)            
        })
    },[])
    return(
        <>

          <header className="admin-header">
              
<Navbar expand="lg">
  <Container>
  <Navbar.Brand href="/admin_home" className="admin-header-logo-main"> 
      <img src="/assets/images/Savas11.png" />
   </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="admin-nav-collapse">
    <Nav className="ml-auto">
      <Nav.Link href="#home"><i class="fa fa-bell-o" aria-hidden="true"></i></Nav.Link>
    <Nav.Link href="#home" className="drop-menu"  onClick={handleToggle}>
      <div className="menu-profile-img-main">
      {profilephoto != "null" ? <img src={BASE_URL.slice(0,-5)+profilephoto} width="70px" />:
      <img src="/assets/images/user64x64.png"/>
      }
    
      </div>
      <i class="fa fa-angle-down" aria-hidden="true"></i>

      <div className={isActive ? "dropmenu-profile-img " : "dropmenu-profile-img dropmenu-profile-open"}>
          <ul>
            <li> <NavLink to="">{first_name} </NavLink> </li>
            <li> <NavLink to="/">Porfile</NavLink> </li>
            <li> <NavLink to="" onClick={logout}> Logout </NavLink> </li>
          </ul>
      </div>
     </Nav.Link>
     

    </Nav>
   
  </Navbar.Collapse>
  </Container>
</Navbar>

          </header>

          <Modal
        size="lg"
        // dialogClassName="modal-90w"
        show={show4}
        onHide={() => setShow4(false)}
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
                        <Form.Label  style={{marginTop: '0px'}}>Brand Name</Form.Label>
                        <Form.Control type="text" id="brand_name" placeholder="abc" />

                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label  style={{marginTop: '0px'}}>Location</Form.Label>
                        <Form.Control type="text" id="brand_location" placeholder="abc" />

                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label  style={{marginTop: '0px'}}>Year founded</Form.Label>
                      <Form.Control as="select" id="year">
                        
                      {years.map((year, index) => {
                            return <option key={`year${index}`} value={year}>{year}</option>
                        })
                        }
                   
                      </Form.Control>
                  </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label  style={{marginTop: '0px'}}>Revenue</Form.Label>
                      <Form.Control as="select" id='revenue'>
                      <option value="0M$-5M$">0M$-5M$</option>
                      <option value="6M$-10M$">6M$-10M$</option>
                      <option value="11M$-15M$">11M$-15M$</option>
                      </Form.Control>
                    
                   
                  </Form.Group>

                    
                </Col>
               
            </Row>
            </Container>
            </Modal.Body>
            <Modal.Footer>
                <div className="col-md-12 text-center">
                <button class="admin-add-btn f-w-500" onClick={Submit}>  <i class="fa fa-plus" aria-hidden="true"></i> Add Brand </button>
                </div>
            </Modal.Footer>
      </Modal>

        </> 
    );
}

function Submit(){
  // $(".laoder").show(); 
  // debugger
  var brand_name = document.getElementById('brand_name').value;
  var brand_location = document.getElementById('brand_location').value;
  var year_founded = document.getElementById('year').value;
  var annual_revenue = document.getElementById('revenue').value;
  var url = BASE_URL + "authentication/createsupplier/";
  var token = cookies.get('logintoken');
  var uuid = cookies.get('sup_uuid');
  var product_uuid = cookies.get('productuuid')
  var userType = cookies.get('user_type');
var config = {
  method: 'post',
  url: url,
  headers: {
    "Authorization": "Bearer " + token,
  },
  data:{
      user_s : uuid,
      // product_name : product_uuid,
      year_founded : year_founded,
      annual_revenue: annual_revenue,
      brand_name : brand_name,
      comp_location : brand_location,

    }

};
console.log(config)
axios(config).then(res=>{
    console.log(res.data.data)
  cookies.set('uuid2', res.data.data.uuid, { path: '/' })
  // alert(cookies.set('uuid1', res.data.data.uuid, { path: '/' }))
  $(".laoder").hide(); 
  window.location = '/admin_home'
}

).catch(err=>{
  console.error(err);
  $(".laoder").hide(); 
window.location = "/brand-profile";
})
}

export default BuyerNavbar
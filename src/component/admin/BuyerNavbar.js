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




function logout() {
  var allCookies = document.cookie.split(";");
   for (var i = 0; i < allCookies.length; i++)
 document.cookie = allCookies[i] + "=;expires="
 + new Date(0).toUTCString();
   window.location.href = '/';
}



function AdminNavbar(){
  const [show4, setShow4] = useState(false);
  const [isActive, setActive] = useState("false");
  const[brands, setBrands] = useState([])
  const handleToggle = () => {
    setActive(!isActive);
  };
  
  const [profilephoto, setProfilephoto]= useState(null)
    useEffect(() => {
      // debugger
        axios.get(BASE_URL+'authentication/getuser/'+cookies.get("uuid")).then(res=>{
          setProfilephoto(res.data.data.user_pic)

        }).catch(err=>{
            console.log(err)            
        })

        
    },[])
    return(
        <>

          <header className="admin-header">
              
<Navbar expand="lg">
  <Container><Navbar.Brand href="/newbuyerhome" className="admin-header-logo-main"> 
      <img src="/assets/images/Savas11.png" />
   </Navbar.Brand>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="admin-nav-collapse">
    <Nav className="ml-auto">

    <Nav.Link href="/bidding">Bidding</Nav.Link>

    <Nav.Link href="#home" className="drop-menu"  onClick={handleToggle}>
      <div className="menu-profile-img-main">
      {profilephoto != null ? <img src={BASE_URL.slice(0,-5)+profilephoto} width="70px" />:
      <img src="/assets/images/user64x64.png"/>
      }
       {/* <img src={BASE_URL.slice(0,-5)+user_pic} width="70px" /> */}
      </div>
      <i class="fa fa-angle-down" aria-hidden="true"></i>

      <div className={isActive ? "dropmenu-profile-img " : "dropmenu-profile-img dropmenu-profile-open"}>
          <ul>
            <li> <NavLink to="/buyeradmin_prof">{first_name} </NavLink> </li>
            <li> <NavLink to="/buyeradmin_prof">Settings </NavLink> </li>
            <li> <NavLink to="" onClick={logout}> Logout </NavLink> </li>
          </ul>
      </div>
     </Nav.Link>
     

    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
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
                     
                      {/* <option>Select</option>
                      <option>brand 1</option>
                      <option>brand 2</option>
                      <option>brand 3</option>
                      <option>brand 3</option> */}
                      </Form.Control>
                  </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label  style={{marginTop: '0px'}}>Revenue</Form.Label>
                      <Form.Control as="select" id='revenue'>
                      <option value="0M$-5M$">0M$-5M$</option>
                      <option value="6M$-10M$">6M$-10M$</option>
                      <option value="11M$-15M$">11M$-15M$</option>
                      </Form.Control>
                    
                    {/* <p className="mt-2"> Buyers use this information to search for products </p> */}
                  </Form.Group>

                    
                </Col>
                {/* <Col xs={6} md={6}>
                .col-xs-6 .col-md-4
                </Col> */}
            </Row>
            </Container>
            </Modal.Body>
            <Modal.Footer>
               
            </Modal.Footer>
      </Modal>

        </> 
    );
}


export default AdminNavbar
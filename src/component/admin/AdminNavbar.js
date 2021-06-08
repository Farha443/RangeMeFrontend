import React from 'react';
import '../../assets2/admin.css';
import {NavLink} from 'react-router-dom';

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
  Row
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function AdminNavbar(){
    return(
        <>

          <header className="admin-header">
              
<Navbar expand="lg">
  <Container>
  <Navbar.Brand href="/admin_home" className="admin-header-logo-main"> <h3> Vaniver </h3> </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="admin-nav-collapse">
    <Nav className="ml-auto">
      <Nav.Link href="/admin_home">Home</Nav.Link>

      <Nav.Link href="#home">My Brand</Nav.Link>

      <Nav.Link href="#home"><i class="fa fa-comments" aria-hidden="true"></i></Nav.Link>
     
      <Nav.Link href="#home"><i class="fa fa-bell-o" aria-hidden="true"></i></Nav.Link>

      <NavDropdown id="basic-nav-dropdown" className="header-profile-drop" style={{backgroundImage: 'url("../../assets/images/3.jpg")'}}>
       
        <NavDropdown.Item href="#action/3.1">hi. John doe</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"> Settings</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
  </Container>
</Navbar>

          </header>



        </> 
    );
}

export default AdminNavbar
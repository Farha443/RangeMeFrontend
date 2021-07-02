import React from 'react';
import '../../assets2/admin.css';
import {NavLink} from 'react-router-dom';
import Cookies from 'universal-cookie';
import BASE_URL from '../base';
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
import useState from 'react-hook-use-state';
const cookies = new Cookies();

var first_name= cookies.get("first_name")
var user_pic= cookies.get("user_pic")

function logout() {
  var allCookies = document.cookie.split(";");
   for (var i = 0; i < allCookies.length; i++)
 document.cookie = allCookies[i] + "=;expires="
 + new Date(0).toUTCString();
   window.location.href = '/';
}
function AdminNavbar(){

  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };
    return(
        <>

          <header className="admin-header">
              
<Navbar expand="lg">
  <Container>
  <Navbar.Brand href="/admin_home" className="admin-header-logo-main"> 
      <img src="/assets/images/logo.svg" />
   </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="admin-nav-collapse">
    <Nav className="ml-auto">
      <Nav.Link href="/admin_home">Home</Nav.Link>

      <Nav.Link href="#home">My Brand</Nav.Link>

      <Nav.Link href="#home"><i class="fa fa-comments" aria-hidden="true"></i></Nav.Link>
     
      <Nav.Link href="#home"><i class="fa fa-bell-o" aria-hidden="true"></i></Nav.Link>

      {/* <NavDropdown id="basic-nav-dropdown" className="header-profile-drop"  >
       
        <NavDropdown.Item href="#action/3.1">{first_name}</NavDropdown.Item>
        <NavDropdown.Item href="/admin_profile"> Settings</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
      </NavDropdown> */}

    <Nav.Link href="#home" className="drop-menu"  onClick={handleToggle}>
      <div className="menu-profile-img-main">
      {user_pic != "undefined" ? <img src={BASE_URL.slice(0,-5)+'/media/' +user_pic} width="70px" />:
      <img src="/assets/images/user64x64.png"  />
      }
       {/* <img src={BASE_URL.slice(0,-5)+user_pic} width="70px" /> */}
      </div>
      <i class="fa fa-angle-down" aria-hidden="true"></i>

      <div className={isActive ? "dropmenu-profile-img " : "dropmenu-profile-img dropmenu-profile-open"}>
          <ul>
            <li> <NavLink to="">{first_name} </NavLink> </li>
            <li> <NavLink to="/admin_profile">Settings </NavLink> </li>
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



        </> 
    );
}

export default AdminNavbar
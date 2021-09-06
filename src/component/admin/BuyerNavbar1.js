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

    <Nav.Link href="/bidding">Teklif verme</Nav.Link>

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
            <li> <NavLink to="/buyeradmin_prof">Ayarlar  </NavLink> </li>
            <li> <NavLink to="" onClick={logout}> Çıkış </NavLink> </li>
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
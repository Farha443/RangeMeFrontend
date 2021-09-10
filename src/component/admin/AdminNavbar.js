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


const year = (new Date()).getFullYear()-50;
const years = Array.from(new Array(80),(val, index) => index + year);

function logout() {
  var allCookies = document.cookie.split(";");
   for (var i = 0; i < allCookies.length; i++)
 document.cookie = allCookies[i] + "=;expires="
 + new Date(0).toUTCString();
   window.location.href = '/';
}

function GetBrand(id){
  var id = id;
  cookies.set("get_brand", id.uuid , {path:"/"})
  cookies.set("brand_name", id.brand_name , {path:"/"})
  window.location="/brand-profile";
}

function AdminNavbar(){
  const [show4, setShow4] = useState(false);
  const [isActive, setActive] = useState("false");
  const [isActive1, setActive1] = useState("false");
  const[brands, setBrands] = useState([]);
  const[messages, setMessages] = useState([])
  const[bids, setBids] = useState(0)
  const[msgs, setMsgCount] = useState(0)
  const[inqs, setInqs] = useState(0)


  const handleToggle = () => {
    var dt = new Date();
    console.clear();
    console.log(cookies.get('bminutes'))
    cookies.set('bminutes',dt,{path:'/'});
    var config={
      url:BASE_URL+'authentication/bids/?my_bids=0',
      method:'get',
      headers: {
        "Authorization": "Bearer " + cookies.get('logintoken'),
        "Content-Type": "application/json",
    }
    }
    axios(config)
    .then(res=>{
      setMessages(res.data) 
      setBids(0)  
    }).catch(err=>{
        console.log(err)            
    })
    setActive(!isActive);
  };
  const handleToggle1 = () => {
    setActive1(!isActive1);
  };
  const [profilephoto, setProfilephoto]= useState(null);
  
    useEffect(() => {
        axios.get(BASE_URL+'authentication/getuser/'+cookies.get("uuid")).then(res=>{
          setProfilephoto(res.data.data.user_pic)
        }).catch(err=>{
            console.log(err)            
        })

        axios.get(BASE_URL+'authentication/getsupplier/'+ user_uuid )
        .then(res=>{
            setBrands(res.data.data)
        }).catch(err=>{
            console.log(err)            
        })
        var curr_dt = new Date();
        var diff =(new Date(cookies.get('bminutes')).getTime() - curr_dt.getTime()) / 1000;
        diff /= 60;
        var bminutes = Math.abs(Math.round(diff));
        // alert(bminutes)
        diff =(new Date(cookies.get('iminutes')).getTime() - curr_dt.getTime()) / 1000;
        diff /= 60;
        var iminutes = Math.abs(Math.round(diff));
        // alert(iminutes)

        diff =(new Date(cookies.get('mminutes')).getTime() - curr_dt.getTime()) / 1000;
        diff /= 60;
        var mminutes = Math.abs(Math.round(diff));
        // alert(mminutes)
        var config={
          url:BASE_URL+'authentication/header/?bminutes='+bminutes+'&iminutes='+iminutes+'&mminutes='+mminutes,
          method:'get',
          headers: {
            "Authorization": "Bearer " + cookies.get('logintoken'),
            "Content-Type": "application/json",
        }
        }
        axios(config)
        .then(res=>{
          // alert(res.data.bids)
          // +cookies.get('bminutes')
          console.log("bidding data")
          console.log(res.data)
          setBids(res.data.bids)
          setMsgCount(res.data.mcounts)
          setInqs(res.data.icounts)
        }).catch(err=>{
            console.log(err)            
        })
        
    },[])

    return(
        <>


              <header className="admin-header">

              <Navbar expand="lg">
                <Container>
                  <Navbar.Brand href="/admin_home" className="admin-header-logo-main header-bar__logo"> <img src="assets/images/Savas.png" /> </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav" className="admin-nav-collapse">
                    <Nav className="m-auto admin-menu-list">

                      <Nav.Link href="/admin_home">Home</Nav.Link>
                      <NavDropdown title="Markalarım" id="basic-nav-dropdown" className="menu-drop-1245 inner-menu">
                      {brands.map(brand=>(
                        <NavDropdown.Item className="sub-aa" onClick={()=>GetBrand(brand)} >{brand.brand_name}
                        </NavDropdown.Item>))}
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="" className="itm-drop-bt">  <button className="admin-add-btn"  onClick={() => setShow4(true)}> <i class="fa fa-plus" aria-hidden="true"></i> Marka Ekle</button> </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="/">Vehicles</Nav.Link>
                      <Nav.Link href="/">Tayuss approval</Nav.Link>
                      <Nav.Link href="/">Submissions</Nav.Link>
                      <Nav.Link href="/services">Services</Nav.Link>
                    </Nav>

                    <Nav className="navbar-nav">
                      <Nav.Link href="/chat" >
                        <i class="fas fa-comment-alt-dots"></i><p>{msgs}</p></Nav.Link>
                      <Nav.Link onClick={handleToggle}>
                        <i class="fas fa-bell"></i>
                        <p>{bids}</p>
                        <div className={isActive ? "notifi-d-102 " : "notifi-d-102 open-drop"}>
                          {/* <div className="noti-header">
                  <h5> Notification </h5>
                  <NavLink to=""> Manage </NavLink>
                </div> */}
                          <ul className="header-notifi-ul">
                            <li>
                              {/* <div className="notifi-left-img">
                                <img src="assets/images/3.jpg" />
                              </div> */}
                              {messages.map(msg=>{
                                return <div className="notifi-right-cont-1">
                                <h6> New Bid Created </h6>
                                <p> {msg.username +' has created bidding for '+msg.quantity+' '+msg.bid_product} </p>
                                <p>Budget : {msg.budget}</p>
                                <button className="admin-add-btn f-w-500"> View </button>
                              </div>
                              })}
                            </li>
                          </ul>
                        </div>
                      </Nav.Link>

                      <Nav.Link href="#home" className="drop-menu"  onClick={handleToggle1}>
                      <div className="menu-profile-img-main">
                      {profilephoto != null ? <img src={BASE_URL.slice(0,-5)+profilephoto} width="70px" />:
                      <img src="/assets/images/user64x64.png"/>
                      }</div>
                      <i class="fa fa-angle-down" aria-hidden="true"></i>

                      <div className={isActive1 ? "dropmenu-profile-img " : "dropmenu-profile-img dropmenu-profile-open"} onClick={handleToggle1}>
                          <ul>
                            <li> <NavLink to="/admin_profile">{first_name} </NavLink> </li>
                            <li> <NavLink to="/admin_profile">Ayarlar </NavLink> </li>
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




          <header className="admin-header d-none ">
              
<Navbar expand="lg">
  <Container>
  <Navbar.Brand href="/admin_home" className="admin-header-logo-main"> 
      <img src="/assets/images/Savas11.png" />
   </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="admin-nav-collapse">
    <Nav className="ml-auto">

    
      <Nav.Link href="/admin_home" >Anasayfa</Nav.Link>
      <NavDropdown title="Markalarım" id="basic-nav-dropdown" className="menu-drop-1245">
      {brands.map(brand=>(
        <NavDropdown.Item onClick={()=>GetBrand(brand)} >{brand.brand_name}</NavDropdown.Item>))}
        <NavDropdown.Divider />
        <NavDropdown.Item href="" className="itm-drop-bt">  <button className="admin-add-btn"  onClick={() => setShow4(true)}> <i class="fa fa-plus" aria-hidden="true"></i> Marka Ekle</button> </NavDropdown.Item>
      </NavDropdown>
      {/* <Nav.Link href="/brand-profile">My Brand</Nav.Link> */}
     

      <Nav.Link href="/chat"><i class="fa fa-comments" aria-hidden="true"></i></Nav.Link>
     
      <Nav.Link href="#home"><i class="fa fa-bell-o" aria-hidden="true"></i></Nav.Link>

    <Nav.Link href="#home" className="drop-menu"  onClick={handleToggle}>
      <div className="menu-profile-img-main">
      {profilephoto != null ? <img src={BASE_URL.slice(0,-5)+profilephoto} width="70px" />:
      <img src="/assets/images/user64x64.png"/>
      }
       {/* <img src={BASE_URL.slice(0,-5)+user_pic} width="70px" /> */}
      </div>
      <i class="fa fa-angle-down" aria-hidden="true"></i>

      <div className={isActive ? "dropmenu-profile-img " : "dropmenu-profile-img dropmenu-profile-open"} onClick={handleToggle}>
          <ul>
            <li> <NavLink to="/admin_profile">{first_name} </NavLink> </li>
            <li> <NavLink to="/admin_profile">Ayarlar </NavLink> </li>
            <li> <NavLink to="" onClick={logout}> Çıkış </NavLink> </li>
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
            Yeni Marka Ekle            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Container>
                
                <Row>
                <Col xs={12} md={12}>
                
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label  style={{marginTop: '0px'}}>Marka Adı</Form.Label>
                        <Form.Control type="text" id="brand_name" placeholder="abc" />

                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label  style={{marginTop: '0px'}}>Location</Form.Label>
                        <Form.Control type="text" id="brand_location" placeholder="abc" />

                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label  style={{marginTop: '0px'}}>Kuruluş Tarihi</Form.Label>
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
                <button class="admin-add-btn f-w-500" onClick={Submit}>  <i class="fa fa-plus" aria-hidden="true"></i> Marka Ekle</button>
                </div>
            </Modal.Footer>
      </Modal>

        </> 
    );
}

function Submit(){
  // $(".laoder").show(); 
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
      year_founded : year_founded,
      annual_revenue: annual_revenue,
      brand_name : brand_name,
      comp_location : brand_location,
      comp_name : ""
    }

};
console.log(config)
axios(config).then(res=>{
    // console.log(res.data.data)
  cookies.set('uuid2', res.data.data.uuid, { path: '/' })

  $(".laoder").hide(); 
  window.location = '/admin_home'
}

).catch(err=>{
  console.error(err);
  $(".laoder").hide(); 
window.location = "/brand-profile";
})
}

export default AdminNavbar
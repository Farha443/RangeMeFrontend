
import React,{useState,useEffect} from 'react';
import '../../assets2/admin.css';
import AdminNavbar from './AdminNavbar'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    Card,
    Modal,
    Dropdown,
    Row
} from 'react-bootstrap';
import Select from 'react-select';
import CompanyLogo from './CompanyLogo';
// import useState from 'react-hook-use-state';
const colourOptions=[
    { value: 'Red', label: 'Red' },
    { value: 'Black', label: 'Black' },
    { value: 'Blue', label: 'Blue' },
    { value: 'Green', label: 'Green' },
]

const axios = require('axios');
const cookies = new Cookies();

function TeamAccess() {

    function change1(id){        
        document.getElementById('text1').textContent= id;
    }

    function change2(id){            
        document.getElementById('text2').textContent= id;
    }

    function change3(id){          
        document.getElementById('text3').textContent= id;
    }

    function change4(id){           
        document.getElementById('text4').textContent= id;
    }

    const [selectedClient,setSelectedClient] = useState([""]);

    function handleSelectChange(event) {
        setSelectedClient(event.target.value);
    }
    

    const [show, setShow] = useState(false);
    const [showfield, setShowField] = useState(false);
    const [category, setCategory]= useState([]);
    const[brands, setBrands] = useState([]);
    var user_uuid = cookies.get("uuid");

    useEffect(()=>{
        var token = cookies.get('logintoken');
        if (token === undefined){
        window.location="/login"
        }
    })

    useEffect(() => {
        axios.get(BASE_URL+'authentication/useraccess/').then(res=>{
            setCategory(res.data.data)
            setSelectedClient("admin")
        }).catch(err=>{
            console.log(err)            
        })

        axios.get(BASE_URL+'authentication/getsupplier/'+ user_uuid )
        .then(res=>{
            setBrands(res.data.data)
            console.log("------brands------")
            console.log(res.data.data)
        }).catch(err=>{
            console.log(err)            
        })
    },[])

    function Func() {
    
        var email = document.getElementById('email').value;
        var sender = cookies.get("uuid")
        var role = document.getElementById('Role').value;
        // var tt = document.getElementById('text1').text;
        if (role === "custom"){
        if (document.getElementById('text1').textContent === "undefined"){
            var brands_products = "null"
        }
        else{
            var brands_products = document.getElementById('text1').textContent ;
        }
    
        if (document.getElementById('text2').textContent  === "undefined"){
            var messaging = "null"
        }
        else{
            var messaging = document.getElementById('text2').textContent ;
        }
    
        if (document.getElementById('text3').textContent  === "undefined"){
            var company_setting = "null"
        }
        else{
            var company_setting = document.getElementById('text3').textContent ;
        }
        if (document.getElementById('text4').textContent  === "undefined"){
            var lead_tracker = "null"
        }
        else{
            var lead_tracker = document.getElementById('text4').textContent ;
        }
        }
       
        
        var custom_message=document.getElementById('custom_message').value;
        if (document.getElementById("specific").checked === true){
            const selected = document.querySelectorAll('#accessand option:checked');
            var array = Array.from(selected).map(el => el.value);
            
        };
        if(document.getElementById("all").checked === true){
            var array= "all"
        }
     
        console.log(array)
        var url = BASE_URL + "authentication/useraccess/";
        var config = {
            method : 'post',
            url : url,
            data : {
                email : email,
                access_brand :array,
                role: role,
                custom_message:custom_message,
                brands_products: brands_products,
                messaging: messaging,
                company_setting: company_setting,
                lead_tracker:lead_tracker,
                sender:sender
            }
        };
        axios(config).then(res=>{
            console.log("---- User Access Data-----");
            console.log(res.data.data);
            setShow(!show); 
        }
        
        ).catch(err=>{
          console.error(err);
        window.location = "/team_access";
        })
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

                                        <div className="p-inside-title p-inside-invite mb-3">
                                            <h5> <img src="assets/images/add-group.png" /> Team Access </h5>
                                            <p> <button className="admin-add-btn"  onClick={() => setShow(true)}> <i class="fa fa-plus" aria-hidden="true"></i> kullanıcıyı davet et</button> </p>
                                            {/* invite user */}
                                        </div>

                                        <div className="overview-form">

                                           <Row className="justify mb-3">

                                            <Col md="6">
                                                <div className="invie-user-box-main">
                                                   <div className="inv-left-cont">
                                                        <div className="in-img">
                                                            <img src="assets/images/2.jpg" />
                                                        </div>
                                                        <div className="int-left-text">
                                                            <h6> John  </h6>
                                                            <p> All Brands </p>
                                                        </div>
                                                   </div>

                                                    <div className="inv-right-cont">
                                                        <button className="inv-owner-btn"> Owner </button>
                                                    </div>


                                                </div>
                                            </Col>

                                            <Col md="6">
                                                <div className="invie-user-box-main">
                                                   <div className="inv-left-cont">
                                                        <div className="in-img">
                                                            <img src="assets/images/2.jpg" />
                                                        </div>
                                                        <div className="int-left-text">
                                                            <h6> John  </h6>
                                                            <p> All Brands </p>
                                                        </div>
                                                   </div>

                                                    <div className="inv-right-cont">
                                                        <button className="inv-owner-btn"> Owner </button>
                                                    </div>


                                                </div>
                                            </Col>

                                            <Col md="6">
                                                <div className="invie-user-box-main">
                                                   <div className="inv-left-cont">
                                                        <div className="in-img">
                                                            <img src="assets/images/2.jpg" />
                                                        </div>
                                                        <div className="int-left-text">
                                                            <h6> John  </h6>
                                                            <p> All Brands </p>
                                                        </div>
                                                   </div>

                                                    <div className="inv-right-cont">
                                                        <button className="inv-owner-btn"> Owner </button>
                                                    </div>


                                                </div>
                                            </Col>

                                            <Col md="6">
                                                <div className="invie-user-box-main">
                                                   <div className="inv-left-cont">
                                                        <div className="in-img">
                                                            <img src="assets/images/2.jpg" />
                                                        </div>
                                                        <div className="int-left-text">
                                                            <h6> John  </h6>
                                                            <p> All Brands </p>
                                                        </div>
                                                   </div>

                                                    <div className="inv-right-cont">
                                                        <button className="inv-owner-btn"> Owner </button>
                                                    </div>


                                                </div>
                                            </Col>

                                            <Col md="6">
                                                <div className="invie-user-box-main">
                                                   <div className="inv-left-cont">
                                                        <div className="in-img">
                                                            <img src="assets/images/2.jpg" />
                                                        </div>
                                                        <div className="int-left-text">
                                                            <h6> John  </h6>
                                                            <p> All Brands </p>
                                                        </div>
                                                   </div>

                                                    <div className="inv-right-cont">
                                                        <button className="inv-owner-btn"> Owner </button>
                                                    </div>


                                                </div>
                                            </Col>

                                            <Col md="6">
                                                <div className="invie-user-box-main">
                                                   <div className="inv-left-cont">
                                                        <div className="in-img">
                                                            <img src="assets/images/2.jpg" />
                                                        </div>
                                                        <div className="int-left-text">
                                                            <h6> John  </h6>
                                                            <p> All Brands </p>
                                                        </div>
                                                   </div>

                                                    <div className="inv-right-cont">
                                                        <button className="inv-owner-btn"> Owner </button>
                                                    </div>


                                                </div>
                                            </Col>

                                            <Col md="6">
                                                <div className="invie-user-box-main">
                                                   <div className="inv-left-cont">
                                                        <div className="in-img">
                                                            <img src="assets/images/2.jpg" />
                                                        </div>
                                                        <div className="int-left-text">
                                                            <h6> John  </h6>
                                                            <p> All Brands </p>
                                                        </div>
                                                   </div>

                                                    <div className="inv-right-cont">
                                                        <button className="inv-owner-btn"> Owner </button>
                                                    </div>


                                                </div>
                                            </Col>

                                            <Col md="6">
                                                <div className="invie-user-box-main">
                                                   <div className="inv-left-cont">
                                                        <div className="in-img">
                                                            <img src="assets/images/2.jpg" />
                                                        </div>
                                                        <div className="int-left-text">
                                                            <h6> John  </h6>
                                                            <p> All Brands </p>
                                                        </div>
                                                   </div>

                                                    <div className="inv-right-cont">
                                                        <button className="inv-owner-btn"> Owner </button>
                                                    </div>


                                                </div>
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





        <Modal
        size="lg"
        // dialogClassName="modal-90w"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
            Invite User
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Container>
                
                <Row>
                <Col xs={12} md={6}>
                
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label  style={{marginTop: '0px'}}>Email</Form.Label>
                        <Form.Control type="email" placeholder="abc.com" id="email" />

                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <div className="step-four-radio">
                            <div>
                            <label  style={{marginTop: '0px'}} htmlFor="basic-url" className="lb">Brands </label>
                            </div>
                            <Form.Check inline label="All Brands" id="all" name="group1" type="radio" onClick={()=>setShowField(false)} />
                            <Form.Check inline label="Specific Brands" id="specific" onClick={()=>setShowField(true)} name="group1" type="radio"  />
                        </div>
                    </Form.Group>
                    
                                              
                    
                        <Form.Group multiple controlId="exampleForm.ControlSelect1">
                        
                            
                      {showfield && <Form.Control as="select" id="accessand" multiple="true">
                    
                     
                      {/* {category.map(cat=>(  */}
                        {brands.map(brand=>(    
                       <option value={brand.uuid}>{brand.brand_name}</option>))}
                     
                      </Form.Control>}
                            
                  </Form.Group>
                    
                    


                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label  style={{marginTop: '0px'}}>Custom Message (Opsiyonel)</Form.Label>
                        <Form.Control as="textarea"  id="custom_message" rows={3} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                   
                       
                    </Form.Group>
                    
                </Col>

                <Col xs={12} md={6}>
                    <div className="inv-user-pop-right">
                    
                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label   style={{marginTop: '0px'}}>Role</Form.Label>
                        <Form.Control as="select" id="Role" value={selectedClient} onChange={handleSelectChange}>
                        <option value="admin">Admin</option>
                        <option value="sales">Sales</option>
                        <option value="marketing">Marketing</option>
                        <option value="custom">Custom</option>
                        </Form.Control>
                          
               
                    </Form.Group>
                      
                    </div>
                    
                   {selectedClient==="admin" ? <div id="admin" className="tab-cont-main-10121 tb-one">
                              <div class="invite-user-modal__permission-description___3XMpQ">
                                  <span class="text__text___2g-Dv text__small-copy___bgT96">Admin users have access to all account functionality.
                                   They can make modifications to the brand profile and product listings.
                                    They have full access to all messages relating to the brands which they
                                    have been assigned and can invite other company members to a conversation. 
                                    They can also update company and subscription details if they have been assigned access to ‘All Brands’. They can manage and fulfill orders as well as update ordering settings.</span>
                              </div>

                              <div className="invite-user-modal__permission-header___DvkVU">
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Section</span></div>
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Permission</span></div>
                              </div>

                              <div className="invite-user-modal__permission-header___DvkVU">
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Brands & Products</span></div>
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Edit</span></div>
                              </div>

                              <div className="invite-user-modal__permission-header___DvkVU">
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Messaging</span></div>
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Full Access</span></div>
                              </div>

                              <div className="invite-user-modal__permission-header___DvkVU">
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Company Settings</span></div>
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Manage</span></div>
                              </div>

                              <div className="invite-user-modal__permission-header___DvkVU" style={{border: 'none'}}>
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Lead Tracker</span></div>
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Full Access</span></div>
                              </div>
                    </div>:""}

                    {selectedClient==="sales" ?<div id="sales" className="tab-cont-main-10121 tb-two">
                              <div class="invite-user-modal__permission-description___3XMpQ">
                                  <span class="text__text___2g-Dv text__small-copy___bgT96">
                                  Sales users have view only access to the brand profile and product listings. They have full permissions to the sharing functionality and can create and manage shares. They have full access to all messages relating to the brands which they have been assigned and can invite other company members to a conversation. They do not have access to company settings.
                                </span>   
                                  </div>

                              <div className="invite-user-modal__permission-header___DvkVU">
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Section</span></div>
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Permission</span></div>
                              </div>

                              <div className="invite-user-modal__permission-header___DvkVU">
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Brands & Products</span></div>
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">view & share</span></div>
                              </div>

                              <div className="invite-user-modal__permission-header___DvkVU">
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Messaging</span></div>
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Full Access</span></div>
                              </div>

                              <div className="invite-user-modal__permission-header___DvkVU">
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Company Settings</span></div>
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">None</span></div>
                              </div>

                              <div className="invite-user-modal__permission-header___DvkVU" style={{border: 'none'}}>
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Lead Tracker</span></div>
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Full Access</span></div>
                              </div>



                    </div>:""}

                    {selectedClient==="marketing" ?<div id="marketing" className="tab-cont-main-10121 tb-three ">
                              <div class="invite-user-modal__permission-description___3XMpQ">
                                  <span class="text__text___2g-Dv text__small-copy___bgT96">
                                  Marketing users can manage the brand profile and product listings. They also have full permissions to the sharing functionality and can create and manage shares. They do not have access to messaging and cannot be invited to a conversation. They do not have access to company settings.
                                   </span>   
                                  </div>

                              <div className="invite-user-modal__permission-header___DvkVU">
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Section</span></div>
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Permission</span></div>
                              </div>

                              <div className="invite-user-modal__permission-header___DvkVU">
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Brands & Products</span></div>
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Edit</span></div>
                              </div>

                              <div className="invite-user-modal__permission-header___DvkVU">
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Messaging</span></div>
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">announccement only</span></div>
                              </div>

                              <div className="invite-user-modal__permission-header___DvkVU">
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Company Settings</span></div>
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">none</span></div>
                              </div>

                              <div className="invite-user-modal__permission-header___DvkVU" style={{border: 'none'}}>
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Lead Tracker</span></div>
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Full Access</span></div>
                              </div>



                    </div>:""}

                   {selectedClient==="custom" ? <div id="custom" className="tab-cont-main-10121 tb-four">
                            

                              <div className="invite-user-modal__permission-header___DvkVU">
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Section</span></div>
                              <div><span class="text__text___2g-Dv text__medium-copy___1Y01K">Permission</span></div>
                              </div>

                              <div className="invite-user-modal__permission-header___DvkVU">
                              <div className="d11"><span class="text__text___2g-Dv text__medium-copy___1Y01K">Brands & Products</span></div>
                              <div className="d12">
                               
                              <Dropdown >
                                <Dropdown.Toggle  id="dropdown-custom-components">
                                <p id="text1">view</p>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                <Dropdown.Item value="view" onClick={()=>change1('view')}>view</Dropdown.Item>
                                <Dropdown.Item value="view & share" onClick={()=>change1('view & share')}>view & Share</Dropdown.Item>
                                <Dropdown.Item value="edit" onClick={()=>change1('edit')}>Edit</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                                </div>
                              </div>
                              <div className="invite-user-modal__permission-header___DvkVU">
                              <div className="d11"><span class="text__text___2g-Dv text__medium-copy___1Y01K">Messaging</span></div>
                              <div className="d12">
                               
                               <Dropdown>
                                 <Dropdown.Toggle  id="dropdown-custom-components">
                                 <p id="text2">full access</p>
                                 </Dropdown.Toggle>
 
                                 <Dropdown.Menu >
                                 <Dropdown.Item onClick={()=>change2('full access')}>full access</Dropdown.Item>
                                 <Dropdown.Item onClick={()=>change2('announcement only')}>announcement only</Dropdown.Item>
                                 <Dropdown.Item onClick={()=>change2('by invite')}>
                                     by invite
                                 </Dropdown.Item>
                                
                                 </Dropdown.Menu>
                             </Dropdown>
                                 </div>
                             
                              </div>

                              <div className="invite-user-modal__permission-header___DvkVU">
                              <div className="d11"><span class="text__text___2g-Dv text__medium-copy___1Y01K">Company Settings</span></div>
                              <div className="d12">
                               
                               <Dropdown>
                                 <Dropdown.Toggle  id="dropdown-custom-components">
                                 <p id="text3">none</p>
                                 </Dropdown.Toggle>
 
                                 <Dropdown.Menu >
                                 <Dropdown.Item onClick={()=>change3('none')}>None</Dropdown.Item>
                                 <Dropdown.Item onClick={()=>change3('view & share')}>view & share</Dropdown.Item>
                                 <Dropdown.Item onClick={()=>change3('share')}>share</Dropdown.Item>
                                 
                                 </Dropdown.Menu>
                             </Dropdown>
                                 </div>
                             
                              </div>

                              <div className="invite-user-modal__permission-header___DvkVU" style={{border: 'none'}}>
                              <div className="d11"><span class="text__text___2g-Dv text__medium-copy___1Y01K">Lead Tracker</span></div>
                              <div className="d12">
                               
                               <Dropdown>
                                 <Dropdown.Toggle  id="dropdown-custom-components">
                                 <p id="text4">none</p>
                                 </Dropdown.Toggle>
 
                                 <Dropdown.Menu >
                                 <Dropdown.Item onClick={()=>change4('none')}>none</Dropdown.Item>
                                 <Dropdown.Item onClick={()=>change4('full access')}>full access</Dropdown.Item>
                                
                                 </Dropdown.Menu>
                             </Dropdown>
                                 </div> 
                               </div>



                    </div>:''}

                </Col>
            
                
            </Row>
            </Container>
            </Modal.Body>
            <Modal.Footer>
                <div className="col-md-12 text-center">
                <button class="admin-add-btn f-w-500" onClick={Func}>  <i class="fa fa-plus" aria-hidden="true"></i> Invite  </button>
                </div>
            </Modal.Footer>
      </Modal>


        </>
    );
}

export default TeamAccess
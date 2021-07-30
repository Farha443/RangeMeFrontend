import React, {useEffect, userEffect, useState} from 'react';
import '../../assets2/admin.css';
import AdminNavbar from './AdminNavbar'
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
  Row,
  Tab
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import Cookies from "universal-cookie";
import BASE_URL from '../base';
// import BrandLogoHome from './BrandLogoHome';
const axios = require('axios').default;
const cookies = new Cookies();


var user_uuid = cookies.get("uuid")

function AdminHomeNew(){
    const [show, setShow] = useState(false);
    const [show3, setShow3] = useState(false);
    const [isActive, setActive] = useState("false");
    const[brands, setBrands] = useState([])
    const[Allbrands, setAllbrands] = useState([])
    const[singleBrand , setSingleBrand] = useState([]);
    const[remove , setRemove] = useState([]);
    const[message , setMessage] = useState([]);
    const[messageCount , setMessageCount] = useState([]);
    const handleToggle = () => {
        setActive(!isActive);
      };
      var ws = new WebSocket('ws://localhost:8000/test/')
      useEffect(() => {
         
        ws.onopen = () => {
            console.log('connected')
            }

        
            ws.onmessage = evt => {
                // listen to data sent from the websocket server
                const message = JSON.parse(evt.data)
                
                // this.setState({dataFromServer: message})
                console.clear()
                console.log(message.payload)
                if(message.payload){
                    setMessage(message.payload.notify)
                    setMessageCount(message.payload.count)
                    // setInterval(function(){
                    //         setMessage(message.payload.notify)
                    //     setMessageCount(message.payload.count)
                    //     },2000)
                }
                ws.onclose = () => {
                    console.log('disconnected')
                    // automatically try to reconnect on connection loss
            
                    }
                // 
                
            //     try{
                
            // }  
            // catch(err){
            //     console.log('except')  
            }
                
                
        axios.get(BASE_URL+'authentication/getsupplier/'+ user_uuid )
        .then(res=>{
            setBrands(res.data.data[0])
            setRemove(res.data.data)
            var arra = []
            const map1 = res.data.data.map(x => 
                {
                    if (x.uuid === res.data.data[0].uuid ){
                        return {};
                    }else{
                        return arra.push(x) ;
                    }
                });
            setAllbrands(arra)
        }).catch(err=>{
            console.log(err)            
        })
        
    },[])


    function GetSingleBrand(uuid){
        axios.get(BASE_URL+'authentication/singlebrand/'+ uuid )
        .then(res=>{
            setBrands(res.data.data)
            var dd = remove
            var arra=[];
            const map1 = dd.map(x => 
                {
                    if (x.uuid === uuid ){
                        return {};
                    }else{
                        return arra.push(x) ;
                    }
                });
            setAllbrands(arra)
            console.log(res.data.data.length)
        }).catch(err=>{
            console.log(err)            
        })     
    }

   

    return(
        <>
            <AdminNavbar/>

           
                <div className="admin-container">
                <div className="row">
                <div className="rgm-left-content col-md-9">
            <section className="admin-home-section"> 
         
                <Row>
                    <Col md="12">
                    <div className="cover-md-left-cont">
                    <div className="ad-hm-logo-main">
                                     
                                     {/* <img src="assets/images/brand-logo.jpg" /> */}
                                     {brands.brand_logo!= null?
                                     <img src = {BASE_URL.slice(0,-5)+brands.brand_logo}></img>: <img src="assets/images/brand-logo.jpg"/>}
                                        <div className="prof-img-btn">
                                            <button className="clickable-cover-image__change-image___JnYhU" type="button" onClick={() => setShow3(true)}>
                                                <div className="clickable-cover-image__change-image-hint___3NLUs"><img alt="camera" className="clickable-cover-image__change-image-icon___1k392" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMxIDZoLTcuNmwtMy43LTMuN2MtLjItLjItLjQtLjMtLjctLjNoLTZjLS4zIDAtLjUuMS0uNy4zTDguNiA2SDFjLS42IDAtMSAuNC0xIDF2MjJjMCAuNi40IDEgMSAxaDMwYy42IDAgMS0uNCAxLTFWN2MwLS42LS40LTEtMS0xek0xNiAyNWMtMy45IDAtNy0zLjEtNy03czMuMS03IDctNyA3IDMuMSA3IDctMy4xIDctNyA3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNiA1SDNjLS42IDAtMS0uNC0xLTFzLjQtMSAxLTFoM2MuNiAwIDEgLjQgMSAxcy0uNCAxLTEgMXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=" />
                                                    <div className="clickable-cover-image__change-image-text___1kIxy"></div>
                                                </div>
                                            </button>
                                        </div>
                                   
                                     

                                    </div>

                                    <div className="cover-brand-title ad-hm-b-title">
                                        <h5> {brands.brand_name} </h5>
                                      
                                        <p onClick={handleToggle}> Switch Brand <i class="fa fa-angle-down" aria-hidden="true"></i> </p>
                                        <div className={isActive ? "drop-d-101 " : "drop-d-101 open-drop"}>
                                        {Allbrands.map(bt=>( 
                                           <ul>
                                                   <li onClick={() => {GetSingleBrand(bt.uuid);handleToggle()}}> <NavLink to="/admin_home">{bt.brand_name}</NavLink> </li>
                                               </ul>
                                               ))}
                                            {/* onClick={() => GetSingleBrand(bt.uuid)} */}
                                           </div>
                                    </div>
                    </div>
                                   
                    </Col>
                    <Col md="12">
                    <Card>
                        <Card.Body className="mb-2">
                            <div className="p-insight-d-main">
                                <div className="p-inside-title">
                                    <h5> Profile Insights </h5>
                                    <p> Profile Status : <span> Unpublished </span> </p>
                                </div>
                            </div>
                        <Row>
                            <Col md="12">
                                <div className="hm-insight-m-div">
                                    <ul>
                                        <li>
                                            <div className="in-content">
                                                <div className="in-cont-first">
                                                <i class="fal fa-check-circle"></i>
                                                    <p>  Create account </p>          
                                                </div>           
                                            </div>
                                        </li>

                                        <li className="ad-home-active">
                                            <div className="in-content">
                                                <div className="in-cont-first">
                                                <i class="fal fa-check-circle"></i>
                                                    <p>  Add product </p> 
                                                    <p> Add your first product to attract interest from buyers</p>         
                                                </div>
                                                <div className="in-content-two">
                                                    <button className="admin-add-btn"> Complete Product  </button>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="in-content">
                                                <div className="in-cont-first">
                                                <i class="fal fa-check-circle"></i>
                                                    <p> Confirm email </p>          
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="in-content">
                                                <div className="in-cont-first">
                                                <i class="fal fa-check-circle"></i>
                                                    <p> Add logo (optional) </p>          
                                                </div>                     
                                            </div>
                                        </li>

                                        <li>
                                            <div className="in-content">
                                                <div className="in-cont-first">
                                                <i class="fal fa-check-circle"></i>
                                                    <p>  Add cover image (optional) </p>          
                                                </div>      
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Col>

                    
                        </Row>
                        </Card.Body>
                    </Card>
                       
                    </Col>
             
                </Row>
       
            </section>


            <section className="admin-home-section"> 
            <Container>
                <Row>
                    <Col md="12">
                    <Card style={{width: '80%',marginTop:"5px"}}>
                      
                        <Card.Body>
                            <div className="p-insight-d-main">
                                <div className="p-inside-title">
                                    <h5> Profile Insights </h5>
                                    <p> Profile Status : <span> Unpublished </span> </p>
                                </div>
                            </div>
                        <Row>
                            <Col md="4">
                                <div className="admin-count-box">
                                {/* <i class="fa fa-eye" aria-hidden="true"></i> */}
                                    <h2> {brands.brand_views}</h2>
                                    <p> VIEWS </p>
                                </div>
                            </Col>

                            <Col md="4">
                                <div className="admin-count-box">
                                {/* <i class="fa fa-users" aria-hidden="true"></i> */}
                                <h2> - </h2>
                                    <p> PROFILE VISITS </p>
                                </div>
                            </Col>

                            <Col md="4">
                                <div className="admin-count-box">
                                {/* <i class="fa fa-commenting-o" aria-hidden="true"></i> */}
                                <h2> - </h2>
                                    <p> CONVERSIONS </p>
                                </div>
                            </Col>  
                        </Row>
                        </Card.Body>
                    </Card>
                       
                    </Col>
                </Row>
            </Container>
            </section>
            </div>
        {/* right sidebar div start  */}

        <div className="col-md-3">
            <div className="rgm-right-bar">
                <div className="right-side-header">
                    <h5>Current buyer activity on Vaniver</h5>
                    <p> {message} </p>
                </div> 

                <ul>
                    <li>
                        <div className="right-side-img-d-1">
                            <img src="assets/images/101.jpg" alt="img"/>
                        </div>
                       <div className="tx-1021">
                       <h6>A buyer from QVC / HSN</h6>
                        <p> saved a brand </p>
                       </div>
                    </li>

                    <li>
                        <div className="right-side-img-d-1">
                            <img src="assets/images/101.jpg" alt="img"/>
                        </div>
                       <div className="tx-1021">
                       <h6>{messageCount}</h6>
                        <p> saved a brand </p>
                       </div>
                    </li>

                    <li>
                        <div className="right-side-img-d-1">
                            <img src="assets/images/101.jpg" alt="img"/>
                        </div>
                       <div className="tx-1021">
                       <h6>A buyer from QVC / HSN</h6>
                        <p> saved a brand </p>
                       </div>
                    </li>

                    <li>
                        <div className="right-side-img-d-1">
                            <img src="assets/images/101.jpg" alt="img"/>
                        </div>
                       <div className="tx-1021">
                       <h6>A buyer from QVC / HSN</h6>
                        <p> saved a brand </p>
                       </div>
                    </li>

                    <li>
                        <div className="right-side-img-d-1">
                            <img src="assets/images/101.jpg" alt="img"/>
                        </div>
                       <div className="tx-1021">
                       <h6>A buyer from QVC / HSN</h6>
                        <p> saved a brand </p>
                       </div>
                    </li>
                    
                    <div className="verif-text-hm">
                        <p> 15821 verified buyers on vaniver </p>
                    </div>
                    

                </ul> 
            </div>
         
        </div>
                </div>
            </div>
              
            <Modal
        size="lg"
        // dialogClassName="modal-90w"
        show={show}
        onHide={() => setShow(false)}
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
                        <Form.Label  style={{marginTop: '0px'}}>Band Name</Form.Label>
                        <Form.Control type="email" placeholder="abc" />

                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label  style={{marginTop: '0px'}}>Location</Form.Label>
                        <Form.Control type="email" placeholder="abc" />

                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label  style={{marginTop: '0px'}}>Year founded</Form.Label>
                      <Form.Control as="select">
                      <option>Select</option>
                      <option>brand 1</option>
                      <option>brand 2</option>
                      <option>brand 3</option>
                      <option>brand 3</option>
                      </Form.Control>
                  </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label  style={{marginTop: '0px'}}>Revenue</Form.Label>
                      <Form.Control as="select">
                      <option>Select</option>
                      <option>brand 1</option>
                      <option>brand 2</option>
                      <option>brand 3</option>
                      <option>brand 3</option>
                      </Form.Control>
                    
                    <p className="mt-2"> Buyers use this information to search for products </p>
                  </Form.Group>

                    
                </Col>
                {/* <Col xs={6} md={6}>
                .col-xs-6 .col-md-4
                </Col> */}
            </Row>
            </Container>
            </Modal.Body>
            <Modal.Footer>
                <div className="col-md-12 text-center">
                <button class="admin-add-btn f-w-500">  <i class="fa fa-plus" aria-hidden="true"></i> Add Brand </button>
                </div>
            </Modal.Footer>
      </Modal>


    {/* Brand logo modal  */}
    {/* <Modal
                size="lg"
                centered
                show={show3}
                onHide={() => setShow3(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Brand Logo
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col xs={12} md={12}>

                              <BrandLogoHome/>

                            </Col>

                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className="col-md-12 text-center">
                        <button class="admin-add-btn f-w-500">  Save  </button>
                    </div>
                </Modal.Footer>
            </Modal>
 */}


        </> 
    );
}

export default AdminHomeNew
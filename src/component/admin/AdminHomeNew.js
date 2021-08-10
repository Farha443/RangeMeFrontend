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
import $ from "jquery";  
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
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [isActive, setActive] = useState("false");
    const[brands, setBrands] = useState([])
    const[Allbrands, setAllbrands] = useState([])
    const[remove , setRemove] = useState([]);
    const[message , setMessage] = useState([]);
    const[messageCount , setMessageCount] = useState([]);
    const[buyerdetail , setBuyerDetail] = useState([]);
    const[chatbox,setChatbox]=useState(false)
    const[messageList,setmessageList]=useState({})
    const[olDMessages,setolDMessages]=useState([])
    const[list,setList]=useState([])
    const [Id , setId] = useState([])
    const [recieverID , setRecieverId] = useState([])

     async function BuyerDetail(e){
        // debugger
        await axios.get(BASE_URL+'authentication/getuser/'+ e )
        .then(res=>{
            // debugger
            console.log(res.data.data)
            setBuyerDetail(res.data.data)
            setShow2(true)
        }).catch(err=>{
            console.log(err)            
        })
    }

    useEffect(() => {
        var toId=cookies.get('uuid');
        var url = BASE_URL+'authentication/message/?toId=' + toId;
         axios.get(url)
        .then(res=>{       
            setList(res.data)
            
            console.log("-----see here ----")
            console.log(res.data)
          }).catch(err=>{
              console.log(err)            
          })
        ;
      },[])

 var socket = new WebSocket('ws://tayuss.com/chat/')
 useEffect(() => {
    socket.onopen = () => {
            // debugger
            console.log('connected')
            }
            socket.onmessage = evt => {
                // listen to data sent from the websocket server
                const message = JSON.parse(evt.data)
                // debugger
                if (message.payload){var jk = JSON.parse(message.payload.msg)}
                console.log("okay I hate you")
                console.log(jk)
                // console.log(messageList.push(message.payload))
                // alert(messageList.receiver) 
                // console.log(message.payload)
                if(message.payload){
                    setmessageList(jk)
                        // setMessageCount(message.payload.length)
                    }
                }
                
    },[])



    useEffect(() => {    
        axios.get(BASE_URL+'authentication/send_notifiaction/' )
            .then(res=>{
                // debugger
                console.log(res.data.data)
                if(res.data.data){
                        setMessage(res.data.data)
                        setMessageCount(res.data.data.length)
                    }                
               
            }).catch(err=>{
                console.log(err)            
            })
        
    },[])


    const handleToggle = () => {
        setActive(!isActive);
      };
      var ws = new WebSocket('ws://tayuss.com/test/')
      useEffect(() => {
         
        ws.onopen = () => {
            // debugger
            console.log('connected')
            }
            ws.onmessage = evt => {
                // listen to data sent from the websocket server
                const message = JSON.parse(evt.data)
                console.log(message.payload)
                if(message.payload){
                        setMessage(message.payload)
                        setMessageCount(message.payload.length)
                    }
                }
                ws.onclose = () => {
                    console.log('disconnected')
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

    function openchatbox(y){
        // debugger
        var data = list[y]
        var from = data[0].sender
        var to = data[0].receiver
        var rec = cookies.get('uuid')
        if (from===rec){
            setRecieverId(to)
        }
        else{
            setRecieverId(from)
        }
        setId(data[0].fromId)
        setChatbox(true)
        console.log("here seeen")
        setolDMessages(data)  
        console.log(data)   
    }

    function Sendmessage(id){
        var url = BASE_URL+"authentication/messagebuyer/";
        var msg = document.getElementById('message').value; 
        var fromId=cookies.get('uuid');
        var toId = id
        var config= {
            method: 'post',
                url: url,
                data: {
                    fromId : fromId,
                    toId: toId,
                    msg : msg
                },
            };
            var wss = new WebSocket('ws://tayuss.com/chat/')
    wss.onclose = () => {
        console.log('disconnected')
        }
    wss.onopen = () => {
        console.log('connected')
        }
    axios(config).then(res=>{
        wss.onmessage = evt => {
            // debugger
            const message = JSON.parse(evt.data)
            console.log(message)
            }
            setolDMessages(res.data) 
            $(document).ready(function() {
                $('#message').val('');
             })
          }
          ).catch(err=>{
            console.error(err);
           
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
            <h5>Current buyer Bidding Placed --- {message.length}
           </h5> 
                {message.map(msg=>{
                    return <div className="right-side-header">
                   
                    {/* {msg} */}
                   
                    <p> {msg[Object.keys(msg)[0]]} </p>
                    {/* <p> {Object.values(msg)[1]} </p> */}
                    <button className="admin-add-btn f-w-500" onClick={() => BuyerDetail(Object.values(msg)[1])}><i class="fa fa-plus" aria-hidden="true"></i>Buyer Detail</button>
                   
                </div>
                })}
                 


            </div>
         
        </div>
                </div>
            </div>
              
           

      <Modal
                size="lg"
                centered
                show={show2}
                onHide={() => setShow2(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    <h5 style={{ marginBottom: '0px' }}> Add product </h5>
                    {/* <p> Start with adding your product’s name </p> */}
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col xs={12} md={10} className="m-auto">
                         <div className="text-center mb-3">
                         <h5>Buyer detail</h5>  
                       
                         </div>
                            <Col xs={12} md={10} className="m-auto"> 
                                <div>
                                    <p>
                                    Name :- {buyerdetail.first_name}
                                    &nbsp;{buyerdetail.last_name}
                                    
                                    </p>
                                    <p>
                                    Mobile:- {buyerdetail.mobile}
                                    
                                    </p>
                                    <p>
                                    Address:- {buyerdetail.comp_location}
                                    </p>
                                </div>
                            </Col>
                            </Col>

                        </Row>
                    </Container>
                </Modal.Body>
               
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
<Modal
        size="md"
        show={chatbox}
        onHide={() => setChatbox(false)}
        aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
            {Id}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Container>
                
                <Row>
                   <Col md="12">
                        <div className="chat-list"> 
                        <ul>
                        {olDMessages.map(msg=>(<li>
                            {msg.msg}
                    </li>))}
                    
                    <li>{String(messageList.receiver)===cookies.get("uuid").split('-').join('') && recieverID.split('-').join('')===messageList.sender?messageList.msg:''}</li>
                        </ul>
                    </div>
                    </Col>
                    
                
                        
                <Col xs={12} md={12}>
                    <div className="chat-input">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text"  id="message" placeholder="abc" />
                        <button type = 'submit' onClick={()=>Sendmessage(recieverID)} class='btn btn-primary'>send</button>
                    </Form.Group>
                    </div>
                </Col>
            </Row>
            </Container>
            </Modal.Body>
      </Modal>

        </> 
    );
}

export default AdminHomeNew
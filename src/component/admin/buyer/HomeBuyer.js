import React, {useEffect, userEffect, useState} from 'react';
import '../../../assets2/admin.css';
import AdminNavbar from '../AdminNavbar'
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
  Modal,
  Row,
  Tab,
  InputGroup
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import BuyerNavbar from '../BuyerNavbar';
import BASE_URL from '../../base';
import axios from 'axios';
import $ from "jquery";  
import {Launcher} from 'react-chat-window'
import { deprecationHandler } from 'moment';


const cookies = new Cookies();
let input_message = $('.input-message')
let message_body  = $('.msg_card_body')
let send_message_form = $('#send-message-form')

let loc = window.location;
    let wsStart= 'wss://';
    if (loc.protocol==='https'){
        wsStart='wss://'
    }
function HomeBuyer1(){

    var token = cookies.get('logintoken');
    if (token === undefined){
    window.location="/login"
    }

    const [show, setShow] = useState(false);
    const [recieverID , setRecieverId] = useState(false)
    const[products,setProducts]=useState([])
    const[chatbox,setChatbox]=useState(false)
    const[fullDetail,setFullDetail]=useState([])
    const[list,setList]=useState([])
    const[chat,setChat]=useState([])
    const[newMessage,setnewMessage]=useState({})
    const [Id , setId] = useState([])
    const [showcat, setshowcat] = useState([])
    const[count, setCount] = useState('')

    // var socket = new WebSocket(wsStart+'tayuss.com/chat/')
    var socket = new WebSocket('ws://localhost:8000/chat/')
    useEffect(() => {
       socket.onopen = () => {
               console.log('connected')
               }
            socket.onmessage = evt => {
                // listen to data sent from the websocket server
                const message = JSON.parse(evt.data)
                if (message.payload){var jk = JSON.parse(message.payload.msg)}
                console.log(jk)
                if(message.payload){
                    setnewMessage(jk)
                        // setMessageCount(message.payload.length)
                    }
                }
                   
       },[])

    useEffect(() => {

        axios.get(BASE_URL+'authentication/GetCategorysignup/')
        .then(res=>{  
            
            // console.log(res.data.data)

            setshowcat(res.data.data ) 
        }).catch(err=>{
            console.log(err)            
        })

        axios.get(BASE_URL+'product/getcatwise_product/?search=null')
        .then(res=>{  
            setProducts(res.data) 
            console.log("-------products ------------")
            console.log(res.data)  
        }).catch(err=>{
            console.log(err)            
        })

        var toId=cookies.get('uuid');
        var url = BASE_URL+'authentication/message/?toId=' + toId 
        axios.get(url)
        .then(res=>{  
            setList(res.data)
            // console.log(res.data.length)
            
            }).catch(err=>{
                console.log(err)            
            })
    },[])



function openchatbox(uuid,name){
    setChatbox(true)
    setRecieverId(uuid) 
    var toId=cookies.get('uuid');
      // var recieverId = uuid
      var url = BASE_URL+'authentication/messagebuyer/?toId=' + toId + '&fromId=' + uuid
      axios.get(url)
      .then(res=>{  
          setChat(res.data)
          console.log("----my data")
          console.log(res.data)
          setId(name)
        }).catch(err=>{
            console.log(err)            
        })
    
  }

function Sendmessage(id){
    var url = BASE_URL+"authentication/messagebuyer/";
    var msg = document.getElementById('message').value; 
    var fromId=cookies.get('uuid');
    var toId = id
    // message.append($(messageList))
    var config= {
        method: 'post',
            url: url,
            data: {
                fromId : fromId,
                toId: toId,
                msg : msg
            },
        };
    var wss = new WebSocket('ws://localhost:8000/chat/')
    // var wss = new WebSocket(wsStart+'tayuss.com/chat/')
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
            // debugger
        console.log(res.data)
        setChat(res.data) 
        $(document).ready(function() {
            $('#message').val('');
         })

         
        // $(".laoder").hide();
       
      }
      ).catch(err=>{
        console.error(err);
       
      }) 
  }

function myfunc(){
    var cat_name = document.getElementById("category").value
    axios.get(BASE_URL+'product/getcatwise_product/?search='+cat_name)
    .then(res=>{  
        console.log(res.data)  
        setProducts(res.data) 
        console.log("search item") 
        setCount(res.data.length) 
    }).catch(err=>{
        console.log(err)            
    })
    // console.log(home)

}
   
function myfunc1(){
   
    var categoryname = document.getElementById("department").value
    // alert(categoryname)
    axios.get(BASE_URL+'product/getcatwise_product/?search='+categoryname)
    .then(res=>{  
        console.log(res.data)  
        setProducts(res.data) 
    }).catch(err=>{
        console.log(err)            
    })
    // console.log(home)

}

function Redirect(uuid){
    // cookies.set('productuuid',id,{path:'/preview'})
    window.location='/preview/'+uuid;
}


    return(
        <>
           <BuyerNavbar/>

           {/* <Col md="4" xs="12">
                        <div>
                        <FormControl
                                    placeholder="requirements "
                                    id="biddata"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    />
                            <button className="admin-add-btn" onClick={BidPlacing}> Bid place</button> 
                            
                        </div>
                </Col> */}
                <div className="container">
                <Row>
                    <Col md="12" xs="12">
                        <div className="buyer-filter-br-m">
                            <Row>
                            <div class="col-md-4 col-xs-12">
                            <div class="form-group">
                                <label for="sel1" style={{margin:"0px"}} className="mb-1">Ürün Kategorisi seç</label>
                              
                                 <Form.Control  onChange={myfunc1} as="select" id="department">
                             {showcat.map(cat=>(
                                                <option value={cat.name}>{cat.name}</option>
                                                // <option>All</option>
                                                ))}
                                                
                                                </Form.Control>
                            </div>
                            </div>
                            <div class="col-md-4 col-xs-12 ml-auto prod-search-inp">
                            <Form.Label htmlFor="basic-url" style={{margin:"0px"}} className="mb-1">Ürün adına göre ara</Form.Label>
                                <InputGroup>
                                <FormControl
                                    placeholder="Username"
                                    id="category"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    />
                                    <InputGroup.Text id="basic-addon1"onClick={()=>myfunc()}><i class="fa fa-search" aria-hidden="true"></i></InputGroup.Text>
                                  
                                </InputGroup>
                            </div>
                            </Row>
                        </div>
                    </Col>
                </Row>
                {count===0?
                <div className="empty-div">
                <p>Ürün Bulunamadı.</p>
                </div>:
                <Row>
              
                {products.map(cat=>(
                    <Col md="4" xs="12">

                        <div className="brand-product-box-d">
                            <div className="p-img">
                                {/* <img src="assets/images/blog1.jpg" alt="p-image"/> */}
                                <img src={cat.images?BASE_URL.slice(0,-5)+ cat.images:"assets/images/blog1.jpg" }alt="p-image"/>
                                
                            </div>
                            <div className="p-text-d-12458">
                                <h6> {cat.product_name} </h6>
                                <p style={{margin: "0px"}}> Lorem ipsum dollar </p>
                                <div className="cost-text by-h-bt">
                                    <button className="admin-add-btn" onClick={()=>Redirect(cat.uuid)}> Detay</button> 
                                    {/* <button className="admin-add-btn ml-2"> Contact </button>  */}
                                    <button class='admin-add-btn ml-2' onClick={()=>openchatbox(cat.user,cat.name)}>Chat</button>
                                </div>
                                </div>
                        </div>

                    </Col>
                ))}
                </Row>}
                
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
                        {chat.map(msg=>(<li>
                            {msg.msg}
                    </li>))}

                    <li>{String(newMessage.receiver)===cookies.get("uuid").split('-').join('') && recieverID.split('-').join('')===newMessage.sender?newMessage.msg:''}</li>
                        
                    {/* {chat.msg} */}
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
            {/* <Modal.Footer>
                <div className="col-md-12 text-center">
                <button class="admin-add-btn f-w-500" > Save </button>
                </div>
            </Modal.Footer> */}
      </Modal>
            </div>
          
            
        </> 
    );
}

export default HomeBuyer1
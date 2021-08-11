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


const cookies = new Cookies();
let input_message = $('.input-message')
let message_body  = $('.msg_card_body')
let send_message_form = $('#send-message-form')


function HomeBuyer(){
    const [show, setShow] = useState(false);
    const [recieverID , setRecieverId] = useState(false)
    const[products,setProducts]=useState([])
    const[chatbox,setChatbox]=useState(false)
    const[messageList,setmessageList]=useState([])
    const[list,setList]=useState([])
    const[chat,setChat]=useState([])
    const[newMessage,setnewMessage]=useState({})
    const [Id , setId] = useState([])
    var socket = new WebSocket('ws://tayuss.com/chat/')
    // var socket = new WebSocket('ws://localhost:8000/chat/')
    useEffect(() => {
       socket.onopen = () => {
               console.log('connected')
               }
            //    socket.onmessage = evt => {
            //        // listen to data sent from the websocket server
            //        const message = JSON.parse(evt.data)
            //        console.log("data-------")
                
            //        // console.log(messageList.push(message.payload))
            //        console.log(message.payload)
            //        if(message.payload){
            //         setChat(message.payload)
            //                // setMessageCount(message.payload.length)
            //            }
            //        }
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
                    setnewMessage(jk)
                        // setMessageCount(message.payload.length)
                    }
                }
                   
       },[])

    useEffect(() => {
      axios.get(BASE_URL+'product/getcatwise_product/')
    .then(res=>{  
        setProducts(res.data.data) 
        console.log("-------products ------------")
        console.log(res.data.data)  
      }).catch(err=>{
          console.log(err)            
      })

      var toId=cookies.get('uuid');
      // var recieverId = uuid
      var url = BASE_URL+'authentication/message/?toId=' + toId 
      axios.get(url)
      .then(res=>{  
        //   debugger
          setList(res.data)
          console.log(res.data.length)
         
        }).catch(err=>{
            console.log(err)            
        })
  
  },[])

function BidPlacing(){
    var requirements = document.getElementById('biddata').value;
    var notifyurl = BASE_URL+'authentication/send_notifiaction/'
    var n_user = cookies.get("uuid")
    var notifyconfig = {
        method: 'post',
        url: notifyurl,
        data:{
            n_user : n_user,
            notification : requirements,
          }
      };
      var ws = new WebSocket('ws://tayuss.com/test/')
    //   var ws = new WebSocket('ws://localhost:8000/test/')
      ws.onclose = () => {
        console.log('disconnected')
        }
      ws.onopen = () => {
        console.log('connected')
        }
      axios(notifyconfig).then(res=>{
        ws.onmessage = evt => {
            // listen to data sent from the websocket s
            const message = JSON.parse(evt.data)
            console.log(message)
       }
      }
      ).catch(err=>{
        console.error(err);
      })
  }

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

    // var wss = new WebSocket('ws://localhost:8000/chat/')
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
    
function myfunc(query=null){
    if (query){
        var url = BASE_URL+'product/getcatwise_product/?search='+query    
    }
    else{    
    var url = BASE_URL+'product/getcatwise_product/'   
    }
    axios.get(url)
    .then(res=>{  
        console.log(res.data.data)  
        setProducts(res.data.data) 
    }).catch(err=>{
        console.log(err)            
    })
    // console.log(home)

}
function search(){
    var s = document.getElementById('search').value;
    myfunc(s)   
}
   
    return(
        <>
           <BuyerNavbar/>

           <Col md="4" xs="12">
               
                {/* <input type="text"> Bid Proposal </input> */}
                {/* messageList */}
                    
                        <div>
                        <FormControl
                                    placeholder="requirements "
                                    id="biddata"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    />
                            <button className="admin-add-btn" onClick={BidPlacing}> Bid place</button> 
                            
                        </div>
                       
                
                </Col>
                <div className="container">
                <Row>
                    <Col md="12" xs="12">
                        <div className="buyer-filter-br-m">
                            <Row>
                            <div class="col-md-4 col-xs-12">
                            <div class="form-group">
                                <label for="sel1" style={{margin:"0px"}} className="mb-1">Select Category</label>
                                <select class="form-control" id="sel1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                            </div>
                            <div class="col-md-4 col-xs-12 ml-auto prod-search-inp">
                            <Form.Label htmlFor="basic-url" style={{margin:"0px"}} className="mb-1">Search Products By Category</Form.Label>
                                <InputGroup>
                                <FormControl
                                    placeholder="Username"
                                    id="search"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    />
                                    <InputGroup.Text id="basic-addon1"onClick={()=>search()}><i class="fa fa-search" aria-hidden="true"></i></InputGroup.Text>
                                  
                                </InputGroup>
                            </div>
                            </Row>
                        </div>
                    </Col>
                </Row>
                
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
                                    <button className="admin-add-btn"> Save</button> 
                                    <button className="admin-add-btn ml-2"> Contact </button> 
                                    <button class='btn btn-primary' onClick={()=>openchatbox(cat.user,cat.name)}>Chat</button>
                                </div>
                                </div>
                        </div>

                    </Col>
                ))}
                </Row>

                <Row>
                    
                </Row>

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

export default HomeBuyer
import React, {useEffect, userEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import AdminNavbar from './AdminNavbar'
import $ from "jquery";  
import {Launcher} from 'react-chat-window'
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
    Card,
    Container,
    Modal,
    Row
  } from 'react-bootstrap';
import BASE_URL from '../base';

const cookies = new Cookies();
var user_uuid = cookies.get("uuid")
function Chatbox(){
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [isActive, setActive] = useState("false");
    const[brands, setBrands] = useState([])
    const[Allbrands, setAllbrands] = useState([])
    const[singleBrand , setSingleBrand] = useState([]);
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


    useEffect(()=>{
        var token = cookies.get('logintoken');
        if (token === undefined){
        window.location="/login"
        }
    })

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

 var socket = new WebSocket('ws://localhost:8000/chat/')
//  var socket = new WebSocket('wss://tayuss.com/chat/')
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
                // console.log("okay I hate you")
                console.log(jk)
 
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

      var ws = new WebSocket('ws://localhost:8000/test/')
    //   var ws = new WebSocket('wss://tayuss.com/test/')
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
    
   
    
    function openchatbox(y){
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
        //   alert(id)
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
            // var wss = new WebSocket('wss://tayuss.com/chat/')
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
                {list.map((li,index)=>(
                    <Col md="12">
                        <button class='admin-add-btn' onClick={()=>openchatbox(index)}>{li[0].fromId}</button>
                    </Col>
                    ))}
             
                </Row>
       
            </section>

                    
            <section className="admin-home-section"> 
            
            </section>
            </div>
        {/* right sidebar div start  */}

        
                </div>
            </div>
              
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
                       {/* {messageList.receiver? */}
                        <div className="chat-list"> 

                        <ul>
                        {olDMessages.map(msg=>(<li>
                            {msg.msg}
                    </li>))}
                    
                    <li>{String(messageList.receiver)===cookies.get("uuid").split('-').join('') && recieverID.split('-').join('')===messageList.sender?messageList.msg:''}</li>
                        </ul>
                    </div>

                    {/* <div className="chat-list list-2"> 

                        <ul>
                        {olDMessages.map(msg=>(<li>
                            {msg.msg}
                    </li>))}
                    
                    <li>{String(messageList.receiver)===cookies.get("uuid").split('-').join('') && recieverID.split('-').join('')===messageList.sender?messageList.msg:''}</li>
                        </ul>
                    </div> */}
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
  
  export default Chatbox
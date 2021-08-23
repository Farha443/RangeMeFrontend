
import React from 'react';
import '../../../assets2/admin.css';
import AdminNavbar from '../AdminNavbar'
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
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import useState from 'react-hook-use-state';
import ChatText from './ChatText';
import ChatUser from './ChatUser';
import BASE_URL from '../../base';
import axios from 'axios';

const cookies = new Cookies();
function ChatInput(){
    const [show, setShow] = useState(false);

    function Sendmessage(id){
        //   alert(id)
        var url = BASE_URL+"messaging/chats/";
        var message = document.getElementById('message').value; 
        var token=cookies.get('logintoken');
        var reciever = id
        // message.append($(messageList))
        var config= {
            method: 'post',
                url: url,
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json",
                  },
                data: {
                    reciever : reciever,
                    message: message,
                },
            };
           


            axios(config)
            .then(re => {
              if(re.status === 201){
                window.location='/products_detail'
              }
            })
            .catch(err => {
              alert(err);
            }) 
      }

   
    return(
        <>
<div className="chat-inp-d-mn">
            
<div className="chat-textarea">
<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" rows={3} placeholder="type message"/>
</Form.Group>
</div>
<div className="chat-btn">
    <button className="admin-add-btn">
    <i class="fas fa-paper-plane"></i>  Send
    </button>
</div>

</div>
 </> 
 );
}

export default ChatInput
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

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import useState from 'react-hook-use-state';
import ChatText from './ChatText';
import ChatUser from './ChatUser';
import ChatInput from './ChatInput';


function Chat(){
    const [show, setShow] = useState(false);
   
    return(
        <>
        <AdminNavbar/>

    <div className="chat-wrapper">
        
          <ChatUser />
       
       <div className="chating-box-mn">
           
          <ChatText/>
          
          <ChatInput/>

       </div>     

      
    </div>


        
        </> 
    );
}

export default Chat
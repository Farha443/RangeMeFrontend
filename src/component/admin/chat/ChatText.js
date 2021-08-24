import React, {useEffect, userEffect, useState} from 'react';
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
import BASE_URL from '../../base';
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function ChatText({messages}){
    const[msg,setMsg]=useState([])

    useEffect(() => {
        setMsg(messages)
        console.log(messages)
    })

   
    return(
        <>
      <div className="chat-box-d">
        {msg.length>0?msg.map(m=>{
            if(m.sender === cookies.get('uuid')){
                return <div className="rec-text-d2">
            <ul>
                <li>
                    <p> {m.message} </p>
                </li>
            </ul>
        </div>   
            }
            else{
                return <div className="rec-text-d1">
                <ul>
                    <li>
                        <p> {m.message} </p>
                    </li>
                </ul>
            </div>
            }
        }):''}

        
        </div>
        </> 
    );
}

export default ChatText
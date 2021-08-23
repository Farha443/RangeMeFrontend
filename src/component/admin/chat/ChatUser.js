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
import ChatText from './ChatText';
import BASE_URL from '../../base';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
function ChatUser(){
    const [show, setShow] = useState(false);
    const[list,setList]=useState([])
   
    useEffect(() => {
      var url = BASE_URL+'messaging/chats/';
      var token = cookies.get('logintoken')
        var config = {
            method: 'get',
            headers: {
              "Authorization": "Bearer " + token,
              "Content-Type": "application/json",
            },
            url: url,
      
          };
          axios(config)

          .then(res => {
            setList(res.data);
            console.log("---- all chats--");
            console.log(res.data);
          })
          .catch(err => {
            alert(err);
          })
      ;
    },[])

    return(
        <>
<div className="card-chat">
<div className="card__item">
  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" />
  <div className="card__item-info">
    <div>
      <h3>Dadda Hicham</h3>
      <p>oppss! fix my bug...</p>
    </div>
    <div className="card__item-info__meta">
      <p>11:47</p>
      <span>5</span>
    </div>
  </div>
</div>
{/* <div className="card__item">
  <img src="https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=401&q=80" alt="" />
  <div className="card__item-info">
    <div>
      <h3>JHan Keepson</h3>
      <p>For sure!</p>
    </div>
    <div className="card__item-info__meta">
      <p>wed</p>
    </div>
  </div>
</div> */}
{/* <div className="card__item">
  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" />
  <div className="card__item-info">
    <div>
      <h3>Jasmine Essim</h3>
      <p>Let me call my agency</p>
    </div>
    <div className="card__item-info__meta">
      <p>wed</p>
    </div>
  </div>
</div> */}
{/* <div className="card__item">
  <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=731&q=80" alt="" />
  <div className="card__item-info">
    <div>
      <h3>Tierra Whack</h3>
      <p>So hit me up when you’re...</p>
    </div>
    <div className="card__item-info__meta">
      <p>wed</p>
    </div>
  </div>
</div> */}
{/* <div className="card__item">
  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="" />
  <div className="card__item-info">
    <div>
      <h3>Shawn Carter</h3>
      <p>is typing...</p>
    </div>
    <div className="card__item-info__meta">
      <p>wed</p>
    </div>
  </div>
</div> */}


</div>


</> 
    );
}

export default ChatUser
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
import { NavLink, useHistory } from 'react-router-dom';
import ChatText from './ChatText';
import BASE_URL from '../../base';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
function ChatUser(){
  const history = useHistory();
    const[list,setList]=useState([]);

    function get_date(dt_string){
      var dt = dt_string.split('_')[0]
      var dtt = dt_string.split('-')[2].split('T')[0]
      var month_list=['01','02','03','04','05','06','07','08','09','10','11','12']
      var date_parts = dt.split('-');
      return date_parts[0]+'/'+month_list[parseInt(date_parts[1])-1] +'/'+ dtt;
    }

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
            console.clear()
            console.log("---- all chats--");
            console.log(res.data);
          })
          .catch(err => {
            alert(err);
          })
      ;
    },[])

    function getID(id){
      history.push({
        pathname:  "/chat",
        search: `?id=`+id
     });
    }

    return(
        <>
<div className="card-chat">
{list.map((li)=>(
<div className="card__item">
  {/* <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="" /> */}
  {li.sender__user_pic != "" ? <img src={BASE_URL.slice(0,-5)+"/media/"+li.sender__user_pic} width="70px" />:
      <img src="/assets/images/user64x64.png"/>
      }
  <div className="card__item-info">
    <div>
      <a href="#" onClick={()=>getID(li.sender!==cookies.get('uuid')?li.sender:li.reciever)}><h3>{li.sender!==cookies.get('uuid')?li.sender__first_name:li.reciever__first_name} </h3></a>
      <p>{li.message.slice(0,30)+'...'}</p>
    </div>
    <div className="card__item-info__meta">
      <p>{get_date(li.created_at)}</p>
      {/* {li.seen===false?
       <span>{li.seen[0]}</span>:""} */}
     
    </div>
  </div>
</div>))}
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
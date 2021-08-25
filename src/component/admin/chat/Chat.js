import React, { useEffect } from 'react';
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
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useState from 'react-hook-use-state';
import ChatText from './ChatText';
import ChatUser from './ChatUser';
import ChatInput from './ChatInput';
import BASE_URL from '../../base';
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


function Chat(){
    const [show, setShow] = useState(false);
    const[msg,setMsg]=useState([])
    const location = useLocation();
    const history = useHistory();
    const[id,seId]=useState([])


    function get_params(){
        var params = window.location.href; //history.location.search;
        var url = new URL(params);
        var id= url.searchParams.get('id');
        const queryParams = new URLSearchParams(location.search);
        console.log(queryParams)
        if(id){
          //   alert(queryParams.id)
          getChats(id)
          seId(id)
          history.replace({
              search: '',
            })
        } 
      }
    get_params();

    function getChats(id){
        var url = BASE_URL+'messaging/get_chats/?person='+id;
        var token = cookies.get('logintoken');
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
                setMsg(res.data);
              console.log(res.data);
              
            })
            .catch(err => {
              alert(err);
            })
        
      
    }
   
    return(
        <>
        <AdminNavbar/>

    <div className="chat-wrapper">
        
          <ChatUser />
       
       <div className="chating-box-mn">
           
          <ChatText messages={msg} recId={id}/>
          
          <ChatInput recId={id}/>

       </div>     

      
    </div>


        
        </> 
    );
}

export default Chat
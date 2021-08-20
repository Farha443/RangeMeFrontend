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


function ChatText(){
   
    return(
        <>
      <div className="chat-box-d">
        <div className="rec-text-d1">
            <ul>
                <li>
                    <p> Lorem ipsum dollar site.. </p>
                </li>

                <li>
                    <p> Lorem ipsum dollar site.. </p>
                </li>

                <li>
                    <p> Lorem ipsum dollar site.. </p>
                </li>

                <li>
                    <p> Lorem ipsum dollar site.. </p>
                </li>
                <li>
                    <p> Lorem ipsum dollar site.. </p>
                </li>
                <li>
                    <p> Lorem ipsum dollar site.. </p>
                </li>

                <li>
                    <p> Lorem ipsum dollar site.. </p>
                </li>
                <li>
                    <p> Lorem ipsum dollar site.. </p>
                </li>
                <li>
                    <p> Lorem ipsum dollar site.. </p>
                </li>

            </ul>
        </div>

        <div className="rec-text-d2">
            <ul>
                <li>
                    <p> Hello world.. </p>
                </li>

                <li>
                    <p> Hello world.. </p>
                </li>
                <li>
                    <p> Hello world.. </p>
                </li>
                <li>
                    <p> Hello world.. </p>
                </li>
                <li>
                    <p> Hello world.. </p>
                </li>
                <li>
                    <p> Hello world.. </p>
                </li><li>
                    <p> Hello world.. </p>
                </li><li>
                    <p> Hello world.. </p>
                </li><li>
                    <p> Hello world.. </p>
                </li><li>
                    <p> Hello world.. </p>
                </li><li>
                    <p> Hello world.. </p>
                </li>
            </ul>
        </div>
        </div>
        </> 
    );
}

export default ChatText
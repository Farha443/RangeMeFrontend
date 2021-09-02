import React, {useEffect} from 'react';
import '../../../assets2/admin.css';
import Cookies from 'universal-cookie';
import { NavLink } from 'react-router-dom';
import $ from "jquery";  
import BASE_URL from '../../base';
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
    Row
  } from 'react-bootstrap';

const axios = require('axios');
const cookies = new Cookies();

let loc = window.location;
    let wsStart= 'wss://';
    if (loc.protocol==='https'){
        wsStart='wss://'
    }

function BidPlacing(){
    var product = document.getElementById('product').value;
    var quantity = document.getElementById('qty').value;
    var budget = document.getElementById('budget').value;
    var requirements = document.getElementById('rqs').value;
    var category = document.getElementById('department').value;
    var notifyurl = BASE_URL+'authentication/send_notifiaction/'
    var n_user = cookies.get("uuid")
    var notifyconfig = {
        method: 'post',
        url: notifyurl,
        data:{
            n_user : n_user,
            product : product,
            quantity :quantity,
            budget : budget,
            notification : requirements,
            category:category,
          }
      };
      // var ws = new WebSocket(wsStart+'tayuss.com/test/')
      var ws = new WebSocket('ws://localhost:8000/test/')
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
       window.location = '/bidding';
      }
      ).catch(err=>{
        console.error(err);
      })
  }



class Bidding extends React.Component {
    handleKeypress = (event) => {
      if(event.key === 'Enter'){
        // Func();
      }
      
    }

    state = {
        data: [],
      };
      
    
    async componentDidMount(){
      // debugger
        var url = BASE_URL+'authentication/GetCategorysignup/';
        var config = {
            method: 'get',
            url: url,
      
          };
          axios(config)

      .then(res => {
        // debugger
        console.log(res.data.data);
        this.setState({
          data: res.data.data
          
        })
        
        
      })
      .catch(err => {
        $(".laoder").hide(); 
        alert(err);
      })
       
    }

    render(){

var token = cookies.get('logintoken');
if (token === undefined){
  window.location="/login"
}
    return(
      
        <>
  <div class="laoder"> <img src="assets/images/ZZ5H.gif" alt="image" /></div>

<div className="layout__layout___2Opq_">

        <div className="signup-layout__layout___39T41">
          <div className="signup-layout__header___IeCtN">
          
            <a href="/" className="header-bar__logo">
              {/* <img src="assets/images/Logo.png"> */}
              <h1> Tayuss </h1>
            </a>
            <h1 className="wrappers__wrapper___1B_Ho signup-layout__heading___1SCdF"><span className="text__text___2g-Dv text__xl-heading___59enD text__display-block___1CZnH">Place you bids Here:-</span></h1>
            </div>
          <div className="grid-container__container___2ffxE">
            <div className="signup-layout__main___ofSWU">
              {/* <form> */}
                <div className="side-by-side-above-mobile__container___3GNAI">
                  <div className="side-by-side-above-mobile__field___1u_TX">
                    <div className="validated-field__container___1zNgS">
                      <div className="input-with-floating-label__wrapper___368i9">
                        <input autoComplete="new-password" className="input-with-floating-label__input___SyB1U" data-tname="FirstNameInput" placeholder="Product" id="product" type="text"  />
                        <label className="input-with-floating-label__label___4HdSN"  htmlFor="firstName"><span className="text__text___2g-Dv text__micro-copy___3xkfL text__veto-baseline___3-Rqq">Product</span></label>
                      </div>
                    </div>
                  </div>
                  <div className="side-by-side-above-mobile__field___1u_TX">
                    <div className="validated-field__container___1zNgS">
                      <div className="input-with-floating-label__wrapper___368i9">
                        <input autoComplete="new-password" className="input-with-floating-label__input___SyB1U" data-tname="LastNameInput" id="qty" placeholder="Quantity " type="text"  />
                        <label className="input-with-floating-label__label___4HdSN" htmlFor="lastName"><span className="text__text___2g-Dv text__micro-copy___3xkfL text__veto-baseline___3-Rqq">Quantity</span></label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="validated-field__container___1zNgS">
                  <div className="input-with-floating-label__wrapper___368i9">
                    <input autoComplete="new-password" className="input-with-floating-label__input___SyB1U" data-tname="EmailInput" id="budget" placeholder="Budget " type="text" />
                    <label className="input-with-floating-label__label___4HdSN" htmlFor="email"><span className="text__text___2g-Dv text__micro-copy___3xkfL text__veto-baseline___3-Rqq">Budget</span></label>
                  </div>
                </div>
                <Col md="12">  
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label> Select the Department(s) that best describes your industry. </Form.Label>
                    <Form.Control as="select" id="department">
                    {this.state.data.map(cat=>(  
                    <option value={cat.uuid}>{cat.name}</option>))}
                    </Form.Control>
                </Form.Group>
                </Col>
  
                
                <div className="validated-field__container___1zNgS">
                  <div className="input-with-floating-label__wrapper___368i9">
                    <textarea rows="5" cols="40"  placeholder="Enter your Requirements" id="rqs" />
                    <label className="input-with-floating-label__label___4HdSN" htmlFor="number"><span className="text__text___2g-Dv text__micro-copy___3xkfL text__veto-baseline___3-Rqq">Requirements</span></label>
                  </div>
                </div>
                
                
                <button onClick={BidPlacing} className="button__button___2LnOX signup-layout__button___1rN0b button__primary___3hlTY" type="submit" ><span className>Place Bid</span></button>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>

        </>
    );
}
}

export default Bidding
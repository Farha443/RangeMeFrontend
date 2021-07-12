import React from 'react';
import '../../../assets2/admin.css';
import AdminNavbar from '../AdminNavbar'
import $ from "jquery";  
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
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';
import BASE_URL from '../../base';


const axios = require('axios');
const cookies = new Cookies();
var userTypeTitle=cookies.get('userType');


  class CompanyStepOne extends React.Component{
  
   
    state = {
        data: [],
        message1: "message"
    
      };
    constructor(props){
        super(props);
        const year = (new Date()).getFullYear()-50;
        this.years = Array.from(new Array(80),(val, index) => index + year);
      }
      
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



  

    async Submit(){
        $(".laoder").show(); 
        var year_founded = document.getElementById('year').value;
        var annual_revenue = document.getElementById('revenue').value;
        // var array = []
        // var department = document.querySelector('#department');
        // for (var i = 0; i < department.length; i++) {
        //     array.push(department[i].value)
        // }
        const selected = document.querySelectorAll('#department option:checked');
        var array = Array.from(selected).map(el => el.value);
        var busiess_type = document.getElementById('buss_type').value;
        var brand_name = document.getElementById('brand_name').value;
        var comp_location = document.getElementById('city').value;
        var url = BASE_URL + "authentication/createsupplier/";
        var token = cookies.get('token');
        var uuid = cookies.get('uuid');
        var userType = cookies.get('userType');
    var config = {
        method: 'post',
        url: url,
        headers: {
          "Authorization": "Bearer " + token,
        },
        data:{
            user_s : uuid,
            year_founded : year_founded,
            annual_revenue: annual_revenue,
            department: array,
            busiess_type: busiess_type,
            brand_name: brand_name,
            comp_location:comp_location,

          }
    
      };
      console.log(config)
      axios(config).then(res=>{
          console.log(res.data.data)
        cookies.set('uuid2', res.data.data.uuid, { path: '/' })
        // alert(cookies.set('uuid1', res.data.data.uuid, { path: '/' }))
        $(".laoder").hide(); 
        window.location = '/login'
      }
      
      ).catch(err=>{
        console.error(err);
        $(".laoder").hide(); 
      window.location = "/supplier_step_one";
      })
    }
    handleKeypress = (event) => {
      if(event.key === 'Enter'){
        this.Submit();
      }
    }
  render() {
   
   
    return(
        <>
        <div class="laoder"> <img src="assets/images/ZZ5H.gif" alt="image" /></div> 

        <section className="company-form-section">
                <Container fluid>
                    <Row className="justify">                
                        <Col md="6">
                            <Card>
                               <Card.Body>
                                    <div className="product-form-main">
                                        <div className="p-inside-title">
                                            <p> Step 1 of 3 </p>
                                            <h5> Tell us about your company </h5>
                                        </div>
                                        <div className="overview-form">
                                           <Row>
                                           <Col md="6">
                                            <Form.Group controlId="exampleForm.ControlSelect1" >
                                                <Form.Label>Year Founded</Form.Label>
                                                <Form.Control as="select" id="year">
                                                {/* <select> */}
                                                    
                                                    {this.years.map((year, index) => {
                                                            return <option key={`year${index}`} value={year}>{year}</option>
                                                        })
                                                        }
                                                        {/* </select> */}
                                                </Form.Control>
                                                {/* <select>
                                                    
                                                {this.years.map((year, index) => {
                                                        return <option key={`year${index}`} value={year}>{year}</option>
                                                    })
                                                    }
                                                    </select> */}
                                            </Form.Group>
                                            </Col>
                                            
                                            
                                            <Col md="6">
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label> Annual Gross Revenue </Form.Label>
                                                <Form.Control as="select" id="revenue">
                                                <option value="0M$-5M$">0M$-5M$</option>
                                                <option value="6M$-10M$">6M$-10M$</option>
                                                <option value="11M$-15M$">11M$-15M$</option>
                                                </Form.Control>
                                            </Form.Group>
                                            </Col>
                                            
                                            <Col md="12">
                                              
                                            {/* <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Specify States or regions </Form.Label>
                                                <Select
                                                // defaultValue={[colourOptions[2], colourOptions[3]]}
                                                isMulti
                                                name="colors"
                                                options=
                                                {this.state.data.map(cat=>(  
                                                  <option value={cat.uuid}>{cat.name}</option>))}
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                            />
                                            </Form.Group> */}
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label> Select the Department(s) that best describes your industry. </Form.Label>
                                                <Form.Control as="select" multiple="true" id="department">
                                                {this.state.data.map(cat=>(  
                                                <option value={cat.uuid}>{cat.name}</option>))}
                                                
                                                </Form.Control>
                                            </Form.Group>
                                            </Col>

                                            <Col md="12">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Which best describes your business type.</Form.Label>
                                                <Form.Control as="select" id="buss_type">
                                                <option value="manufacturer">Manufacturer</option>
                                                <option value="broker">Broker</option>
                                                <option value="reseller">Reseller</option>
                                                <option value="other">Other</option>
                                                </Form.Control>

                                            </Form.Group>

                                            </Col>


                                            <Col md="12">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Brand name</Form.Label>
                                                <Form.Control type="text"  id="brand_name"/>

                                            </Form.Group>

                                            </Col>

                                            <Col md="12">
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>In Which city is your company located.</Form.Label>
                                                <Form.Control type="text"  onKeyPress={this.handleKeypress} id="city"/>
                                            </Form.Group>
                                            </Col>

                                            <Col md="12">
                                                <div className="company-form-btn-main text-center">
                                                    <button class="admin-add-btn" onClick={() => this.Submit()}> <NavLink to="/company_form_two"> Continue</NavLink>  </button>
                                                </div>
                                            </Col>
                                           

                                           </Row>
                                            
                                        </div>

                                    </div>

                                </Card.Body>
                            </Card>

                        </Col>

                    </Row>
                </Container>
            </section>


        </> 
    );
}
}

export default CompanyStepOne
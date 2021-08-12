import React from 'react';
import '../../../assets2/admin.css';
import AdminNavbar from '../AdminNavbar'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector'
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
var value_tested = '';//global variable  
var country_value = ''
var region_value = ''

  class CompanyStepOne extends React.Component{
    
 
    constructor(props){
        super(props);
    
          this.state = {
            data: [],
          data2: [],
          message1: "message",
          country: '', 
          storage:'',
          region: '' ,
          
      
            // Note: think carefully before initializing
            // state based on props!
            someInitialValue: this.props.initialValue
            
          }

          this.ChangeSelect = this.ChangeSelect.bind(this);
          this.servicechnge = this.servicechnge.bind(this);
          this.selectCountry = this.selectCountry.bind(this);
          this.selectRegion = this.selectRegion.bind(this)
      }
      
      selectCountry (val) {
        this.setState({ country: val });
        country_value = val
        return country_value
      }
      selectRegion (val) {
        this.setState({ region: val });
        region_value = val
        return region_value
      }
     async servicechnge(f){
      var val = f.target.value
      await this.setState({ storage : val });
      value_tested = this.state.storage
      return value_tested
      }
      
    async componentDidMount(){
      // debugger
        var url = BASE_URL+'authentication/service-category/';
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

  
  async ChangeSelect(e){
    $('input:checked').prop('checked',false);
    var url1 = BASE_URL+'authentication/service-category/?uuid='+e.target.value;
    var config1 = {
            method: 'get',
            url: url1,
          };
    await axios(config1)
      .then(rr => {
        this.setState({
          data2: rr.data.data
        })
      }
      )
      .catch(err => {
        console.log(err);
      })
    }

      
      

    async Submit(){
   
        var array = []
        var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
        for (var i = 0; i < checkboxes.length; i++) {
            array.push(checkboxes[i].value)
        }
        // console.log(value_tested)
        // var service_area = value_tested


        if (value_tested === "true"){
          var service_area = country_value+"/"+region_value 
        }
        else{
          var service_area = value_tested
        }
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
          // service_area:service_area,
          service_category : array,
            
            

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
    var token = cookies.get('logintoken');
        if (token === undefined){
        window.location="/login"
        }
    const { country, region,dis_country } = this.state;
   
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
                                            <p> Step 2 of 3 </p>
                                            <h5> Tell us about your company </h5>
                                        </div>
                                        <div className="overview-form">
                                           <Row>
                                            <Col md="12">
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label> Servis Kategorisi </Form.Label>
                                                <Form.Control  onClick={this.ChangeSelect} as="select" id="department">
                                                {this.state.data.map(cat=>(  
                                                <option  value={cat.uuid}>{cat.categoryname}</option>
                                                ))}
                                                
                                                </Form.Control>
                                            </Form.Group>

                                            </Col>

                                            {/* <Col md="12">
                                             {(this.state.data2).length != 0   ?   <Form.Group controlId="formBasicEmail">
                                                <Form.Label>We Specialize in:</Form.Label>
                                           <Form.Control as="select" multiple="true" id="department">
                                                {this.state.data2.map(subcat=>(  
                                                <option value={subcat.uuid}>{subcat.categoryname}</option>))}
                                                
                                                </Form.Control> 
                                            </Form.Group>: ''}
                                            </Col> */}

                                              <Col md="12">
                                             {(this.state.data2).length != 0   ?   <Form.Group controlId="formBasicEmail">
                                                <Form.Label>We Specialize in:</Form.Label>
                                                <tbody className="text-left" >
                                {this.state.data2.map(contact => {
                                    return <tr>
                                    <td><label className="tabl-check"><input type="checkbox" value={contact.uuid}/></label></td>
                                    <td>{contact.categoryname ? contact.categoryname : "Unlisted"}</td>
                                    </tr>
                                })}
                                </tbody>
                                            </Form.Group>: ''}
                                            </Col>
                                            <Col md="12" className="" >
                                            {(this.state.data2).length != 0   ?    <div className="step-four-radio">
                                                        <div>
                                                        <label htmlFor="basic-url" className="lb">What areas can you service?</label>
                                                        </div>
                                                        <Form.Check inline label="National" onClick={this.servicechnge}  value="National" name="group10" type="radio" />
                                                        <Form.Check inline label="State" name="group10" type="radio"
                                                        onClick={this.servicechnge}  value="true" />
                                                        <Form.Check inline label="
                                                        Global" name="group10" type="radio" onClick={this.servicechnge} value="Global"/>
                                                    </div>:''}
                                                    {this.state.storage === "true" ?<div>
                                                    <CountryDropdown id="country" className="form-control"
                                                    value={country}
                                                    onChange={(val) => this.selectCountry(val)} />
                                                    </div> : ""}
                                                    {this.state.storage === "true" ? <div>
                                                    <RegionDropdown  id ="state" className = "form-control"
                                                    country={country}
                                                    value={region}
                                                    onChange={(val) => this.selectRegion(val)} />
                                                    </div>:""}
                                                </Col>
                                           
                                            <Col md="12">
                                                <div className="company-form-btn-main text-center">
                                                    <button class="admin-add-btn" onClick={this.Submit}> Continue </button>
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
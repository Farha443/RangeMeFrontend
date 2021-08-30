import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
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
    Row,
    InputGroup
} from 'react-bootstrap';
import moment from 'moment';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector'
import '../../assets2/admin.css';
import AdminNavbar from './AdminNavbar'
import { NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';
import BASE_URL from '../base';
import Select from 'react-select';
import $ from "jquery"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import context from 'react-bootstrap/esm/AccordionContext';
const axios = require('axios');
const cookies = new Cookies();

var uuid =cookies.get('productuuid');
class Distribution extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            country:'',
            state1:[],
            disCountry:'',
            data: [],
            data1:[], 
            country: [], 
            region: '' ,
            dis_country : '',
            product_dis:'',
            isActive: 'false',
            storage:'',
            storage1:'',
            drop_ship:'',
            private_label : '',
            productAvailable: '',
            value: 'coconut',
            already:[],
            options: [],
            data2:[],
            productname:[],
            p_details:[]
            }

            this.storageChange = this.storageChange.bind(this);
            this.storage1 = this.storage1.bind(this);
            this.productAvailable = this.productAvailable.bind(this);
            this.product_dis = this.product_dis.bind(this);
            this.private_label = this.private_label.bind(this);
            this.drop_ship = this.drop_ship.bind(this)
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChange1 = this.handleChange1.bind(this);
            this.handleSubmit1 = this.handleSubmit1.bind(this);
      }
      storageChange(e){
        this.setState({ storage : e.target.value });
      }

      storage1(e){
        this.setState({ storage1 : e.target.value });
      }

      productAvailable(f){
          this.setState({ productAvailable : f.target.value })
      }

      selectCountry (val) {
        this.setState({ country: val });
      }

      drop_ship(e){
          this.setState({ drop_ship : e.target.value})
      }

      private_label(e){
        this.setState({ private_label : e.target.value})
      }

      DistributionCountry (val1) {

        this.setState({ dis_country: val1 });
      }

      product_dis(e){
        this.setState({ product_dis : e.target.value });
      }
    
      selectRegion (val) {
        this.setState({ region: val });
      }

      handleChange(date) {
        this.setState({
          startDate: date
        })
      }
    
      handleSubmit(e) {
        e.preventDefault();
        let main = this.state.startDate
        console.log(main.format('L'));
      }
      handleChange1(event) {
        var id = event.target.value;
        if(this.state.already.includes(id)){
          alert('Already selected');
        }
        else{
          this.state.already.push(id);
          this.setState({value: event.target.value});
          console.log({value: event.target.value})
        }
      }
      removeId(id){
        // alert(id)
        for( var i = 0; i < this.state.already.length; i++){ 
    
          if ( this.state.already[i] === id) { 
      
            this.state.already.splice(i, 1);
            this.setState({already:this.state.already}) 
          } 
      }
      }

      handleSubmit1(event) {
        event.preventDefault();
      }
      async componentDidMount(){
        var url = BASE_URL+'product/getsellPlatform/';
        var url1 = BASE_URL + 'product/get_distributors/';
        var url2 = BASE_URL+'product/get_pdis'+ "/"+cookies.get('productuuid');
        
// ----------- get selling platforms----------// 
        var config = {
            method: 'get',
            url: url,
        };
          axios(config)
      .then(res => {
        this.setState({
            options: res.data.data
        });
 
      })
      .catch(err => {
        alert(err);
      })
      axios.get(BASE_URL +'product/ProductDetailView/'+cookies.get("productuuid")+'/').then(res=>{
        this.setState({productname:res.data.data})
        
    }).catch(err=>{
        console.log(err)            
    })
    
    axios.get(BASE_URL +'product/get_pdetails/'+cookies.get("productuuid")).then(re=>{
        // debugger
        this.setState({p_details:re.data.data})
    }).catch(err=>{
        console.log(err)            
    })

    //----------- get distributors ----------//    
      var config1 = {
        method: 'get',
        url: url1,
    };
      axios(config1)
    .then(res => {
        this.setState({
        data1: res.data.data
        });
    })
    .catch(err => {
        alert(err);
    })

// ---------- get product distrbution------------//
    var config2 = {
        method: 'get',
        url: url2,
    };
    axios(config2)
    .then(res => {
    this.setState({
    data2: res.data.data,
    country:res.data.data.country,
    state1:res.data.data.state,
    disCountry:res.data.data.distribution_location,
    });
    console.log("------pd distribution-----")
    console.log(res.data.data);
    // console.log("----------state-"+ this.state.state1)
    })
    .catch(err => {
    alert(err);
    })
    }

    async Submit(){
        // $(".laoder").show()
        var country = this.state.country;
        var state = this.state.region;
        const selected = document.querySelectorAll('#distributors option:checked');
        var distributors = Array.from(selected).map(el => el.value);
        var selling_Platform =this.state.already;
        var array = []
        var checkboxes = document.querySelectorAll(' input#all_stores:checked')
        for (var i = 0; i < checkboxes.length; i++) {
            array.push(checkboxes[i].value)
        }

        var array1 = []
        var checkboxes1 = document.querySelectorAll('input[type=number]')
        for (var i = 0; i < checkboxes1.length; i++) {
           array1.push(checkboxes1[i].value)
        }
  
        var finalarray=[];
        finalarray.push(selling_Platform)
        finalarray.push(array)
        finalarray.push(array1)
        console.clear()
        console.log(finalarray)
        var drop_ship = this.state.drop_ship;
        var product_availability,
            element = document.getElementById('product_availability');
            if (element != null) {
                product_availability = element.value;
            }
            else {
                product_availability = null;
            }
        var distribution_location = this.state.dis_country;
        // var global_distribution = document.querySelector('.vehicle1 input[type=checkbox]:checked')
        // var global_distribution =  document.querySelector('#vehicle1:checked').value;

        var check = document.querySelector('#vehicle1:checked');
        if (check != null) {
            var global_distribution = check.value;
        }
        else {
           var global_distribution = null;
        }
        var private_label = this.state.private_label;
        var storage_required = this.state.storage1
        var url2 = BASE_URL+ 'product/create_product_distribution/';
        var uuid = cookies.get('sup_uuid');
        var userType = cookies.get('user_type');
        var product = cookies.get('productuuid');

    var config = {
        method: 'post',
        url: url2,
        data:{
            productName : product,
            country : country,
            state: state,
            distributors: distributors,
            // selling_Platform: finalarray,
            drop_ship : drop_ship,
            // allStorescheck: array,
            // noOfstores : array1,
            product_availability:product_availability,
            distribution_location:distribution_location,
            global_distribution:global_distribution,
            private_label:private_label,
            storage_required:storage_required,
          }
    
      };
      
      await axios(config)
      .then(res=>{
    
          console.log('-----------------------')
          console.log(res.data.data)
        // $(".laoder").hide(); 
        window.location = '/marketing'
      }
      
      ).catch(err=>{
        alert(err);
        // $(".laoder").hide(); 
        window.location.reload();
      })
    }


    async Edit(){
        // $(".laoder").show()
        var country = this.state.country;
        var state = this.state.region;
        const selected = document.querySelectorAll('#distributors option:checked');
        var distributors = Array.from(selected).map(el => el.value);
        var selling_Platform =this.state.already;
        var array = []
        var checkboxes = document.querySelectorAll(' input#all_stores:checked')
        for (var i = 0; i < checkboxes.length; i++) {
            array.push(checkboxes[i].value)
        }

        var array1 = []
        var checkboxes1 = document.querySelectorAll('input[type=number]')
        for (var i = 0; i < checkboxes1.length; i++) {
           array1.push(checkboxes1[i].value)
        }
  
        var finalarray=[];
        finalarray.push(selling_Platform)
        finalarray.push(array)
        finalarray.push(array1)
        console.clear()
        console.log(finalarray)
        var drop_ship = this.state.drop_ship;
        var product_availability,
            element = document.getElementById('product_availability');
            if (element != null) {
                product_availability = element.value;
            }
            else {
                product_availability = null;
            }
        var distribution_location = this.state.dis_country;

        var check = document.querySelector('#vehicle1:checked');
        if (check != null) {
            var global_distribution = check.value;
        }
        else {
           var global_distribution = null;
        }
        var private_label = this.state.private_label;
        var storage_required = this.state.storage1
        var url2 = BASE_URL+ 'product/create_product_distribution/';
        var uuid = cookies.get('sup_uuid');
        var userType = cookies.get('user_type');
        var product = cookies.get('productuuid');

    var config = {
        method: 'patch',
        url: url2,
        data:{
            productName : product,
            country : country,
            state: state,
            distributors: distributors,
            // selling_Platform: finalarray,
            drop_ship : drop_ship,
            // allStorescheck: array,
            // noOfstores : array1,
            product_availability:product_availability,
            distribution_location:distribution_location,
            global_distribution:global_distribution,
            private_label:private_label,
            storage_required:storage_required,
          }
    
      };
      
      await axios(config)
      .then(res=>{
    
          console.log('-----------------------')
          console.log(res.data.data)
        // $(".laoder").hide(); 
        window.location = '/marketing'
      }
      
      ).catch(err=>{
        alert(err);
        // $(".laoder").hide(); 
        window.location.reload();
      })
    }

    Redirect(uuid){
        window.location='/preview/'+uuid;
    }

    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive });
      };
    

    render() {
        var token = cookies.get('logintoken');
        if (token === undefined){
        window.location="/login"
        }
        const { country, region,dis_country } = this.state;
        const isActive = this.state.isActive;
    return (
        <>
            <AdminNavbar />

            <section className="product-header-section">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="p-header-main">

                                <div className="p-header-left">
                                    <div className="p-title">
                                        <h4>{this.state.productname.product_name?this.state.productname.product_name:cookies.get('product_name')}</h4>
                                        <span> Ürün </span>
                                    </div>
                                </div>

                                <div className="p-header-right">
                                    <div className="p-right-content">
                                        <div className="p-icn-01">
                                            <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                            {/* <span> All changes saved </span> */}
                                        </div>

                                        <div className="p-icn-02">
                                            <button className="pre-btn" onClick={() => this.Redirect(uuid)} > Ürünü Görüntüle</button>
                                            {this.state.productname.approved_product=== true? 
                                                                        <button class="btn btn-success">Admin Approved </button>:
                                                                        this.state.productname.approved_product=== false ?<button class="btn btn-danger" >Not Approved </button>:""}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="product-form-section">
                <Container fluid>
                    <Row className="justify">
                        <Col md="3">
                        <aside>
                                <div className="admin-sidebar-main">
                                    <ul>
                                        <li>
                                            <NavLink to="/product_form"
                                            inactiveClassName="text-gray-800"
                                            >
                                                <img src="assets/images/list-searching-variant.png" />
                                                <div className="sidebar-title">Ürüne Genel Bakış </div>
                                                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/products_detail"
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/detail.png" />
                                                <div className="sidebar-title"> Ürün Açıklaması</div>
                                                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/distribution"
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/moving-truck.png" />
                                                <div className="sidebar-title"> Ürün dağıtımı
</div>
                                                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/marketing"  
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/megaphone.png" />
                                                <div className="sidebar-title"> Ürün Pazarlaması </div>
                                                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </Col>
                        <Col md="6">

                            <Card>

                                <Card.Body>
                                    <div className="product-form-main">

                                        <div className="p-inside-title">
                                            <h5>Ürün dağıtımı</h5>
                                        </div>

                                        <div className="overview-form">

                                           <Row>

                                           <Col md="12">
                                           <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Ürün hangi ülke ve şehirde üretiliyor ?</Form.Label>
                                                
                                                <CountryDropdown id="country" 
                                                className="form-control"
                                                    value={country}
                                                    defaultOptionLabel="Ülke Seçiniz"
                                                    defaultValue={this.state.country}
                                                    onChange={(val) => this.selectCountry(val)} />
                                                   
                                        </Form.Group>                                
                                            </Col>

                                            <Col md="12">
                                           <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Ürününüz hangi eyalette üretiliyor?</Form.Label>
                                                
                                                <RegionDropdown  id ="state" className = "form-control"
                                                    country={this.state.country}
                                                    value={region}
                                                    defaultOptionLabel=" Şehir Seçiniz"
                                                    defaultValue={this.state.state1}
                                                    onChange={(val) => this.selectRegion(val)} />
                                                    </Form.Group>
                                            
                                            </Col>

                                            {/* <Col md="12" className="" >
                                                <div className="step-four-radio">
                                                <div>
                                                <label htmlFor="basic-url" className="lb">Is this product available now? </label>
                                                </div>
                                                <Form.Check inline label="yes" name="group2" type="radio" value="true" onClick={this.productAvailable}  />
                                                <Form.Check inline label="No" name="group2" type="radio" value="false" onClick={this.productAvailable}  />
                                                </div>
                                                {this.state.productAvailable === "true" ?<Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Where is the product currently sold? </Form.Label>
                                                <select className="form-control" value={this.state.value} onChange={this.handleChange1} onClick={this.appendData}>
                                                    <option value={0}>Select</option>
                                                    {this.state.options.map(opt=>{
                                                        //  if(!this.state.already.includes(opt.id)){
                                                        
                                                        return <option value={opt.uuid}>{opt.name}</option>
                                                        //  }
                                                    })}
                                                </select>
                                                    <div id="ddc">
                                                    {this.state.options.map(op=>{
                                                    if(this.state.already.includes(op.uuid)){
                                                    return <div class="div-app-main" id={op.uuid} > 
                                                    <div class="ap-div-first-cont-m"> 
                                                    <div class="d-item-1"> 
                                                    <p> {op.name} </p> 
                                                    </div>
                                                    <div class="all-store">  
                                                    <label> <input id="all_stores"type="checkbox"/> All Store </label>  
                                                    <span id={op.uuid} ><input type="number" class="form-control"  id="no_of_stores"/></span> 
                                                    
                                                     </div> 
                                                    </div> <button onClick={()=>this.removeId(op.uuid)} > X </button>  </div>
                                                    }
                                                })}
                                                    </div> */}
                                                {/* <Form.Control as="select" multiple="true" id="selling_Platform">
                                                {this.state.data.map(sell=>(  
                                                <option value={sell.uuid}>{sell.name}</option>))}
                                                
                                                </Form.Control> */}
                                            {/* </Form.Group>: ""}
                                            {this.state.productAvailable === "false" ? <input class="form-control" id="product_availability" defaultValue={this.state.data2.product_availability}
                                            type="date"></input>:""} */}
                                            {/* </Col> */}

                                            <Col md="12" className="" >
                                                <div className="step-four-radio">
                                                <div>
                                                <label htmlFor="basic-url" className="lb"> Ürüne distribütör-bayi aracılık ediyor mu? </label>
                                                </div>
                                                <Form.Check inline label="Evet" name="group7" type="radio" value="true" onClick={this.product_dis}  />
                                                <Form.Check inline label="Hayır" name="group7" type="radio" value="false" onClick={this.product_dis}  />
                                                </div>
                                                {this.state.product_dis === "true" ?<Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Hangi Distribütör ye da Bayiler? </Form.Label>
                                                <Form.Control as="select" multiple="true" id="distributors">
                                                {this.state.data1.map(dis=>(  
                                                <option value={dis.uuid}>{dis.name}</option>))}
                                                
                                                </Form.Control>
                                            </Form.Group>:""}
                                            </Col>


                                           </Row>

                                            <Row> 

                                            <Col md="12">
                                           <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Ürün tedarik alanı nedir?</Form.Label>
                                                
                                                <CountryDropdown  id = "distribution_location" className={isActive ? "form-control " : "form-control inp-disable    "}
                                                    value={dis_country}
                                                    defaultOptionLabel="Ülke Seçiniz"
                                                    defaultValue={this.state.disCountry}
                                                    onChange={(val1) => this.DistributionCountry(val1)} />
                                                    <label>Yukarıdaki listeden ülke seçin, tüm ülkelere ticaretiniz varsa aşağıdaki seçimi işaretleyin.</label>
                                                    <div className="validated-field__container___1zNgS">
                                                <div className="checkbox-large__wrapper___2i1Pl signup-layout__terms-and-conditions___1mfPt">
                                                    <div className="checkbox-large__inner-wrapper___3jgqh" data-tname="TermsAndConditionsCheckbox">
                                                    <input onClick={this.handleToggle} onKeyPress={this.GlobalCheck} type="checkbox" id="vehicle1" name="vehicle1" className="sign-check" />
                                                    <span className="text__text___2g-Dv text__small-copy___bgT96 checkbox-large__label___1i8a0" data-tname="CheckboxLargeLabel"><span className="signup-layout__terms-and-conditions-label___csiGB">
                                                    Tüm ülkelere tedarik edebiliyoruz.</span></span>
                                                    </div>
                                                </div>
                                                </div>
                                        </Form.Group>                                
                                            </Col>
                                            
                                            </Row>

                                            <Row> 
                                                     
                                            <Col md="12" className="" >
                                                    <div className="step-four-radio">
                                                        <div>
                                                        <label htmlFor="basic-url" className="lb">Bu ürünü drop-shipping yoluyla satıyor musunuz? </label>
                                                        </div>
                                                        {this.state.data2.drop_ship === true ?
                                                       <Form.Check inline label="Evet" name="group9" type="radio" value="true" defaultChecked onClick={this.drop_ship}  />: <Form.Check inline label="Evet" name="group9" type="radio" value="true"  onClick={this.drop_ship}  />}

                                                        {this.state.data2.drop_ship === false || this.state.data2.drop_ship === null ? <Form.Check inline label="Hayır" name="group9" type="radio" value="false" defaultChecked onClick={this.drop_ship}  /> : <Form.Check inline label="Hayır" name="group9" type="radio" value="false" onClick={this.drop_ship}  /> }
                                                        
                                                        
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row> 
                                                     
                                                <Col md="12" className="" >
                                                    <div className="step-four-radio">
                                                        <div>
                                                        <label htmlFor="basic-url" className="lb">Bu Ürün Private Label için uygun mu? </label>
                                                        </div>
                                                        {this.state.data2.private_label === true ?
                                                        <Form.Check inline label="Evet" name="group10" type="radio" value="true" defaultChecked onClick={this.private_label}  />:
                                                        <Form.Check inline label="Evet" name="group10" type="radio" value="true" onClick={this.private_label}  />}
                                                         {this.state.data2.private_label === null || this.state.data2.private_label === false ?
                                                        <Form.Check inline label="Hayır" name="group10" type="radio" value="false" defaultChecked onClick={this.private_label}  />:
                                                        <Form.Check inline label="Hayır" name="group10" type="radio" value="false" onClick={this.private_label}  />}

                                                    </div>
                                                </Col>
         
                                                <Col md="12" className="" >
                                                    <div className="step-four-radio">
                                                        <div>
                                                        <label htmlFor="basic-url" className="lb"> Bu ürün soğuk-zincir taşıması gerektiriyor mu? </label>
                                                        </div>
                                                        {this.state.data2.storage_required === "Refrigerated" || this.state.data2.storage_required === "Frozen" ?
                                                        <Form.Check inline label="Evet" name="group3" type="radio" defaultChecked value="true" onClick={this.storageChange}/>: <Form.Check inline label="Evet" name="group3" type="radio" value="true" onClick={this.storageChange}/>}
                                                        {this.state.data2.storage_required === "" ?
                                                        <Form.Check inline label="Hayır" name="group3" type="radio" value="false" defaultChecked onClick={this.storageChange}  />:<Form.Check inline label="Hayır" name="group3" type="radio" value="false" onClick={this.storageChange}  />}

                                                    </div>
                                                   {this.state.storage === "true" || this.state.data2!== null ?<div className="step-four-radio">
                                                        <div>
                                                        <label htmlFor="basic-url" className="lb">Ne tür bir depolama gereklidir?</label>
                                                        </div>
                                                        {this.state.data2.storage_required === "Refrigerated" ?
                                                        <Form.Check inline label="Refrigerated" name="group6" type="radio" defaultChecked value="Refrigerated" onClick={this.storage1}  />:<Form.Check inline label="Refrigerated" name="group6" type="radio"  value="Refrigerated" onClick={this.storage1}  />
                                                        }
                                                         {this.state.data2.storage_required === "Frozen" ?<Form.Check inline label="Frozen" defaultChecked name="group6" type="radio" value="Frozen" onClick={this.storage1}  />:
                                                        <Form.Check inline label="Frozen" name="group6" type="radio" value="Frozen" onClick={this.storage1}  />}
                                                    </div>:""}
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>

                                </Card.Body>
                            </Card>



                            <Col md="12" className="text-center mt-4 two-btn-main">
                            <button class="admin-add-btn"> <NavLink to="/products_detail">  Önceki Sayfa</NavLink>    </button>
                            {this.state.data2.length === 0  ? 
                                 <button class="admin-add-btn"> <NavLink to="" onClick={() => this.Submit()}> Sonraki Sayfa </NavLink>  </button>:
                                 <button class="admin-add-btn"> <NavLink to="" onClick={() => this.Edit()}> Güncelle ve Sonraki </NavLink>  </button>}
                            </Col>

                        </Col>


                        <Col md="3">
                            <div className="right-bar-main">
                                <div className="right-cont-img-d">
                                    {/* <img src="assets/images/blog1.jpg" /> */}
                                    <img src={BASE_URL.slice(0,-5)+this.state.p_details.image} />
                                </div>      
                                <div className="prod-info-text">
                                    <h5>{cookies.get('brand_name')} </h5>
                                    <h6> {this.state.productname.product_name} </h6>
                                </div>
                                <div className="pro-margin">
                                <span> {this.state.p_details.cost} Ürün fiyatı</span>
                                    <span> 33.00%  Margin </span>
                                </div>
{/* 
                                <div className="prod-help">
                                    <button className="prev-prod-btn"> <i class="fa fa-eye" aria-hidden="true"></i> Preview Product Profile </button>
                                    <p> We will help guide you along the process. <NavLink to=""> Need Help </NavLink> </p>
                                </div> */}

                            </div>
                        </Col>


                    </Row>
                </Container>
            </section>



        </>
    );
}
}

export default Distribution
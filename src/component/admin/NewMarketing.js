import React,{useState,useEffect} from 'react';
import '../../assets2/admin.css';
import AdminNavbar from './AdminNavbar'
import { NavLink } from 'react-router-dom';
import ImageUploader from 'react-images-upload';
import $ from 'jquery';

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

import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import context from 'react-bootstrap/esm/AccordionContext';
// import ImageUploader from 'react-images-upload';

import Cookies from 'universal-cookie';
import BASE_URL from '../base';
const cookies = new Cookies();

const axios = require('axios');

var Product_Name = cookies.get("product_name");
class Marketing extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        image:null,
        market:[],
        budget:[],
        pictures:[],};
        this.onDrop = this.onDrop.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
}


componentDidMount(){
    var url1 = BASE_URL+'product/get_pmarket/'+ cookies.get('productuuid');

    axios.get(url1).then(res=>{
        this.setState({market:res.data.data})
        console.log("------ mrketing-----")
        console.log(res.data.data)
     }).catch(err=>{
         console.log(err)            
     })

}
save(){
    // debugger
    var product_marketing = cookies.get("product_uuid")


    const selected = document.querySelectorAll('#promotional_budget option:checked');
    var array = Array.from(selected).map(el => el.value);

    var promotional_budget = array[0]
    // var product_images =  this.state.market.product_images ? (this.state.market.product_images.pictureFiles)[0] : "";
    var product_images = document.getElementById('id').files[0];
    var product_videos = document.getElementById('product_videos').value;

    var url = BASE_URL+"product/product_marketing/";
    
    var token = cookies.get("token")

    var data= new FormData();
    data.append('product_marketing', product_marketing);
    data.append('promotional_budget', promotional_budget);
    data.append('product_images', product_images);
    data.append('product_videos', product_videos);
    
// ------- post product marketing ------------//
    var config = {
        method: 'post',
        url: url,
        headers: {
            'content-type': `multipart/form-data; boundary=${data._boundary}`,
            "Authorization": "Bearer" + token,
          },
        data:data
    }

    axios(config)
    .then(res=>{
        window.location = "admin_home"
    }).catch(err=>{
    })
}
Edit(){
    var product_marketing = cookies.get("product_uuid")


    const selected = document.querySelectorAll('#promotional_budget option:checked');
    var array = Array.from(selected).map(el => el.value);

    var promotional_budget = array[0]
    // var product_images =  this.state.image!=null ? (this.state.image.pictureFiles)[0] : "";
    var product_images = document.getElementById('id').files[0];
    var product_videos = document.getElementById('product_videos').value;

    var url = BASE_URL+"product/product_marketing/";
    
    var token = cookies.get("token")

    var data= new FormData();
    data.append('product_marketing', product_marketing);
    data.append('promotional_budget', promotional_budget);
    data.append('product_images', product_images);
    data.append('product_videos', product_videos);
    
// ------- Edit product marketing ------------//
    var config = {
        method: 'patch',
        url: url,
        headers: {
            'content-type': `multipart/form-data; boundary=${data._boundary}`,
            "Authorization": "Bearer" + token,
          },
        data:data
    }

    axios(config)
    .then(res=>{
        window.location = "/marketing"
    }).catch(err=>{
    })
}
handleChange(v) {
    this.setState({ budget: v.target.value });
}

handleChange2(event) {
    var reader = new FileReader();
    reader.onload = function(){
        var output = document.getElementById('output');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}
    onDrop(pictureFiles, pictureDataURLs) {
        this.setState({
            pictures: pictureFiles
            
        });
    }

    render(){
        return(

            <>
            <AdminNavbar />

            <section className="product-header-section">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="p-header-main">

                                <div className="p-header-left">
                                    <div className="p-title">
                                        <h4>{Product_Name} </h4> <span> Product </span>
                                    </div>
                                </div>

                                <div className="p-header-right">
                                    <div className="p-right-content">
                                        <div className="p-icn-01">
                                            <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                            <span> All changes saved </span>
                                        </div>

                                        <div className="p-icn-02">
                                            <button className="pre-btn"> Preview </button>
                                            <button className="appro-btn"> Submit Approval </button>
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
                                                <div className="sidebar-title"> Product Overview  </div>
                                                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/products_detail"
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/detail.png" />
                                                <div className="sidebar-title"> Product Details  </div>
                                                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/distribution"
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/moving-truck.png" />
                                                <div className="sidebar-title"> Distribution  </div>
                                                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/marketing"  
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/megaphone.png" />
                                                <div className="sidebar-title"> Marketing </div>
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
                                            <h5>Marketing </h5>
                                        </div>

                                        <div className="overview-form">
                                           <Row>
                                           <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Promotional budget</Form.Label>
                                                <Form.Control as="select" id="promotional_budget" value={this.state.market.promotional_budget} onChange={e => this.handleChange(e)} className=""  >
                                               <option value="Zero">Zero</option>
                                                    <option value="$25k - $50k">$25k - $50k</option>
                                                    <option value="$50k - $200k">$50k - $200k</option>
                                                                
                                                    </Form.Control>

                                            </Form.Group>

                                            </Col>

                                            <Col md="6" >
                                            <Form.Label>Product Image</Form.Label>
                                               {/* <img src={BASE_URL.slice(0,-5)+ market.product_images} /> */}
                                                {/* <ImageUploader
                                                        id="id"
                                                        withIcon={false}
                                                        buttonText='Add Image'
                                                        onChange={onDrop}
                                                        imgExtension={['.jpg', '.gif', '.png', '.gif','jpeg']}
                                                        maxFileSize={5242880}
                                                        withPreview={true}
                                                /> */}
                                                <div className="change-img-maind">
                                            {this.state.market.product_images ?   
                                            <div className="pic-1101">
                                                <img id="output" src={BASE_URL.slice(0,-5)+ this.state.market.product_images} width="180px" height="120px" />
                                            
                                                </div>
                                                : <img className="" id="output" width="180px" height="120px" src=""/>}
                                                <div className="pic202">
                                                
                                                <input  type="file" id="id" onChange={this.handleChange2} placeholder="Change"/>
                                            
                                            </div>

                                        </div>
                                            </Col>
                                            <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                               
                                            <Form.Label>Product video URL </Form.Label>
                                            <Form.Control id="product_videos" defaultValue={this.state.market.product_videos} type="text" placeholder="Enter URL" />

                                                {/* <button className="admin-add-btn" type="button" onClick={() => handleAdd()}>Add Video</button>
                                                <div class="input-group-m" id="inputDiv">

                                                
                                                </div> */}
                                                  
                                                    {/* </Form.Control> */}

                                            </Form.Group>

                                            </Col>
                            
                                    
                                            <Col md="12" className="text-center">
                                            {this.state.market.length === 0 ? 
                                            <button class="admin-add-btn" onClick={this.save}>   Save Changes  </button>:<button class="admin-add-btn" onClick={this.Edit}>Update Changes</button>}
                                            </Col>
                                           </Row>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col md="3">
                            <div className="right-bar-main">
                                <div className="right-cont-img-d">
                                    <img src="assets/images/blog1.jpg" />
                                </div>      
                                <div className="prod-info-text">
                                    <h5> Brand Name </h5>
                                    <h6> product </h6>
                                </div>
                                <div className="pro-margin">
                                    <span> 10$ Cost/item </span>
                                    <span> 33.00%  Margin </span>
                                </div>

                                <div className="prod-help">
                                    <button className="prev-prod-btn"> <i class="fa fa-eye" aria-hidden="true"></i> Preview Product Profile </button>
                                    <p> We will help guide you along the process. <NavLink to=""> Need Help </NavLink> </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>

        )
    }
};

export default Marketing;
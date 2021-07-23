import React, { useState, useEffect,useMemo } from 'react';
import '../../assets2/admin.css';

import countryList from 'react-select-country-list'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

// import AdminNavbar from '../AdminNavbar'
import ImageUploader from 'react-images-upload';
// import BrandLogoHome from '../BrandLogoHome';
import ServiceComLogo from './ServiceComLogo';
import GalleryPhotoUpload from './GalleryPhotoUpload';
import InputColor from 'react-input-color';
import Select from 'react-select';
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
  Modal,
  InputGroup,
  Row,
  Tab
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
// import useState from 'react-hook-use-state';
import ServiceNavbar from './ServiceNavbar';
import BASE_URL from '../base';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const axios = require('axios');

const colourOptions=[
    { value: 'Red', label: 'Red' },
    { value: 'Black', label: 'Black' },
    { value: 'Blue', label: 'Blue' },
    { value: 'Green', label: 'Green' },
]


var pictures = {}
var ll = ''
var addstate = ''
// var val='';
var childcategoryuuid =''
function ServiceProfile(){
    const [show2, setShow2] = useState(false);
    
    
    const [show3, setShow3] = useState(false);
    const [ProfileData, setProfileData] = useState([]);
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [color, setColor] = React.useState([]);
    const [isActive, setActive] = useState("false");
    const [user_pic, setUser_pic] = useState([]);
    const [video_link, setVideo_link] = useState('');
    const [CategoryData, setCategoryData] = useState([]);
    const [SubCategoryData, setSubCategoryData] = useState([]);
    const [storage, setStorage] = useState('');
    const [defaultCategoryData, setDefaultCategoryData] = useState([]);
    const [promotionData, setPromotionData] = useState([]);
    
    // var company_logo = cookies.set("comapnyLogo",ProfileData.company_logo,"/service-dashboard")
    useEffect(() => {
        var url6 = BASE_URL+'authentication/promotion/';
        var url = BASE_URL+'authentication/createserprovider/';
        var url1 = BASE_URL+'authentication/service-category/' ;
        var config1 = {
            method: 'get',
            url: url1,
      
          };

          var config6 = {
            method: 'get',
            url: url6,
      
          };
          axios(config6).then(res=>{
            // debugger
            // console.log(promotionData)
            console.log(res.data)
            if(res.data[0] === undefined){
                setPromotionData([])
            }
            else{
                setPromotionData(res.data[0])
            }
          }).catch(err=>{
              console.log(err)            
          })

        var config = {
          url:url,
          method:'get',
          headers:{
            Authorization: "Bearer " + cookies.get('logintoken'),
            "Content-Type": "application/json",   
        }
      }
          axios(config).then(res=>{

              console.log(res.data.data[0])

              setProfileData(res.data.data[0])
              cookies.set('companyProfile', res.data.data[0].company_logo, { path: '/service-dashboard' }); 
              
            //   *************************************
            
            // debugger
            var url1 = BASE_URL+'authentication/get-default-category/?childcategoryuuid='+res.data.data[0].s_category[0] ;
            var config1 = {
                method: 'get',
                url: url1,
              };
              axios(config1).then(res=>{
            //   debugger
              setDefaultCategoryData(res.data.data)
              console.log("-------subcategoy-------")
              console.log(res.data.data)
            }).catch(err=>{
                console.log(err)            
            })
          
            
            // **********************************

              setColor(res.data.data[0].brandcolor)
            // debugger
            
            console.log(res.data.data[0])
          }).catch(err=>{
              console.log(err)            
          })
      
      
          axios(config1).then(res=>{
            
        //   debugger
          setCategoryData(res.data.data)
          console.log(res.data.data)
        }).catch(err=>{
            console.log(err)            
        })

        
        
      
        },{})




   const selectCountry  = val => {
        setCountry(val );
      }
    
     const selectRegion  = val =>{
        setRegion(val );
        
      }
    

    function EditPromotion(){
        // debugger
        var uuid = promotionData.uuid
        const selected = document.querySelectorAll('#promotion_type option:checked');
        var type_of_promotion = Array.from(selected).map(el => el.value);
        var amount = document.getElementById("promotion_amount").value;
        var description = document.getElementById("promotion_description").value;
        var url5 = BASE_URL+'authentication/promotion/' + uuid + "/";

        var data = {
                "description":description,
                "amount":amount,
                "amount_type":type_of_promotion[0],
                "promotion_user":cookies.get("uuid")

            }
        
        var config5 = {
                method: 'put',
                url: url5,
                data:data
              };
        axios(config5)
          .then(pro => {
            // alert("success")
            
            window.location = "/service-company-profile"
            setShow5(false)
            
          }
          )
          .catch(err => {
            console.log(err);
          })
        

    }

    function DeletePromotion(){
        var uuid = promotionData.uuid
        var url7 = BASE_URL+'authentication/promotion/'+uuid +"/";
        var config7 = {
            method: 'delete',
            url: url7,
           
          };
       
        axios(config7)
        .then(pr => {
          // alert("success")
          
          window.location = "/service-company-profile"
          setShow5(false)
          
        }
        )
        .catch(err => {
          console.log(err);
        })

    }


    function CreatePromotion(){
        // debugger
        const selected = document.querySelectorAll('#promotion_type option:checked');
        var type_of_promotion = Array.from(selected).map(el => el.value);
        var amount = document.getElementById("promotion_amount").value;
        var description = document.getElementById("promotion_description").value;
        var url5 = BASE_URL+'authentication/promotion/';

        var data = {
                "description":description,
                "amount":amount,
                "amount_type":type_of_promotion[0],
                "promotion_user":cookies.get("uuid")

            }
        
        var config5 = {
                method: 'post',
                url: url5,
                data:data
              };
        axios(config5)
          .then(pro => {
            // alert("success")
            setPromotionData(pro.data)
            setShow3(false)
            
          }
          )
          .catch(err => {
            console.log(err);
          })
    }



    function ChangeSelect(e){
        $('input:checked').prop('checked',false);
        // debugger
        var url4 = BASE_URL+'authentication/service-category/?uuid='+e.target.value;
        var config1 = {
                method: 'get',
                url: url4,
              };
    axios(config1)
          .then(rr => {
            setSubCategoryData(rr.data.data)
          }
          )
          .catch(err => {
            console.log(err);
          })
    }

    const servicechnge  = val =>{ 
    //    debugger
       console.log(storage)
        setStorage(val.target.value)
        console.log(storage)
    }

   function handleChange(event) {
        
        var reader = new FileReader();
        reader.onload = function(){
            var output = document.getElementById('output');
            output.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);    
        
    }


    function chhosePhotos(pictureFiles){
        // debugger
        pictures = {}
        for (let i = 0; i < pictureFiles.length; i++) {
            pictures[i] = pictureFiles[i]
          }
    }

    function setLink(){
       
        
        ll = document.getElementById('video_link').value;
        setShow2(false)
        
    }


    function SaveSection1(){
        
        var brandcolor = color.hex;
        var company_name = document.getElementById('company-name').value; 
        var website_url = document.getElementById('website-url').value; 
        var company_logo = document.getElementById('user_pic').files[0] ? document.getElementById('user_pic').files[0] : '';
        var short_des = document.getElementById('short_des').value;
        var full_des = document.getElementById('full_des').value;
        var array22 = []
        var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
        for (var i = 0; i < checkboxes.length; i++) {
            array22.push(checkboxes[i].value)
        }
       
        if (storage === "true"){
          var service_area = country+"/"+region 
        }
        else{
          var service_area = storage
        }

        var url = BASE_URL +'authentication/createserprovider/'
        // debugger
        var video_link = ll;
        var data = new FormData();
        $.each(pictures, function(index, value) {
           
            var index = value;
            data.append("index",index)
          });

        data.append('brandcolor', brandcolor);
        data.append('company_name', company_name);
        data.append('website_url', website_url);
        data.append('company_logo', company_logo);
        data.append('short_des', short_des);
        data.append('full_des', full_des);
        data.append('video_link', video_link);
        data.append("service_area",service_area);
        data.append("s_category",array22);
        var token = cookies.get('logintoken');
            var config = {
                method: 'patch',
                url: url,
                headers: {
                    'content-type': `multipart/form-data; boundary=${data._boundary}`,
                    "Authorization": "Bearer " + token,
                  },
                data:data,
            };
            console.log(config)
         axios(config)
         .then(res=>{
                console.log(res.data.data)
                alert("success")
                window.location = '/service-dashboard'
            }
            
            ).catch(err=>{
                console.error(err);
            window.location = "/service-company-profile";
            })

    }


      
    return(
        
        <>
            <ServiceNavbar/>

           
            <div className="admin-container">
            <div className="row">

            <div className="rgm-left-content col-md-9">

                <section className="service-pro-title-sction">
                    <Row>
                        <Col md="12" xs="12">
                            <div className="service-p-title">
                                <h5> Edit your profile </h5>
                            </div>
                        </Col>
                    </Row>
                </section>

                <section className="serv-com-details-section">
                    <Row>
                        <Col md="12">
                        <Card>

                <Card.Body>
                    <div className="product-form-main">

                        <div className="p-inside-title">
                            <h5> Company Details </h5>

                        </div>

                        <div className="overview-form">
                        <Row>
                            <Col md="12">    
                            
                            <div className="change-img-maind">
                            <h6>Company Logo</h6>
                                            {user_pic ?   
                                            <div className="pic-1101">
                                                
                                                <img  id="output" src={BASE_URL.slice(0,-5)+ ProfileData.company_logo} width="180px" height="120px" />
                                                </div>
                                                : <img className="" id="output" width="180px" height="120px" src=""/>}
                                                <div className="pic202">
                                            </div>
                                        </div>
                                <div>
                                <label for="user_pic" class="btn btn-primary">Choose Picture</label>
                                <input style={{display:'none'}} type="file"  id="user_pic" onChange={handleChange} placeholder="Change"/>
                                </div>


                            </Col>

                                <Col md="6">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Company Name</Form.Label>
                                        <Form.Control id="company-name"type="text" placeholder="dddd" defaultValue={ProfileData.company_name} />

                                    </Form.Group>

                                    </Col>

                                    <Col md="6">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Website URL</Form.Label>
                                        <Form.Control id="website-url" defaultValue={ProfileData.website} placeholder="ffff@gmail.com" type="Email" />

                                    </Form.Group>

                                    </Col>

                                    <Col md="6" xs="12">
                                        <div className="color-pick-inp-m">
                                        <Form.Label> Brand Color</Form.Label>
                                       
                                         <div className="color-pic-div"
                                          
                                          style={{
                                            backgroundColor: ProfileData.brandcolor
                                            }}
                                        />
                                        <input defaultValue={ProfileData.brandcolor}>
                                        </input>
                                        
                                         
                                        {/* <Form.Label>Chnage Color</Form.Label> */}
                                       
                                        </div>
                                        <h6>Choose Color</h6>
                                        <InputColor
                                            id="brandcolor"
                                            initialValue="#38B5E6"
                                            onChange={setColor}
                                            placement="right"
                                        />
                                    </Col>
                                    

                                  
                                </Row>
                                    
                                </div>

                            </div>

                        </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </section>

                <section className="serv-com-details-section-2">
                    <Row>
                        <Col md="12">
                        <Card>

                <Card.Body>
                    <div className="product-form-main">

                        <div className="p-inside-title">
                            <h5>  About </h5>

                        </div>

                        <div className="overview-form">

                        <Row>

                                <Col md="12">
                                    <Form.Group className="abt-tet125" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Short description</Form.Label>
                                        <p> Provide a short introduction to your company that will be at the top of your profile and visible in your profile preview.
</p>
                                        <Form.Control defaultValue={ProfileData.short_des} id="short_des" as="textarea" rows={3} />
                                    </Form.Group>
                                 </Col>

                                 <Col md="12">
                                    <Form.Group className="abt-tet125" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Full description</Form.Label>
                                        <p> Share details about your company and what you specialize in. </p>
                                        <Form.Control defaultValue={ProfileData.full_des} id="full_des" as="textarea" rows={5} />
                                    </Form.Group>
                                 </Col>

                               

                                </Row>
                                    
                                </div>

                            </div>

                        </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </section>

              
                <section className="serv-com-details-section-2">
                    <Row>
                        <Col md="12">
                        <Card>

                <Card.Body>
                    <div className="product-form-main">

                        <div className="p-inside-title">
                            <h5>  Gallery(Option) </h5>

                        </div>

                        <div className="overview-form">

                        <Row>

                                <Col md="6">
                                <div className="gallery-choose-inp">
               
                <ImageUploader
                withIcon={false}
                buttonText='Choose Logo'
                onChange={chhosePhotos}
                imgExtension={['.jpg', '.gif', '.png', '.gif', 'jpeg']}
                maxFileSize={5242880}
                withPreview="true"
    />
            </div>
                                 </Col>

                                 <Col md="6">
                                    <div className="embed-link-d">
                                        <button className="border-btn" onClick={() => setShow2(true)}>
                                            Embed video link
                                        </button>
                                    </div>
                                 </Col>

                                </Row>
                                    
                                </div>

                            </div>

                        </Card.Body>
                        </Card>
                        </Col>
                        
                    </Row>
                </section>
                  
                <section className="serv-com-details-section-2">
                    <Row>
                        <Col md="12">
                        <Card>

                <Card.Body>
                    <div className="product-form-main">

                        <div className="p-inside-title">
                            <h5> Promotion  </h5>

                        </div>

                        <div className="overview-form">

                    <Row>
                            <Col xs={12} md={12} className="m-auto">
                             
                                <Form.Label>Offer a promotion to attract more views and incentivize customers.</Form.Label>      
                              <br></br>{promotionData.length === 0 ? <InputGroup.Text class="btn btn-success"  onClick={() => setShow3(true)}>Add Promotion</InputGroup.Text>:''}
                               
                               
                              {promotionData.length !== 0  ? <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                       {promotionData.amount_type === "percent" ? <InputGroup.Text>{promotionData.amount}% off</InputGroup.Text>:<InputGroup.Text>${promotionData.amount} off</InputGroup.Text>}
                                      
                                    </InputGroup.Prepend>
                                   
                                    <FormControl
                                    defaultValue={promotionData.description}
                                    placeholder="Recipient's username"
                                    aria-label="Amount (to the nearest dollar)"
                                    />
                                    <InputGroup.Append>
                                    <InputGroup.Text className="curs" onClick={() => setShow5(true)}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></InputGroup.Text>
                                    <InputGroup.Text className="curs" onClick={() => setShow4(true)}><i class="fa fa-trash-o" aria-hidden="true"></i></InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>:''}
                            </Col>

                        </Row>
                                    
                                </div>

                            </div>

                        </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </section>
                
                <section className="serv-com-details-section-2">
                    <Row>
                        <Col md="12">
                        <Card>

                <Card.Body>
                    <div className="product-form-main">

                        <div className="p-inside-title">
                            <h5> Services  </h5>
                        </div>

                        <div>your selected catetory
                            <div>


                            <h5>Category : {defaultCategoryData.category_name}</h5>
                            <br></br><h6>Sub_Category : {defaultCategoryData.sub_category_name}</h6>
                            
                            </div>
                            
                        </div>
                        <div className="overview-form">

                        <Row>
                            <Col xs={12} md={12} className="m-auto">
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Select your service category</Form.Label>
                                    <Form.Control onClick={ChangeSelect} as="select" id="department">
                                                {CategoryData.map(cat=>(  
                                                <option  value={cat.uuid}>{cat.categoryname}</option>
                                                ))}
                                                
                                                </Form.Control>
                                </Form.Group>
                            </Col>




                            {(SubCategoryData).length != 0 ?   <Col md="12 mb-2" >
                            <p style={{marginTop: "0px"}}> We specialize in: </p>
                        </Col>:""}
                        {(SubCategoryData).length != 0 ?  <Col md={6}>
                            {SubCategoryData.map(contact => {
                             return<div className="check-b-main-586">
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" value={contact.uuid} label={contact.categoryname ? contact.categoryname : "Unlisted"} />
                                    </Form.Group>
                                </div> })}
                               
                            </Col>:""}

                           
                        </Row>


                        <Row>
                        {(SubCategoryData).length != 0 ?  <Col md="12" className="">
                                <div className="step-four-radio">
                                <div>
                                <label htmlFor="basic-url" className="lb">Is this product available now? </label>
                                </div>
                                <Form.Check inline label="National" onClick={servicechnge}  value="National" name="group10" type="radio" />
                                <Form.Check inline label="State" name="group10" type="radio" onClick={servicechnge}  value="true" />
                                <Form.Check inline label="Global" name="group10" type="radio" onClick={servicechnge} value="Global"/>
                               
                                </div> 
                            </Col>:""}
                            
                    <Col md="12">

                         {storage === "true" ?  <div>
                            <CountryDropdown
                            value={country}
                            onChange={(val) => selectCountry(val)} />
                            <RegionDropdown
                            country={country}
                            value={region}
                            onChange={(val) => selectRegion(val)} />
                        </div>:""}
                            </Col>

                            <Col md="12" className="text-center">
                                <button class="admin-add-btn" onClick={SaveSection1}>   Save Changes  </button>
                                </Col>

                        </Row>
                                    
                                </div>

                            </div>

                        </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </section>


            </div>


             {/* right sidebar div start  */}

            {/* <div className="col-md-3">
                <div className="rgm-right-bar serv-p-side-left">

                    <div className="serv-comp-leftbar">
                        <img src="assets/images/brand-logo.jpg" />
                    </div> 

                    <div className="serv-comp-title">
                        <h5> Company Name  </h5>
                    </div>

                    <div className="p-text-45878">
                        <span className="span-1"> Preview :</span>
                        <span className="span-2">
                            <NavLink to=""> Profile </NavLink>
                            <NavLink to=""> search Listing </NavLink>
                        </span>
                    </div>

                    <div className="serv-com-btn-m">
                        <button className="admin-add-btn"> Complete Profile </button>
                    </div>

                    <div className="p-text-45878 text-center">
                        <p> <i class="fa fa-check-circle-o" aria-hidden="true"></i> All changes saved </p>
                        <span className="span-1"> Profile status :</span>
                        <span className="span-2 " style={{fontSize: '14px', marginLeft: '0.5rem'}}>
                        Unpublished
                        </span>
                    </div>

                
                </div>
         
            </div> */}

                </div>
            </div>

            <Modal
                size="lg"
                centered
                show={show3}
                onHide={() => setShow3(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    <h5 style={{ marginBottom: '0px' }}>Promotion </h5>
                    
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col md={12} className="text-center">
                            <p style={{margin: '0px'}}> Offer a promotion to get more visibility and attract customers.
                        Promotions are only available to Premium and Pro suppliers </p>
                            </Col>
                        </Row>

                        <Row>
                            
                            <Col xs={12} md={6} className="m-auto">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Type of promotion</Form.Label>
                                <Form.Control id="promotion_type" defaultValue={promotionData.amount_type ? promotionData.amount_type : ''} as="select">
                                   
                                <option value="percent" >%Discount</option>
                                <option value="doller">$ Discount</option>
                                
                                </Form.Control>
                            </Form.Group>
                               
                            </Col>

                            <Col xs={12} md={6} className="m-auto">
                            <Form.Group controlId="formBasicEmail"> 
                                <Form.Label>Amount</Form.Label>      
                                    <Form.Control id="promotion_amount" defaultValue={promotionData.amount ? promotionData.amount : '' } type="number" min="0" max="99" placeholder=""/>
                                </Form.Group>
                            </Col>


                            <Col xs={12} md={12} className="m-auto">
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label style={{marginTop: '0.5rem'}}>Description (optional)</Form.Label>
                                    <Form.Control id="promotion_description" defaultValue={promotionData.description ? promotionData.description : ''}  as="textarea" rows={3} />
                                </Form.Group>
                            </Col>

                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className="col-md-12 text-center">
                        <button class="admin-add-btn " onClick={CreatePromotion}> Save promotion </button>
                    </div>
                </Modal.Footer>
            </Modal>


            {/* ****************************************** */}
            <Modal
                size="lg"
                centered
                show={show5}
                onHide={() => setShow5(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    <h5 style={{ marginBottom: '0px' }}>Promotion </h5>
                    
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col md={12} className="text-center">
                            <p style={{margin: '0px'}}> Offer a promotion to get more visibility and attract customers.
                        Promotions are only available to Premium and Pro suppliers </p>
                            </Col>
                        </Row>

                        <Row>
                            
                            <Col xs={12} md={6} className="m-auto">
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Type of promotion</Form.Label>
                                <Form.Control id="promotion_type" defaultValue={promotionData.amount_type ? promotionData.amount_type : ''} as="select">
                                   
                                <option value="percent" >%Discount</option>
                                <option value="doller">$ Discount</option>
                                
                                </Form.Control>
                            </Form.Group>
                               
                            </Col>

                            <Col xs={12} md={6} className="m-auto">
                            <Form.Group controlId="formBasicEmail"> 
                                <Form.Label>Amount</Form.Label>      
                                    <Form.Control id="promotion_amount" defaultValue={promotionData.amount ? promotionData.amount : '' } type="number" min="0" max="99" placeholder=""/>
                                </Form.Group>
                            </Col>


                            <Col xs={12} md={12} className="m-auto">
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label style={{marginTop: '0.5rem'}}>Description (optional)</Form.Label>
                                    <Form.Control id="promotion_description" defaultValue={promotionData.description ? promotionData.description : ''}  as="textarea" rows={3} />
                                </Form.Group>
                            </Col>

                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className="col-md-12 text-center">
                        <button class="admin-add-btn " onClick={EditPromotion}> Save promotion </button>
                    </div>
                </Modal.Footer>
            </Modal>
            {/* *********************************************** */}



            <Modal
                size="md"
                centered
                show={show2}
                onHide={() => setShow2(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    <h5 style={{ marginBottom: '0px' }}> Embed a video </h5>
                    {/* <p> Start with adding your product’s name </p> */}
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col xs={12} md={10} className="m-auto">
                                <Form.Group controlId="formBasicEmail"> 
                                <Form.Label style={{margin: '0px'}}>Video URL</Form.Label>      
                                    <Form.Control type="url" id="video_link"  />
                                    <button class="admin-add-btn " onClick={() => setLink()} > Save Video  </button>
                                </Form.Group>
                            </Col>

                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className="col-md-12 text-center">
                       
                    </div>
                </Modal.Footer>
            </Modal>
            
            <Modal
                size="md"
                centered
                show={show4}
                onHide={() => setShow4(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    {/* <h5 style={{ marginBottom: '0px' }}> Edit a promotion </h5> */}
                    
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col md={12} className="text-center">
                                <h6 > Are you sure? </h6>
                            <p style={{margin: '0px'}}> You are about to permanently delete your promotion.
Promotions get you more visibility and attract customers. </p>
                            </Col>

                            <div className="col-md-12 mt-3 text-center">
                        <button class="btn btn-danger mr-3" onClick={DeletePromotion}> Delete</button>
                        <button class="border-btn ">Cancel</button>
                    </div>
                        </Row>

                        
                    </Container>
                </Modal.Body>
                {/* <Modal.Footer>
                   
                </Modal.Footer> */}
            </Modal>
       

        </> 
    );
}

export default ServiceProfile
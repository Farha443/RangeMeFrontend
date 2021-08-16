import React, {useEffect, userEffect, useState} from 'react';
import '../../assets2/admin.css';
import AdminNavbar from './AdminNavbar'
import Gallery from './Gallery'
import { NavLink } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
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
    Modal,
    Row,
    Table,
    DropdownButton,
    InputGroup,
    Dropdown,
} from 'react-bootstrap';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import context from 'react-bootstrap/esm/AccordionContext';
import CoverPhotoUploader from './CoverPhotoUploader';
import BrandLogo from './BrandLogo';
import axios from 'axios';
import Cookies from 'universal-cookie';
import BASE_URL from '../base';
import $ from "jquery"; 

const cookies = new Cookies();
var prox = ""
var proxuuid = ""
var prodname = ""

function Submit(){
    // $(".laoder").show(); 
    // debugger
    var brand_name = document.getElementById('brand_name').value;
    var brand_location = document.getElementById('brand_location').value;
    var year_founded = document.getElementById('year').value;
    var annual_revenue = document.getElementById('revenue').value;
    var url = BASE_URL + "authentication/createsupplier/";
    var token = cookies.get('logintoken');
    var uuid = cookies.get('sup_uuid');
    var product_uuid = cookies.get('productuuid')
    var userType = cookies.get('user_type');
var config = {
    method: 'post',
    url: url,
    headers: {
      "Authorization": "Bearer " + token,
    },
    data:{
        user_s : uuid,
        product_name : product_uuid,
        year_founded : year_founded,
        annual_revenue: annual_revenue,
        brand_name : brand_name,
        comp_location : brand_location,

      }

  };
  console.log(config)
  axios(config).then(res=>{
      console.log(res.data.data)
    cookies.set('uuid2', res.data.data.uuid, { path: '/' })
    // alert(cookies.set('uuid1', res.data.data.uuid, { path: '/' }))
    $(".laoder").hide(); 
    window.location = '/admin_home'
  }
  
  ).catch(err=>{
    console.error(err);
    $(".laoder").hide(); 
  window.location = "/brand-profile";
  })
}


function BrandProfile2() {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [showV, setShowV] = useState(false);
    const [showStory, setShowStory] = useState(false);

    const [isActive, setActive] = useState("false");
    const [isAct, setAct] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    };
    const handleToggleTwo = () => {
        setAct(!isAct);
      };
    
    const [details, setDetails]= useState([])
    const[brands, setBrands] = useState([])
    const [cover, setCover] = useState(false);
    const [logo, setLogo] = useState(false);
    const [show11, setShow11] = useState(false);
    const [filteredproduct, setFilteredProduct] = useState([]);

    const year = (new Date()).getFullYear()-50;
    const years = Array.from(new Array(80),(val, index) => index + year);

    var user_uuid = cookies.get("uuid")

    function onDrop(pictureFiles, pictureDataURLs) {
        // alert(pictureFiles)
        setCover({
            pictureFiles
        });
    }
    function onDrop1(pictureFiles, pictureDataURLs) {
        // alert(pictureFiles)
        setLogo({
            pictureFiles
        });
    }

    useEffect(() => {
        getBrands()
        axios.get(BASE_URL+'authentication/getsupplier/'+ user_uuid )
        .then(res=>{
            setBrands(res.data.data)
            console.log("------brands------")
            console.log(res.data.data)
        }).catch(err=>{
            // $(".laoder").hide();
            console.log(err)            
        })
             

    }
    ,[])


    function getBrands(query=null){
        if (query){
            var url = BASE_URL+'product/get_brands/'+ cookies.get("get_brand")+'/?search='+query    
        }
        else{    
        var url = BASE_URL+'product/get_brands/'+ cookies.get("get_brand")   
        }
        axios.get(url )
        .then(res=>{
            // setProducts(res.data.data.product)
            // debugger
            setDetails(res.data.data)
            console.log("-------------all Products-------------")
            console.log(res.data.data.product)
            console.log("-------detail--------")
            console.log(res.data.data.details)
        }).catch(err=>{
            // $(".laoder").hide();
            console.log(err)            
        })
    }

    function search(){
        // alert)
        
        var s = document.getElementById('search').value;
        getBrands(s)   
    }

    function DeleteProduct(id){
        var id = id
        var url = BASE_URL + 'product/delete_product/' + id;
        var config={
            method:'delete',
            url:url,
        };
        axios(config).then(res=>{
            console.log(res.data )
            // $(".laoder").hide();
            window.location = '/brand-profile'
          }
          ).catch(err=>{
            console.error(err);
            // $(".laoder").hide();
          window.location = "/brand-profile";
          })  
    }

    function SaveMoveBrand(){  
        // debugger
        var checked_brand = $("input[type='radio'][name='checked_brand']:checked").val();
        if(checked_brand === undefined){
            window.location = "/brand-profile"
        }
        var productuuid = proxuuid
        var url = BASE_URL + "product/move_brand/" + productuuid
        var config={
            method:'patch',
            data:{
                "p_user":checked_brand
            },
            url:url,
        };
        axios(config).then(res=>{
            console.log(res.data )
            window.location = '/brand-profile'
          }
          ).catch(err=>{
            console.error(err);
          window.location = "/brand-profile";
          })  


    }

    function CopyFunction(e){
        var url = BASE_URL + "product/copy_product/"+ e
        axios.post(url )
        .then(res=>{
            window.location = "/brand-profile"
        }).catch(err=>{
            console.log(err)            
        })
    }
    
    function MoveBrand(x,y){
        // debugger
        console.log(x,y)
        prox = y
        proxuuid = x
        setShow11(true)

    }

    function Redirect(uuid){
        cookies.set('productuuid',uuid,{path:'/'});
        window.location='/product_form/';
      }

    function AddProduct(){
        // debugger
        $(".laoder").show();
        var product_name = document.getElementById("addproduct").value;
        var brand = cookies.get('get_brand')
        var token = cookies.get("logintoken");
        var uuid = cookies.get('sup_uuid');
        var config= {
            method: 'post',
                url: BASE_URL + 'product/create_product/',
                data: {
                    p_user : brand,
                    product_name: product_name
                },
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json",
                }
        };
        axios(config).then(res=>{
            console.log(res.data )
            $(".laoder").hide();
            cookies.set('productuuid', res.data.data.uuid, { path: '/product_form' })
            window.location = '/product_form'
          }
          ).catch(err=>{
            console.error(err);
            $(".laoder").hide();
          window.location = "/brand-profile";
          })  
    }

    async function AddCover(){
       var brand_cover = cover ? (cover.pictureFiles)[0] : "";
       var uuid = cookies.get('get_brand')
       var data= new FormData();
       var url = BASE_URL+"authentication/createsupplier/"
       data.append('brand_cover', brand_cover);
       data.append('uuid',uuid)
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
      await axios(config)
         .then(res=>{
                console.log(res.data.data)
                // alert("success")
                //
                window.location = '/brand-profile'
                setShow(false)
            }
            
            ).catch(err=>{
                console.error(err);
            window.location = "/brand-profile";
            })
    }

    async function AddLogo(){
       var brand_logo = logo ? (logo.pictureFiles)[0] : "";
       var uuid = cookies.get('get_brand')
       var data= new FormData();
       var url = BASE_URL+"authentication/createsupplier/"
       data.append('brand_logo', brand_logo);
       data.append('uuid',uuid)
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
      await axios(config)
         .then(res=>{
                console.log(res.data.data)
                // alert("success")
                window.location = '/brand-profile'
            }
            
            ).catch(err=>{
                console.error(err);
            window.location = "/brand-profile";
            })
    }
   
    return (
        <>
            <AdminNavbar />

            <div className="b-cover-photo-supplier">

                <div className="clickable-cover-image__clickable-cover-image___Agsbi" data-tname="CoverImage">
                    <div className="cover-image__image-container___2tnKs">
                        {/* <img alt="Cover" className="cover-image__image___yE2oR" src={BASE_URL.slice(0,-5)+cookies.get('brand_cover')} /> */}
                        {brands.map(img=>(
                            img.uuid===cookies.get('get_brand')?
                        <img alt="Cover" className="cover-image__image___yE2oR" src={BASE_URL.slice(0,-5)+ img.brand_cover} />:""
                        ))}
                        
                    </div>
                    <div className="clickable-cover-image__container___1Y72X">
                        <button className="clickable-cover-image__change-image___JnYhU" type="button" onClick={() => setShow(true)}>
                            <div className="clickable-cover-image__change-image-hint___3NLUs">
                                <img alt="camera" className="clickable-cover-image__change-image-icon___1k392" src={BASE_URL.slice(0,-5)+cookies.get('brand_logo')}/>
                                <div className="clickable-cover-image__change-image-text___1kIxy">Change cover image</div>
                            </div>
                        </button>
                    </div>
                </div>

            </div>

            <section className="cover-p2-section">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="cover-md-01">
                                <div className="cover-md-left-cont">
                                    <div className="cover-circle-img-d">
                                    {brands.map(img=>(
                                      img.uuid===cookies.get('get_brand')?
                                        <img src={BASE_URL.slice(0,-5)+img.brand_logo} />:""))}
                                        <div className="prof-img-btn">
                                            <button className="clickable-cover-image__change-image___JnYhU" type="button" onClick={() => setShow3(true)}>
                                                <div className="clickable-cover-image__change-image-hint___3NLUs"><img alt="camera" className="clickable-cover-image__change-image-icon___1k392" src="" />
                                                    <div className="clickable-cover-image__change-image-text___1kIxy"></div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cover-brand-title">
                                        <h5>{cookies.get('brand_name')}</h5>
                                        {/* <p> Tage Line text.. </p> */}
                                    </div>
                                </div>
                                <div className="cover-md-right-cont">
                                    <ul>
                                        <li>
                                            <button class="border-btn"> <i class="fa fa-eye" aria-hidden="true"></i>  0  </button>
                                        </li>
                                        <li>
                                            <button class="border-btn">  <i class="fa fa-plus" aria-hidden="true"></i>  0  </button>
                                        </li>
                                        <li>
                                            <button class="admin-add-btn f-w-500"> <i class="fa fa-share-square" aria-hidden="true"></i> Share Profile  </button>
                                        </li>
                                        <li>
                                            <button class="border-btn" onClick={handleToggle}> <i class="fa fa-cog" aria-hidden="true"></i> </button>
                                           <div className={isActive ? "drop-d-101 " : "drop-d-101 open-drop"}>
                                               <ul>
                                                   <li> <NavLink to="/brand-profile">Merge brands </NavLink> </li>
                                                   <li> <NavLink to="/brand-profile">Preview brand page</NavLink> </li>
                                                   <li> <NavLink to="/brand-profile">Preview brand card </NavLink> </li>
                                               </ul>
                                           </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>



            <section className="cover-midd-cont-section">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="cover-tab-one-main">
                            <Col md="12">
                                            <Card>
                                                <Card.Body>
                                                    <div className="prod-num-r-btn mb-3">
                                                        
                                                        <button className="admin-add-btn f-w-500" onClick={() => setShow2(true)}><i class="fa fa-plus" aria-hidden="true"></i> Yeni ürün ekle </button>
                                                       
                                                    </div>

                                                    <div className="prod-search-filter-main">
                                                        <InputGroup>
                                                            <InputGroup.Prepend>
                                                                <Button variant="outline-dark"><i class="fa fa-search" aria-hidden="true" onClick={()=>search()}></i></Button>
                                                            </InputGroup.Prepend>
                                                                                                                                                            <FormControl
                                                                placeholder="Search by product name"
                                                                aria-label="Recipient's username"
                                                                id = "search"
                                                                
                                                                aria-describedby="basic-addon2"
                                                            />

                                                            <DropdownButton
                                                                as={InputGroup.Append} 
                                                                variant="outline-dark"
                                                                title="Product status"
                                                                id="input-group-dropdown-2"
                                                            >
                                                                <div className="filter-drop-main">
                                                                    <div className="step-four-radio noti-check">

                                                                        <Form.Group controlId="formBasicEmail">

                                                                            <Form.Check inline name="group1" type="checkbox" id="1" />
                                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Draft </label>
                                                                        </Form.Group>

                                                                        <Form.Group controlId="formBasicEmail">

                                                                            <Form.Check inline name="group1" type="checkbox" id="1" />
                                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Pending Approval </label>
                                                                        </Form.Group>

                                                                        <Form.Group controlId="formBasicEmail">

                                                                            <Form.Check inline name="group1" type="checkbox" id="1" />
                                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Published </label>
                                                                        </Form.Group>

                                                                        <Form.Group controlId="formBasicEmail">
                                                                            <Form.Check inline name="group1" type="checkbox" id="1" />
                                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Ready to submit update </label>
                                                                        </Form.Group>

                                                                        <Form.Group controlId="formBasicEmail">
                                                                            <Form.Check inline name="group1" type="checkbox" id="1" />
                                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Rejected </label>
                                                                        </Form.Group>

                                                                        <Form.Group controlId="formBasicEmail">
                                                                            <Form.Check inline name="group1" type="checkbox" id="1" />
                                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Update Rejected </label>
                                                                        </Form.Group>


                                                                        <div className="filter-drop-btn-main">
                                                                            <button className="border-btn"> Clear </button>

                                                                            <button className="admin-add-btn f-w-500"> Apply now </button>
                                                                        </div>



                                                                    </div>
                                                                </div>
                                                           
                                                            </DropdownButton>
                                                        </InputGroup>
                                                    </div>

                                                    <div className="pro-table-main">
                                                        <Table responsive="sm">
                                                            <thead>
                                                                <tr>

                                                                    <th>Product</th>
                                                                    <th>Product status</th>
                                                                    <th className="ac-right" >Action</th>

                                                                </tr>
                                                            </thead>

                                                            <tbody>{details.details ? details.details.map(pd=>(
                                                                <tr>
                                                                
                                                                    <td>
                                                                        <NavLink to="/product_form" className="p-img-a">
                                                                        
                                                                            <div className="tbl-prod-img">
                                                                                <img src={BASE_URL.slice(0,-5)+pd.image} />
                                                                            </div>
                                                                            
                                                               {pd.Product}
                                                               </NavLink>
                                                                    </td>
                                                                   
                                                                    <td> {pd.productStatus==true? 
                                                                        <button className="border-btn">Tamamlamak </button>: <button className="border-btn">Taşlak </button>}
                                                                        </td>
                                                                    <td className="pd-last-td">
                                                                    <button className="border-btn"  onClick={()=>CopyFunction(pd.pd_uuid)}>  Copy Product   </button>
                                                                        <button className="border-btn"> <NavLink to=""
                                                                        onClick={()=>Redirect(pd.pd_uuid)}> Edit </NavLink>  </button>
                                                                         <button className="border-btn"> <NavLink to="" onClick={()=>DeleteProduct(pd.pd_uuid)}> Delete </NavLink>  </button>
                                                                         <button className="border-btn" onClick={()=>MoveBrand(pd.pd_uuid,pd.Product)}>  Move To A Different Brand   </button>
                                                                        <button className="border-btn" onClick={handleToggleTwo}><i class="fa fa-ellipsis-v" aria-hidden="true"></i> </button>
                                                                        <div className={isAct ? "drop-d-101 " : "drop-d-101 open-drop"}> 
                                                                            <ul>
                                                                                <li> <NavLink to="/brand-profile">View product statistics 1 </NavLink> </li>
                                                                                <li> <NavLink to="/preview">Preview product 1</NavLink> </li>
                                                                                <li> <NavLink to="/brand-profile">Make a copy</NavLink> </li>
                                                                                <li> <NavLink to="/brand-profile"> Delete product</NavLink> </li>
                                                                               
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                
                                                                </tr>)) : ''}

                                                                {/* <tr> */}

                                                                    {/* <td>
                                                                        <NavLink to="/product_form" className="p-img-a">
                                                                            <div className="tbl-prod-img">   
                                                                                <img src="assets/images/blog2.jpeg" />
                                                                            </div>
                                                                            Headphone
                                                                        </NavLink>
                                                                    </td> */}
                                                                    {/* <td> <button details.className="border-btn"> Drafted </button> </td>
                                                                    <td className="pd-last-td">
                                                                        <button className="border-btn"> <NavLink to="/product_form"> Edit </NavLink> </button>
                                                                        <button className="border-btn"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> </button>
                                                                    </td> */}

                                                                {/* </tr> */}

                                                                {/* <tr> */}

                                                                    {/* <td>
                                                                        <NavLink to="/product_form" className="p-img-a">
                                                                            <div className="tbl-prod-img">
                                                                                <img src="assets/images/blog2.jpeg" />
                                                                            </div>
                                                          Headphone
                                                          </NavLink>
                                                                    </td> */}
                                                                    {/* <td> <button className="border-btn"> Drafted </button> </td>
                                                                    <td className="pd-last-td">
                                                                        <button className="border-btn"> <NavLink to="/product_form"> Edit </NavLink> </button>
                                                                        <button className="border-btn"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> </button>
                                                                    </td> */}

                                                                {/* </tr> */}

                                                            </tbody>
                                                        </Table>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                               

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


{/* Brand Logo uplod modal  */}
            <Modal
                size="lg"
                centered
                show={show3}
                onHide={() => setShow3(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Brand Logo
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col xs={12} md={12}>
                            <div className="profile-up-main brand-logo">
                            <div className="upload-imf-direction-text ">
                            <h6> Brand Logo </h6>
                            <p>Image must be at least 800 x 800px.
                                File formats JPG, PNG, GIF, JPEG.</p>
                            </div>
                            <ImageUploader
                            withIcon={true}
                            buttonText='Choose Profile'
                            onChange={onDrop1}
                            imgExtension={['.jpg', '.gif', '.png', '.gif','jpeg']}
                            maxFileSize={5242880}
                            withPreview="true"
                />
                        </div>
                              {/* <BrandLogo/> */}

                            </Col>

                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className="col-md-12 text-center">
                        <button class="admin-add-btn f-w-500" onClick={AddLogo}>  Save  </button>
                    </div>
                </Modal.Footer>
            </Modal>


{/* Cover photo uplod modal  */}
            <Modal
                size="lg"
                centered
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    Upload your cover image
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col xs={12} md={12}>
                            <div className="profile-up-main cover-photo">
                                <div className="upload-imf-direction-text ">
                                <h6> Upload Cover Photo </h6>
                                <p>Image must be at least 1600 x 400 px.
                                    File formats: JPG, PNG, GIF, jPEG</p>
                                </div>
                                <ImageUploader
                                withIcon={true}
                                buttonText='Choose Cover Photo'
                                onChange={onDrop}
                                imgExtension={['.jpg', '.gif', '.png', '.gif', 'jpeg']}
                                maxFileSize={5242880}
                                withPreview="true"
                    />
                            </div>
                                {/* <CoverPhotoUploader /> */}

                            </Col>

                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className="col-md-12 text-center">
                        <button class="admin-add-btn f-w-500" onClick={AddCover}>  Save  </button>
                    </div>
                </Modal.Footer>
            </Modal>


{/* add product modal */}
            <Modal
                size="lg"
                centered
                show={show2}
                onHide={() => setShow2(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    <h5 style={{ marginBottom: '0px' }}> Add product </h5>
                    {/* <p> Start with adding your product’s name </p> */}
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col xs={12} md={10} className="m-auto">
                         <div className="text-center mb-3">
                         <h5> Yeni ürün ekle </h5>  
                         <p style={{ marginTop: '0px' }}>Ürün İsmi Ekle  </p>
                         </div>
                            <Col xs={12} md={10} className="m-auto"> 
                                <Form.Group controlId="formBasicEmail">
                                
                                    <Form.Control id="addproduct" type="text" placeholder="e.g. Corn Flakes"/>

                                </Form.Group>
                            </Col>
                            </Col>

                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className="col-md-12 text-center">
                        <button className="admin-add-btn" onClick={AddProduct} >  Add product  </button>
                    </div>
                </Modal.Footer>
            </Modal>

            
{/* add new brand modal */}
            <Modal
        size="lg"
        // dialogClassName="modal-90w"
        show={show4}
        onHide={() => setShow4(false)}
        aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
            Add new brand
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Container>
                
                <Row>
                <Col xs={12} md={12}>
                
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label  style={{marginTop: '0px'}}>Brand Name</Form.Label>
                        <Form.Control type="text" id="brand_name" placeholder="abc" />

                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label  style={{marginTop: '0px'}}>Location</Form.Label>
                        <Form.Control type="text" id="brand_location" placeholder="abc" />

                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label  style={{marginTop: '0px'}}>Year founded</Form.Label>
                      <Form.Control as="select" id="year">
                      {years.map((year, index) => {
                            return <option key={`year${index}`} value={year}>{year}</option>
                        })
                        }
                      {/* <option>Select</option>
                      <option>brand 1</option>
                      <option>brand 2</option>
                      <option>brand 3</option>
                      <option>brand 3</option> */}
                      </Form.Control>
                  </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label  style={{marginTop: '0px'}}>Revenue</Form.Label>
                      <Form.Control as="select" id='revenue'>
                      <option value="0M$-5M$">0M$-5M$</option>
                      <option value="6M$-10M$">6M$-10M$</option>
                      <option value="11M$-15M$">11M$-15M$</option>
                      </Form.Control>
                    
                    {/* <p className="mt-2"> Buyers use this information to search for products </p> */}
                  </Form.Group>

                    
                </Col>
                {/* <Col xs={6} md={6}>
                .col-xs-6 .col-md-4
                </Col> */}
            </Row>
            </Container>
            </Modal.Body>
            <Modal.Footer>
                <div className="col-md-12 text-center">
                <button class="admin-add-btn f-w-500" onClick={Submit}>  <i class="fa fa-plus" aria-hidden="true"></i> Add Brand </button>
                </div>
            </Modal.Footer>
      </Modal>


{/* move a product modal */}
            <Modal
                size="lg"
                centered
                show={show11}
                onHide={() => setShow11(false)}
                aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    <h5 style={{ marginBottom: '0px' }}> </h5>
                    {prox}
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={12} md={10} className="m-auto">
                         <div className="text-center mb-3">
                         <h5>Choose a brand for this product</h5>  
                         
                         </div>
                            <Col xs={12} md={10} className="m-auto"> 
                            {brands.map(brand=>( 
                                <p>
                             {brand.brand_name}<img src={BASE_URL.slice(0,-5)+brand.brand_logo} width="70px" />
                             <input id="checked_brand" name="checked_brand" type="radio"  value={brand.uuid}/>  
                               </p>
                            ))}

                           

                            </Col>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className="col-md-12 text-center">
                        <button className="admin-add-btn" onClick={SaveMoveBrand} > Save </button>
                    </div>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default BrandProfile2
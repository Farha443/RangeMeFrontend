import React,{useState,useEffect} from 'react';
import '../../assets2/admin.css';
import AdminNavbar from './AdminNavbar'
import { NavLink } from 'react-router-dom';
// import useState from 'react-hook-use-state';
import InputTags from './InputTags';
import Cookies from 'universal-cookie';
import BASE_URL from '../base';
// import { TagInput } from 'reactjs-tag-input'
import ImageUploader from 'react-images-upload';
// import NutritionPic from './NutritionPic';
// import Pimage from './Pimage';

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
    DropdownButton,
    Dropdown,
    Modal,
    InputGroup
} from 'react-bootstrap';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import context from 'react-bootstrap/esm/AccordionContext';
import NutritionPic from './NutritionPic';
import Pimage from './Pimage';
const colourOptions=[
    { value: 'Red', label: 'Red' },
    { value: 'Black', label: 'Black' },
    { value: 'Blue', label: 'Blue' },
    { value: 'Green', label: 'Green' },
]

const axios = require('axios');
const cookies = new Cookies();



function ProductDetail() {
    const [show3, setShow3] = useState(false);
    const [packaging, setPackaging] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [nutritional, setNutritional] = useState('');
    const [selflife, setSelflife] = useState('');
    // const [selflife, setSelflife] = useState('');
    const [barcode, setBarcode] = useState('');
    const [proimage, setImage] = useState(false);
    const [proimage1, setImage1] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show, setShow] = useState(false);
    const [productname, setproductname]= useState({})
    
    useEffect(() => {
        axios.get(BASE_URL +'product/ProductDetailView/'+cookies.get("productuuid")+'/').then(res=>{
            setproductname(res.data.data)
            
        }).catch(err=>{
            console.log(err)            
        })
        // console.log(category)
    },[])
    cookies.set('Product_Name', productname, { path: '/' });

    function onDrop(pictureFiles, pictureDataURLs) {
        // alert(pictureFiles)
        setImage({
            pictureFiles
        });
    }

   



    function onDrop1(pictureFiles, pictureDataURLs) {
            // debugger
            setImage1({
                pictureFiles
            });
            
            
    }
   
  

    function productdetail() {

        
        var image =  proimage ? (proimage.pictureFiles)[0] : "";
        
        var Product = document.getElementById('productkiuuid').value;
        var variant_style_no =  document.getElementById('variant_style_no').value;


        var cost = document.getElementById('cost').value;
        var mrp = document.getElementById('mrp').value;
        var products_per_case =document.getElementById('products_per_case').value;
        var case_pricing = document.getElementById('case_pricing').value;
        var pricing_comments = document.getElementById('pricing_comments').value;


        const selected = document.querySelectorAll('#barcode_type option:checked');
        var array = Array.from(selected).map(el => el.value);
        var barcode_type = array[0]
        var barcode_disc = barcode_type ? document.getElementById('barcode_disc').value : "";


        const selected1 =  document.querySelectorAll('#product_dimension_type option:checked')
        var array = Array.from(selected1).map(el => el.value);
        var product_dimension_type = array[0]
        
        var product_d_width = product_dimension_type ? document.getElementById('product_d_width').value : ""
        var product_d_height = product_dimension_type ? document.getElementById('product_d_height').value : ""
        var product_d_depth = product_dimension_type ? document.getElementById('product_d_depth').value : ""

        const selected2 =  document.querySelectorAll('#product_volume_type option:checked')
        var array = Array.from(selected2).map(el => el.value);
        var product_volume_type = array[0]
        var product_volume = product_volume_type ? document.getElementById('product_volume').value: ''


        const selected3 =  document.querySelectorAll('#product_weight_type option:checked')
        var array = Array.from(selected3).map(el => el.value);
        var product_weight_type = array[0]
        var product_weight = product_weight_type ? document.getElementById('product_weight').value : ''

        const selected4 =  document.querySelectorAll('#product_size_type option:checked')
        var array = Array.from(selected4).map(el => el.value);
        var product_size_type = array[0]
        var product_size = product_size_type ? document.getElementById('product_size').value : ''


        // var product_packaging = document.getElementById('product_cost').value;
        const selected5 =  document.querySelectorAll('#life_type option:checked')
        var array = Array.from(selected5).map(el => el.value);
        var life_type = array[0]
        var life_disc = life_type ? document.getElementById('life_disc').value : ""
        
        // debugger
        if(selflife === "true"){
        var ingredients = document.getElementById('ingredients').value ? document.getElementById('ingredients').value : ''
        }
        else{
            var ingredients = ""
        }
        // var ingredients = document.getElementById('ingredients').value 
        // var nutritionl_label =  document.getElementById('nutritionl_label').value;
        var nutritionl_label  = proimage1 ? (proimage1.pictureFiles)[0] : ""
        var url = BASE_URL+"product/ProductDetail/"



        // {  
        //     data3:{ Product:Product,
        //      image:data1,
        //      variant_style_no:variant_style_no,
        //      cost:  cost,
        //      mrp: mrp,             
        //      products_per_case:products_per_case,
        //      case_pricing:case_pricing,
        //      pricing_comments:pricing_comments,
        //      barcode_type:barcode_type,
        //      barcode_disc:barcode_disc,
        //      life_type:life_type,
        //      life_disc:life_disc,
        //      ingredients:ingredients,
        //      nutritionl_label:data1,},
        //      data4:{

        //      product_dimension_type:product_dimension_type,
        //      product_d_width:product_d_width,
        //      product_d_height:product_d_height,
        //      product_d_depth:product_d_depth,

        //      product_volume_type:product_volume_type,
        //      product_volume:product_volume,

        //      product_weight_type:product_weight_type,
        //      product_weight:product_weight,

        //      product_size_type:product_size_type,
        //      product_size:product_size,}

        //      }
        
        var data= new FormData();
        data.append('image', image);
        data.append('Product', Product);
        data.append('variant_style_no', variant_style_no);
        data.append('cost', cost);
        data.append('mrp', mrp);
        data.append('products_per_case', products_per_case);
        data.append('case_pricing', case_pricing);
        data.append('pricing_comments', pricing_comments);
        data.append('barcode_type', barcode_type);
        data.append('barcode_disc', barcode_disc);
        data.append('life_type', life_type);
        data.append('life_disc', life_disc);
        data.append('ingredients', ingredients);
        data.append('nutritionl_label', nutritionl_label);
        data.append('product_dimension_type', product_dimension_type);
        data.append('product_d_width', product_d_width);
        data.append('product_d_height', product_d_height);
        data.append('product_d_depth', product_d_depth);
        data.append('product_volume_type', product_volume_type);
        data.append('product_volume', product_volume);
        data.append('product_weight_type', product_weight_type);
        data.append('product_weight', product_weight);
        data.append('product_size_type', product_size_type);
        data.append('product_size', product_size);

                
        var config = {
            method: 'post',
            url: url,
            headers: {
                'content-type': `multipart/form-data; boundary=${data._boundary}`,
                // "Authorization": "Bearer" + token,
              },
            data:data
        }
        
        axios(config)
        .then(res=>{
                  
                  if (res.data.message === "product detail is created"){
                    alert("product detail is created");
                  }
                  else if (res.data.message === "error...error..error"){
                    alert("product detail is not created");
                  }
                  
                  console.log(res.data.message)
               
                }).catch(err=>{
                  // alert(err)
                })
              
      }
    //   const image1 = (proimage1.pictureFiles)[0]
    return (
        // const image1 = {(proimage1.pictureFiles)[0]}
        <>
            <AdminNavbar />

            <section className="product-header-section">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="p-header-main">

                                <div className="p-header-left">
                                    <div className="p-title">
                                        <h4>  {productname.product_name } </h4> <span> Product </span>
                                    </div>
                                </div>

                                <div className="p-header-right">
                                    <div className="p-right-content">
                                        <div className="p-icn-01">
                                            <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                            <span> All changes saved </span>
                                        </div>

                                        <div className="p-icn-02">
                                            <button className="pre-btn"> <NavLink to="/preview"> <i class="fa fa-eye" aria-hidden="true"></i> Preview </NavLink>  </button>
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
                <Container>
                    <Row className="justify">
                    <Col md="3">
                            <aside>
                                <div className="admin-sidebar-main">
                                    <ul>
                                        <li>
                                            <NavLink to="/product_form"
                                            inactiveClassName="text-gray-800"
                                            >
                                                {/* <img src="assets/images/list-searching-variant.png" /> */}
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
                                    
                                            <h5>Product Details </h5>

                                        </div>

                                        <div className="overview-form">

                                           <Row>

                                   

                                           <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Product name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter email" disabled defaultValue={productname.product_name} id="product_name"/>
                                                <Form.Control type="hidden" placeholder="Enter email" defaultValue={productname.uuid} id="productkiuuid"/>
                                            </Form.Group>

                                            </Col>

                                            <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Variant SKU/Style number</Form.Label>
                                                <Form.Control type="text" placeholder="Enter number" id="variant_style_no"/>

                                            </Form.Group>

                                            </Col>

                                            <Col md="6" class="choose_pp">
                                            <Form.Label>Product Image</Form.Label>
                                                {/* <button className="admin-add-btn" onClick={() => setShow4(true)} >  <i class="fa fa-plus" aria-hidden="true"></i> Add Image</button> */}
                                                <ImageUploader
                                                        id="image_ki_id"
                                                        withIcon={false}
                                                        buttonText='Choose Image'
                                                        onChange={onDrop}
                                                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                                        maxFileSize={5242880}
                                                        withPreview={true}
                                                />
                                            </Col>
                            
                                    

                                

                                           
                                           </Row>
                                            
                                        </div>

                                    </div>

                                </Card.Body>
                            </Card>

                            <Card className="mt-4">

                                <Card.Body>
                                <div className="product-form-main">

                                    <div className="p-inside-title">
                                        <h5>PRODUCT PRICING </h5>

                                    </div>

                                    <div className="overview-form">

                                        <Row>

                                        <Col md="6">
                                        <label htmlFor="basic-url" className="lb">Cost
                                            <p>  (Suggested cost to the retailer) </p>
                                        </label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1">US Dollar</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl
                                                type="number"
                                                placeholder="10.00"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                id="cost"
                                                />
                                            </InputGroup>

                                        </Col>


                                        <Col md="6">
                                            <label htmlFor="basic-url" className="lb">MSRP
                                                <p>   (Suggested selling price for retailers) </p>
                                            </label>
                                            <InputGroup className="mb-3">
                                                <InputGroup.Prepend>
                                                <InputGroup.Text id="basic-addon1">US Dollar</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <FormControl
                                                placeholder="10.00"
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                                id="mrp"
                                                type="number"
                                                />
                                            </InputGroup>

                                        </Col>
                                        
                                        <Col md="6">
                                        <label htmlFor="basic-url" className="lb">Products per case
                                            <p>  (Default as 1) </p>
                                        </label>
                                        <Form.Control type="number" placeholder="1" id="products_per_case"/>

                                        </Col>

                                        <Col md="6">
                                        <label htmlFor="basic-url" className="lb">Case Price
                                         <p>  (Default as $10) </p>
                                        </label>
                                        <Form.Control type="number" placeholder="$10.00" id="case_pricing"/>

                                        </Col>

                                        
                                        <Col md="12">
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Pricing comments (Optional)</Form.Label>
                                                <Form.Control as="textarea" rows={3}  id="pricing_comments"/>
                                            </Form.Group>
                                        </Col>
                                       
                                        </Row>
                                        
                                    </div>

                                </div>

                                </Card.Body>
                                </Card>


                                <Card className="mt-4">

                                <Card.Body>
                                <div className="product-form-main">

                                    <div className="p-inside-title">
                                        <h5>PRODUCT BARCODE </h5>

                                    </div>

                                    <div className="overview-form">

                                        <Row>

                                        <Col md="12" className="" >
                                               <div className="step-four-radio">
                                                <div>
                                                <label htmlFor="basic-url" className="lb">Does your product have a barcode? </label>
                                                </div>
                                                <Form.Check inline label="Yes"  name="group1" onChange={e => setBarcode(e.target.value)} type="radio" value="true" id="yes_barcode"/>
                                                <Form.Check inline label="No" name="group1" onChange={e => setBarcode(e.target.value)} type="radio" value="false" id="no_barcode" />

                                                <div >
                                                <InputGroup className="mb-3 mt-3">
                                               {barcode === "true" ? <Form.Control as="select" id="barcode_type" className="col-md-3" >
                                               <option value="none">none</option>
                                                    <option value="UPC">UPC</option>
                                                    <option value="EAN">EAN</option>
                                                    <option value="ISBN"> ISBN</option>
                
                                                    </Form.Control>:''}
                                                   {barcode === "true" ? <FormControl className="col-md-9" id="barcode_disc" aria-describedby="basic-addon1" defaultValue="enter your disc"/>:''}

                                                 

                                                </InputGroup>
                                                </div>
                                               
                                                </div>
                                               </Col>
                                        </Row>
                                        
                                    </div>

                                </div>

                                </Card.Body>
                                </Card>


                                <Card className="mt-4">

                                <Card.Body>
                                <div className="product-form-main">

                                    <div className="p-inside-title">
                                        <h5>PRODUCT PACKAGING </h5>

                                    </div>

                                    <div className="overview-form">

                                        <Row>

                                        <Col md="12" className="" >
                                            <div className="step-four-radio">
                                                <div>
                                                <label htmlFor="basic-url" className="lb">Does your product have packaging? (Optional)</label>
                                                </div>
                                                <Form.Check inline label="Yes" name="group2" type="radio" onChange={e => setPackaging(e.target.value)}  value="true" id="yes_packaging" />
                                                <Form.Check value="false" inline label="No" name="group2" onChange={e => setPackaging(e.target.value)}  type="radio" id="no_packaging" />
                                                </div>

                                                {packaging=== "true" ? <div >
                                                <label className="col-md-12" htmlFor="basic-url" className="lb">Product dimensions (Optional)</label>
                                                <InputGroup className="mb-3">
                                                <Form.Control as="select" id="product_dimension_type" className="col-md-3">
                                                    <option value="in">in</option>
                                                    <option value="ft">ft</option>
                                                    <option value="m">m</option>
                                                    <option value="cm">cm</option>
                                                    
                                                    </Form.Control>
                                                    <FormControl id="product_d_width" className="col-md-3" aria-describedby="basic-addon1" placeholder="Width"/>
                                                    <FormControl id="product_d_height" className="col-md-3" aria-describedby="basic-addon1" placeholder="Hight"/>
                                                    <FormControl id="product_d_depth" className="col-md-3" aria-describedby="basic-addon1" 
                                                    type='number'placeholder="Depth"/>

                                                 

                                                </InputGroup>
                                                </div>:''}

                                            </Col>


                                             <Col md="6" xs="12">
                                             {packaging=== "true" ?   <div >
                                                <label className="col-md-12" htmlFor="basic-url" className="lb">Product volume (Optional)</label>
                                                <InputGroup  className="mb-3">
                                                <Form.Control id="product_volume_type" as="select" className="col-md-4">
                                                    <option value="in3">In3</option>
                                                    <option value="ft3">ft3</option>
                                                    <option value="m3">m3</option>
                                                    <option value="cm3">cm3</option>
                                                   
                                                    </Form.Control>
                                                    <FormControl id="product_volume" className="col-md-8" type='number' aria-describedby="basic-addon1" placeholder="Width"/>
                                                  
                                                 

                                                </InputGroup>
                                                </div>:''}
                                            </Col>

                                            <Col md="6" xs="12">
                                            {packaging=== "true" ?   <div >
                                                <label className="col-md-12" htmlFor="basic-url" className="lb">Product weight (Optional)</label>
                                                <InputGroup className="mb-3">
                                                <Form.Control as="select" id="product_weight_type" className="col-md-4">
                                                    <option value="lb">lb</option>
                                                    <option value="kg">kg</option>
                                                    <option value="g">g</option>
                                                    <option value="oz">oz</option>
                                                    <option value="fl oz">fl oz</option>
                                                    </Form.Control>
                                                    <FormControl id="product_weight" className="col-md-8" type='number' aria-describedby="basic-addon1" placeholder="Width"/>
                                                  
                                                 

                                                </InputGroup>
                                                </div>:''}
                                            </Col>


                                            <Col md="6" xs="12">
                                            {packaging=== "true" ?  <div >
                                                <label className="col-md-12" htmlFor="basic-url" className="lb"  >Product size (Optional)</label>
                                                <InputGroup className="mb-3">
                                                <Form.Control id="product_size_type" as="select" className="col-md-4">
                                                <option value="lb">lb</option>
                                                    <option value="kg"> kg</option>
                                                    <option value="g"> g</option>
                                                    <option value="oz"> oz</option>
                                                    <option value="fl oz"> fl oz</option>
                                                    <option value="unit count">unit count</option>
                                                    </Form.Control>
                                                    <FormControl id="product_size" className="col-md-8" aria-describedby="basic-addon1" placeholder="Width"/>
                                                  
                                                 

                                                </InputGroup>
                                                </div>:''}
                                            </Col>
                                        </Row>
                                        
                                    </div>

                                </div>

                                </Card.Body>
                                </Card>

                                <Card className="mt-4">

                                    <Card.Body>
                                    <div className="product-form-main">

                                        <div className="p-inside-title">
                                            <h5>PRODUCT SHELF LIFE AND INGREDIENTS </h5>

                                        </div>

                                        <div className="overview-form">

                                            <Row>

                                            <Col md="12" xs="12" className="" >
                                                <div className="step-four-radio">
                                                    <div>
                                                    <label htmlFor="basic-url" className="lb">Does your product have a shelf life? (optional)</label>
                                                    </div>
 <Form.Check inline label="Yes" name="group3" type="radio" onChange={e => setIngredient(e.target.value)}  value="true"  />
 <Form.Check inline label="No" type="radio" name="group3" onChange={e => setIngredient(e.target.value)}  value="false"  />
                                                    </div>
                                                </Col>

                                                <Col md="12" xs="12">
                                         
                                                {ingredient === "true" ? <InputGroup className="mt-2">
                                                <Form.Control id="life_type" as="select" className="col-md-3">
                                                    <option value="days">days</option>
                                                    <option value="weeks">weeks</option>
                                                    <option value="months">months</option>
                                                    <option value="years">years</option>
                                                    
                                                    </Form.Control>
                                                    <FormControl id="life_disc" className="col-md-9" aria-describedby="basic-addon1"/>
                                                  
                                                 

                                                </InputGroup> : ''}
                                            
                                            </Col>
                                            </Row>

                                            <Row>

                                            <Col md="12" xs="12" className="" >
                                            <div className="step-four-radio">
                                                    <div>
                                                    <label htmlFor="basic-url" className="lb">Does your product have ingredients? (optional)</label>
                                                    </div>
                                                    <Form.Check inline label="Yes" name="group4" type="radio"  onChange={e => setSelflife(e.target.value)}  value="true" />
                                                    <Form.Check inline label="No" name="group4" type="radio" onChange={e => setSelflife(e.target.value)}  value="false" />
                                                    </div> 
                                                </Col>

                                                <Col md="12" xs="12">                                               
                                                {selflife === "true" ?   <div className="input-tags-main-1024" >
                                                        <input placeholder="yes" type="text" id="ingredients" />
                                                    </div>       :''}                                      
                                                </Col>

                                            </Row>

                                            <Row>

                                             <Col md="12" xs="12" className="" >
                                            
                                                  <div className="step-four-radio">
                                                  
                                                    <div>
                                                    <label htmlFor="basic-url" className="lb">Does your product have a nutritional label? (optional) </label>
                                                    </div>
                                                    <Form.Check inline label="Yes" type="radio" name="group6" onChange={e => setNutritional(e.target.value)}  value="true" id="yes_nutrition"/>
                                                    <Form.Check inline label="No" type="radio" name="group6" onChange={e => setNutritional(e.target.value)}  value="false" id="no_nutrition" />
                                                    </div>
                                                </Col>

                                                <Col md="12" xs="12">                                               
                                                  {/* {nutritional === 'true' ? <button className="admin-add-btn" id="nutritionl_label" onClick={() => setShow3(true)}> <i class="fa fa-plus" aria-hidden="true"></i> Nutritional Label </button> : ''} */}

                                                      
                                                {nutritional === 'true' ?  <ImageUploader
                                                withIcon={false}
                                                buttonText='Choose Nutrition Label Image'
                                                onChange={onDrop1}
                                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                                maxFileSize={5242880}
                                                withPreview="true"/>:''}
                                                 


                                                 
                                                </Col>
                                            </Row>
                                            
                                        </div>

                                    </div>

                                    </Card.Body>
                                    </Card>




                            <Col md="12" className="text-center mt-4 two-btn-main">
                            <button class="admin-add-btn"> <NavLink to="/product_form"> Back </NavLink>    </button>
                                 <button class="admin-add-btn" onClick={productdetail}> <NavLink to="/distribution"> Next </NavLink>  </button>
                            </Col>

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
                                    <button className="prev-prod-btn">  <NavLink to="/preview"> <i class="fa fa-eye" aria-hidden="true"></i> Preview Product Profile </NavLink>   </button>
                                    <p> We will help guide you along the process. <NavLink to=""> Need Help </NavLink> </p>
                                </div>

                            </div>
                        </Col>


                    </Row>
                </Container>
            </section>


            <Modal
                size="lg"
                centered
                show={show4}
                onHide={() => setShow4(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    <h5 style={{margin: '0px'}}>  Upload your image </h5>
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col xs={12} md={12} >
                                <div className="nutri-upload">
                                <Pimage
                                id="product_image_id"/>
                                </div>
                                
                               
                            </Col>

                            <Col xs={12} md={6} >
                            <div className="nutri-text-right">
                                    <h5> PRODUCT IMAGE </h5>
                                    <p>
                                    The product image is your first impression to buyers and one of the most important elements of your listing. </p>

                                 
                                </div>
                            </Col>

                            <Col xs={12} md={6} >
                            <div className="nutri-text-right-22">
                                    <h6> IMAGE REQUIREMENTS </h6>
                                    <ul>
                                       
                                        <li> Your product should be the focus of the image </li>
                                        <li> Use a white background </li>
                                        <li> Avoid words, logos and watermarks on the image </li>
                                        <li> Show the entire product </li>
                                    </ul>
                                 
                                </div>
                            </Col>

                       


                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className="col-md-12 text-center">
                        <button class="admin-add-btn f-w-500" >  Done  </button>
                    </div>
                </Modal.Footer>
            </Modal>


            <Modal
                size="lg"
                centered
                show={show3}
                onHide={() => setShow3(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    <h5 style={{margin: '0px'}}>  Upload your nutritional label </h5>
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col xs={12} md={12} >
                                <div className="nutri-upload">
                                <ImageUploader
                                withIcon={true}
                                buttonText='Choose Nutrition File'
                                onChange={onDrop1}
                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                maxFileSize={524288}
                                withPreview="true" />
                                </div>
                                
                               
                            </Col>

                            <Col xs={12} md={12} >
                            <div className="nutri-text-right text-center">
                                    <h5> NUTRIONAL LABEL </h5>
                                    <p>
                                    Nutrition facts are important for buyers to evaluate products just as it is for consumers.
                                    </p>

                                 
                                </div>
                            </Col>

                          
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className="col-md-12 text-center">
                        <button class="admin-add-btn f-w-500" onClick={() => setShow3(false)}>  Save  </button>
                    </div>
                </Modal.Footer>
            </Modal>


        </>
    );
}

export default ProductDetail
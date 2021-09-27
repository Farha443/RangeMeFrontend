import React from 'react';
import  {useEffect, useState} from 'react';
import '../../assets2/admin.css';
import AdminNavbar from './AdminNavbar'
import { NavLink } from 'react-router-dom';
import BASE_URL from '../base';
import Cookies from 'universal-cookie';
import TreeMenu from 'react-simple-tree-menu'
// import TreeViewMenu from 'react-simple-tree-menu'
// import Input from 'react-simple-tree-menu'
// import ListGroup from 'react-simple-tree-menu'
// import ListItem from 'react-simple-tree-menu'
import { DropdownButton, MenuItem} from 'react-bootstrap';
// import DropdownTreeSelect from 'react-dropdown-tree-select'
// import 'react-dropdown-tree-select/dist/styles.css'
import $ from 'jquery'; 
// import useState from 'react-hook-use-state';

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
    Row
    } from 'react-bootstrap';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import context from 'react-bootstrap/esm/AccordionContext';
import axios from 'axios';
import InnerFooter from './InnerFooter';
const cookies = new Cookies();



var uuid = cookies.get('productuuid');

function ProductForm() {
    const [sO,setSO ] = useState([]);
    const [productname, setproductname]= useState({})
    const [certi, setCerti]= useState([])
    const[p_details, setPdetails]=useState([]);
    const [category, setCategory]= useState([])
    const [cat, setCategoryData]= useState('');
    
    const treeData = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];


      function handleChange(selectedOption){
        setSO(selectedOption);
        console.log(`Option selected:`, selectedOption);
      };

    useEffect(()=>{
        var token = cookies.get('logintoken');
        if (token === undefined){
        window.location="/login"
        }
    })

    useEffect(() => {
        axios.get(BASE_URL +'authentication/getcategory/').then(res=>{
            setCategory(res.data.data)
            console.log(res.data.data)
            // debugger
            treeData = res.data.data;
        }).catch(err=>{
            console.log(err)            
        })
        

        axios.get(BASE_URL +'product/get_pdetails/'+cookies.get("productuuid")).then(re=>{
            setPdetails(re.data.data)
            console.log("----product details-----")
            console.log(re.data.data)
            cookies.set('product_name', re.data.data.product_name, { path: '/products_detail' })
            cookies.set('product_name', re.data.data.product_name, { path: '/distribution' })
            cookies.set('product_name', re.data.data.product_name, { path: '/marketing' })
        }).catch(err=>{
            console.log(err)            
        })

        axios.get(BASE_URL +'product/ProductDetailView/'+cookies.get("productuuid")+'/').then(res=>{
            setproductname(res.data.data)

        }).catch(err=>{
            console.log(err)            
        })

        axios.get(BASE_URL +'product/create_appro_certi/').then(res=>{
            setCerti(res.data.data)
            
        }).catch(err=>{
            console.log(err)            
        })
        console.log(certi)
    },{}
    )
    

        function Step1(){
            var product_name = document.getElementById('product_name').value; 
            var select_category = Array.from(sO).map(el => el.value);
            const selected = document.querySelectorAll('#approvals_certifications option:checked');
            var approvals_certifications = Array.from(selected).map(el => el.value);
            
            var usp = document.getElementById('usp').value;
            var product_disc = document.getElementById('product_disc').value;
            var url = BASE_URL+'product/create_product/'
            var productuuid = cookies.get('productuuid');        
            var token = cookies.get('logintoken');
            var uuid = cookies.get('get_brand');
            var config = {
                method: 'patch',
                url: url,
                headers: {
                  "Authorization": "Bearer " + token,
                  "Content-Type": "application/json",
                },
                data:{
                    p_user : uuid,
                    product_name:product_name,
                    select_category:select_category,
                    approvals_certifications:approvals_certifications,
                    usp:usp,
                    product_disc:product_disc,
                    product_uuid:productuuid
                }
              };
              if(select_category===''){
                  alert("Please Select a category")
              }
              else{
             axios(config)
                .then(re => {
                  if(re.status === 201){
                    window.location='/products_detail'
                  }
                })
                .catch(err => {
                  alert(err);
                })
        } 
    }
        function action(val){
            // alert(val)
            console.clear()
            console.log(val)
            setCategoryData(val);

            // console.log(cat)
        }
        
       function Redirect(uuid){
             window.location='/preview/'+uuid;
         }

    const [show2, setShow2] = useState(false);

    const item = category
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
                                        {/* <h4> {productname.product_name!==undefined?productname.product_name:cookies.get('product_name')} </h4>  */}
                                        <h4>{productname.product_name}</h4>
                                        <span>Ürün   </span>
                                    </div>
                                </div> 

                                <div className="p-header-right">
                                    <div className="p-right-content">
                                        <div className="p-icn-01">
                                            <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                            {/* <span> All changes saved </span> */}
                                        </div>

                                        <div className="p-icn-02">
                                            <button className="pre-btn" onClick={() => Redirect(uuid)}> Ürünü Görüntüle</button>
                                            {productname.approved_product=== true? 
                                                                        <button class="btn btn-success">Admin Approved </button>: productname.approved_product=== false ?<button class="btn btn-danger" >Not Approved </button>:""}
                                            {/* <button className="appro-btn"> Ürünü Onaya Gönder </button> */}
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
                                                <div className="sidebar-title"> Ürüne Genel Bakış  </div>
                                                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/products_detail"
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/detail.png" />
                                                <div className="sidebar-title"> Ürün Açıklaması </div>
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
                                        
                                            <h5> Ürüne Genel Bakış</h5>

                                        </div>

                                        <div className="overview-form">

                                           <Row>

                                           <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Ürün adı</Form.Label>
                                                <Form.Control id="product_name" type="text" disabled defaultValue={productname.product_name?productname.product_name:cookies.get('product_name') }/>
                                                
                                            </Form.Group>

                                            </Col>

                                            {/* <Col md="6">
                                            <Form.Group className="" controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Ürün Kategorisi seç</Form.Label>
                                              
                                                <TreeMenu
                                                id="select_category"
                                                data={category} 
                                                onClickItem={({ key, label,val, ...props }) => {
                                                    console.clear();
                                                    action(val) // user defined prop
                                                  }}
                                                />
                                            </Form.Group>
                                            </Col> */}
                                            <Col md="6" className="m-auto">

                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Ürün Kategorisi seç </Form.Label>
                                                <Select
                                                id="select_category"
                                                isMulti
                                                name="colors"
                                                value={sO}
                                                
                                                onChange={handleChange}
                                                options={category}
                                                className="basic-multi-select"
                                                classNamePrefix="select"
                                            />
                                            {/* <TreeMenu
                                                id="select_category"
                                                data={category} 
                                                onClickItem={({ key, label,val, ...props }) => {
                                                    
                                                    action(val) // user defined prop
                                                  }}
                                                /> */}
                                            </Form.Group>


                                            </Col>

                                            <Col md="6">
                                            <Form.Group multiple controlId="exampleForm.ControlSelect1">    
                                            <Form.Label>Ürün Sertifikasyonlar</Form.Label>
                                            <Form.Control as="select" defaultValue={productname.approvals_certifications} id="approvals_certifications" multiple="true">
                                            {certi.map(cat=>( 
                                            <option value={cat.uuid}>{cat.name}</option>))}
                                            </Form.Control> 
                                            </Form.Group>
                                            </Col> 
            
                                      
                                            <Col md="6">
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Ürün özellikleri (USPs)</Form.Label>
                                                <Form.Control id="usp" type="text" placeholder="Enter USP" defaultValue={productname.usp} />

                                            </Form.Group>

                                            </Col>

                                            <Col md="6">
                                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Ürün Açıklaması</Form.Label>
                                                <Form.Control id="product_disc" as="textarea" defaultValue={productname.product_disc} rows={3} />
                                            </Form.Group>
                                            </Col>

                                            <Col md="12" className="text-center">
                                            <button class="admin-add-btn" onClick={Step1}> Sonraki Sayfa  </button>
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
                                    {/* <img src="assets/images/blog1.jpg" /> */}
                                    <img src={BASE_URL.slice(0,-5)+p_details.image} />
                                </div>      
                                <div className="prod-info-text">
                                    <h5>{cookies.get('brand_name')}</h5>
                                    <h6> {productname.product_name} </h6>
                                </div>
                                <div className="pro-margin">
                                    <span> {p_details.cost} Ürün fiyatı </span>
                                    {/* <span> 33.00%  Margin </span> */}
                                </div>

                                {/* <div className="prod-help">
                                    <button className="prev-prod-btn" onClick={() => Redirect(uuid)}> <i class="fa fa-eye" aria-hidden="true"></i> Preview Product Profile </button>
                                    <p> We will help guide you along the process. <NavLink to=""> Need Help </NavLink> </p>
                                </div> */}

                            </div>
                        </Col>


                    </Row>
                </Container>
            </section>

            <InnerFooter/>

            <Modal
                size="lg"
                centered
                show={show2}
                onHide={() => setShow2(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    <h5 style={{ marginBottom: '0px' }}> Add Category </h5>
                    {/* <p> Start with adding your product’s name </p> */}
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col xs={12} md={10} className="m-auto">
                         <div className="text-center mb-3">
                         <h5> Add Category</h5>  
                         {/* <p style={{ marginTop: '0px' }}> Start with adding your product’s name </p> */}
                         </div>
                            <Col xs={12} md={10} className="m-auto"> 
                                <Form.Group controlId="formBasicEmail">
                                
                                </Form.Group>
                            </Col>
                            </Col>

                        </Row>
                    </Container>
                </Modal.Body>
                
            </Modal>


        </>
    );
}

export default ProductForm
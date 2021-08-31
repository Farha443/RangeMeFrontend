import React, {useEffect, userEffect, useState} from 'react';
import '../../assets2/admin.css';
import AdminNavbar from './AdminNavbar'
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
  Tab
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
// import BrandLogoHome from './BrandLogoHome';
import InnerFooter from './InnerFooter';
import Cookies from "universal-cookie";
import BASE_URL from '../base';
import $ from "jquery";  
// import BrandLogoHome from './BrandLogoHome';
const axios = require('axios').default;
const cookies = new Cookies();

var user_uuid = cookies.get("uuid")


function AdminHome(){
    const [show, setShow] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show2, setShow2] = useState(false);
    const [isActive, setActive] = useState("false");
    const[brands, setBrands] = useState([])
    const[Allbrands, setAllbrands] = useState([])
    const[remove , setRemove] = useState([]);



    const handleToggle = () => {
        setActive(!isActive);
      };

      useEffect(() => {        
        axios.get(BASE_URL+'authentication/getsupplier/'+ user_uuid )
        .then(res=>{
            setBrands(res.data.data[0])
            setRemove(res.data.data)
            var arra = []
            const map1 = res.data.data.map(x => 
                {
                    if (x.uuid === res.data.data[0].uuid ){
                        return {};
                    }else{
                        return arra.push(x) ;
                    }
                });
            setAllbrands(arra)
        }).catch(err=>{
            console.log(err)            
        })
    },[])
    
   
    function GetSingleBrand(uuid){
        axios.get(BASE_URL+'authentication/singlebrand/'+ uuid )
        .then(res=>{
            setBrands(res.data.data)
            var dd = remove
            var arra=[];
            const map1 = dd.map(x => 
                {
                    if (x.uuid === uuid ){
                        return {};
                    }else{
                        return arra.push(x) ;
                    }
                });
            setAllbrands(arra)
            console.log(res.data.data.length)
            cookies.set("get_brand", uuid , {path:"/"})
        }).catch(err=>{
            console.log(err)            
        })     
    }

    function AddProduct(){
        // $(".laoder").show();
        var product_name = document.getElementById("addproduct").value;
        var brand = cookies.get('get_brand')
        var token = cookies.get("logintoken");
        // var uuid = cookies.get('sup_uuid');
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
            // $(".laoder").hide();
            cookies.set('productuuid', res.data.data.uuid, { path: '/' })
            cookies.set('product_name',res.data.data.product_name,{path:'/product_form'})
            window.location = '/product_form'
          }
          ).catch(err=>{
            console.error(err);
            $(".laoder").hide();
            window.location.reload();
          })  
    }


    return(
        <>
            <AdminNavbar/>

            <section className="hm-section-1">
                <Container>
                    <Row>
                    <Col md="12">
                <div className="cover-md-left-cont">
                <div className="ad-hm-logo-main">
                                    
                                     {brands.brand_logo!= null?
                                     <img src = {BASE_URL.slice(0,-5)+brands.brand_logo}></img>: <img src="assets/images/brand-logo.jpg"/>}
                                    <div className="prof-img-btn">
                                        <button className="clickable-cover-image__change-image___JnYhU" type="button" onClick={() => setShow3(true)}>
                                            <div className="clickable-cover-image__change-image-hint___3NLUs"><img alt="camera" className="clickable-cover-image__change-image-icon___1k392" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMxIDZoLTcuNmwtMy43LTMuN2MtLjItLjItLjQtLjMtLjctLjNoLTZjLS4zIDAtLjUuMS0uNy4zTDguNiA2SDFjLS42IDAtMSAuNC0xIDF2MjJjMCAuNi40IDEgMSAxaDMwYy42IDAgMS0uNCAxLTFWN2MwLS42LS40LTEtMS0xek0xNiAyNWMtMy45IDAtNy0zLjEtNy03czMuMS03IDctNyA3IDMuMSA3IDctMy4xIDctNyA3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNiA1SDNjLS42IDAtMS0uNC0xLTFzLjQtMSAxLTFoM2MuNiAwIDEgLjQgMSAxcy0uNCAxLTEgMXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=" />
                                                <div className="clickable-cover-image__change-image-text___1kIxy"></div>
                                            </div>
                                        </button>
                                    </div>
                                
                                    

                                </div>

                                <div className="cover-brand-title ad-hm-b-title tt">
                                    <h5> {brands.brand_name} </h5>
                                    <p onClick={handleToggle}> Switch Brand <i class="fas fa-caret-down"></i> </p>
                                    <div className={isActive ? "drop-d-101 " : "drop-d-101 open-drop"}>
                                       
                                           <ul>
                                           {Allbrands.map(bt=>( 
                                                   <li onClick={() => {GetSingleBrand(bt.uuid);handleToggle()}}> <NavLink to="/admin_home">{bt.brand_name}</NavLink> </li> ))}
                                               </ul>
                                              
                                            {/* onClick={() => GetSingleBrand(bt.uuid)} */}
                                           </div>

                                        <div className="btn-mn-454">
                                            <button className="btn-1021"> temel </button>
                                        </div>
                                </div>
                </div>
                 
                 <div className="side-btn-d121">
                    <button className="btn-man"> HESABINIZI YÜKSELTİN </button>
                 </div>
                </Col>
                    </Row>
                </Container>

            </section>

            <section className="information-section-hm">
                <Container>
                    <Row>
                        <Col md="8" xs="12">
                           <Row>
                               <Col md="12" xs="12">
                                    <div className="c-card">
                                        <div className="info-header-d">
                                        <div className="info-d11"> 
                                        <h5> Information <span> Profile</span> </h5>
                                        </div>
                                        <div className="indfo-d22">
                                            <NavLink to=""> More <img src="assets/images/icons/right-arrow-5-copy-2.png" /> </NavLink>
                                        </div>
                                        </div>

                                        <Row>
                                            <Col md="12" xs="12">
                                                    <div className="viewing-box-d">
                                                        <div className="view-box">
                                                            <div className="view-icn-d">
                                                                <img src="assets/images/icons/eye.svg" />
                                                            </div>
                                                            <div className="view-b-text">
                                                                <p> viewing </p>
                                                                <h1> {brands.brand_views} </h1>
                                                            </div>
                                                        </div>

                                                        <div className="view-box">
                                                            <div className="view-icn-d">
                                                                <img src="assets/images/icons/external-link.svg" />
                                                            </div>
                                                            <div className="view-b-text">
                                                                <p> Profile Visit </p>
                                                                <h1> 12 </h1>
                                                            </div>
                                                        </div>

                                                        <div className="view-box">
                                                            <div className="view-icn-d">
                                                                <img src="assets/images/icons/recycling.svg" />
                                                            </div>
                                                            <div className="view-b-text">
                                                                <p> Conversions </p>
                                                                <h1> 02 </h1>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </Col>
                                        </Row>
                                    </div>
                               </Col>
                           </Row>


                           <Row>
                                <Col md="12" xs="12">
                                        <div className="ad-h-banner-157" style={{backgroundImage: 'url(../assets/images/btm-banner.jpg)'}}>
                                            <div className="bn-text">
                                                <h4> Profilinize <span> Kimler Baktı? </span> </h4>
                                                <p>Profilinizi hangi alıcı firmaların <span>görüntülediğini görün.</span></p>
                                            </div>
                                            <div className="bn-btn-d">
                                                <button className="btn-bn"> UPGRADE YOUR <span>ACCOUNT</span> </button>
                                            </div>
                                        </div>
                                </Col>
                            </Row>

                        </Col>
                        <Col md="4" xs="12">
                            <div className="c-card side-br">
                                <div className="info-header-d">
                                    <div className="info-d11"> 
                                    <h5> What's Happening in <span> Tayuss?</span> </h5>
                                    </div>
                                    <div className="indfo-d22">
                                        <NavLink to=""> <i class="far fa-long-arrow-down"></i> </NavLink>
                                        <NavLink to="" className="rotate"> <i class="far fa-long-arrow-down"></i> </NavLink>
                                    </div>
                                </div>

                                <div className="side-br-list-d">
                                    <ul>
                                        <li>
                                            <div className="side-br-list-box-mn"> 
                                                <div className="side-list-img-d">
                                                    <img src="assets/images/2.jpg" />
                                                </div>
                                                <div className="side-list-text">
                                                    <h6> Kroger'den bir alıcı </h6>
                                                    <p> numune istedi</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="side-br-list-box-mn"> 
                                                <div className="side-list-img-d">
                                                    <img src="assets/images/2.jpg" />
                                                </div>
                                                <div className="side-list-text">
                                                    <h6> Kroger'den bir alıcı </h6>
                                                    <p> numune istedi</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="side-br-list-box-mn"> 
                                                <div className="side-list-img-d">
                                                    <img src="assets/images/2.jpg" />
                                                </div>
                                                <div className="side-list-text">
                                                    <h6> Kroger'den bir alıcı </h6>
                                                    <p> numune istedi</p>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="side-br-list-box-mn"> 
                                                <div className="side-list-img-d">
                                                    <img src="assets/images/2.jpg" />
                                                </div>
                                                <div className="side-list-text">
                                                    <h6> Kroger'den bir alıcı </h6>
                                                    <p> numune istedi</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>


                            </div>
                        </Col>  
                    </Row>
                </Container>
            </section>


            <section className="hm-ser-box-section">
               
                    <Container>
                        <Row>
                            <Col md="12" xs="12">
                                <div className="hm-slider-title inner-h1">
                                    <h1> PROFİLİNİZİ <span class="hm-title-h">  GELİŞTİRİN </span> </h1>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="3" xs="12">
                                <div className="imp-profile-box">
                                   <div className="imp-pro-icn">
                                        <img src="assets/images/icons/share.svg"/>
                                   </div>
                                   <h5> Profilinizi Paylaşın </h5>
                                   <p>
                                   Profilinizi herhangi bir yerde yayınlayabileceğiniz
                                    bir URL aracılığıyla alıcılarla paylaşarak veya
                                    onlara e-posta yoluyla davet göndererek profilinize
                                    yapılan ziyaretleri artırın.
                                   </p>
                                   <button className="imp-prof-btn"> HEMEN <span> EKLEYİN </span> </button>
                                </div>
                            </Col>

                            <Col md="3" xs="12">
                                <div className="imp-profile-box">
                                   <div className="imp-pro-icn">
                                        <img src="assets/images/icons/received-copy.svg"/>
                                   </div>
                                   <h5> Ürün Ekleyin </h5>
                                   <p>
                                   Daha fazla alıcı firmaya ulaşmak için tüm ürün çeşitlerinizi eksiksiz ekleyin.
                                   </p>
                                   <button className="imp-prof-btn" onClick={() => setShow2(true)}> HEMEN <span> EKLEYİN </span> </button>
                                </div>
                            </Col>

                            <Col md="3" xs="12">
                                <div className="imp-profile-box">
                                   <div className="imp-pro-icn">
                                        <img src="assets/images/icons/file.svg"/>
                                   </div>
                                   <h5>Satış Sayfası Oluşturun</h5>
                                   <p>
                                   Tayuss profilinizi, PDF aracılığıyla paylaşabileceğiniz 
                                   veya yüz yüze kullanım için yazdırabileceğiniz indirilebilir 
                                   bir satış sayfasına dönüştürün.
                                   </p>
                                   <button className="imp-prof-btn"> HEMEN <span> EKLEYİN </span> </button>
                                </div>
                            </Col>

                            <Col md="3" xs="12">
                                <div className="imp-profile-box">
                                   <div className="imp-pro-icn">
                                        <img src="assets/images/icons/approval-symbol-in-badge.svg"/>
                                   </div>
                                   <h5> Tayuss Onayı Alın </h5>
                                   <p>
                                   Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                   sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                    magna aliquyam erat, sed diam voluptua. dolor sit amet. 
                                   </p>
                                   <button className="imp-prof-btn"> HEMEN <span> EKLEYİN </span> </button>
                                </div>
                            </Col>


                            <Col md="3" xs="12">
                                <div className="imp-profile-box">
                                   <div className="imp-pro-icn">
                                        <img src="assets/images/icons/pie-chart-finances.svg"/>
                                   </div>
                                   <h5> Profilinizi Optimize Edin </h5>
                                   <p>
                                   En alakalı anahtar kelimeleri ekleyin ve alıcıların arama yaparken 
                                   profilinizi görmesini sağlamak için fiyatlandırmanızı güncellemeyi düşünün.
                                   </p>
                                   <button className="imp-prof-btn"> HEMEN <span> EKLEYİN </span> </button>
                                </div>
                            </Col>

                            <Col md="3" xs="12">
                                <div className="imp-profile-box">
                                   <div className="imp-pro-icn">
                                        <img src="assets/images/icons/paper-plane.svg"/>
                                   </div>
                                   <h5> Gönderim Yapın </h5>
                                   <p>
                                   Belirli kategoriler için yeni ürün gönderimlerini kabul edenleri 
                                   inceleyerek, doğru zamanda sizin için doğru satıcıya gönderin.
                                   </p>
                                   <button className="imp-prof-btn"> HEMEN <span> EKLEYİN </span> </button>
                                </div>
                            </Col>

                            <Col md="3" xs="12">
                                <div className="imp-profile-box">
                                   <div className="imp-pro-icn">
                                        <img src="assets/images/icons/contract.svg"/>
                                   </div>
                                   <h5> İhtiyaçlarınızı Karşılayın </h5>
                                   <p>
                                   Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                                   invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. dolor sit amet. 
                                   </p>
                                   <button className="imp-prof-btn"> HEMEN <span> EKLEYİN </span> </button>
                                </div>
                            </Col>

                            <Col md="3" xs="12">
                                <div className="imp-profile-box banner" style={{backgroundImage: 'url(../assets/images/btm-banner.jpg)'}}>
                                   <div className="box-banner-content">
                                        <h3 className="h3-1"> ÇOK DAHA FAZLASI İÇİN </h3>
                                        <h4 className="h4-2"> HEMEN HESABINIZI YÜKSELTİN </h4>
                                       <NavLink to="">  <img src="assets/images/icons/right-arrow-5-copy-3-white.svg" /> </NavLink>
                                   </div>
                                </div>
                            </Col>

                        </Row>
                    </Container>
               
            </section>


            <section className="send-buyer-section mb-4">
               <Container>
                   <Row>
                       <Col md="12" xs="12">
                            <div className="c-card">
                                <Row>
                                    <Col md="12" xs="12">
                                    <div className="info-header-d">
                                        <div className="info-d11"> 
                                            <h5> Send  <span> Your Brand to Buyers </span> </h5>
                                        </div>
                                        <div className="indfo-d22">
                                            <NavLink to=""> More <img src="assets/images/icons/right-arrow-5-copy-2.png" /> </NavLink>
                                        </div>
                                    </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="12" xs="12">
                                        <div className="send-buyer-box-d">
                                            <div className="send-box-d1">
                                                <div className="send-b-img-d">
                                                    <img src="assets/images/3.jpg" />
                                                </div>
                                                <div className="send-b-text-content">
                                                    <h6> UNFI </h6>
                                                    <ul>
                                                        <li>Bölgesel</li>
                                                        <li>50'den fazla mağaza</li>
                                                        <li> <NavLink to=""> Daha Fazla Bilgi </NavLink> </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="send-box-d2">
                                                <button className="send-b-btn">  GÖNDERİM BAŞLAT </button>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md="12" xs="12">
                                        <div className="send-buyer-box-d">
                                            <div className="send-box-d1">
                                                <div className="send-b-img-d">
                                                    <img src="assets/images/3.jpg" />
                                                </div>
                                                <div className="send-b-text-content">
                                                <h6> UNFI </h6>
                                                    <ul>
                                                        <li>Bölgesel</li>
                                                        <li>50'den fazla mağaza</li>
                                                        <li> <NavLink to=""> Daha Fazla Bilgi </NavLink> </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="send-box-d2">
                                                <button className="send-b-btn">  GÖNDERİM BAŞLAT </button>
                                            </div>
                                        </div>
                                    </Col>
                                
                                    <Col md="12" xs="12">
                                        <div className="send-buyer-box-d">
                                            <div className="send-box-d1">
                                                <div className="send-b-img-d">
                                                    <img src="assets/images/3.jpg" />
                                                </div>
                                                <div className="send-b-text-content">
                                                <h6> UNFI </h6>
                                                    <ul>
                                                        <li>Bölgesel</li>
                                                        <li>50'den fazla mağaza</li>
                                                        <li> <NavLink to=""> Daha Fazla Bilgi </NavLink> </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="send-box-d2">
                                                <button className="send-b-btn">  GÖNDERİM BAŞLAT </button>
                                            </div>
                                        </div>
                                    </Col>

                                    <Col md="12" xs="12">
                                        <div className="send-buyer-box-d">
                                            <div className="send-box-d1">
                                                <div className="send-b-img-d">
                                                    <img src="assets/images/3.jpg" />
                                                </div>
                                                <div className="send-b-text-content">
                                                <h6> UNFI </h6>
                                                    <ul>
                                                        <li>Bölgesel</li>
                                                        <li>50'den fazla mağaza</li>
                                                        <li> <NavLink to=""> Daha Fazla Bilgi </NavLink> </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="send-box-d2">
                                                <button className="send-b-btn">  GÖNDERİM BAŞLAT </button>
                                            </div>
                                        </div>
                                    </Col>
                                
                                </Row>
                            </div>
                       </Col>
                   </Row>
               </Container>
            </section>

            <InnerFooter />
              
    <Modal
        size="lg"
        // dialogClassName="modal-90w"
        show={show}
        onHide={() => setShow(false)}
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
                        <Form.Label  style={{marginTop: '0px'}}>Band Name</Form.Label>
                        <Form.Control type="email" placeholder="abc" />

                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label  style={{marginTop: '0px'}}>Location</Form.Label>
                        <Form.Control type="email" placeholder="abc" />

                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label  style={{marginTop: '0px'}}>Year founded</Form.Label>
                      <Form.Control as="select">
                      <option>Select</option>
                      <option>brand 1</option>
                      <option>brand 2</option>
                      <option>brand 3</option>
                      <option>brand 3</option>
                      </Form.Control>
                  </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label  style={{marginTop: '0px'}}>Revenue</Form.Label>
                      <Form.Control as="select">
                      <option>Select</option>
                      <option>brand 1</option>
                      <option>brand 2</option>
                      <option>brand 3</option>
                      <option>brand 3</option>
                      </Form.Control>
                    
                    <p className="mt-2"> Buyers use this information to search for products </p>
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
                <button class="admin-add-btn f-w-500">  <i class="fa fa-plus" aria-hidden="true"></i> Add Brand </button>
                </div>
            </Modal.Footer>
      </Modal>
    {/* Brand logo modal  */}
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

                              {/* <BrandLogoHome/> */}

                            </Col>

                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className="col-md-12 text-center">
                        <button class="admin-add-btn f-w-500">  Save  </button>
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
                    <h5 style={{ marginBottom: '0px' }}> ürün ekle
</h5>
                    {/* <p> Start with adding your product’s name </p> */}
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col xs={12} md={10} className="m-auto">
                         <div className="text-center mb-3">
                         <h5> Yeni ürün ekle</h5>  
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
                        <button className="admin-add-btn" onClick={AddProduct} >ürün ekle
 </button>
                    </div>
                </Modal.Footer>
            </Modal>



        </> 
    );
}

export default AdminHome
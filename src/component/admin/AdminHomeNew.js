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

import InnerFooter from './InnerFooter';
import Cookies from "universal-cookie";
import BASE_URL from '../base';
import $ from "jquery";  

import ImageUploader from 'react-images-upload';

const axios = require('axios').default;
const cookies = new Cookies();

var user_uuid = cookies.get("uuid")


function AdminHome(){
    const [show, setShow] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show2, setShow2] = useState(false);
    const [isActive, setActive] = useState("false");
    const[brands, setBrands] = useState([]);
    const[Allbrands, setAllbrands] = useState([]);
    const[remove , setRemove] = useState([]);
    const[test , setTest] = useState([]);
    const [logo, setLogo] = useState(false);
    const [cover, setCover] = useState(false);
    const[user, setUser] = useState([])


    const handleToggle = () => {
        setActive(!isActive);
      };

      useEffect(() => {        
        axios.get(BASE_URL+'authentication/getsupplier/'+ user_uuid )
        .then(res=>{
            setBrands(res.data.data[0])
            setRemove(res.data.data)
            console.log(res.data.data[0])
            setTest(res.data.data[0].product_name.length)
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

        var url = BASE_URL+'authentication/getuser/'+ user_uuid;
        axios.get(url).then(res=>{
            setUser(res.data.data)
            console.log("user data")
            console.log(res.data.data)
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
            console.log("brand data")
            console.log(res.data.data)
            setTest(res.data.data.product_name.length)
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

    function onDrop1(pictureFiles, pictureDataURLs) {
        // alert(pictureFiles)
        setLogo({
            pictureFiles
        });
    }

    function AddLogo(){
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
       axios(config)
          .then(res=>{
                 console.log(res.data.data)
                 // alert("success")
                 window.location.reload();
             }
             
             ).catch(err=>{
                 console.error(err);
                 window.location.reload();
             })
     }

    function onDrop(pictureFiles, pictureDataURLs) {
        setCover({
            pictureFiles
        });
    }

    function AddCover(){
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
        axios(config)
          .then(res=>{
                 console.log(res.data.data)
                 // alert("success")
                 //
                 window.location.reload();
                 setShow(false)
             }
             
             ).catch(err=>{
                 console.error(err);
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
                <div className="ad-hm-logo-main b-img">
                                    
                                     {brands.brand_logo!= null?
                                     <img src = {BASE_URL.slice(0,-5)+brands.brand_logo}></img>: <img className="img-b-tag"src="assets/images/no-img-copy.png"/>}
                                    <div className="prof-img-btn">
                                        <button className="clickable-cover-image__change-image___JnYhU" type="button" onClick={() => setShow3(true)}>
                                            <div className="clickable-cover-image__change-image-hint___3NLUs"><img alt="camera" className="clickable-cover-image__change-image-icon___1k392" src="assets/images/no-img-copy.png" />
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


            <section className="hm-section-2">
                <Container>
                    <Row>
                        <Col md="12">
                        
                        <div class="hm-slider-title hm-t2">
                            <h1>PROFİLİNİZİ <span class="hm-title-h"> TAMAMLAYIN </span> </h1>
                        </div>

                        <div className="title-right-text">
                            <p> Profil Durumu: <span> Yayınlanmadı </span> </p>
                        </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md="12" xs="12">
                            <div className="c-card">
                                <div class="container text-center d-none">
                            <div class="steps-container">
                                <div class="steps">
                                    <div class="steps__item z5">
                                    1
                                    </div>
                                    <div class="steps__item z4">
                                    2
                                    </div>
                                    <div class="steps__item z3 steps__item--active">
                                    3
                                    </div>
                                    <div class="steps__item z2">
                                    4
                                    </div>
                                    <div class="steps__item z1">
                                    5
                                    </div>
                                </div>
                            </div>
                            </div>

                                <div className="procces-box-mn-425">
                                           
                                           <div className="procc-box-mn-d451 active-b">
                                                <div className="proc-icn-d">
                                                    <div className="proc-icn-circle">
                                                        <i class="fal fa-check"></i>
                                                    </div>
                                                </div>
                                                <div className="proc-content-text">
                                                    <h5> Create Account </h5>
                                                    <p>
                                                    your brand to all buyers to introduce companies create account
                                                    </p>

                                                    <div className="procbox-btn" style={{visibility:"hidden"}}>
                                                        <button className="">  ADD PRODUCT </button>
                                                    </div>
                                                </div>
                                            </div>
                                                {test===0?
                                            <div className="procc-box-mn-d451">
                                                <div className="proc-icn-d">
                                                    <div className="proc-icn-circle">
                                                        <i class="fas fa-question"></i>
                                                        <i class="fal fa-check d-none"></i>
                                                    </div>
                                                </div>
                                                <div className="proc-content-text">
                                                    <h5 > Add Product </h5>
                                                    <p>
                                                    Interest of buyers first to draw add your product </p>

                                                    <div className="procbox-btn">
                                                        <button className="" onClick={() => setShow2(true)}>  ADD PRODUCT </button>
                                                    </div>
                                                </div>
                                            </div>: <div className="procc-box-mn-d451 active-b">
                                                <div className="proc-icn-d">
                                                    <div className="proc-icn-circle">
                                                        <i class="fas fa-question d-none"></i>
                                                        <i class="fal fa-check "></i>
                                                    </div>
                                                </div>
                                                <div className="proc-content-text">
                                                    <h5> Add Product </h5>
                                                    <p>
                                                    Interest of buyers first to draw add your product </p>
                                                </div>
                                            </div>}


                                        {user.is_email_validated===false?
                                            <div className="procc-box-mn-d451">
                                                <div className="proc-icn-d">
                                                    <div className="proc-icn-circle">
                                                    <i class="fas fa-question"></i>
                                                        <i class="fal fa-check d-none"></i>
                                                    </div>
                                                </div>
                                                <div className="proc-content-text">
                                                    <h5> E-Mail Confirm </h5>
                                                    <p> We sent you an email to tunadok@gmail.com ( Change )  </p>

                                                    <div className="procbox-btn">
                                                        <button className=""> SEND AGAIN </button>
                                                    </div>
                                                </div>
                                            </div>:<div className="procc-box-mn-d451 active-b">
                                                <div className="proc-icn-d">
                                                    <div className="proc-icn-circle">
                                                    <i class="fas fa-question d-none"></i>
                                                        <i class="fal fa-check"></i>
                                                    </div>
                                                </div>
                                                <div className="proc-content-text">
                                                    <h5> E-Mail Confirm </h5>
                                                    <p> We sent you an email to tunadok@gmail.com ( Change )  </p>
                                                </div>
                                            </div>}

                                            {brands.brand_logo===null?
                                            <div className="procc-box-mn-d451">
                                                <div className="proc-icn-d">
                                                    <div className="proc-icn-circle">
                                                    <i class="fas fa-question"></i>
                                                        <i class="fal fa-check d-none"></i>
                                                    </div>
                                                </div>
                                                <div className="proc-content-text">
                                                    <h5> Add Logo </h5>
                                                    <p>Add your logo to your profile to create a truly professional look  </p>

                                                    <div className="procbox-btn">
                                                        <button className="" onClick={() => setShow3(true)}> ADD LOGO</button>
                                                    </div>
                                                </div>
                                            </div>: <div className="procc-box-mn-d451 active-b">
                                                <div className="proc-icn-d">
                                                    <div className="proc-icn-circle">
                                                    <i class="fas fa-question d-none"></i>
                                                        <i class="fal fa-check "></i>
                                                    </div>
                                                </div>
                                                <div className="proc-content-text">
                                                    <h5> Add Logo </h5>
                                                    <p>Add your logo to your profile to create a truly professional look  </p>
                                                </div>
                                            </div>}

                                                {brands.brand_cover===null?
                                            <div className="procc-box-mn-d451">
                                                <div className="proc-icn-d">
                                                    <div className="proc-icn-circle">
                                                        <i class="fas fa-question"></i>
                                                        <i class="fal fa-check d-none"></i>
                                                    </div>
                                                </div>
                                                <div className="proc-content-text">
                                                    <h5> Add Cover Image </h5>
                                                    <p> Make your profile visually appealing by adding a cover image </p>

                                                    <div className="procbox-btn">
                                                        <button className="" onClick={() => setShow(true)}> ADD A PICTURE  </button>
                                                    </div>
                                                </div>
                                            </div>: <div className="procc-box-mn-d451 active-b">
                                                <div className="proc-icn-d">
                                                    <div className="proc-icn-circle">
                                                        <i class="fas fa-question d-none"></i>
                                                        <i class="fal fa-check"></i>
                                                    </div>
                                                </div>
                                                <div className="proc-content-text">
                                                    <h5> Add Cover Image </h5>
                                                    <p> Make your profile visually appealing by adding a cover image </p>
                                                </div>
                                            </div>}
                                </div>
                            
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
                            <div className="profile-up-main brand-logo">
                            <div className="upload-imf-direction-text ">
                            <h6> Marka logosu</h6>
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
                        <button class="admin-add-btn f-w-500" onClick={AddLogo}>  Kaydet  </button>
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


{/* add brand cover image */}
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
                        <button class="admin-add-btn f-w-500" onClick={AddCover}>  Kaydet  </button>
                    </div>
                </Modal.Footer>
            </Modal>



        </> 
    );
}

export default AdminHome
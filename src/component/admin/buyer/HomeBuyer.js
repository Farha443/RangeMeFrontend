import React, {useEffect, userEffect, useState} from 'react';
import '../../../assets2/admin.css';
import AdminNavbar from '../AdminNavbar'
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
  Tab,
  InputGroup
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
import InnerFooter from '../InnerFooter';
import Cookies from 'universal-cookie';
import axios from 'axios';
import $ from "jquery"; 
import BASE_URL from '../../base';
import BuyerNavbar from '../BuyerNavbar';
const cookies = new Cookies();

function HomeBuyer(){

    const settings = {
        dots: false,
        Nav: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        rows: 1,
        slidesPerRow: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
    
      const settings2 = {
        dots: false,
        Nav: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows: 1,
        slidesPerRow: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const [show, setShow] = useState(false);
    const[products,setProducts]=useState([]);
    const[list,setList]=useState([]);
    const [showcat, setshowcat] = useState([])

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };



      useEffect(() => {

        axios.get(BASE_URL+'authentication/GetCategorysignup/')
        .then(res=>{  
            setshowcat(res.data.data ) 
        }).catch(err=>{
            console.log(err)            
        })

        axios.get(BASE_URL+'product/getcatwise_product/?search=null')
        .then(res=>{  
            setProducts(res.data) 
            console.log("-------products ------------")
            console.log(res.data)  
        }).catch(err=>{
            console.log(err)            
        })

        var toId=cookies.get('uuid');
        var url = BASE_URL+'authentication/message/?toId=' + toId 
        axios.get(url)
        .then(res=>{  
            setList(res.data)
            }).catch(err=>{
                console.log(err)            
            })
    },[])

  
    return(
        <>
            <BuyerNavbar/>
            <section className="hm-slider-section by-section-1 pb-0">
                  <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                        <div className="buyer-filter-d">
                                                <div className="buyer-hm-filter">
                                                    <div className="by-title-top-1">
                                                        <h4>Kategorilerdeki Ürün ve Markalar</h4>
                                                        <p>
                                                        İlgili olduğunuz  ve ihtiyacınız olan kategorileri ekleyin. 
                                                        </p>
                                                    </div>

                                                    <select class="form-control" id="sel1">
                                                    {showcat.map(cat=>(
                                                        <option value={cat.name}>{cat.name}</option>
                                                        ))}
                                                    </select>
                                           
                                                </div>

                                                
                                            </div>
                                            
                        </div>
                          
                      </div>

                    <div className="row">
                          <div className="col-md-12 col-xs-12 h-slider-slick buyer-h-slider-1">
                            <p className="slide-count"> 4/12 </p>
                              <Slider {...settings}>
                              
                                    <div className="col-md-12 pl-0">
                                        <div className="buyer-slider-1-box">
                                        <div className="buyer-slider-1-box-img-circle">
                                                <img className="svg-color" src="assets/images/icons/bread.svg" />
                                        </div>
                                        <div className="buyer-slider-1-box-h6"> 
                                            <NavLink to=""> Süt, Yumurta ve Kahvaltılıklar </NavLink>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="buyer-slider-1-box">
                                        <div className="buyer-slider-1-box-img-circle">
                                                <img className="svg-color" src="assets/images/icons/healthy-food.svg" />
                                        </div>
                                        <div className="buyer-slider-1-box-h6"> 
                                            <NavLink to="">Meyve, Sebze ve Kuruyemiş </NavLink>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="buyer-slider-1-box">
                                        <div className="buyer-slider-1-box-img-circle">
                                                <img className="svg-color" src="assets/images/icons/sausages.svg" />
                                        </div>
                                        <div className="buyer-slider-1-box-h6"> 
                                            <NavLink to="">Et ve Şarküteri </NavLink>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="buyer-slider-1-box">
                                        <div className="buyer-slider-1-box-img-circle">
                                                <img className="svg-color" src="assets/images/icons/sweet-food.png" />
                                        </div>
                                        <div className="buyer-slider-1-box-h6"> 
                                            <NavLink to=""> Unlu Mamüller ve Tatlılar </NavLink>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="buyer-slider-1-box">
                                        <div className="buyer-slider-1-box-img-circle">
                                                <img className="svg-color" src="assets/images/icons/frozen.png" />
                                        </div>
                                        <div className="buyer-slider-1-box-h6"> 
                                            <NavLink to=""> Dondurulmuş Gıdalar </NavLink>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="buyer-slider-1-box">
                                        <div className="buyer-slider-1-box-img-circle">
                                                <img className="svg-color" src="assets/images/icons/softdrinks.png" />
                                        </div>
                                        <div className="buyer-slider-1-box-h6"> 
                                            <NavLink to=""> İçecekler </NavLink>
                                        </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="buyer-slider-1-box">
                                        <div className="buyer-slider-1-box-img-circle">
                                                <img className="svg-color" src="assets/images/icons/bread.svg" />
                                        </div>
                                        <div className="buyer-slider-1-box-h6"> 
                                            <NavLink to=""> Süt, Yumurta ve Kahvaltılıklar </NavLink>
                                        </div>
                                        </div>
                                    </div>

                        

          
                      </Slider>

                          </div>
                    </div>
  
                  </div>
              </section>
            
            <section className="submission-to-section">
                <Container>
                    <Row>
                        <Col md="12" xs="12">
                            <div className="submission-to-title">
                                <div className="sub-d1">
                                    <h4> Size Yapılan Gönderimler </h4>
                                    <p>Firmanızda ürünlerinin satılması ile ilgilenen markaların gönderimlerine göz atın.</p>    
                                </div>
                                <div className="sub-d2">
                                    <NavLink to=""> Tüm Gönderimler <i class="fal fa-long-arrow-right"></i></NavLink>
                                </div>                
                            </div>
                        </Col>
                    </Row>

                    <Row>
                    <Col md="3" xs="12">
                        <div className="n-products-bx-man">
                                <div className="n-products-bx-banner-d">
                                    <img src="assets/images/rest.jpg" />
                                </div>

                                <div className="n-products-bx-circle-btn">
                                    <div className="n-products-bx-img-circle">
                                        <img src="assets/images/banner1.jpg" />
                                    </div>
                                    <div className="n-products-bx-img-circle-btn">
                                        <button className=""> 38 ürün </button>
                                    </div>
                                </div>

                                <div className="n-products-bx-text-content">
                                    <h6> Tua Kahve <img src="assets/images/icons/checked.png" /> </h6>
                                
                                <div className="np-inline-t">
                                <p> Kuruluş Yılı: <strong> 2000 </strong> </p>
                                    <p>Hasılat: <strong>  500₺ </strong> </p>
                                </div>

                            
                                <div className="n-products-pitem">
                                    <img src="assets/images/p-item.png" />
                                </div>

                                <div className="star-rating-d submission">
                                    <p>
                                    <img src="assets/images/icons/clock.svg" />    
                                    SON 20 GÜN
                                    </p>
                                </div>

                                    
                                </div>

                                <div className="n-products-bt-menu">
                                    <div className="n-products-bt-menu-1">
                                        <i class="fas fa-plus-circle"></i>
                                        <p> KAYDET </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-archive"></i>
                                        <p> NUMUNE </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-envelope"></i>
                                        <p>İLETİŞİM</p>
                                    </div>
                                </div>

                        </div>
                        </Col>

                        <Col md="3" xs="12">
                        <div className="n-products-bx-man">
                                <div className="n-products-bx-banner-d">
                                    <img src="assets/images/rest.jpg" />
                                </div>

                                <div className="n-products-bx-circle-btn">
                                    <div className="n-products-bx-img-circle">
                                        <img src="assets/images/banner1.jpg" />
                                    </div>
                                    <div className="n-products-bx-img-circle-btn">
                                        <button className=""> 38 ürün </button>
                                    </div>
                                </div>

                                <div className="n-products-bx-text-content">
                                    <h6> Tua Kahve <img src="assets/images/icons/checked.png" /> </h6>
                                
                                <div className="np-inline-t">
                                <p> Kuruluş Yılı: <strong> 2000 </strong> </p>
                                    <p>Hasılat: <strong>  500₺ </strong> </p>
                                </div>

                            
                                <div className="n-products-pitem">
                                    <img src="assets/images/p-item.png" />
                                </div>

                                <div className="star-rating-d submission">
                                    <p>
                                    <img src="assets/images/icons/clock.svg" />    
                                    SON 20 GÜN
                                    </p>
                                </div>

                                    
                                </div>

                                <div className="n-products-bt-menu">
                                    <div className="n-products-bt-menu-1">
                                        <i class="fas fa-plus-circle"></i>
                                        <p> KAYDET </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-archive"></i>
                                        <p> NUMUNE </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-envelope"></i>
                                        <p>İLETİŞİM</p>
                                    </div>
                                </div>

                        </div>
                        </Col>


                        <Col md="3" xs="12">
                        <div className="n-products-bx-man">
                                <div className="n-products-bx-banner-d">
                                    <img src="assets/images/rest.jpg" />
                                </div>

                                <div className="n-products-bx-circle-btn">
                                    <div className="n-products-bx-img-circle">
                                        <img src="assets/images/banner1.jpg" />
                                    </div>
                                    <div className="n-products-bx-img-circle-btn">
                                        <button className=""> 38 ürün </button>
                                    </div>
                                </div>

                                <div className="n-products-bx-text-content">
                                    <h6> Tua Kahve <img src="assets/images/icons/checked.png" /> </h6>
                                
                                <div className="np-inline-t">
                                <p> Kuruluş Yılı: <strong> 2000 </strong> </p>
                                    <p>Hasılat: <strong>  500₺ </strong> </p>
                                </div>

                            
                                <div className="n-products-pitem">
                                    <img src="assets/images/p-item.png" />
                                </div>

                                <div className="star-rating-d submission">
                                    <p>
                                    <img src="assets/images/icons/clock.svg" />    
                                    SON 20 GÜN
                                    </p>
                                </div>

                                    
                                </div>

                                <div className="n-products-bt-menu">
                                    <div className="n-products-bt-menu-1">
                                        <i class="fas fa-plus-circle"></i>
                                        <p> KAYDET </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-archive"></i>
                                        <p> NUMUNE </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-envelope"></i>
                                        <p>İLETİŞİM</p>
                                    </div>
                                </div>

                        </div>
                        </Col>


                        <Col md="3" xs="12">
                        <div className="n-products-bx-man">
                                <div className="n-products-bx-banner-d">
                                    <img src="assets/images/rest.jpg" />
                                </div>

                                <div className="n-products-bx-circle-btn">
                                    <div className="n-products-bx-img-circle">
                                        <img src="assets/images/banner1.jpg" />
                                    </div>
                                    <div className="n-products-bx-img-circle-btn">
                                        <button className=""> 38 ürün </button>
                                    </div>
                                </div>

                                <div className="n-products-bx-text-content">
                                    <h6> Tua Kahve <img src="assets/images/icons/checked.png" /> </h6>
                                
                                <div className="np-inline-t">
                                <p> Kuruluş Yılı: <strong> 2000 </strong> </p>
                                    <p>Hasılat: <strong>  500₺ </strong> </p>
                                </div>

                            
                                <div className="n-products-pitem">
                                    <img src="assets/images/p-item.png" />
                                </div>

                                <div className="star-rating-d submission">
                                    <p>
                                    <img src="assets/images/icons/clock.svg" />    
                                    SON 20 GÜN
                                    </p>
                                </div>

                                    
                                </div>

                                <div className="n-products-bt-menu">
                                    <div className="n-products-bt-menu-1">
                                        <i class="fas fa-plus-circle"></i>
                                        <p> KAYDET </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-archive"></i>
                                        <p> NUMUNE </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-envelope"></i>
                                        <p>İLETİŞİM</p>
                                    </div>
                                </div>

                        </div>
                        </Col>
                        


                    </Row>
                </Container>
            </section>

            <section className="hm-slider-section buyer-slide-section-2 pb-0">
                  <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                        <div className="buyer-filter-d">
                            <div className="buyer-hm-filter buyer-slide-2">
                                <div className="by-title-top-1">
                                    <h4>Kategorilerdeki Ürün ve Markalar</h4>
                                    <p className="mb-0">
                                    İlgili olduğunuz  ve ihtiyacınız olan kategorileri ekleyin. 
                                    </p>
                                </div>
                            </div>               
                        </div>
                                            
                        </div>
                          
                      </div>

                    <div className="row">
                          <div className="col-md-12 col-xs-12 h-slider-slick buyer-h-slider-2">
                            <p className="slide-count"> 4/12 </p>
                              <Slider {...settings2}>
                                <Col md="12" xs="12" className="pl-0">
                                        <div className="brand-product-box-d  bu-2">
                                            <div className="p-img">
                                                <img src="assets/images/blog1.jpg" alt="p-image" />
                                            </div>
                                            <div className="p-text-d-12458">
                                                <h6> Lorem</h6>
                                                <div className="box-list">
                                                    <p>
                                                        Vejetaryan Dondurma
                                                    </p>
                                                    <p>
                                                        10 Haziran - 30 Ağustos
                                                    </p>
                                                    <NavLink to=""> Daha Fazla Bilgi </NavLink>
                                                </div>
                                                
                                            </div>
                                            <div className="bt-d-subb">
                                                <button className="btn-bl">
                                                GELEN <span>CEVAPLAR</span>
                                                </button>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md="12" xs="12" className="pl-0">
                                        <div className="brand-product-box-d  bu-2">
                                            <div className="p-img">
                                                <img src="assets/images/blog1.jpg" alt="p-image" />
                                            </div>
                                            <div className="p-text-d-12458">
                                                <h6> Lorem</h6>
                                                <div className="box-list">
                                                    <p>
                                                        Vejetaryan Dondurma
                                                    </p>
                                                    <p>
                                                        10 Haziran - 30 Ağustos
                                                    </p>
                                                    <NavLink to=""> Daha Fazla Bilgi </NavLink>
                                                </div>
                                                
                                            </div>
                                            <div className="bt-d-subb">
                                                <button className="btn-bl">
                                                GELEN <span>CEVAPLAR</span>
                                                </button>
                                            </div>
                                        </div>
                                    </Col>
                              

                                    <Col md="12" xs="12" className="pl-0">
                                        <div className="brand-product-box-d  bu-2">
                                            <div className="p-img">
                                                <img src="assets/images/blog1.jpg" alt="p-image" />
                                            </div>
                                            <div className="p-text-d-12458">
                                                <h6> Lorem</h6>
                                                <div className="box-list">
                                                    <p>
                                                        Vejetaryan Dondurma
                                                    </p>
                                                    <p>
                                                        10 Haziran - 30 Ağustos
                                                    </p>
                                                    <NavLink to=""> Daha Fazla Bilgi </NavLink>
                                                </div>
                                                
                                            </div>
                                            <div className="bt-d-subb">
                                                <button className="btn-bl">
                                                GELEN <span>CEVAPLAR</span>
                                                </button>
                                            </div>
                                        </div>
                                    </Col>
                              

                                    <Col md="12" xs="12" className="pl-0">
                                        <div className="brand-product-box-d  bu-2">
                                            <div className="p-img">
                                                <img src="assets/images/blog1.jpg" alt="p-image" />
                                            </div>
                                            <div className="p-text-d-12458">
                                                <h6> Lorem</h6>
                                                <div className="box-list">
                                                    <p>
                                                        Vejetaryan Dondurma
                                                    </p>
                                                    <p>
                                                        10 Haziran - 30 Ağustos
                                                    </p>
                                                    <NavLink to=""> Daha Fazla Bilgi </NavLink>
                                                </div>
                                                
                                            </div>
                                            <div className="bt-d-subb">
                                                <button className="btn-bl">
                                                GELEN <span>CEVAPLAR</span>
                                                </button>
                                            </div>
                                        </div>
                                    </Col>
                              

                                    <Col md="12" xs="12" className="pl-0">
                                        <div className="brand-product-box-d  bu-2">
                                            <div className="p-img">
                                                <img src="assets/images/blog1.jpg" alt="p-image" />
                                            </div>
                                            <div className="p-text-d-12458">
                                                <h6> Lorem</h6>
                                                <div className="box-list">
                                                    <p>
                                                        Vejetaryan Dondurma
                                                    </p>
                                                    <p>
                                                        10 Haziran - 30 Ağustos
                                                    </p>
                                                    <NavLink to=""> Daha Fazla Bilgi </NavLink>
                                                </div>
                                                
                                            </div>
                                            <div className="bt-d-subb">
                                                <button className="btn-bl">
                                                GELEN <span>CEVAPLAR</span>
                                                </button>
                                            </div>
                                        </div>
                                    </Col>
                              
                              </Slider>

                          </div>
                    </div>
  
                  </div>
              </section>
            
            <section className="submission-to-section">
                <Container>
                    <Row>
                        <Col md="12" xs="12">
                            <div className="submission-to-title">
                                <div className="sub-d1">
                                    <h4> Tayuss Onaylı Markalar </h4>
                                    <p>Tayuss onaylı perakende satışa hazır markaları inceleyin. </p>    
                                </div>
                                <div className="sub-d2">
                                    <NavLink to=""> Tüm Markalar <i class="fal fa-long-arrow-right"></i></NavLink>
                                </div>                
                            </div>
                        </Col>
                    </Row>

                    <Row>                 
                        <Col md="3" xs="12">
                        <div className="n-products-bx-man">
                                <div className="n-products-bx-banner-d">
                                    <img src="assets/images/rest.jpg" />
                                </div>

                                <div className="n-products-bx-circle-btn">
                                    <div className="n-products-bx-img-circle">
                                        <img src="assets/images/banner1.jpg" />
                                    </div>
                                    <div className="n-products-bx-img-circle-btn">
                                        <button className=""> 38 ürün </button>
                                    </div>
                                </div>

                                <div className="n-products-bx-text-content">
                                    <h6> Tua Kahve <img src="assets/images/icons/checked.png" /> </h6>
                                
                                <div className="np-inline-t">
                                <p> Kuruluş Yılı: <strong> 2000 </strong> </p>
                                    <p>Hasılat: <strong>  500₺ </strong> </p>
                                </div>

                                <div className="star-rating-d">
                                    <ReactStars
                                            count={5}
                                            color="#95b0ba"
                                            onChange={ratingChanged}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                </div>

                                <div className="n-products-pitem">
                                    <img src="assets/images/p-item.png" />
                                </div>
                                    
                                </div>

                                <div className="n-products-bt-menu">
                                    <div className="n-products-bt-menu-1">
                                        <i class="fas fa-plus-circle"></i>
                                        <p> KAYDET </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-archive"></i>
                                        <p> NUMUNE </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-envelope"></i>
                                        <p>İLETİŞİM</p>
                                    </div>
                                </div>

                        </div>
                        </Col>
                        
                        <Col md="3" xs="12">
                        <div className="n-products-bx-man">
                                <div className="n-products-bx-banner-d">
                                    <img src="assets/images/rest.jpg" />
                                </div>

                                <div className="n-products-bx-circle-btn">
                                    <div className="n-products-bx-img-circle">
                                        <img src="assets/images/banner1.jpg" />
                                    </div>
                                    <div className="n-products-bx-img-circle-btn">
                                        <button className=""> 38 ürün </button>
                                    </div>
                                </div>

                                <div className="n-products-bx-text-content">
                                    <h6> Tua Kahve <img src="assets/images/icons/checked.png" /> </h6>
                                
                                <div className="np-inline-t">
                                <p> Kuruluş Yılı: <strong> 2000 </strong> </p>
                                    <p>Hasılat: <strong>  500₺ </strong> </p>
                                </div>

                                <div className="star-rating-d">
                                    <ReactStars
                                            count={5}
                                            color="#95b0ba"
                                            onChange={ratingChanged}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                </div>

                                <div className="n-products-pitem">
                                    <img src="assets/images/p-item.png" />
                                </div>
                                    
                                </div>

                                <div className="n-products-bt-menu">
                                    <div className="n-products-bt-menu-1">
                                        <i class="fas fa-plus-circle"></i>
                                        <p> KAYDET </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-archive"></i>
                                        <p> NUMUNE </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-envelope"></i>
                                        <p>İLETİŞİM</p>
                                    </div>
                                </div>

                        </div>
                        </Col>


                        <Col md="3" xs="12">
                        <div className="n-products-bx-man">
                                <div className="n-products-bx-banner-d">
                                    <img src="assets/images/rest.jpg" />
                                </div>

                                <div className="n-products-bx-circle-btn">
                                    <div className="n-products-bx-img-circle">
                                        <img src="assets/images/banner1.jpg" />
                                    </div>
                                    <div className="n-products-bx-img-circle-btn">
                                        <button className=""> 38 ürün </button>
                                    </div>
                                </div>

                                <div className="n-products-bx-text-content">
                                    <h6> Tua Kahve <img src="assets/images/icons/checked.png" /> </h6>
                                
                                <div className="np-inline-t">
                                <p> Kuruluş Yılı: <strong> 2000 </strong> </p>
                                    <p>Hasılat: <strong>  500₺ </strong> </p>
                                </div>

                                <div className="star-rating-d">
                                    <ReactStars
                                            count={5}
                                            color="#95b0ba"
                                            onChange={ratingChanged}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                </div>

                                <div className="n-products-pitem">
                                    <img src="assets/images/p-item.png" />
                                </div>
                                    
                                </div>

                                <div className="n-products-bt-menu">
                                    <div className="n-products-bt-menu-1">
                                        <i class="fas fa-plus-circle"></i>
                                        <p> KAYDET </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-archive"></i>
                                        <p> NUMUNE </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-envelope"></i>
                                        <p>İLETİŞİM</p>
                                    </div>
                                </div>

                        </div>
                        </Col>


                        <Col md="3" xs="12">
                        <div className="n-products-bx-man">
                                <div className="n-products-bx-banner-d">
                                    <img src="assets/images/rest.jpg" />
                                </div>

                                <div className="n-products-bx-circle-btn">
                                    <div className="n-products-bx-img-circle">
                                        <img src="assets/images/banner1.jpg" />
                                    </div>
                                    <div className="n-products-bx-img-circle-btn">
                                        <button className=""> 38 ürün </button>
                                    </div>
                                </div>

                                <div className="n-products-bx-text-content">
                                    <h6> Tua Kahve <img src="assets/images/icons/checked.png" /> </h6>
                                
                                <div className="np-inline-t">
                                <p> Kuruluş Yılı: <strong> 2000 </strong> </p>
                                    <p>Hasılat: <strong>  500₺ </strong> </p>
                                </div>

                                <div className="star-rating-d">
                                    <ReactStars
                                            count={5}
                                            color="#95b0ba"
                                            onChange={ratingChanged}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                </div>

                                <div className="n-products-pitem">
                                    <img src="assets/images/p-item.png" />
                                </div>
                                    
                                </div>

                                <div className="n-products-bt-menu">
                                    <div className="n-products-bt-menu-1">
                                        <i class="fas fa-plus-circle"></i>
                                        <p> KAYDET </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-archive"></i>
                                        <p> NUMUNE </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-envelope"></i>
                                        <p>İLETİŞİM</p>
                                    </div>
                                </div>

                        </div>
                        </Col>

                    </Row>
                </Container>
            </section>
   
            <section className="submission-to-section pt-0">
                <Container>
                    <Row>
                        <Col md="12" xs="12">
                            <div className="submission-to-title">
                                <div className="sub-d1">
                                    <h4> Kaydettiğiniz Ürünler </h4>
                                    <p>Daha önce ilginizi çeken kaydettiğiniz ürünleri inceleyin. </p>    
                                </div>
                                <div className="sub-d2">
                                    <NavLink to=""> Tüm Markalar <i class="fal fa-long-arrow-right"></i></NavLink>
                                </div>                
                            </div>
                        </Col>
                    </Row>

                    <Row>                 
                        <Col md="3" xs="12">
                        <div className="n-products-bx-man">

                                <div className="n-products-bx-text-content">

                                <div className="n-products-pitem">
                                    <img src="assets/images/p-item.png" />
                                </div>

                                <div className="star-rating-d brands">
                                    <ReactStars
                                            count={5}
                                            color="#95b0ba"
                                            onChange={ratingChanged}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                </div>
                                <h6> Espresso Blend </h6>
                                <p className="brand-item-p">  Tua Kahve  <img src="assets/images/icons/checked.png" /> </p>
                                <div className="np-inline-t">
                                <p> maliyeti : <strong>  2₺ </strong> </p>
                                    <p>marjı : <strong>   %40 </strong> </p>
                                </div>
                                    
                                </div>

                                <div className="n-products-bt-menu brands">
                                    <div className="n-products-bt-menu-1">
                                        <i class="fas fa-plus-circle"></i>
                                        <p> KAYDET </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-archive"></i>
                                        <p> NUMUNE </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-envelope"></i>
                                        <p>İLETİŞİM</p>
                                    </div>
                                </div>

                        </div>
                        </Col>

                        <Col md="3" xs="12">
                        <div className="n-products-bx-man">

                                <div className="n-products-bx-text-content">

                                <div className="n-products-pitem">
                                    <img src="assets/images/p-item.png" />
                                </div>

                                <div className="star-rating-d brands">
                                    <ReactStars
                                            count={5}
                                            color="#95b0ba"
                                            onChange={ratingChanged}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                </div>
                                <h6> Espresso Blend </h6>
                                <p className="brand-item-p">  Tua Kahve  <img src="assets/images/icons/checked.png" /> </p>
                                <div className="np-inline-t">
                                <p> maliyeti : <strong>  2₺ </strong> </p>
                                    <p>marjı : <strong>   %40 </strong> </p>
                                </div>
                                    
                                </div>

                                <div className="n-products-bt-menu brands">
                                    <div className="n-products-bt-menu-1">
                                        <i class="fas fa-plus-circle"></i>
                                        <p> KAYDET </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-archive"></i>
                                        <p> NUMUNE </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-envelope"></i>
                                        <p>İLETİŞİM</p>
                                    </div>
                                </div>

                        </div>
                        </Col>

                        <Col md="3" xs="12">
                        <div className="n-products-bx-man">

                                <div className="n-products-bx-text-content">

                                <div className="n-products-pitem">
                                    <img src="assets/images/p-item.png" />
                                </div>

                                <div className="star-rating-d brands">
                                    <ReactStars
                                            count={5}
                                            color="#95b0ba"
                                            onChange={ratingChanged}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                </div>
                                <h6> Espresso Blend </h6>
                                <p className="brand-item-p">  Tua Kahve  <img src="assets/images/icons/checked.png" /> </p>
                                <div className="np-inline-t">
                                <p> maliyeti : <strong>  2₺ </strong> </p>
                                    <p>marjı : <strong>   %40 </strong> </p>
                                </div>
                                    
                                </div>

                                <div className="n-products-bt-menu brands">
                                    <div className="n-products-bt-menu-1">
                                        <i class="fas fa-plus-circle"></i>
                                        <p> KAYDET </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-archive"></i>
                                        <p> NUMUNE </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-envelope"></i>
                                        <p>İLETİŞİM</p>
                                    </div>
                                </div>

                        </div>
                        </Col>

                        <Col md="3" xs="12">
                        <div className="n-products-bx-man">

                                <div className="n-products-bx-text-content">

                                <div className="n-products-pitem">
                                    <img src="assets/images/p-item.png" />
                                </div>

                                <div className="star-rating-d brands">
                                    <ReactStars
                                            count={5}
                                            color="#95b0ba"
                                            onChange={ratingChanged}
                                            size={24}
                                            activeColor="#ffd700"
                                        />
                                </div>
                                <h6> Espresso Blend </h6>
                                <p className="brand-item-p">  Tua Kahve  <img src="assets/images/icons/checked.png" /> </p>
                                <div className="np-inline-t">
                                <p> maliyeti : <strong>  2₺ </strong> </p>
                                    <p>marjı : <strong>   %40 </strong> </p>
                                </div>
                                    
                                </div>

                                <div className="n-products-bt-menu brands">
                                    <div className="n-products-bt-menu-1">
                                        <i class="fas fa-plus-circle"></i>
                                        <p> KAYDET </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-archive"></i>
                                        <p> NUMUNE </p>
                                    </div>

                                    <div className="n-products-bt-menu-1">
                                    <i class="fas fa-envelope"></i>
                                        <p>İLETİŞİM</p>
                                    </div>
                                </div>

                        </div>
                        </Col>


                    </Row>
                </Container>
            </section>

            <InnerFooter/>

        </> 
    );
}

export default HomeBuyer
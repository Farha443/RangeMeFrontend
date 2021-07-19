import React, {useEffect, userEffect, useState} from 'react';
import Header from '../menubar/Header'
import Footer from '../footer/Footer'
import { Link,NavLink } from "react-router-dom";
import SignupModal from '../element/SignupModal';
// import Hslider from './Hslider';
import Slider from "react-slick";
import BASE_URL from '../base';
import axios from 'axios';

function get_date(dt_string){
  var dt = dt_string.split('_')[0]
  // var dtt = dt_string.split('_')[2]
  var dtt = dt_string.split('-')[2].split('T')[0]
  var month_list=['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec']
  var date_parts = dt.split('-');
  // dtt = dtt + ' ' + ((dtt.split(':')[0] >= 12) ? "PM" : "AM");
  return date_parts[0]+' '+month_list[parseInt(date_parts[1])-1] +' '+ dtt;
}


function Home(){ 
  const [modalShow, setModalShow] = useState(false);
  const [home, setHome] = useState({})
  const [stats, setStats]= useState([])
  const [works, setWorks]= useState([])
  // const [succestory, setSuccestory]= useState([])
  const [blogs, setBlogs]= useState([])
  const [heading, setheading]= useState([])
  useEffect(() => {
   
    axios.get(BASE_URL+'home/homeview/')
    .then(res=>{
      setHome(res.data)
      setheading(res.data.heading)
      setWorks(res.data.works)
      setBlogs(res.data.blogs)
      setStats(res.data.stats)
      console.log(res.data)  
    }).catch(err=>{
        console.log(err)            
    })
    console.log(home)


},[])


 function Redirect(uuid){
  // cookies.set('blog',uuid,{path:'/'});
  window.location='/blog_detail/'+uuid;
}
  const settings = {
    dots: false,
    Nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    return(
        <>
        {/* <SignupModal/> */}
        <SignupModal show={modalShow} onHide={() => setModalShow(false)} />
         <Header/>   
          <div className="my-container" >    
            <main className="content" >
              <section className="banner-section">
                  <div className="container">
                      <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="banner-left-content">
                                <div className="banner-text-left">
                                <h6> SEKTÖRÜN ÖNCÜ </h6>
                                <h1 className="f-t-1"> TEDARİKÇİLERİ <span> VE </span>  </h1>
                                <h1 className="f-t-2"> ALICI FİRMALARI   </h1>
                                <h2 className="f-t-3"> BİR ARAYA GETİRİYORUZ!
                                </h2>
                                <button className="banner-btn"> ÜCRETSİZ KAYDOL <i class="fal fa-long-arrow-right"></i> </button>
                                </div>
                                {heading.bg_img != null ? <div className="banner-section" style={{backgroundImage: 'url("'+BASE_URL.slice(0,-5)+ heading.bg_img+'")'}}>
                </div>:<div className="banner-section" style={{backgroundImage: 'url("assets/images/banner1.jpg")'}}>
                </div>}
                            </div>
                        </div>

                        <div className="col-md-6 col-xs-12">
                            <div className="banner-right-cont">
                                {/* <img className="" src="assets/images/—Pngtree—laptop modern frameless with blank_5566734.png" /> */}
                                <img src=""></img>
                            </div>
                        </div>
                      </div>
                  </div>
              </section>
             
              <section className="section counter-section">

                <div className="logo-main-d">
                  <ul>
                    <li>
                      <div className="log-d-14254">
                          <img src="assets/images/640px-MiGROS_Logo.png" />
                      </div>
                    </li>

                    <li>
                      <div className="log-d-14254">
                          <img src="assets/images/640px-MiGROS_Logo.png" />
                      </div>
                    </li>

                    <li>
                      <div className="log-d-14254">
                          <img src="assets/images/640px-MiGROS_Logo.png" />
                      </div>
                    </li>

                    <li>
                      <div className="log-d-14254">
                          <img src="assets/images/640px-MiGROS_Logo.png" />
                      </div>
                    </li>

                    <li>
                      <div className="log-d-14254">
                          <img src="assets/images/640px-MiGROS_Logo.png" />
                      </div>
                    </li>
                    <li>
                      <div className="log-d-14254">
                          <img src="assets/images/640px-MiGROS_Logo.png" />
                      </div>
                    </li>


                  </ul>
                </div>

                <div className="section__inner">
                  <div className="section__sub-section">
                    <div className="layout-block layout-block--12">
                      <div className="layout-block__inner">
                        <div className="layout-block__cell">
                          <p className="sect-2-t-1 small-heading dark-text"> 
                          Tedarikçilerin ürünlerini alıcı firmalar tarafından keşfettiği, <span className="span-1204"> Lorem ipsum dollar site ameat. </span>
                          </p>
                          <p className="sect-2-t-2">
                          Tayuss İle İlİşkİlerİnİzİ güçlendİrerek <span className="span-1204"> satışlarınızı arttırın! </span>
                          </p>
                        </div>
                        <div className="layout-block__cell">
                          <div className="stats">
                          {home.stats && home.stats.map(stats=>(
                            <div className="stats__item">
                              <div className="count-icn stats__description">
                              <i class="far fa-store"></i>
                              </div>
                              <div className="stats_icn-m">
                              <p className="stats__description">{stats.content}</p>
                              <span className="stats__value blue-text">{stats.num}+</span>
                             
                              </div>
                            </div>))}
                            {!home.stats && 
                            <div className="stats__item">
                              <div className="count-icn stats__description">
                              <i class="fad fa-id-card-alt"></i>
                              </div>
                              <div className="stats_icn-m">
                                <p className="stats__description">Tedarikçiler</p>
                                <span className="stats__value blue-text">30,000+</span>
                              </div>  
                               </div>}

                               {/* <div className="stats__item">
                              <div className="count-icn stats__description">
                              <i class="fad fa-box-check"></i>
                              </div>
                              <div className="stats_icn-m">
                                  <p className="stats__description"> Kayıtlı Ürün </p>
                                  <span className="stats__value blue-text">700,00+</span>
                                </div>  
                               </div> */}

                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              <section className="lr-title-section">
                <div className="container">
                <div className="lr-title-mn">
                  <h1><span className="le-rirle-span"> NASIL </span> ÇALIŞIR? </h1>
                </div>
                </div>
              </section>

              <section className="lr-section-main"> 
                  <div className="container">
                    <div className="row"> 
                        <div className="col-md-12 col-xs-12">
                            <div className="lr-title-1">

                              <h3> TEDARİKÇİLER </h3>
                              <NavLink to=""> Tüm Özellikler <i class="fal fa-long-arrow-right"></i> </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="row"> 
                        <div className="col-md-6 co-xs-12">
                            <div className="d-one-12423">
                                <ul>
                                  <li>
                                    <div className="ic-text-mn">
                                      <div className="ic-5248"> 
                                         <i class="fas fa-id-card"></i>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h5> Marka Profilinizi Oluşturun </h5>
                                        <p> Alıcı firmaların ihtiyaç duyabileceği önemli marka bilgileriniz </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                      <div className="ic-5248"> 
                                      <i class="fad fa-box-check"></i>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h5> Ürün Sayfanızı Tanıtın </h5>
                                        <p> Alıcı firmaların ihtiyaç duyabileceği önemli marka bilgileriniz </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                      <div className="ic-5248"> 
                                      <i class="fal fa-share-square"></i>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h5> Profilinizi Paylaşın </h5>
                                        <p> Alıcı firmaların ihtiyaç duyabileceği önemli marka bilgileriniz </p>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="frame-main-d">
                                <img src="assets/images/btn.png" />
                            </div>
                        </div>
                    </div>

                  </div>
              </section>
            
              <section className="lr-section-main lr-2sec"> 
                  <div className="container">
                    <div className="row"> 
                        <div className="col-md-12 col-xs-12">
                            <div className="lr-title-1">

                              <h3> ALICI FİRMALAR </h3>
                              <NavLink to=""> Tüm Özellikler <i class="fal fa-long-arrow-right"></i> </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="row"> 
                          <div className="col-md-6 col-xs-12">
                            <div className="frame-main-d">
                                <img src="assets/images/btn.png" />
                            </div>
                        </div>
                        <div className="col-md-6 co-xs-12">
                            <div className="d-one-12423">
                                <ul>
                                  <li>
                                    <div className="ic-text-mn">
                                      <div className="ic-5248 ic-22"> 
                                      <i class="fas fa-user-plus"></i>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h5> Hesap Oluşturun  </h5>
                                        <p> Alıcı firmaların ihtiyaç duyabileceği önemli marka bilgileriniz </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                      <div className="ic-5248 ic-22"> 
                                      <i class="far fa-hand-holding-box"></i>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h5> Yeni Ürünleri Keşfedin </h5>
                                        <p> Alıcı firmaların ihtiyaç duyabileceği önemli marka bilgileriniz </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                      <div className="ic-5248 ic-22"> 
                                      <i class="fad fa-users-class"></i>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h5> Tedarikçilerle Bağlantı Kurun </h5>
                                        <p> Alıcı firmaların ihtiyaç duyabileceği önemli marka bilgileriniz </p>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                            </div>
                        </div>
                     

                    </div>

                  </div>
              </section>
              
              <section className="mid-banner-section" style={{}}>
              
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12 col-xs-12"> 
                          <div className="midd-banner-text">
                            <h5 className="h-01-1"> HİZMET SAĞLAYICILAR </h5>
                            <h6 className="h-01-2"> Tayuss ile binlerce ürün tedarikçisini keşfet ve <span> hizmetlerini  </span></h6>
                            <p className="p-01-1"> Ürün tedarikçilerinin ihtiyaçlarını karşılayan hizmet sağlayıcı. Ürün tedarikçilerinin <br/> ihtiyaçlarını karşılayan hizmet sağlayıcı </p>
                            <NavLink to="" className="mid-banner-a"> Tüm Özellikler <i class="fal fa-long-arrow-right"></i> </NavLink>
                          </div>  
                      </div>
                    </div>
                  </div>
              </section>

              <section className="hm-slider-section">
                  <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                          
                            <div className="hm-slider-title">
                            <h1> YARARLI <span class="hm-title-h">  BİLGİLER </span> </h1>
                            </div>
                        </div>
                          
                      </div>

                        <div className="row">
                    <div className="col-md-12 col-xs-12 h-slider-slick">

                      <p className="slide-count"> 4/12 </p>
                    <Slider {...settings}>
                        <div className="col-md-12">
                          <div className="slider-box-main">
                                <div className="hm-slider-img-d">
                                    <img src="assets/images/h3.jpg" />
                                </div>
                                <div className="hm-slider-tect-cont">
                                    <h5>Lorem ipsum dolor sit amet,  consetetur </h5>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                    </p>
                                    <NavLink to=""> Detaylı İncele </NavLink>
                                </div>
                            </div>


                            <div className="slider-box-main">
                                <div className="hm-slider-img-d">
                                    <img src="assets/images/h3.jpg" />
                                </div>
                                <div className="hm-slider-tect-cont">
                                    <h5>Lorem ipsum dolor sit amet,  consetetur </h5>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                    </p>
                                    <NavLink to=""> Detaylı İncele </NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                          <div className="slider-box-main">
                                <div className="hm-slider-img-d">
                                    <img src="assets/images/h3.jpg" />
                                </div>
                                <div className="hm-slider-tect-cont">
                                    <h5>Lorem ipsum dolor sit amet,  consetetur </h5>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                    </p>
                                    <NavLink to=""> Detaylı İncele </NavLink>
                                </div>
                            </div>

                            <div className="slider-box-main">
                                <div className="hm-slider-img-d">
                                    <img src="assets/images/h3.jpg" />
                                </div>
                                <div className="hm-slider-tect-cont">
                                    <h5>Lorem ipsum dolor sit amet,  consetetur </h5>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                    </p>
                                    <NavLink to=""> Detaylı İncele </NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                          <div className="slider-box-main">
                                <div className="hm-slider-img-d">
                                    <img src="assets/images/h3.jpg" />
                                </div>
                                <div className="hm-slider-tect-cont">
                                    <h5>Lorem ipsum dolor sit amet,  consetetur </h5>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                    </p>
                                    <NavLink to=""> Detaylı İncele </NavLink>
                                </div>
                            </div>

                            <div className="slider-box-main">
                                <div className="hm-slider-img-d">
                                    <img src="assets/images/h3.jpg" />
                                </div>
                                <div className="hm-slider-tect-cont">
                                    <h5>Lorem ipsum dolor sit amet,  consetetur </h5>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                    </p>
                                    <NavLink to=""> Detaylı İncele </NavLink>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-12">
                          <div className="slider-box-main">
                                <div className="hm-slider-img-d">
                                    <img src="assets/images/h3.jpg" />
                                </div>
                                <div className="hm-slider-tect-cont">
                                    <h5>Lorem ipsum dolor sit amet,  consetetur </h5>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                    </p>
                                    <NavLink to=""> Detaylı İncele </NavLink>
                                </div>
                            </div>
                            <div className="slider-box-main">
                                <div className="hm-slider-img-d">
                                    <img src="assets/images/h3.jpg" />
                                </div>
                                <div className="hm-slider-tect-cont">
                                    <h5>Lorem ipsum dolor sit amet,  consetetur </h5>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                    </p>
                                    <NavLink to=""> Detaylı İncele </NavLink>
                                </div>
                            </div>

                        </div>
                       
                      </Slider>


                          </div>
                    </div>

                      

                  

                    
                  </div>
              </section>

              <section className="btm-banner-section"> 
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div className="btm-banner-cont-m"> 
                                <div className="btm-banner-text">
                                  <h3> <span className="btm-banner-text-yl"> Lorem ipsum </span>  dolor sit amet, consetetur.  </h3>
                              </div>
                              <div className="btm-banner-btn">
                                  <button className="bt254">
                                  ÜCRETSİZ KAYDOL  <i class="fal fa-long-arrow-right"></i>
                                  </button>
                              </div>
                                </div>
                            </div>
                        </div>
                    </div>
              </section>


              
           
            </main>

           
           

            <Footer/>



          </div>
        

        </>
    );
}

export default Home
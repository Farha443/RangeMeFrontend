import React from 'react';
import Header from '../menubar/Header'
import Footer from '../footer/Footer'
import { Link,NavLink } from "react-router-dom";
import useState from 'react-hook-use-state';
import SignupModal from '../element/SignupModal';
import Slider from "react-slick";


function BlogDetail1(){

  const [modalShow, setModalShow] = useState(false);
    
  const settings = {
    dots: false,
    Nav: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    rows: 1,
    slidesPerRow: 1,
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

              <section className="other-banner-section" style={{backgroundImage: 'url(../assets/images/banner-1.jpg)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="supplie-banner-text b-detail-hero">
                                <p className="p1"> <NavLink to="" className="bd">  yararlı bilgiler </NavLink> <NavLink className="bd" to="">  anasayfa </NavLink> </p>
                                <h1>Lorem ipsum dolor sit amet, ipsum consetetur  </h1>
                             
                            </div>
                        </div>
                    </div>
                </div>
              </section> 

              <section className="lr-section-main bg-g"> 
                  <div className="container">

                    <div className="row"> 
                        <div className="col-md-6 co-xs-12">
                            <div className="d-one-12423">
                              <p className="blog-detail-text pt-1"> 
                              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                              </p>

                              <p className="blog-detail-text pt-2"> 
                              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over.
                              </p>

                            </div>
                        </div>
                        <div className="col-md-5 m-auto col-xs-12">
                            <div className="frame-main-d">
                                <img src="assets/images/btn.png" />
                            </div>
                        </div>
                        <div className="col-md-12 col-xs-12">
                            <div className="bd-text-full">
                            <p className="blog-detail-text pt-2"> 
                              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over.
                              </p>
                            </div>
                        </div>
                      
                    </div>

                  </div>
              </section>
            
              <section className="lr-section-main lr-2sec"  style={{background:"white"}}> 
                  <div className="container">
                    <div className="row"> 
                        <div className="col-md-5  col-xs-12">
                            <div className="frame-main-d">
                                <img src="assets/images/btn.png" />
                            </div>
                        </div>

                        <div className="col-md-6 co-xs-12 ml-auto">
                        <div className="d-one-12423">
                              <p className="blog-detail-text pt-1 mt-0"> 
                             Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  </p>

                              <p className="blog-detail-text pt-2"> 
                              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over.
                             </p>

                            </div>
                          
                        </div>

                    </div>

                  </div>
              </section>
              <section className="hm-slider-section pb-0">
                  <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="hm-slider-title">
                            <h1>DİĞER <span class="hm-title-h">  YARARLI BİLGİLER </span> </h1>
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

                        </div>

                      </Slider>

                          </div>
                    </div>
  
                  </div>
              </section>
       
              <section className="hm-slider-section supplie" >
                  <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="hm-slider-title">
                            <h1>BAZI <span class="hm-title-h"> ALICI FİRMALAR  </span> </h1>
                            </div>
                        </div>

                        <div className="logo-main-d spplie">
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
                          
                      </div>

                      

                  </div>
              </section>

           

              <section className="btm-banner-section"> 
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div className="btm-banner-cont-m"> 
                                <div className="btm-banner-text">
                                  <h3> <span className="btm-banner-text-yl">HEMEN ÜCRETSİZ  </span>  HESAP OLUŞTUR!  </h3>
                              </div>
                              <div className="btm-banner-btn supplie">
                                 <NavLink to=""> <i class="fal fa-long-arrow-right"></i> </NavLink>
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

export default BlogDetail1
import React from 'react';
import Header from '../menubar/Header'
import Footer from '../footer/Footer'
import { Link,NavLink, withRouter } from "react-router-dom";
import useState from 'react-hook-use-state';
import SignupModal from '../element/SignupModal';


function Blog(){

  const [modalShow, setModalShow] = useState(false);

    return(
        <>
        <SignupModal show={modalShow} onHide={() => setModalShow(false)} />

         <Header/>   
        
          <div className="my-container" >
            <main className="content" >

              <section className="other-banner-section" style={{backgroundImage: 'url(../assets/images/banner-1.jpg)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="supplie-banner-text">
                                <p className="p1"> anasayfa </p>
                                <h1> HAKKIMIZDA </h1>
                                <p className="p2">Lorem ipsum dolor sit amet, <span >  consetetur sadipscing elitr, </span> </p>
                                <NavLink to=""> sed diam nonumy eirmod.  </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
              </section>
              <section className="blog-n-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-xs-12">
                                <div className="blog-n-box">
                                    <div className="blog-n-img-d">
                                        <img src="assets/images/blog1.jpg" />
                                    </div>
                                    <div className="blog-n-text">
                                        <h5>Lorem ipsum dolor sit amet, ipsum consetetur  </h5>
                                        <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor. At vero eos et accusam et justo duo dolores et ea rebum...
                                        </p>
                                        <NavLink to=""> Detaylı İncele </NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-xs-12">
                                <div className="blog-n-box">
                                    <div className="blog-n-img-d">
                                        <img src="assets/images/blog1.jpg" />
                                    </div>
                                    <div className="blog-n-text">
                                        <h5>Lorem ipsum dolor sit amet, ipsum consetetur  </h5>
                                        <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor. At vero eos et accusam et justo duo dolores et ea rebum...
                                        </p>
                                        <NavLink to=""> Detaylı İncele </NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-xs-12">
                                <div className="blog-n-box">
                                    <div className="blog-n-img-d">
                                        <img src="assets/images/blog1.jpg" />
                                    </div>
                                    <div className="blog-n-text">
                                        <h5>Lorem ipsum dolor sit amet, ipsum consetetur  </h5>
                                        <p>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor. At vero eos et accusam et justo duo dolores et ea rebum...
                                        </p>
                                        <NavLink to=""> Detaylı İncele </NavLink>
                                    </div>
                                </div>
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

export default Blog
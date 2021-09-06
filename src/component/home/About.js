import React, {useEffect, userEffect, useState} from 'react';
import Header from '../menubar/Header'
import Footer from '../footer/Footer'
import { Link,NavLink, withRouter } from "react-router-dom";
import SignupModal from '../element/SignupModal';
import BASE_URL from '../base';
import axios from 'axios';
import Cookies from 'universal-cookie';

var tr=""
var btmimg =""
var mid_b_img = ""
var first = ""
var second = ""
const cookies = new Cookies();
function About(){

  const [modalShow, setModalShow] = useState(false);
  const [link, setlink]= useState([])
  const [mbanner,setmbanner]=useState([])
  const [heading, setheading]= useState([])

  useEffect(() => {
    axios.get(BASE_URL+'about/about/')
    .then(res=>{
      setheading(res.data.heading)
      mid_b_img = res.data.mid_ban_img.bg_image
      tr=res.data.btm_banner.content
      first = res.data.desc_one.heading
      second = res.data.desc_two.heading
      setmbanner(res.data.midd_banner)
      btmimg=res.data.btm_banner.image
      setlink(res.data.links)
  
    }).catch(err=>{
        console.log(err)            
    })
},[])

function onClickButton(e){
  e.preventDefault()
  var supplier = "supplier";
  cookies.set('userType', supplier, { path: '/' });
  setModalShow(true)
}

    return(
        <>
        <SignupModal show={modalShow} onHide={() => setModalShow(false)} />

         <Header/>   
        
          <div className="my-container" >
            <main className="content" >

              <section className="other-banner-section" style={{backgroundImage: 'url('+(heading.bg_img?BASE_URL.slice(0,-5)+heading.bg_img:"assets/images/banner-1.jpg")+')'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="supplie-banner-text">
                            <NavLink to="/" className="a11"> anasayfa </NavLink>
                                <h1>{heading.heading} </h1>
                                <p className="p2">{heading.description} </p>
                                {/* <NavLink to=""> sed diam nonumy eirmod.  </NavLink> */}
                            </div>
                        </div>
                    </div>
                </div>
              </section>
             
              <section className="service-p-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="about-text-md">
                                <p>{first}</p>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

              <section className="hesap-banner-section"   style={{backgroundImage: 'url('+(mid_b_img?BASE_URL.slice(0,-5)+mid_b_img:"assets/images/banner-1.jpg")+')'}}>
                <div className="container"> 
                    <div className="row"> 
                    {mbanner.map(img =>{
                        return<div className="col-md-3 col-xs-12">
                            <div className="supp-mid-banner-bx">
                                <div className="supp-num">
                                  <h1> {img.count}  </h1>
                                </div>
                                <div className="supp-text">
                                  <p>{img.description}</p>
                                  <h1> {img.heading}  </h1>
                                </div>
                            </div>
                        </div>})}

                     


                        <div className="col-md-3 col-xs-12">
                            <div className="supp-mid-banner-bx link">
                                <div className="supp-link">
                                  <NavLink to="">Register Now for Free <i class="fal fa-long-arrow-right"></i> </NavLink>
                                </div>
                            
                            </div>
                        </div>


                    </div>
                </div>
              </section>

              <section className="service-p-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="about-text-md">
                                <p>{second}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

              <section className="hm-slider-section supplie" >
                  <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="hm-slider-title">
                            <h1>Base <span class="hm-title-h"> Alıcılar </span> </h1>
                            </div>
                        </div>

                        <div className="logo-main-d spplie">
                  <ul>
                  {link.map(im =>{
                    return<li>
                      <div className="log-d-14254">
                          {/* <img src="assets/images/640px-MiGROS_Logo.png" /> */}
                          <img src={im.link_image?BASE_URL.slice(0,-5)+ im.link_image :"assets/images/640px-MiGROS_Logo.png"}/>
                      </div>
                    </li>})}
                  </ul>
                </div>
                      </div>
                  </div>
              </section>

              <section className="btm-banner-section"  style={{backgroundImage: 'url("assets/images/btm-banner.jpg")'}}> 
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div className="btm-banner-cont-m"> 
                                <div className="btm-banner-text">
                                <h3> <span className="btm-banner-text-yl">HEMEN ÜCRETSİZ  </span>  HESAP OLUŞTUR!  </h3>
                              </div>
                              <div className="btm-banner-btn supplie">
                                 <p onClick={onClickButton}> <i class="fal fa-long-arrow-right"></i> </p>
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

export default About
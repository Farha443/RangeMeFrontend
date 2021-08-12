import React, {useEffect, userEffect, useState} from 'react';
import Header from '../menubar/Header'
import Footer from '../footer/Footer'
import { Link,NavLink, withRouter } from "react-router-dom";
import SignupModal from '../element/SignupModal';
import BASE_URL from '../base';
import axios from 'axios';

var tr=""
var btmimg =""
var mid_b_img = ""
var first = ""
var second = ""

function About(){

  const [modalShow, setModalShow] = useState(false);
  const [link, setlink]= useState([])
  const [mbanner,setmbanner]=useState([])
  const [heading, setheading]= useState([])

  useEffect(() => {
    // debugger
    axios.get(BASE_URL+'about/about/')
    .then(res=>{
      console.clear()
      setheading(res.data.heading)
      mid_b_img = res.data.mid_ban_img[0].bg_image
      tr=res.data.btm_banner[0].content
      first = res.data.desc_one[0].heading
      second = res.data.desc_two[0].heading
      setmbanner(res.data.midd_banner)
      btmimg=res.data.btm_banner[0].image
      setlink(res.data.links)
      // setWorks(res.data.works)
      // setWorksone(res.data.worksone)
      // setheading(res.data.heading)
      // setmbanner(res.data.midd_banner)
      // setslide(res.data.slider)
      // setbottombanner(res.data.btm_banner)
      // ban_img =res.data.midd_banner[0].bg_image
      // ban_heading =res.data.midd_banner[0].heading
      // ban_description =res.data.midd_banner[0].description
      // ban_count=res.data.midd_banner[0].count
      // tr=res.data.btm_banner[0].content
      // btmimg=res.data.btm_banner[0].image
      // mid_b_img = res.data.mid_ban_img[0].bg_image
     
      
      
  
     


    }).catch(err=>{
        console.log(err)            
    })
    


},[])

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
                                <p className="p1"> homepage </p>
                                <h1>{heading.heading} </h1>
                                <p className="p2">{heading.description} <span >  consetetur sadipscing elitr, </span> </p>
                                <NavLink to=""> sed diam nonumy eirmod.  </NavLink>
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

                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </p>
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

                        {/* <div className="col-md-3 col-xs-12">
                            <div className="supp-mid-banner-bx">
                                <div className="supp-num">
                                  <h1> 2 </h1>
                                </div>
                                <div className="supp-text">
                                  <p>
SERVICES</p>
                                  <h1> 
EXHIBIT </h1>
                                </div>
                               
                            </div>
                        </div>

                        <div className="col-md-3 col-xs-12">
                            <div className="supp-mid-banner-bx">
                                <div className="supp-num">
                                  <h1> 3 </h1>
                                </div>
                                <div className="supp-text">
                                  <p> SALES </p>
                                  <h1> 
INCREASE </h1>
                                </div>
                            </div>
                        </div> */}


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
                                <p>{second}                                </p>

                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </p>
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

                    {/* <li>
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
                    </li> */}


                  </ul>
                </div>
                          
                      </div>

                      

                  </div>
              </section>

              <section className="btm-banner-section" style={{backgroundImage: 'url('+(btmimg?BASE_URL.slice(0,-5)+btmimg :"assets/images/banner-1.jpg")+')'}}> 
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div className="btm-banner-cont-m"> 
                                <div className="btm-banner-text">
                                  <h3> <span className="btm-banner-text-yl">{tr} </span>  HESAP OLUŞTUR!  </h3>
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

export default About
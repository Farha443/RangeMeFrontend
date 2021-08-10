import React, {useEffect, userEffect, useState} from 'react';
import Header from '../menubar/Header'
import Footer from '../footer/Footer'
import { Link,NavLink, withRouter } from "react-router-dom";
import SignupModal from '../element/SignupModal';
import BASE_URL from '../base';
import axios from 'axios';

// var tr=""
// var btmimg =""

function PrivacyStatement(){

  const [modalShow, setModalShow] = useState(false);
  const [heading, setheading]= useState([])
  const [head, sethead]= useState([])
  const [link, setlink]= useState([])


  useEffect(() => {
    axios.get(BASE_URL+'about/privacy/')
    .then(res=>{
      console.clear()
      setlink(res.data.policy)
      setheading(res.data.pheading)
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
                                <p className="p1"> anasayfa </p>
                                <h1> {heading.heading} </h1>
                                <p className="p2">{heading.description} <span > odaklı hizmet anlayışını  </span> </p>
                                <NavLink to=""> benimsiyoruz!  </NavLink>
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
                                <p> lorem</p>

                             
                            </div> 
                        </div>
                    </div>
                </div>
            </section>

              <section className="btm-banner-section" style={{backgroundImage: 'url('+(head.pimage?BASE_URL.slice(0,-5)+head.pimage :"assets/images/banner-1.jpg")+')'}}> 
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div className="btm-banner-cont-m"> 
                                <div className="btm-banner-text">
                                  <h3> <span className="btm-banner-text-yl"> {head.content}</span>  HESAP OLUŞTUR!  </h3>
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

export default PrivacyStatement
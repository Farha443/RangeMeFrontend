import React, {useEffect, userEffect, useState} from 'react';
import Header from '../menubar/Header'
import Footer from '../footer/Footer'
import { Link,NavLink } from "react-router-dom";
import SignupModal from '../element/SignupModal';
import Slider from "react-slick";
import BASE_URL from '../base';
import axios from 'axios';

var mid_b_img = ""
var tr=""
var btmimg =""

function BuyerCompanies(){

  const [modalShow, setModalShow] = useState(false);
  const [links, setlinks]= useState([])
  const [works, setWorks]= useState([])
  const [worksone, setWorksone]= useState([])
  const [mbanner,setmbanner]=useState([])
  const [heading, setheading]= useState([])
  const [slide,setslide]=useState([])
    
    
  const settings = {
    dots: false,
    Nav: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
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


  useEffect(() => {
    axios.get(BASE_URL+'buyerhome/buyerhomeview/')
    .then(res=>{
      console.log(res.data.links)
      tr=res.data.btm_banner[0].content
      btmimg=res.data.btm_banner[0].image
      setslide(res.data.slider)
      setheading(res.data.heading)
      mid_b_img = res.data.mid_ban_img[0].bg_image
      setmbanner(res.data.midd_banner)
      setWorksone(res.data.worksone)
      setWorks(res.data.works)
      setlinks(res.data.links)

    }).catch(err=>{
        console.log(err)            
    })
    


},[])


    return(
        <>
        {/* <SignupModal/> */}
        <SignupModal show={modalShow} onHide={() => setModalShow(false)} />
         <Header/>   
        
              

          <div className="my-container" >

     
            <main className="content" >

              <section className="other-banner-section" style={{backgroundImage: 'url('+(heading.bg_img?BASE_URL.slice(0,-5)+heading.bg_img:"assets/images/banner-1.jpg")+')'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="supplie-banner-text">
                                <p className="p1"> home page </p>
                                <h1> {heading.heading} </h1>
                                <p className="p2"> {heading.description}<span > Discover their products and improve your purchasing process.</span> </p>
                                <NavLink to=""> manage easily! </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
              </section>
             

              <section className="supplie-logo-slide-section">
                  <div className="container">
                

                    <div className="row">
                          <div className="col-md-12 col-xs-12 supplie-logo-slide">
                      
                              <Slider {...settings}>
                              {/* {slide.map(am =>{ */}
                                {slide.map(am =>{
                                return<div className="col-md-12">
                                
                                
                                 <div className="log-d2-14254">
                                 <p>{am.contents}</p>
                                </div>

 
                          
                                </div>  })} 

                                {/* <div className="col-md-12">
                      

                                <div className="log-d2-14254">
                                   <p> genel bakış </p>
                                </div>
                        </div>

                                <div className="col-md-12">
                      

                                <div className="log-d2-14254">
                                   <p> genel bakış </p>
                                </div>

                        </div>

                                <div className="col-md-12">
                  
                                <div className="log-d2-14254">
                                   <p> genel bakış </p>
                                </div>

                        </div>

                        <div className="col-md-12">
                  
                        <div className="log-d2-14254">
                                   <p> genel bakış </p>
                                </div>

                        </div>

                        <div className="col-md-12">
                  
                        <div className="log-d2-14254">
                                   <p> genel bakış </p>
                                </div>

                        </div>

                        <div className="col-md-12">
                  
                        <div className="log-d2-14254">
                                   <p> genel bakış </p>
                                </div>

                        </div> */}

                      </Slider>

                          </div>
                    </div>
  
                  </div>
              </section>  
              {works &&  works.map(function(work, index){
              if(index%2===0){
                return<section className="lr-section-main bg-g"> 
                  <div className="container">
        

                    <div className="row"> 
                        <div className="col-md-6 co-xs-12">
                        <div className="r-text-254">
                            <h5>{work.title} <br/>
                                  marka profİlİnİzİ paylaşarak İşİnİzİ büyütün! </h5>
                            </div>
                            <div className="d-one-12423">
                                <ul>
                                {work.sub_works.map(sub=>{
                                 return<li>
                                    <div className="ic-text-mn">
                                      <div className="ic-5248 ic-22"> 
                                      <img src="assets/images/icons/new-user.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6>{sub.heading} </h6>
                                        <p>{sub.description}</p>
                                      </div>
                                    </div>
                                  </li>})}

                                  {/* <li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                      <img src="assets/images/icons/shipping.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6>
Discover New Products </h6>
                                        <p> Find the products you need in the fastest way thanks to the easy use of Tayuss. </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                      <img src="assets/images/icons/affiliate-marketing.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> Connect with Suppliers </h6>
                                        <p> 
Request a sample from the supplier during the purchasing process, a conversation
launch or save the product for later review. </p>
                                      </div>
                                    </div>
                                  </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5 m-auto col-xs-12">
                            <div className="frame-main-d">
                                {/* <img src="assets/images/btn.png" /> */}
                                <img src={BASE_URL.slice(0,-5)+ work.image}/>
                            </div>
                        </div>
                    </div>

                  </div>
              </section>}
            else{
              return<section className="lr-section-main lr-2sec"  style={{background:"white"}}> 
                  <div className="container">
                    <div className="row"> 
                        <div className="col-md-5  col-xs-12">
                            <div className="frame-main-d">
                                {/* <img src="assets/images/btn.png" />
                                 */}
                                 <img src={BASE_URL.slice(0,-5)+ work.image}/>
                            </div>
                        </div>

                        <div className="col-md-6 co-xs-12 ml-auto">
                            <div className="r-text-254">
                            <h5> {work.title}huhuugyffgggamitt</h5>
                            </div>
                            <div className="d-one-12423">
                                <ul>
                                {work.sub_works.map(sub=>{
                                  return<li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                      <img src="assets/images/icons/filter.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6>{sub.heading}   </h6>
                                        <p>{sub.description} 
                                        </p>
                                      </div>
                                    </div>
                                  </li>})}
                                </ul>
                            </div>
                        </div>

                    </div>

                  </div>
              </section>
                }
              })}
              <section className="hesap-banner-section"   style={{backgroundImage: 'url('+(mid_b_img?BASE_URL.slice(0,-5)+mid_b_img:"assets/images/banner-1.jpg")+')'}}>
                <div className="container"> 
                    <div className="row"> 
                    {mbanner.map(img =>{
                        return<div className="col-md-3 col-xs-12">
                            <div className="supp-mid-banner-bx">
                                <div className="supp-num">
                                  <h1> {img.count} </h1>
                                </div>
                                <div className="supp-text">
                                  <p>{img.description}</p>
                                  <h1> {img.heading} </h1>
                                </div>
                            </div>
                        </div>})}

                        {/* <div className="col-md-3 col-xs-12">
                            <div className="supp-mid-banner-bx">
                                <div className="supp-num">
                                  <h1> 2 </h1>
                                </div>
                                <div className="supp-text">
                                  <p> NEW PRODUCTS</p>
                                  <h1> 
DISCOVER </h1>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-xs-12">
                            <div className="supp-mid-banner-bx">
                                <div className="supp-num">
                                  <h1> 3 </h1>
                                </div>
                                <div className="supp-text">
                                  <p>CONTACT US </p>
                                  <h1>GO</h1>
                                </div>
                            </div>
                        </div> */}


                        <div className="col-md-3 col-xs-12">
                            <div className="supp-mid-banner-bx link">
                                <div className="supp-link">
                                  <NavLink to=""> Hemen Ücretsiz Kaydol <i class="fal fa-long-arrow-right"></i> </NavLink>
                                </div>
                            
                            </div>
                        </div>


                    </div>
                </div>
              </section>
              {worksone &&  worksone.map(function(workk, indexx){
              if(indexx%2 !=0){
              return<section className="lr-section-main lr-2sec"  style={{background:"white"}}> 
                  <div className="container">
                    <div className="row"> 
                        <div className="col-md-5 col-xs-12">
                            <div className="frame-main-d">
                                {/* <img src="assets/images/btn.png" />
                                 */}
                                  <img src={BASE_URL.slice(0,-5)+ workk.image}/>
                            </div>
                        </div>

                        <div className="col-md-6 ml-auto co-xs-12">
                            <div className="r-text-254">
                            <h5> {workk.title}
                            </h5>
                            </div>
                            <div className="d-one-12423">
                                <ul>{workk.sub_works.map(sub=>{
                                
                                return<li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                        <img src="assets/images/icons/click.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6>{sub.heading}  </h6>
                                        <p> 
                                        {sub.description} 
                                        </p>
                                      </div>
                                    </div>
                                  </li>})}
{/* 
                                  <li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                        <img src="assets/images/icons/popularity.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> 
Preferred </h6>
                                        <p> Products with a high sales rate and the most admired brand in Tayuss
Explore their profiles. </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                        <img src="assets/images/icons/star.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> 
Collections</h6>
                                        <p> 
Diversity and sustainability of brand profiles and products that stand out in your category.
Check out with trending collections such as </p>
                                      </div>
                                    </div>
                                  </li> */}
                                </ul>
                            </div>
                        </div>

                    </div>

                  </div>
              </section>
              }
              else{
              
              return<section className="lr-section-main bg-g"> 
                  <div className="container">
    

                    <div className="row"> 
                        <div className="col-md-6 co-xs-12">
                        <div className="r-text-254">
                            <h5>
                            {workk.title}
                            </h5>
                            </div>
                            <div className="d-one-12423">
                                <ul>
                                {workk.sub_works.map(sub=>{
                                  return<li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                        <img src="assets/images/icons/floppy-disk.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> {sub.heading}</h6>
                                        <p>{sub.description}</p>
                                      </div>
                                    </div>
                                  </li>})}

                                  {/* <li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                        <img src="assets/images/icons/shipping-1.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6>
Requesting a Sample</h6>
                                        <p> Request samples by sending a private message to suppliers
let me know your needs. </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                        <img src="assets/images/icons/paper-plane.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> Do not sent me a message </h6>
                                        <p> Holding a meeting while keeping personal information about your company confidential
or send a message to request additional information. </p>
                                      </div>
                                    </div>
                                  </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5 m-auto col-xs-12">
                            <div className="frame-main-d">
                                {/* <img src="assets/images/btn.png" /> */}
                                <img src={BASE_URL.slice(0,-5)+ workk.image}/> 
                            </div>
                        </div>
                    </div>

                  </div>
              </section>}
               })}
              

              <section className="hm-slider-section supplie" >
                  <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="hm-slider-title">
                            <h1>
BASE <span class="hm-title-h"> 
Alıcı Sayısı
 </span> </h1>
                            </div>
                        </div>

                   <div className="logo-main-d spplie">
                  <ul>
                  {links.map(im =>{
                    return<li>
                      <div className="log-d-14254">
                      <img src={im.link_image?BASE_URL.slice(0,-5)+ im.link_image :"assets/images/640px-MiGROS_Logo.png"}/>
                      </div>
                    </li>})}
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
                                  <h3> <span className="btm-banner-text-yl">{tr} </span> Hesap aç </h3>
                                  {/* create account */}
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

export default BuyerCompanies
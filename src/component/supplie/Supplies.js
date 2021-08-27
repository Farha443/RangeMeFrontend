import React, {useEffect, userEffect, useState} from 'react';
import Header from '../menubar/Header'
import Footer from '../footer/Footer'
import { Link,NavLink } from "react-router-dom";
import SignupModal from '../element/SignupModal';
import Slider from "react-slick";
import BASE_URL from '../base';
import axios from 'axios';

var ban_img =""
var ban_heading = ""
var ban_description =""
var ban_count=""
var tr=""
var btmimg =""
var mid_b_img = ""


function Supplies(){

  const [modalShow, setModalShow] = useState(false);
  const [link, setlink]= useState([])
  const [works, setWorks]= useState([])
  const [worksone, setWorksone]= useState([])
  const [heading, setheading]= useState([])
  const [banner,setbanner]=useState([])
  const [bottombanner,setbottombanner]=useState([])
  const [mbanner,setmbanner]=useState([])
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
    // debugger
    axios.get(BASE_URL+'supplierhome/supplierhomeview/')
    .then(res=>{
      console.clear()
      setmbanner(res.data.midd_banner)
      setslide(res.data.slider)
      setbottombanner(res.data.btm_banner)
      ban_img =res.data.midd_banner[0].bg_image
      ban_heading =res.data.midd_banner[0].heading
      ban_description =res.data.midd_banner[0].description
      ban_count=res.data.midd_banner[0].count
      tr=res.data.btm_banner[0].content
      btmimg=res.data.btm_banner[0].image
      mid_b_img = res.data.mid_ban_img[0].bg_image
      setlink(res.data.link)
      setWorks(res.data.works)
      setWorksone(res.data.worksone)
      setheading(res.data.heading)

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
                                <p className="p1"> home page</p>
                                <h1> {heading.heading}</h1>
                                <p className="p2">{heading.description}<span >exhibiting to thousands of buyers</span> </p>
                                <NavLink to=""> increase your sales! </NavLink>
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
                              {slide.map(am =>{
                                return<div className="col-md-12">
                                 <div className="log-d2-14254">
                                 <p>{am.contents}</p>
                                </div>
                                </div>  })}

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
                        <div className="col-md-12 col-xs-12">
                            <div className="lr-title-1">

                              <h3> {work.title}</h3>
                              </div>
                        </div>
                    </div>

                    <div className="row"> 
                        <div className="col-md-6 co-xs-12">
                            <div className="d-one-12423">
                                <ul>
                              {work.sub_works.map(sub=>{

return<li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                      {/* <i class={sub.icon}></i> */}
                                      <img src={BASE_URL.slice(0,-5)+ sub.icon}/>
 
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> {sub.heading}</h6>
                                        <p> {sub.description}</p>
                                      </div>
                                    </div>
                                  </li>})}

                                  {/* <li>
                                    <div className="ic-text-mn">
                                      <div className="ic-5248"> 
                                      <i class="fad fa-box-check"></i>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6>Promote Your Product Page</h6>
                                        <p> Your important brand information that buyer companies may need </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                      <div className="ic-5248"> 
                                      <i class="fas fa-share-square"></i>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> Share Your Profile</h6>
                                        <p>Your important brand information that buyer companies may need </p>
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
                return <section className="lr-section-main lr-2sec"  style={{background:"white"}}> 
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
                            <h5> {work.title}<br/>
                            Grow your business by sharing your Marka Adı profile!</h5>
                            </div>
                            <div className="d-one-12423">
                                <ul>
                                {work.sub_works.map(sub=>{
                                  return<li>
                                    <div className="ic-text-mn">
                                    
                                    <div className="ic-5248 ic-22"> 
                                        {/* <img src="assets/images/icons/view.svg" class="icn-img"/>
                                         */}
                                         {/* <i class={sub.icon}></i> */}
                                         <img src={BASE_URL.slice(0,-5)+ sub.icon}/>


                                          {/* <img src={BASE_URL.slice(0,-5)+'/'+'media/'+ sub.logo}/> */}
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6>{sub.heading} </h6>
                                        <p> {sub.description}
                                        </p>
                                      </div>
                                    </div>
                                  </li>
})}
                                  {/* <li>
                                    <div className="ic-text-mn">
                                      <div className="ic-5248 ic-22"> 
                                      <i class="far fa-chart-line"></i>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> Information Profile </h6>
                                        <p>Examine the performance of your brand, which buyer companies
                                          Find out what you're viewing and follow featured products. </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                      <div className="ic-5248 ic-22"> 
                                      <i class="fas fa-chart-pie"></i>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6>Industry Data</h6>
                                        <p>Popular search terms, such as margin, list prices, and certificates
Examine which product details increase interaction with the buyer company. </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                      <div className="ic-5248 ic-22"> 
                                      <i class="fal fa-chart-area"></i>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6>Monitoring and Sharing Analytics </h6>
                                        <p>Visits from buyer companies that you share your brand profile with,View clicks and messages. </p>
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
              })}
              {/* <section className="lr-section-main bg-g"> 
                  <div className="container">
                    <div className="row"> 
                        <div className="col-md-12 col-xs-12">
                            <div className="lr-title-1">
                              <h3> Direct your brand to buyer companies!</h3>
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
                                      <i class="fad fa-comments-alt"></i>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6>Communication with Buyers</h6>
                                        <p>Create brand awareness by sharing your brand directly with the buyer company you want.</p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                      <div className="ic-5248"> 
                                      <i class="fas fa-bell"></i>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6>Category Review Notice</h6>
                                        <p> Your important brand information that buyer companies may need </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                      <div className="ic-5248"> 
                                      <i class="fad fa-paper-plane"></i>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> Message Sending </h6>
                                        <p> Your important brand information that buyer companies may need</p>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5 m-auto col-xs-12">
                            <div className="frame-main-d">
                                <img src="assets/images/btn.png" />
                            </div>
                        </div>
                    </div>

                  </div>
              </section> */}

              <section className="hesap-banner-section" style={{backgroundImage: 'url('+(mid_b_img?BASE_URL.slice(0,-5)+mid_b_img:"assets/images/banner-1.jpg")+')'}}>
                <div className="container"> 
                    <div className="row"> 
                        {/* <div className="col-md-3 col-xs-12">
                        
                         <div className="supp-mid-banner-bx">
                          {mbanner.map(img =>{return <div>
                           <div className="supp-num">
                                <h1> {img.heading} </h1>
                                </div>
                                
                                <div className="supp-text">
                                  <p>{img.description}</p>
                                  <h1> {img.count} </h1>
                                </div>
                             </div>})}
                                
                            </div>
                        </div> */}
{mbanner.map(img =>{
                       return<div className="col-md-3 col-xs-12">
                            <div className="supp-mid-banner-bx">
                            <div className="supp-num">
                                <h1> {img.count} </h1>
                                </div>
                                
                                <div className="supp-text">
                                  <p>{img.description}</p>
                                  <h1>  {img.heading} </h1>
                                </div>
                            </div>
                        </div>})}

                        {/* <div className="col-md-3 col-xs-12">
                            <div className="supp-mid-banner-bx">
                                <div className="supp-num">
                                  <h1> 3 </h1>
                                </div>
                                <div className="supp-text">
                                  <p>SALES </p>
                                  <h1>INCREASE</h1>
                                </div>
                            </div>
                        </div> */}


                        <div className="col-md-3 col-xs-12">
                            <div className="supp-mid-banner-bx link">
                                <div className="supp-link">
                                  <NavLink to=""> Register Now for Free <i class="fal fa-long-arrow-right"></i> </NavLink>
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
                                {/* <img src="assets/images/btn.png" /> */}
                                <img src={BASE_URL.slice(0,-5)+ workk.image}/>
                            </div>
                        </div>

                        <div className="col-md-6 ml-auto co-xs-12">
                            <div className="r-text-254">
                            <h5>{workk.title}<br/>
                                 {/* Strengthen your Sales Potential! */}
                            </h5>
                            </div>
                            <div className="d-one-12423">
                                <ul>
                                {workk.sub_works.map(sub=>{
                                 return <li>
                                    <div className="ic-text-mn">
                                      <div className="ic-5248 ic-22"> 
                                      {/* <i class={sub.icon}></i> */}
                                      <img src={BASE_URL.slice(0,-5)+ sub.icon}/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6>{sub.heading}  </h6>
                                        <p>{sub.description}
                                        </p>
                                      </div>
                                    </div>
                                  </li>})}
                                 

                                  {/* <li>
                                    <div className="ic-text-mn">
                                      <div className="ic-5248 ic-22"> 
                                      <i class="far fa-sort-shapes-up"></i>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> Stand Out in Searches</h6>
                                        <p> Above unverified brand profiles in search results Increase your engagement by appearing. </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                      <div className="ic-5248 ic-22"> 
                                      <i class="fas fa-badge-check"></i>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> TAYUSS Approval </h6>
                                        <p> By showing that you are ready to sell to the buyer companies with the approval of TayussGet faster response </p>
                                      </div>
                                    </div>
                                  </li> */}
                                </ul>
                            </div>
                        </div>

                    </div>

                  </div>
              </section>}
              else{
              return<section className="lr-section-main bg-g"> 
                  <div className="container">
    

                    <div className="row"> 
                        <div className="col-md-6 co-xs-12">
                        <div className="r-text-254">
                            <h5> {workk.title} <br/>
                            </h5>
                            </div>
                            <div className="d-one-12423">
                                <ul>
                                {workk.sub_works.map(sub=>{
                                  return<li>
                                    <div className="ic-text-mn">
                                      <div className="ic-5248"> 
                                      {/* <i class={sub.icon}></i> */}
                                      <img src={BASE_URL.slice(0,-5)+ sub.icon}/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> {sub.heading} </h6>
                                        <p>{sub.description} </p>
                                      </div>
                                    </div>
                                  </li>})}

                                  {/* <li>
                                    <div className="ic-text-mn">
                                      <div className="ic-5248"> 
                                      <i class="fas fa-comment-alt-lines"></i>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> Feedbacks</h6>
                                        <p> Return of suppliers who previously worked with the service provider Evaluate the notices. </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                      <div className="ic-5248"> 
                                      <i class="fas fa-file-edit"></i>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> Taking offers </h6>
                                        <p> Contact the service provider you want, get a quote and Make the right choice by comparing offers. </p>
                                      </div>
                                    </div>
                                  </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5 m-auto col-xs-12">
                            <div className="frame-main-d">
                                {/* <img src="assets/images/btn.png" />
                                 */}
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
                            <h1>BASE <span class="hm-title-h">Alıcılar </span> </h1>
                            </div>
                        </div>

                        <div className="logo-main-d spplie">
                  <ul>
                  {link.map(img =>{
                  return<li>
                      <div className="log-d-14254">
                          {/* <img src="assets/images/640px-MiGROS_Logo.png" /> */}
                          <img src={img.link_image?BASE_URL.slice(0,-5)+ img.link_image :"assets/images/640px-MiGROS_Logo.png"}/>
                      </div>
                    </li>
                    })}

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
                                  <h3> <span className="btm-banner-text-yl">{tr} </span>  Hesap aç</h3>
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

export default Supplies
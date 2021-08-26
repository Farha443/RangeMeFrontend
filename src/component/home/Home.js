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
var current = 1
var tt = ""
var td = ""
var tr = ""
var btmimg =""
var mid_img = ""
var b_head = ""
var indexing =""
var inner_index =""
var sm =""
function Home(){ 
  const [modalShow, setModalShow] = useState(false);
  const [home, setHome] = useState({})
  const [stats, setStats]= useState([])
  const [works, setWorks]= useState([])
  // const [subworks, setSubWorks]= useState([])
  const [blogs, setBlogs]= useState([])
  const [bloglength, setBlogLength]= useState()
  const [list, setList]= useState([])
  const [ran, setran]= useState([])
  const [heading, setheading]= useState([])
  const [serviceprovider, setserviceprovider,]= useState([])
  const [bottombanner, setbottombanner,]= useState([])
  const [smallheading, setsmallheading,]= useState([])
  const [link, setlink,]= useState([])



  function NextList(){
    // debugger
    var myStringArray = blogs;
    var arrayLength = myStringArray.length;
    for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
    if (myStringArray[i]===list){
      // setList(myStringArray[i+1])
      if(arrayLength-1 === i){
        setList(myStringArray[i])
        current = i
      }
      else{
        setList(myStringArray[i+1])
        current = current+1
      }
    }
}
  }


  function PrevList(){
    // debugger
    var myStringArray = blogs;
    var arrayLength = myStringArray.length;
    for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
    if (myStringArray[i]===list){
      if(i===0){
        setList(myStringArray[0])
        current = current
      }
      else{
        setList(myStringArray[i-1])
        current = current-1
      }
      
    }
}
  }



  useEffect(() => {
   
    axios.get(BASE_URL+'home/homeview/')
    .then(res=>{
      // debugger
      console.log("help")      
      setlink(res.data.link)
      setsmallheading(res.data)
      console.log(res.data)
      setBlogs(res.data.blogs)
      setList(res.data.blogs[0])
      setBlogLength(res.data.blogs.length)
      console.clear()
      console.log(res.data.data)
      var indexing=res.data.blogs.length
      inner_index=res.data.blogs[0].length
      console.log(res.data)
      setbottombanner(res.data)
      setserviceprovider(res.data)
      tt = res.data.srb[0].heading
      mid_img=res.data.srb[0].bg_image
      td= res.data.srb[0].description
      tr =res.data.btm_banner[0].description
      btmimg=res.data.btm_banner[0].image
      sm=res.data.small_head[0].heading
      console.log(res.data)
      setHome(res.data)
      setheading(res.data.heading)
      
      
      setWorks(res.data.works)
      // setSubWorks(res.data.sub_works)
      setBlogs(res.data.blogs)
      setStats(res.data.stats)
      console.clear()
      console.log('--- all data -----')
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
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    rows: 2,
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
              <section className="banner-section" style={{backgroundImage: 'url('+(heading.bg_img?BASE_URL.slice(0,-5)+heading.bg_img:"assets/images/banner-1.jpg")+')'}}>
                  <div className="container">
                      <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="banner-left-content">
                                <div className="banner-text-left">
                                <h6> {heading.heading}</h6>
                                {/* <h1 className="f-t-1"> TEDARİKÇİLERİ <span> VE </span>  </h1>
                                <h1 className="f-t-2"> ALICI FİRMALARI   </h1>
                                <h2 className="f-t-3"> BİR ARAYA GETİRİYORUZ!
                                </h2> */}
                                <button className="banner-btn"> ÜCRETSİZ KAYDOL <i class="fal fa-long-arrow-right"></i> </button>
                                </div>
                                {/* {heading.bg_img && <div className="banner-section" style={{backgroundImage: 'url("'+BASE_URL.slice(0,-5)+ heading.bg_img+'")'}}>
                </div>}
                {!heading.bg_img &&<div className="banner-section" style={{backgroundImage: 'url("assets/images/banner1.jpg")'}}>
                </div>} */}
                            </div>
                        </div>

                        <div className="col-md-6 col-xs-12">
                            <div className="banner-right-cont">
                                <img className="" src={heading.logo?BASE_URL.slice(0,-5)+ heading.logo :"assets/images/—Pngtree—laptop modern frameless with blank_5566734"} />
                                {/* <img src=""></img> */}
                            </div>
                        </div>
                      </div>
                  </div>
              </section>
             
              <section className="section counter-section">

                <div className="logo-main-d">
                   <ul>
                   {link.map(img =>{
                    return<li>
                    
                      <div className="log-d-14254">
                      
                          {/* <img src="assets/images/640px-MiGROS_Logo.png" /> */}
                          <img src={img.link_image?BASE_URL.slice(0,-5)+ img.link_image :"assets/images/640px-MiGROS_Logo.png"}/>
                       
                      </div>
 
                    </li>
})}
                  </ul>
                
                </div>

                <div className="section__inner">
                  <div className="section__sub-section">
                    <div className="layout-block layout-block--12">
                      <div className="layout-block__inner">
                        <div className="layout-block__cell">
                          <p className="sect-2-t-1 small-heading dark-text"> 
                          
                          {sm}<span className="span-1204"></span>
                          </p>
                          {/* <p className="sect-2-t-2">
                          Tayuss İle İlİşkİlerİnİzİ güçlendİrerek <span className="span-1204"> satışlarınızı arttırın! </span>
                          </p> */}
                        </div>
                        <div className="layout-block__cell">
                          <div className="stats">
                          {home.stats && home.stats.map(stats=>(
                            <div className="stats__item">
                              <div className="count-icn stats__description">
                              <i class={stats.icon} aria-hidden="true"></i>
                              {/* <i class="fab fa-accessible-icon"></i> */}
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
              {works &&  works.map(function(work, index){
              if(index%2===0){
              return <section className="lr-section-main"> 
                  <div className="container">
                    <div className="row"> 
                        <div className="col-md-12 col-xs-12">
                            <div className="lr-title-1">

                              <h3> {work.title}</h3>
                              <NavLink to=""> Tüm Özellikler <i class="fal fa-long-arrow-right"></i> </NavLink>
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
                                <div className="ic-5248"> 
                                  <i class={sub.icon}></i>
                                </div>
                                <div className="ic-text-6254">
                                  <h5> {sub.heading} </h5>
                                  <p> {sub.description}</p>
                                </div>
                              </div>
                            </li>
                            })}
                                
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="frame-main-d">
                                {/* <img src="assets/images/btn.png" /> */}
                                <img src={BASE_URL.slice(0,-5)+ work.image}/>
                            </div>
                        </div>
                    </div>

                  </div>
              </section>}
             else{
              return <section className="lr-section-main lr-2sec"> 
                  <div className="container">
                    <div className="row"> 
                        <div className="col-md-12 col-xs-12">
                            <div className="lr-title-1">

                              <h3> {work.title }</h3>
                              <NavLink to=""> Tüm Özellikler <i class="fal fa-long-arrow-right"></i> </NavLink>
                            </div>
                        </div>
                    </div>

                    <div className="row"> 
                          <div className="col-md-6 col-xs-12">
                            <div className="frame-main-d">
                                {/* <img src="assets/images/btn.png" /> */}
                                <img src={BASE_URL.slice(0,-5)+ work.image}/>
                            </div>
                        </div>
                        <div className="col-md-6 co-xs-12">
                            <div className="d-one-12423">
                                <ul>
                                {work.sub_works.map(sub=>{
                              
                              return <li>
                                    <div className="ic-text-mn">
                                      <div className="ic-5248 ic-22"> 
                                      <i class={sub.icon}></i>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h5> {sub.heading} </h5>
                                        <p> {sub.description} </p>
                                      </div>
                                    </div>
                                  </li>
                                  })}
                                </ul>
                            </div>
                        </div>
                    </div>
                  </div>
              </section>
                }
              })}
              
              <section className="mid-banner-section" style={{backgroundImage: 'url('+(mid_img?BASE_URL.slice(0,-5)+mid_img:"assets/images/banner-1.jpg")+')'}}>
                  <div className="container"> 
                 
                   <div className="row">
                      <div className="col-md-12 col-xs-12"> 
                          <div className="midd-banner-text">
                             
                            {/* <h5 className="h-01-1"> HİZMET SAĞLAYICILAR </h5> */}
                            <h5 className="h-01-1"> {tt}Servis provider</h5>

                            {/* <h6 className="h-01-2"> Tayuss ile binlerce ürün tedarikçisini keşfet ve <span> hizmetlerini  </span></h6> */}
                            <h6 className="h-01-2"> {td}</h6>                       
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

                      <p className="slide-count"><span> <button className="slide-prev" onClick={PrevList}><i class="fal fa-long-arrow-left"></i></button>  <span className="sl-value">{current}/{bloglength}</span>  <button className="slide-next" onClick={NextList}><i class="fal fa-long-arrow-right"></i></button> <nbsp></nbsp></span>
                      
                      
                        
                        </p>
                    <Slider {...settings}>
                     
                    {/* {blogs.map(function(wo, inner_index){ */}
                        <div className="">
                          <div className="slider-box-main">
                          {list.map((user) => (  
                            <div className="two-sliders">
                                <div className="hm-slider-img-d">
                                    <img src= {user?BASE_URL.slice(0,-5)+user.b_image :"assets/images/banner-1.jpg"} 
                                     />
                                     </div>
                                    <div className="hm-slider-tect-cont">
                                      <h5>{user.b_title} </h5>
                                      <p>
                                      {user.b_story}
                                      </p>
                                    <NavLink to=""> Detaylı İncele </NavLink>
                                  </div>
                              </div> 
                                ))}
                            </div> 
                        </div> 
               
                      </Slider>


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
                                  <h3> <span className="btm-banner-text-yl"> {tr}</span>  </h3>
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
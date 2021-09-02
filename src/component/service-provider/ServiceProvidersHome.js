import React, {useEffect, userEffect, useState} from 'react';
import Header from '../menubar/Header'
import Footer from '../footer/Footer'
import { Link,NavLink, withRouter } from "react-router-dom";
import SignupModal from '../element/SignupModal';
import Slider from "react-slick";
import BASE_URL from '../base';
import axios from 'axios';
import Cookies from 'universal-cookie';

var mid_b_img = ""
var tr=""
var btmimg =""
const cookies = new Cookies();
function ServiceProviders(){

  const [modalShow, setModalShow] = useState(false);
  const [link, setlink]= useState([])
  const [works, setWorks]= useState([])
  const [heading, setheading]= useState([])
  const [mbanner,setmbanner]=useState([])
  const [service, setService]= useState([])
    
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
    axios.get(BASE_URL+'servicehome/servicehomeview/')
    .then(res=>{
     
      
      console.log(res.data.link)
      setService(res.data.service)
      mid_b_img = res.data.mid_ban_img[0].bg_image
      setmbanner(res.data.midd_banner)
      setheading(res.data.heading)
      setWorks(res.data.works)
      tr=res.data.btm_banner[0].content
      btmimg=res.data.btm_banner[0].image
      setlink(res.data.link)

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
                                <p className="p1"> anasayfa </p>
                                <h1> {heading.heading}</h1>
                                <p className="p2"> {heading.description} <span > Binlerce tedarikçiye hizmetlerini sergile yeni iş fırsatları yaratmanın anahtarına
 </span> </p>
 <NavLink to=""> sahip ol! </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
              </section>
             
            <section className="service-p-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div class="hm-slider-title">
                                <h1>DON'T MISS THE NEW BUSINESS OPPORTUNITIES! <span class="hm-title-h"> KAÇIRMAYIN!  </span> </h1>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                    {works.map(function(work, index){
                       if(index%2===0){
                        return<div className="col-md-12 col-xs-12">
                            <div className="ser-pro-box-d">
                                <div className="sp-box-text">
                                    <p>{work.title}
                                    </p>
                                </div>
                                <div className="sp-img" style={{backgroundImage: 'url(assets/images/icons/shape/vector-smart-object@2x.png)'}}>
                                    {/* <img src="assets/images/icons/img-01@2x.png"></img> */}
                                    <img src={BASE_URL.slice(0,-5)+ work.image}/>
                                </div>
                            </div>
                        </div> }
                        else{
                        return<div className="col-md-12 col-xs-12">
                            <div className="ser-pro-box-d">
                            <div className="sp-img sp-img-2">
                                    {/* <img src="assets/images/icons/layer-2@2x.png"></img> */}
                                    <img src={BASE_URL.slice(0,-5)+ work.image}/>
                                </div>
                                <div className="sp-box-text">
                                    <p>{work.title}
                                    </p>
                                </div>
                               
                            </div>
                        </div> }})}


                        {/* <div className="col-md-12 col-xs-12">
                            <div className="ser-pro-box-d">
                                <div className="sp-box-text">
                                    <p>
                                    Tayuss, satın alma sektörününün ihtiyaçları doğrultusunda alıcı firmalara ürün keşfedebilmesi için ürün resimleri, sigorta, etiketler ve 
eksik marka kriterleri gibi detayları şeffaf bir şekilde sunar.
                                    </p>
                                </div>
                                <div className="sp-img sp-img-3">
                                    <img src="assets/images/icons/layer-5@2x.png"></img>
                                </div>
                            </div>
                        </div> */}
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
                                  <p>HİZMETLERİNİ</p>
                                  <h1> SERGİLE </h1>
                                </div>
                               
                            </div>
                        </div>

                        <div className="col-md-3 col-xs-12">
                            <div className="supp-mid-banner-bx">
                                <div className="supp-num">
                                  <h1> 3 </h1>
                                </div>
                                <div className="supp-text">
                                  <p> SATIŞLARINI </p>
                                  <h1> ARTTIR </h1>
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
            
              <section className="service-p-section" style={{background: "white"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div class="hm-slider-title">
                                <h1>REACH MORE CUSTOMERS! <span class="hm-title-h"> MÜŞTERİYE ULAŞIN!  </span> </h1>
                            </div>
                        </div>
                        </div>
                    <div className="row">

                        <div className="col-md-12 col-xs-12">
                        <div className="customer-list-main-d">
                            <ul>
                            {service.map(im =>{
                                return<li>
                                    <div className="list-icn"> 
                                        {/* <img src="assets/images/icons/checked.png" /> */}
                                        <img src={BASE_URL.slice(0,-5)+ im.icon}/>
                                    </div>
                                    <p>{im.desc}</p>
                                </li>})}

                                {/* <li>
                                    <div className="list-icn"> 
                                        <img src="assets/images/icons/checked.png" />
                                    </div>
                                    <p>
                                    Mesajlaşma ve teklif verme özelliği sayesinde tedarikçiler ile güçlü ilişkiler kurarak gelirinizi büyütün.
                                    </p>
                                </li>

                                <li>
                                    <div className="list-icn"> 
                                        <img src="assets/images/icons/checked.png" />
                                    </div>
                                    <p>
                                    Özelleştirilebilir promosyonlarla birlikte görünürlüğünü artırın ve ilgi çekin.
                                    </p>
                                </li>

                                <li>
                                    <div className="list-icn"> 
                                        <img src="assets/images/icons/checked.png" />
                                    </div>
                                    <p>
                                    Daha önce iş birliği sağladığınız müşterilerinizden onay talep edin. Böylelikle güvenirliliğininizi diğer müşterilerinize gösterebilme avantajına sahip olun.
                                   </p>
                                </li> */}
                            </ul>
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
                            <h1>base <span class="hm-title-h"> Alıcılar </span> </h1>
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

              <section className="btm-banner-section"style={{backgroundImage: 'url("assets/images/btm-banner.jpg")'}}> 
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

export default ServiceProviders
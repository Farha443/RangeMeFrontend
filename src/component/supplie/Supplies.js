import React, {useEffect, userEffect, useState} from 'react';
import Header from '../menubar/Header'
import Footer from '../footer/Footer'
import { Link,NavLink } from "react-router-dom";
import SignupModal from '../element/SignupModal';
import Slider from "react-slick";
import BASE_URL from '../base';
import axios from 'axios';
import Cookies from 'universal-cookie';

var ban_img =""
var ban_heading = ""
var ban_description =""
var ban_count=""
var tr=""
var btmimg =""
var mid_b_img = ""
const cookies = new Cookies();

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
    
    axios.get(BASE_URL+'supplierhome/supplierhomeview/')
    .then(res=>{
      // console.clear()
      // console.log(res.data)
      setmbanner(res.data.midd_banner)
      setslide(res.data.slider)
      setbottombanner(res.data.btm_banner)
      ban_img =res.data.midd_banner.bg_image
      ban_heading =res.data.midd_banner.heading
      ban_description =res.data.midd_banner.description
      ban_count=res.data.midd_banner.count
      tr=res.data.btm_banner.content
      btmimg=res.data.btm_banner.image
      mid_b_img =  res.data.mid_ban_img.bg_image
      setlink(res.data.link)
      setWorks(res.data.works)
      setWorksone(res.data.worksone)
      
      setheading(res.data.heading)
      
      

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
                            <div className="supplie-banner-text ed2">
                                <NavLink to="/" className="a11"> anasayfa </NavLink>
                                <h1> <EditorPreview  data={heading.heading} /></h1>
                                <p className="p2"> <EditorPreview data={heading.description} /><span > binlerce alıcıya sergileyerek</span> </p>
                                <p className="p1-add-n">satışlarınızı arttırın! </p>
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
                                      <img src={BASE_URL.slice(0,-4)+"media/"+ sub.icons}/>
 
                                      </div>
                                      <div className="ic-text-6254">
                                        <h5> {sub.heading}</h5>
                                        <p> <EditorPreview data={sub.description} /> </p>
                                      </div>
                                    </div>
                                  </li>})}

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5 m-auto col-xs-12">
                            <div className="frame-main-d">
                                {/* <img src="assets/images/btn.png" /> */}
                                <img src={BASE_URL.slice(0,-5)+ work.image} alt="Loading..."/>
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
                                 <img src={BASE_URL.slice(0,-5)+ work.image}  alt="Loading..."/>
                            </div>
                        </div>

                        <div className="col-md-6 co-xs-12 ml-auto">
                            <div className="r-text-254">
                            <h5> {work.title}</h5>
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
                                         <img src={BASE_URL.slice(0,-4)+"media/"+sub.icons}/>


                                          {/* <img src={BASE_URL.slice(0,-5)+'/'+'media/'+ sub.logo}/> */}
                                      </div>
                                      <div className="ic-text-6254">
                                        <h5>{sub.heading} </h5>
                                        <p> <EditorPreview data={sub.description} />
                                        </p>
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
              

              <section className="hesap-banner-section" style={{backgroundImage: 'url('+(mid_b_img?BASE_URL.slice(0,-5)+mid_b_img:"assets/images/banner-1.jpg")+')'}}>
                <div className="container"> 
                    <div className="row"> 
                        
{mbanner.map(img =>{
                       return<div className="col-md-3 col-xs-12">
                            <div className="supp-mid-banner-bx">
                            <div className="supp-num">
                                <h1> {img.count} </h1>
                                </div>
                                
                                <div className="supp-text">
                                  <p><EditorPreview data={img.description} /> </p>
                                  <h1>  {img.heading} </h1>
                                </div>
                            </div>
                        </div>})}

                       


                        <div className="col-md-3 col-xs-12">
                            <div className="supp-mid-banner-bx link">
                                <div className="supp-link bn2-i">
                                  <p className="p1-add-t"onClick={onClickButton}> Hemen Ücretsiz Kaydol <i class="fal fa-long-arrow-right"></i> </p>
                                 
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
                                <img src={BASE_URL.slice(0,-5)+ workk.image}  alt="Loading..."/>
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
                                      <img src={BASE_URL.slice(0,-4)+"media/"+sub.icons}/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h5>{sub.heading}  </h5>
                                        <p><EditorPreview data={sub.description} /> </p>
                                        
                                      </div>
                                    </div>
                                  </li>})}
                                 

                              
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
                                      <div className="ic-5248 ic-22"> 
                                      {/* <i class={sub.icon}></i> */}
                                      <img src={BASE_URL.slice(0,-4)+"media/"+ sub.icons}/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h5> {sub.heading} </h5>
                                        <p><EditorPreview data={sub.description} /> </p>
                                      </div>
                                    </div>
                                  </li>})}

                                  
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5 m-auto col-xs-12">
                            <div className="frame-main-d">
                                {/* <img src="assets/images/btn.png" />
                                 */}
                                 <img src={BASE_URL.slice(0,-5)+ workk.image} alt="Loading..."/> 
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
                            <h1 style={{color:"#0f536d"}}>BAZI <b>ALICI</b><span class="hm-title-h"> FİRMALAR </span> </h1>
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

                   

                  </ul>
                </div>
                          
                      </div>

                      

                  </div>
              </section>

              <section className="btm-banner-section"  style={{backgroundImage: 'url("assets/images/btm-banner.jpg")'}}> 
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div className="btm-banner-cont-m bn-2-add"> 
                                <div className="btm-banner-text">
                                <h3> <span className="btm-banner-text-yl">HEMEN ÜCRETSİZ  </span>  HESAP OLUŞTUR!  </h3>
                                  {/* create account */}
                              </div>
                              {/* <div className="btm-banner-btn supplie add-supp-icn-2">
                                 <NavLink to="">  <img src="assets/images/icons/right-arrow-5-copy-3-white.svg"></img> </NavLink>
                              </div> */}
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
class EditorPreview extends React.Component {
  render() {
      return (
          <div className="editor-preview">
            
              <div dangerouslySetInnerHTML={ { __html: this.props.data } }></div>
          </div>
      );
  }
}

EditorPreview.defaultProps = {
  data: ''
};

export default Supplies


import React from 'react';
import Header from '../menubar/Header'
import Footer from '../footer/Footer'
import { Link,NavLink } from "react-router-dom";
import useState from 'react-hook-use-state';
import SignupModal from '../element/SignupModal';
import Slider from "react-slick";
import BASE_URL from '../base';
import axios from 'axios';
import '../../assets2/admin.css';
import '../../assets2/signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Jumbotron,
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Col,
  Container,
  Modal,
  Card,
  Row
} from 'react-bootstrap';
import Cookies from 'universal-cookie';


const cookies = new Cookies();

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

class BlogDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data:'<p>tayuss</p>',
        blog:{},
        page:[],
        rec_blog:[],
    };
  } 
  componentDidMount(){

    let uuid = cookies.get('blog_id');
    if(uuid==='undefined'){
        window.location = '/blogs';
    }

    var url = BASE_URL+'home/blog_detail/'+uuid;
    var url1 = BASE_URL+'home/blog_page/';
    var url2 = BASE_URL+'home/recent_blog/';
    var config={
      method:'get',
      url:url,
    };axios(config).then(re=>{
        this.setState({blog:re.data});  
    }).catch(err=>{
      alert(err);
    })

    var config1 = {
      method: 'get',
      url: url1,
    };axios(config1).then(res => {
  this.setState({page: res.data.blog_page})      
})
.catch(err => {
})

    var config2= {
      method: 'get',
      url: url2,
    };axios(config2).then(res => {
      console.clear()
      console.log(res.data.data)
    this.setState({rec_blog: res.data})      
    })
    .catch(err => {
    })

}
  // const [modalShow, setModalShow] = useState(false);
    
  
  render() {
    return(
        <>
        {/* <SignupModal/> */}
        {/* <SignupModal show={modalShow} onHide={() => setModalShow(false)} /> */}
         <Header/>   
        
              

          <div className="my-container" >

     
            <main className="content" >

              <section className="other-banner-section"style={{backgroundImage: 'url('+(this.state.page.upper_bg_img?BASE_URL.slice(0,-5)+this.state.page.upper_bg_img:"assets/images/banner-1.jpg")+')'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="supplie-banner-text b-detail-hero">
                            <p className="p2">{this.state.blog.b_title}</p>
                                {/* <p className="p1"> <NavLink to="" className="bd">  yararlı bilgiler </NavLink> <NavLink className="bd" to="">  anasayfa </NavLink> </p> */}
                                {/* <h1>Lorem ipsum dolor sit amet, ipsum consetetur  </h1> */}
                             
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
                              <EditorPreview data={this.state.blog.b_content} /> 
                            </div>
                        </div>
                        <div className="col-md-5 m-auto col-xs-12">
                            <div className="frame-main-d">
                                {/* <img src="assets/images/btn.png" /> */}
                                <img src={BASE_URL.slice(0,-5)+this.state.blog.b_image}/>
                            </div>
                        </div>
                        
                      
                    </div>

                  </div>
              </section>
            
             
              
              {/* <section className="hm-slider-section pb-0">
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
                                      <h5>Lorem ipsum dolor sit amet,  consetetur22222 </h5>
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
                        </div>))}
                      </Slider>

                          </div>
                    </div>
  
                  </div>
              </section> */}
       

       {/* <section className="blog-n-section" >
                    <div className="container">
                        <div className="row">
                        {this.state.rec_blog.map(blog=>{
                           return  <div onClick={()=>this.Redirect(blog.uuid)}   className="col-md-4 col-xs-12">
                            
                               <div className="blog-n-box">
                                    <div className="blog-n-img-d">
                                        <img className="story-item__image" src={BASE_URL.slice(0,-5)+ blog.b_image} width='90%'/>
                                    </div>
                                    <div className="blog-n-text">
                                        <h5>{blog.b_title} </h5>
                                        <p>
                                        {blog.b_story}
                                        </p>
                                        <NavLink to="" onClick={()=>this.Redirect(blog.uuid)} > Detaylı İncele </NavLink>
                                    </div>
                                </div>
                            </div>})}

                           

                            
                        </div>
                    </div>
              </section> */}


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

           

              <section className="btm-banner-section" style={{backgroundImage: 'url('+(this.state.page.btm_ban_img?BASE_URL.slice(0,-5)+this.state.page.btm_ban_img:"assets/images/banner-1.jpg")+')'}}> 
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div className="btm-banner-cont-m"> 
                                <div className="btm-banner-text">
                                <h3> <span className="btm-banner-text-yl">{this.state.page.btm_ban_heading} </span>  </h3>
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
export default BlogDetail
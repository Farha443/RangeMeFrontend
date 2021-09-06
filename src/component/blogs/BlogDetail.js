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
        modalShow : false
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

onClickButton = e =>{
  e.preventDefault()
  var supplier = "supplier";
  cookies.set('userType', supplier, { path: '/' });
  this.setState({modalShow : true})
}

onCloseModal = ()=>{
  this.setState({modalShow : false})
}
    
  
  render() {
    return(
        <>
         <Header/>   
         <SignupModal show={this.state.modalShow} onHide={this.onCloseModal}></SignupModal>
              

          <div className="my-container" >

     
            <main className="content" >

              <section className="other-banner-section"style={{backgroundImage: 'url('+(this.state.page.upper_bg_img?BASE_URL.slice(0,-5)+this.state.page.upper_bg_img:"assets/images/banner-1.jpg")+')'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="supplie-banner-text b-detail-hero">
                            <NavLink to="/" className="a11"> anasayfa </NavLink>
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

           

              <section className="btm-banner-section" style={{backgroundImage: 'url("assets/images/btm-banner.jpg")'}}> 
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div className="btm-banner-cont-m"> 
                                <div className="btm-banner-text">
                                <h3> <span className="btm-banner-text-yl">HEMEN ÜCRETSİZ  </span>  HESAP OLUŞTUR!  </h3>
                              </div>
                              <div className="btm-banner-btn supplie">
                              <p onClick={this.onClickButton}> <i class="fal fa-long-arrow-right"></i> </p>
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
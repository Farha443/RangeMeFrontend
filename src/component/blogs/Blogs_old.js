import React, {useEffect, userEffect, useState} from 'react';
import Header from '../menubar/Header'
import Footer from '../footer/Footer'
import { NavLink } from 'react-bootstrap';
import SignupModal from '../element/SignupModal';
import BASE_URL from '../base';
import axios from 'axios';
import {Col, Row }from 'react-bootstrap';
function get_date(dt_string){
  var dt = dt_string.split('_')[0]
  var dtt = dt_string.split('-')[2].split('T')[0]
  var month_list=['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec']
  var date_parts = dt.split('-');
  return date_parts[0]+' '+month_list[parseInt(date_parts[1])-1] +' '+ dtt;
}

class Blogs  extends React.Component{
  state = {
    data: [],
    message1: "message"

  };
  async componentDidMount(){

      var url = BASE_URL+'home/blogs/';
      var config = {
          method: 'get',
          url: url,
    
        };
        axios(config)

    .then(res => {
      // debugger
      console.log(res.data);
      this.setState({
        data: res.data
        
      })
      
      
    })
    .catch(err => {
      // $(".laoder").hide(); 
      alert(err);
    })
     
  }
  Redirect(uuid){
    // cookies.set('blog',uuid,{path:'/'});
    window.location='/blog_detail/'+uuid;
}
  // const [modalShow, setModalShow] = useState(false);
    render() {
      
    return(
        <>
         <Header/>   

          <div className="my-container" id="container">
            <main className="content" id="content">
        
            
              <section className="section blog-section success-section">


                
                <div className="section__inner stories-section__inner">
                  <div className="section__intro">
                    <h2 className="section__heading">Latest Blog</h2>
                  </div>
                  <div className="section__sub-section">
                    <div className="stories">
                      <div className="stories__grid load-more">
                      {this.state.data.map(blog=>{
                         return <div onClick={()=>this.Redirect(blog.uuid)} className="story-item"> 
                          <div className="story-item__image-container">
                      
                            <img className="story-item__image" src={BASE_URL.slice(0,-5)+ blog.b_image} width='90%'/>
                          </div>
                          
                          <div className="blog-title">
                            <h6 className="story-item__title dark-text left-t">{blog.b_title}</h6>
                            <span className="date right-t">{get_date(blog.created_at)}</span>
                          </div>
                          <div className="story-item__category">  <h6 className="story-item__title dark-text left-t">{blog.b_category}</h6> </div>
                          <p className="story-item__description">{blog.b_story}</p>
                          <div className="story-item__cta"> <a href="" > Read More </a> </div>
                         
                        </div>})}
                     
                        
                       
                        {/* <NavLink to="/blogs-details" className="story-item">
                          <div className="story-item__image-container">
                            <img className="story-item__image" src="assets/images/blog3.jpg" alt="blog4" />
                          </div>
                          <div className="blog-title">
                            <h6 className="story-item__title dark-text">Beauty </h6>
                            <span className="date right-t">May 25, 2021</span>
                          </div>
                          <div className="story-item__category"><h6 className="story-item__title dark-text">Zoha Fragrances</h6></div>
                          <p className="story-item__description">Learn how Zoha Fragrances got their indie brand of oil-based, clean ingredient perfumes into Drug Emporium stores with the help of RangeMe.</p>
                          <div className="story-item__cta"> Read their story</div>
                        </NavLink> */}

                      </div>
                    </div>
                  </div>


                  {/* <div className="section__sub-section customer-stories__signup_block">
                    <div className="layout-block layout-block--signup">
                      <div className="layout-block__inner">
                        <div className="layout-block__cell">
                          <div className="content-block content-block--pad-top content-block--pad-bottom">
                            <div className="content-block__inner btm-get-prod">
                              <h2 className="content-block__heading dark-text">Get your product discovered today</h2>
                              <p>Showcase your product to thousands of buyers</p>
                            </div>
                          </div>
                        </div>
                        <div className="layout-block__cell">
                          <div className="content-block content-block--v-align content-block--right">
                            <div className="content-block__inner">
                              <a className="button button--large button--green" data-signup="supplier" href="#">Sign Up For Free</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="layout-block__background" />
                    </div>
                  </div> */}


                  
                </div>
              </section>
            
            </main>
           

            <Footer/>



          </div>
        

        </>
    );
}
}

export default Blogs
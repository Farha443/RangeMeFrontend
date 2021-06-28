import React, {useEffect, userEffect, useState} from 'react';
import Header from '../menubar/Header'
import Footer from '../footer/Footer'
import { NavLink } from 'react-bootstrap';
import SignupModal from '../element/SignupModal';
import axios from 'axios';
import BASE_URL from '../base';



function Home(){
  // var xxx = '';
  const [modalShow, setModalShow] = useState(false);
  const [home, setHome] = useState([])
  const [indexheading, setIndexheading]= useState({})
  const [stats, setStats]= useState([])
  const [works, setWorks]= useState([])
  const [succestory, setSuccestory]= useState([])
  const [blogs, setBlogs]= useState([])
  
  useEffect(() => {
   
    axios.get(BASE_URL+'home/homeview/')
    .then(res=>{
      setHome(res.data)
      debugger
      console.log(res.data)
      // xxx =res.data.blogs
      // console.log(xxx)
      // console.log(res.data.data.heading)
    }).catch(err=>{
        console.log(err)            
    })
    console.log(home)

  //   axios.get(BASE_URL+'home/stats/').then(res=>{
  //     setStats(res.data.data)
  // }).catch(err=>{
  //     console.log(err)            
  // })
  // console.log(stats)

  //   axios.get(BASE_URL+'home/works/').then(res=>{
  //     setWorks(res.data.data)
  // }).catch(err=>{
  //     console.log(err)            
  // })
  // console.log(works)

  //   axios.get(BASE_URL+'home/succestory/').then(res=>{
  //     setSuccestory(res.data.data)
  // }).catch(err=>{
  //     console.log(err)            
  // })
  // console.log(succestory)

  //   axios.get(BASE_URL+'home/blogs/').then(res=>{
  //     setBlogs(res.data.data)
  // }).catch(err=>{
  //     console.log(err)            
  // })
  // console.log(blogs)

},[])

    return(
        <>
        {/* <SignupModal/> */}
        <SignupModal show={modalShow} onHide={() => setModalShow(false)} />
         <Header/>   

          <div className="my-container" id="container">
            <main className="content" id="content">
              <header className="header header--left">
                
                <div className="header__inner">
                  <div className="header__content">
                  
                    <h1 className="header__title">{home.heading.heading}</h1>
                    
                    <button className="header__cta button button--large button--green"  onClick={() => setModalShow(true)}>Sign Up For Free</button>
                  </div>
                </div>
               {! home.heading &&  <div className="header__background" style={{backgroundImage: 'url("assets/images/banner1.jpg")'}}>
                </div>}
                {home.heading &&  <div className="header__background" style={{backgroundImage: 'url("'+BASE_URL.slice(0,-5)+ home.heading.bg_img+'")'}}>
                </div>}
                {/* <div className="header__background" style={{backgroundImage: 'url("assets/images/banner1.jpg")'}}>
                </div> */}
              </header>
              <section className="section counter-section">
                <div className="section__inner">
                  <div className="section__sub-section">
                    <div className="layout-block layout-block--12">
                      <div className="layout-block__inner">
                        
                        <div className="layout-block__cell">
                        
                          <p className="small-heading dark-text" style={{color: 'white'}}>Veniver is the leading product discovery and
                            sourcing platform where retailers and suppliers discover, connect, and grow
                            their business.</p>
                        </div>
                        <div className="layout-block__cell">
                          <div className="stats">
                            {stats.map(stats=>(
                            <div className="stats__item">
                            
                              <div className="count-icn stats__description">
                                <i className="fa fa-user-o" aria-hidden="true" />
                              </div>
                              <span className="stats__value blue-text">{stats.num}</span>
                              <p className="stats__description">{stats.content}</p>
                            </div>))}
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="section section--grey">
                <div className="section__inner">
                  <div className="section__sub-section">
                    <div className="layout-block layout-block--10">
                      <div className="layout-block__inner">
                        <div className="layout-block__cell">
                          <h2 className="section__heading">How it works</h2>
                        </div>
                      </div>
                    </div>
                    
                      {works.map(function(work, index){
                        if(index%2===0){
                          return  <div className="layout-block layout-block--8-8 layout-block--animated layout-block--compact layout-block--nodelay">
                          <div className="layout-block__inner">
                            <div className="layout-block__cell">
                              <div className="content-block content-block--centre content-block--pad-bottom">
                                <div className="content-block__inner">
                                  <div className="image-frame image-frame--desktop">
                                    <div className="image-frame__inner">
                                      {/* <img src="assets/images/h2.jpg" /> */}
                                      <img src={BASE_URL.slice(0,-5)+ work.image}/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="layout-block__cell cell-right">
                              <div className="content-block content-block--pad-bottom content-block--v-aligncontent-block--pad-right">
                                <div className="content-block__inner">
                                  <h3 className="content-block__heading blue-text word-reveal">{work.title}</h3>
                                  <p className="large-copy">{work.description}</p>
                                  <div className="hw-it-btn">
                                  {/* <button className=" button button--green "> Show More</button> */}
                                  <a href={work.redirect_link}>Show More </a>
    
                                   </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        
                        }
                        else{
                          return  <div className="layout-block layout-block--8-8 layout-block--animated layout-block--compact layout-block--nodelay layout-block--reversed">
                          <div className="layout-block__inner">
                            <div className="layout-block__cell">
                              <div className="content-block content-block--centre content-block--pad-bottom">
                                <div className="content-block__inner">
                                  <div className="image-frame image-frame--desktop">
                                    <div className="image-frame__inner">
                                      <canvas className="animation__spacer" width={456} height={307} />
                                      {/* <img src="assets/images/h1.jpg" /> */}
                                      <img src={BASE_URL.slice(0,-5)+ work.image}/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
    
                            <div className="layout-block__cell  cell-right">
                              <div className="content-block content-block--pad-bottom content-block--v-align content-block--pad-left">
                                <div className="content-block__inner">
                                  <h3 className="content-block__heading blue-text word-reveal">{work.title}</h3>
                                  <p className="large-copy">{work.description}</p>
                                  <div className="hw-it-btn">
                                    {/* <button className=" button button--green button--compact signup-modal-trigger"> Show More</button> */}
                                    <a href={work.redirect_link}>Show More </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                        }
                      })}
                      
                   
                    
                    
                   



{/* 
                    <div className="layout-block layout-block--8-8 layout-block--animated     layout-block--compact layout-block--nodelay">
                      <div className="layout-block__inner">
                        <div className="layout-block__cell ">
                          <div className="content-block content-block--centre content-block--pad-bottom">
                            <div className="content-block__inner">
                              <div className="image-frame image-frame--desktop">
                                <div className="image-frame__inner">
                                  <canvas className="animation__spacer" width={456} height={307} />
                                  <img src="assets/images/h3.jpg" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                       
                      </div>
                        
                        <div className="layout-block__cell cell-right">
                          <div className="content-block content-block--pad-bottom content-block--v-aligncontent-block--pad-right">
                            <div className="content-block__inner">
                              <h3 className="content-block__heading blue-text word-reveal">Connect and do
                                business</h3>
                              <p className="large-copy">Buyers connect with you directly on Veniver to start
                                conversations, request samples, and discuss next steps.</p>
                              <div className="hw-it-btn">
                                <button className=" button button--green button--compact signup-modal-trigger"> Show More</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

 */}


                    
                    <div className="cta">
                      <p><a href="#" className="cta__link link link--arrow blue-text">Learn more about
                          Veniver Features
                          <svg xmlns="http://www.w3.org/2000/svg" className="svg" width={20} height={12}>
                            <path className="svg__fill" d="M14 0l-1.06 1.06 4.19 4.19H0v1.5h17.13l-4.19 4.19L14 12l6-6z" />
                          </svg>
                        </a></p>
                    </div>
                  </div>
                </div>
              </section>
              {/* <section className="section section--slim">
                <div className="section__inner">
                  <div className="section__intro">
                    <h2 className="section__heading">Supplier Success Stories</h2>
                  </div>
                </div>
              </section> */}

              {/* {succestory.map(story=>( */}
                {/* <section className="section section--full section--blue">
                
                <div className="section__side-panel">
                  <div className="image-slider image-slider--stories image-slider--blue">
                    <div className="image-slider__track">
                      <div className="image-slider__slide">
                      {succestory.map(story=>(
                        <img className="image-slider__image" loading="lazy" src={BASE_URL.slice(0,-5)+ story.image} alt="Veniver2" />))}
                      </div>
                      
                    </div>
                    <button className="image-slider__button image-slider__button--prev">
                      <img src="public_site_assets/svg/icon__arrow--left-c9cc4ee0515feeaafac5cd0d277723132f8abedbbd9c7b1e141192e9a3239d74.svg" alt="Icon  arrow  left" />
                    </button>
                    <button className="image-slider__button image-slider__button--next">
                      <img src="public_site_assets/svg/icon__arrow--right-73b34c3a567c22633e693c81684c7cd7840043fa902afc25f977643806a1fc36.svg" alt="Icon  arrow  right" />
                    </button>
                  </div>
                </div>
                <div className="section__inner">
                  <div className="layout-block layout-block--push">
                    <div className="layout-block__inner">
                      <div className="layout-block__cell">
                        <div className="content-block">
                          <div className="content-block__inner">
                            <div className="image-slider__track image-slider__track--captions">
                              <div className="image-slider__slide image-slider__slide--caption image-slider__slide--with_footer">
                              
                                <div className="image-slider__slide_text">
                                  <div className="content-block__logo">
                                    <img loading="lazy" src="assets/images/barrelhouselogo.png" alt="Veniver4" />
                                  </div>
                                  <p className="customer-stories__quote"></p>
                                  <div className="customer-profile">
                                    <div className="customer-profile__avatar">
                                      <img src="assets/images/2.jpg" alt="" className="customer-profile__image" loading="lazy" />
                                    </div>
                                    <span className="customer-profile__name"></span>
                                    <span className="customer-profile__role"></span>
                                  </div>
                                </div>
                              </div>
                              
                              <a href="#" className="image-slider__link button button--full">Read the customer
                                story <svg xmlns="http://www.w3.org/2000/svg" className="svg" width={20} height={12}>
                                  <path className="svg__fill" d="M14 0l-1.06 1.06 4.19 4.19H0v1.5h17.13l-4.19 4.19L14 12l6-6z">
                                  </path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section> */}
              <section className="section blog-section">
                <div className="section__inner stories-section__inner">
                  <div className="section__intro">
                    <h2 className="section__heading">Letest Blog</h2>
                  </div>
                  
                  <div className="section__sub-section">
                  
                    <div className="stories">
                      <div className="stories__grid load-more">
                      {blogs.map(blog=>(
                        <a href="#" className="story-item">
                        
                          <div className="story-item__image-container">
                          
                            {/* <img className="story-item__image" src="assets/images/blog1.jpg" alt="blog1" /> */}
                            <img src={BASE_URL.slice(0,-5)+ blog.image} width='90%'/>
                          </div>
                          <div className="blog-title">
                            <h6 className="story-item__title dark-text left-t">{blog.title}</h6>
                            <span className="date right-t">May 25, 2021</span>
                          </div>
                          <div className="story-item__category">{blog.blog_category}</div>
                          <p className="story-item__description">{blog.story}</p>
                          <div className="story-item__cta">Read their story</div>
                        </a>))}
                        {/* <a href="#" className="story-item">
                          <div className="story-item__image-container">
                            <img className="story-item__image" src="assets/images/blog2.jpeg" alt="blog2" />
                          </div>
                          <div className="blog-title">
                            <h6 className="story-item__title dark-text">HealthyLine</h6>
                            <span className="date right-t">May 25, 2021</span>
                          </div>
                          <div className="story-item__category">Consumer Goods</div>
                          <p className="story-item__description">Discover how this FDA approved health and wellness brand leveraged RangeMe to land a deal with a prominent online retailer.</p>
                          <div className="story-item__cta">Read their story</div>
                        </a> */}
                        {/* <a href="#" className="story-item">
                          <div className="story-item__image-container">
                            <img className="story-item__image" src="assets/images/blog3.jpg" alt="blog4" />
                          </div>
                          <div className="blog-title">
                            <h6 className="story-item__title dark-text">Zoha Fragrances</h6>
                            <span className="date right-t">May 25, 2021</span>
                          </div>
                          <div className="story-item__category">Beauty</div>
                          <p className="story-item__description">Learn how Zoha Fragrances got their indie brand of oil-based, clean ingredient perfumes into Drug Emporium stores with the help of RangeMe.</p>
                          <div className="story-item__cta">Read their story</div>
                        </a> */}
                        
                      </div>
                    </div>
                  </div>
                  <div className="section__sub-section customer-stories__signup_block">
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
                  </div>
                </div>
              </section>
              <section className="section section--border section--collapse">
                <div className="section__inner customer-logos__section">
                  <div className="customer-logos">
                    <h2 className="section__heading">Trusted by hundreds of retailers worldwide</h2>
                    <div className="customer-logos__inner">
                      <div className="customer-logos__item">
                        <img className="initial-logo-0" src="assets/images/logo__target.svg" alt="Logo1" />
                      </div>
                      <div className="customer-logos__item">
                        <img className="initial-logo-1" src="assets/images/logo__sephora.svg" alt="Logo2" />
                      </div>
                      <div className="customer-logos__item">
                        <img className="initial-logo-2" src="assets/images/logo__safeway.svg" alt="Logo3" />
                      </div>

                      <div className="customer-logos__item">
                        <img className="initial-logo-0" src="assets/images/logo__target.svg" alt="Logo1" />
                      </div>
                      <div className="customer-logos__item">
                        <img className="initial-logo-1" src="assets/images/logo__sephora.svg" alt="Logo2" />
                      </div>
                      <div className="customer-logos__item">
                        <img className="initial-logo-2" src="assets/images/logo__safeway.svg" alt="Logo3" />
                      </div>
                     
                    </div>
                    <div className="customer-logos__collection">
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
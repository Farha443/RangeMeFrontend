import React from 'react';
import Header from '../menubar/Header'
import Footer from '../footer/Footer'
import { NavLink } from 'react-bootstrap';
import useState from 'react-hook-use-state';
import SignupModal from '../element/SignupModal';

function Start(){
  alert('Hello');
}

function Home(){
  const [modalShow, setModalShow] = useState(false);

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
                    <h1 className="header__title">Get discovered by the&nbsp;<br />world's leading retailers</h1>
                    <button className="header__cta button button--large button--green"  onClick={() => setModalShow(true)}>Sign Up For Free</button>
                  </div>
                </div>
                <div className="header__background" style={{backgroundImage: 'url("assets/images/banner1.jpg")'}}>
                </div>
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
                            <div className="stats__item">
                              <div className="count-icn stats__description">
                                <i className="fa fa-user-o" aria-hidden="true" />
                              </div>
                              <span className="stats__value blue-text">10,000+</span>
                              <p className="stats__description">Retail buyers</p>
                            </div>
                            <div className="stats__item">
                              <div className="count-icn stats__description">
                                <i className="fa fa-archive" aria-hidden="true" />
                              </div>
                              <span className="stats__value blue-text">175,000+</span>
                              <p className="stats__description">Suppliers</p>
                            </div>
                            <div className="stats__item">
                              <div className="count-icn stats__description">
                                <i className="fa fa-product-hunt" aria-hidden="true" />
                              </div>
                              <span className="stats__value blue-text">700,000+</span>
                              <p className="stats__description">Products being discovered</p>
                            </div>
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
                    <div className="layout-block layout-block--8-8 layout-block--animated layout-block--compact layout-block--nodelay
    ">
                      <div className="layout-block__inner">
                        <div className="layout-block__cell">
                          <div className="content-block content-block--centre content-block--pad-bottom">
                            <div className="content-block__inner">
                              <div className="image-frame image-frame--desktop">
                                <div className="image-frame__inner">
                                  <img src="assets/images/h2.jpg" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="layout-block__cell cell-right">
                          <div className="content-block content-block--pad-bottom content-block--v-align
           content-block--pad-right
          ">
                            <div className="content-block__inner">
                              <h3 className="content-block__heading blue-text word-reveal">Showcase your
                                products</h3>
                              <p className="large-copy">Your brand profile is a customizable digital sell
                                sheet that highlights key product, brand, and company details all in a
                                single place.</p>
                              <div className="hw-it-btn">
                                <button className="show-more-btn"> Show More</button>

                                <NavLink to="" onClick={()=>Start()}> Click Here  </NavLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="layout-block layout-block--8-8 layout-block--animated layout-block--compact layout-block--nodelay
     layout-block--reversed
    ">
                      <div className="layout-block__inner">
                        <div className="layout-block__cell">
                          <div className="content-block content-block--centre content-block--pad-bottom">
                            <div className="content-block__inner">
                              <div className="image-frame image-frame--desktop">
                                <div className="image-frame__inner">
                                  <canvas className="animation__spacer" width={456} height={307} />
                                  <img src="assets/images/h1.jpg" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="layout-block__cell  cell-right">
                          <div className="content-block content-block--pad-bottom content-block--v-align
           content-block--pad-left
          ">
                            <div className="content-block__inner">
                              <h3 className="content-block__heading blue-text word-reveal">Get discovered</h3>
                              <p className="large-copy">Buyers use Veniver to discover new products and manage
                                their inbound submissions. Your products are placed in front of relevant
                                buyers in your category.</p>
                              <div className="hw-it-btn">
                                <button className=" button button--green button--compact signup-modal-trigger"> Show More</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="layout-block layout-block--8-8 layout-block--animated layout-block--compact layout-block--nodelay
    ">
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
                        <div className="layout-block__cell cell-right">
                          <div className="content-block content-block--pad-bottom content-block--v-align
           content-block--pad-right
          ">
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
                    </div>
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
              <section className="section section--slim">
                <div className="section__inner">
                  <div className="section__intro">
                    <h2 className="section__heading">Supplier Success Stories</h2>
                  </div>
                </div>
              </section>
              <section className="section section--full section--blue">
                <div className="section__side-panel">
                  <div className="image-slider image-slider--stories image-slider--blue">
                    <div className="image-slider__track">
                      <div className="image-slider__slide">
                        <img className="image-slider__image" loading="lazy" src="assets/images/product01.jpg" alt="Veniver2" />
                      </div>
                      <div className="image-slider__slide">
                        <img className="image-slider__image" loading="lazy" src="assets/images/product02.jpg" alt="Veniver3" />
                      </div>
                      <div className="image-slider__slide">
                        <img className="image-slider__image" loading="lazy" src="assets/images/product03.jpg" alt="Veniver1" />
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
                                  <p className="customer-stories__quote">“What would have normally taken
                                    us four to eight weeks of emailing, calling, or trying to get
                                    people to return an email, happened within seven days on
                                    Veniver.”</p>
                                  <div className="customer-profile">
                                    <div className="customer-profile__avatar">
                                      <img src="assets/images/2.jpg" alt="" className="customer-profile__image" loading="lazy" />
                                    </div>
                                    <span className="customer-profile__name">Chis Vaughn</span>
                                    <span className="customer-profile__role">Founder, Marketing
                                      Director</span>
                                  </div>
                                </div>
                              </div>
                              <div className="image-slider__slide image-slider__slide--caption image-slider__slide--with_footer">
                                <div className="image-slider__slide_text">
                                  <div className="content-block__logo">
                                    <img loading="lazy" src="assets/images/barrelhouselogo.png" alt="logo-white" />
                                  </div>
                                  <p className="customer-stories__quote">“The message we received on
                                    Veniver from Whole Foods Market was the best message we ever
                                    received in our lives.”</p>
                                  <div className="customer-profile">
                                    <div className="customer-profile__avatar">
                                      <img src="assets/images/3.jpg" alt="the message" className="customer-profile__image" loading="lazy" />
                                    </div>
                                    <span className="customer-profile__name">Ashley Thompson</span>
                                    <span className="customer-profile__role">Co-Founder, CEO </span>
                                  </div>
                                </div>
                              </div>
                              <div className="image-slider__slide image-slider__slide--caption image-slider__slide--with_footer">
                                <div className="image-slider__slide_text">
                                  <div className="content-block__logo">
                                    <img loading="lazy" src="assets/images/barrelhouselogo.png" alt="Nerv logo" />
                                  </div>
                                  <p className="customer-stories__quote">“We’re in a place where we’re
                                    ready to move to those larger-scale accounts and distribute this
                                    product that we know people love — and Veniver helps us make our
                                    product accessible to more people.”</p>
                                  <div className="customer-profile">
                                    <div className="customer-profile__avatar">
                                      <img src="assets/images/6.jpg" alt="Veniver5" className="customer-profile__image" loading="lazy" />
                                    </div>
                                    <span className="customer-profile__name">Dr. Michael Jiang</span>
                                    <span className="customer-profile__role">Co-Founder, Co-CEO</span>
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
              </section>
              <section className="section blog-section">
                <div className="section__inner stories-section__inner">
                  <div className="section__intro">
                    <h2 className="section__heading">Letest Blog</h2>
                  </div>
                  <div className="section__sub-section">
                    <div className="stories">
                      <div className="stories__grid load-more">
                        <a href="#" className="story-item">
                          <div className="story-item__image-container">
                            <img className="story-item__image" src="assets/images/blog1.jpg" alt="blog1" />
                          </div>
                          <div className="blog-title">
                            <h6 className="story-item__title dark-text left-t">Spinster Sisters</h6>
                            <span className="date right-t">May 25, 2021</span>
                          </div>
                          <div className="story-item__category">Beauty</div>
                          <p className="story-item__description">See how Spinster Sisters fused passion with a greater mission to create clean and sustainable products for consumers nationwide.</p>
                          <div className="story-item__cta">Read their story</div>
                        </a>
                        <a href="#" className="story-item">
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
                        </a>
                        <a href="#" className="story-item">
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
                        </a>
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
import React from 'react';
import Header from '../menubar/Header'
import Footer from '../footer/Footer'
import { Link,NavLink } from "react-router-dom";
import useState from 'react-hook-use-state';
import SignupModal from '../element/SignupModal';
import Slider from "react-slick";


function Supplies(){

  const [modalShow, setModalShow] = useState(false);
    
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
    return(
        <>
        {/* <SignupModal/> */}
        <SignupModal show={modalShow} onHide={() => setModalShow(false)} />
         <Header/>   
        
              

          <div className="my-container" >

     
            <main className="content" >

              <section className="other-banner-section" style={{backgroundImage: 'url(../assets/images/banner-1.jpg)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="supplie-banner-text">
                                <p className="p1"> anasayfa </p>
                                <h1> TEDARİKÇİLER </h1>
                                <p className="p2"> Ürünlerinizi ve marka profilinizi <span > binlerce alıcıya sergileyerek</span> </p>
 <NavLink to=""> satışlarınızı arttırın! </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
              </section>
             

                <section className="hm-slider-section supplie-logo-slide-section">
                  <div className="container">
                

                    <div className="row">
                          <div className="col-md-12 col-xs-12 supplie-logo-slide">
                      
                              <Slider {...settings}>
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

                      </Slider>

                          </div>
                    </div>
  
                  </div>
              </section>  

              <section className="lr-section-main bg-g"> 
                  <div className="container">
                    <div className="row"> 
                        <div className="col-md-12 col-xs-12">
                            <div className="lr-title-1">

                              <h3> Ürünlerİnİzİ bİnlerce alıcıya tanıtın! </h3>
                              </div>
                        </div>
                    </div>

                    <div className="row"> 
                        <div className="col-md-6 co-xs-12">
                            <div className="d-one-12423">
                                <ul>
                                  <li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                        <img src="assets/images/icons/profile.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> 
Create Your Brand Profile </h6>
                                        <p> Alıcı firmaların ihtiyaç duyabileceği önemli marka bilgileriniz </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                        <img src="assets/images/icons/received-copy.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> Promote Your Product Page</h6>
                                        <p> Alıcı firmaların ihtiyaç duyabileceği önemli marka bilgileriniz </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                        <img src="assets/images/icons/share.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> Share Your Profile</h6>
                                        <p> Alıcı firmaların ihtiyaç duyabileceği önemli marka bilgileriniz </p>
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
              </section>
            
              <section className="lr-section-main lr-2sec"  style={{background:"white"}}> 
                  <div className="container">
                    <div className="row"> 
                        <div className="col-md-5  col-xs-12">
                            <div className="frame-main-d">
                                <img src="assets/images/btn.png" />
                            </div>
                        </div>

                        <div className="col-md-6 co-xs-12 ml-auto">
                            <div className="r-text-254">
                            <h5> Alıcı fİrmalar İle bağlantı kurun ve <br/>
                                  marka profİlİnİzİ paylaşarak İşİnİzİ büyütün! </h5>
                            </div>
                            <div className="d-one-12423">
                                <ul>
                                  <li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                        <img src="assets/images/icons/view.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> Company Tracking </h6>
                                        <p> Potansiyel müşterilerinizin takibini sağlayabilmek için alıcı firma satış 
                                          kanalı oluşturun ve tek bir alanda Tayuss içindeki ve dışındaki alıcı
                                          firmalarla etkileşimi artırarak ilerleyin.
                                        </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                        <img src="assets/images/icons/increasing-stocks-graphic-of-bars-1.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> Information Profile </h6>
                                        <p> Markanızın performansını inceleyin, hangi alıcı firmaların profilinizi 
                                          görüntülediğini öğrenin ve ön plana çıkan ürünleri takip edin. </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                        <img src="assets/images/icons/pie-chart-finances.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6>Industry Data</h6>
                                        <p> Popüler arama terimleri, marj, liste fiyatları ve sertifikalar gibi 
hangi ürün detaylarının alıcı firmayla etkileşimi arttırdığını inceleyin. </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                        <img src="assets/images/icons/search-1.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6>Monitoring and Sharing Analytics</h6>
                                        <p>Marka profilinizi paylaştığınız alıcı firmalardan gelen ziyaretleri,
tıklamaları ve mesajları görüntüleyin. </p>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                  </div>
              </section>
              
              <section className="lr-section-main bg-g"> 
                  <div className="container">
                    <div className="row"> 
                        <div className="col-md-12 col-xs-12">
                            <div className="lr-title-1">
                              <h3> Markanızı dİrekt alıcı fİrmalara yönlendİrİn! </h3>
                              </div>
                        </div>
                    </div>

                    <div className="row"> 
                        <div className="col-md-6 co-xs-12">
                            <div className="d-one-12423">
                                <ul>
                                  <li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                        <img src="assets/images/icons/chat-conversation.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> Communication with Buyers</h6>
                                        <p>Markanızı direkt istediğiniz alıcı firma ile paylaşımını gerçekleştirerek, marka bilinirliği yaratın. </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                        <img src="assets/images/icons/ringing.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6>Category Review Notice</h6>
                                        <p> Alıcı firmaların ihtiyaç duyabileceği önemli marka bilgileriniz </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                        <img src="assets/images/icons/paper-plane.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6>Message Sending </h6>
                                        <p> Alıcı firmaların ihtiyaç duyabileceği önemli marka bilgileriniz </p>
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
              </section>

              <section className="hesap-banner-section"   style={{backgroundImage: 'url(../assets/images/midd-banner.jpg)'}}>
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-md-3 col-xs-12">
                            <div className="supp-mid-banner-bx">
                                <div className="supp-num">
                                  <h1> 1 </h1>
                                </div>
                                <div className="supp-text">
                                  <p>HESAP</p>
                                  <h1> OLUSTUR </h1>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-xs-12">
                            <div className="supp-mid-banner-bx">
                                <div className="supp-num">
                                  <h1> 2 </h1>
                                </div>
                                <div className="supp-text">
                                  <p>ÜRÜNLERİNİ </p>
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
                                  <p>SATIŞLARINI </p>
                                  <h1>ARTTIR</h1>
                                </div>
                            </div>
                        </div>


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

              <section className="lr-section-main lr-2sec"  style={{background:"white"}}> 
                  <div className="container">
                    <div className="row"> 
                        <div className="col-md-5 col-xs-12">
                            <div className="frame-main-d">
                                <img src="assets/images/btn.png" />
                            </div>
                        </div>

                        <div className="col-md-6 ml-auto co-xs-12">
                            <div className="r-text-254">
                            <h5> Daha Fazla Alıcı Fİrmaya Görünür Ol <br/>
                                 Satış Potansİyelİnİ güçlendİr!
                            </h5>
                            </div>
                            <div className="d-one-12423">
                                <ul>
                                  <li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                        <img src="assets/images/icons/file.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> Başlangıç   </h6>
                                        <p> Alıcı firmalar ile çalışmak için belirli kriterleri karşılayarak 
Tayuss Onayı alın.
                                        </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                        <img src="assets/images/icons/rise.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> Aramalarda Öne Çıkın </h6>
                                        <p> Arama sonuçlarında doğrulanmamış marka profillerinin üzerinde 
görünerek etkileşiminizi arttırın. </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                        <img src="assets/images/icons/approval-symbol-in-badge.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> TAYUSS Onayı </h6>
                                        <p> Tayuss onayı ile alıcı firmalara satışa hazır olduğunuzu göstererek 
daha hızlı geri dönüş alın. </p>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                  </div>
              </section>
              
              <section className="lr-section-main bg-g"> 
                  <div className="container">
    

                    <div className="row"> 
                        <div className="col-md-6 co-xs-12">
                        <div className="r-text-254">
                            <h5> Hİzmet Sağlaycıları İle bağlantı kurarak <br/>
İHTİYAÇLARINIZI KARŞILAYIN!
                            </h5>
                            </div>
                            <div className="d-one-12423">
                                <ul>
                                  <li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                        <img src="assets/images/icons/binoculars.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> Keşfet </h6>
                                        <p>Kategorileri inceleyerek ve belirli filtreleme seçenekleri kullanarak ihtiyaç 
duyabileceğiniz hizmet sağlayıcılarını görüntüleyin. </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                        <img src="assets/images/icons/feedback-2.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> Geri Bildirimler </h6>
                                        <p> Hizmet sağlayıcısı ile daha önce çalışma sağlayan tedarikçilerin geri 
bildirimlerini inceleyerek değerlendirin. </p>
                                      </div>
                                    </div>
                                  </li>

                                  <li>
                                    <div className="ic-text-mn">
                                    <div className="ic-5248 ic-22"> 
                                        <img src="assets/images/icons/contract.svg" class="icn-img"/>
                                      </div>
                                      <div className="ic-text-6254">
                                        <h6> Teklif Alma </h6>
                                        <p> İstediğiniz hizmet sağlayıcısı ile iletişim kurun, teklif alın ve aldığınız
teklifleri karşılaştırarak en doğru seçimi yapın. </p>
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

              <section className="btm-banner-section"> 
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <div className="btm-banner-cont-m"> 
                                <div className="btm-banner-text">
                                  <h3> <span className="btm-banner-text-yl">HEMEN ÜCRETSİZ  </span>  HESAP OLUŞTUR!  </h3>
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
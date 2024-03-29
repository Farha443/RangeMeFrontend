import React, {useEffect, userEffect, useState} from 'react';
import Header from '../menubar/Header'
import Footer from '../footer/Footer'
import { Link,NavLink, withRouter } from "react-router-dom";
import SignupModal from '../element/SignupModal';
import BASE_URL from '../base';
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function PrivacyStatement(){

  const [modalShow, setModalShow] = useState(false);
  const [heading, setheading]= useState([])
  const [head, sethead]= useState([])
  const [link, setlink]= useState([])


  useEffect(() => {
    axios.get(BASE_URL+'about/privacy/')
    .then(res=>{
      // console.clear()
      // console.log(res.data)
      setlink(res.data.policy.description)
      setheading(res.data.pheading)
      sethead(res.data.banner)
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
        <SignupModal show={modalShow} onHide={() => setModalShow(false)} />

         <Header/>   
        
          <div className="my-container" >
            <main className="content" >

              <section className="other-banner-section" style={{backgroundImage: 'url('+(heading.bg_img?BASE_URL.slice(0,-5)+heading.bg_img:"assets/images/banner-1.jpg")+')'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="supplie-banner-text">
                                <h1> {heading.heading} </h1>
                                <p className="p2">{heading.description}</p>
                                {/* <NavLink to=""> benimsiyoruz!  </NavLink> */}
                            </div>
                        </div>
                    </div>
                </div>
              </section>
             
              <section className="service-p-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                       
                            <div className="about-text-md">
                                {/* <p> {link}</p> */}
                                <EditorPreview data={link} />

                             
                            </div> 
                        </div>
                    </div>
                </div>
            </section>

              <section className="btm-banner-section"  style={{backgroundImage: 'url("assets/images/btm-banner.jpg")'}}> 
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

export default PrivacyStatement
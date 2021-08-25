import React from 'react';
import Header from '../menubar/Header'
import Footer from '../footer/Footer'
import { Link,NavLink, withRouter } from "react-router-dom";
import useState from 'react-hook-use-state';
import SignupModal from '../element/SignupModal';
import BASE_URL from '../base';
import axios from 'axios';

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
        
          <div className="my-container" >
            <main className="content" >

              <section className="other-banner-section" style={{backgroundImage: 'url(../assets/images/banner-1.jpg)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-xs-12">
                            <div className="supplie-banner-text">
                                <p className="p1"> anasayfa </p>
                                <h1> HAKKIMIZDA </h1>
                                <p className="p2">Lorem ipsum dolor sit amet, <span >  consetetur sadipscing elitr, </span> </p>
                                <NavLink to=""> sed diam nonumy eirmod.  </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
              </section>
              <section className="blog-n-section">
                    <div className="container">
                        <div className="row">
                        {this.state.data.map(blog=>{
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
}

export default Blogs
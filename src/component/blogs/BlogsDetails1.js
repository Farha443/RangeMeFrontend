import React from 'react';
import Header from '../menubar/Header'
import Footer from '../footer/Footer'
import { NavLink } from 'react-bootstrap';
import useState from 'react-hook-use-state';
import SignupModal from '../element/SignupModal';
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
    InputGroup,
    Card,
    Row
} from 'react-bootstrap';
import BASE_URL from '../base';
import axios from 'axios';

class BlogsDetails1 extends React.Component {
//   const [modalShow, setModalShow] = useState(false);
constructor(props) {
    super(props);
    this.state = {
        data:'<p>tayuss</p>',
        blog:{},
        modalShow : false
    };
  } 
  componentDidMount(){
    let uuid = this.props.match.params.uuid;
    if(uuid==='undefined'){
        window.location = '/blogs';
    }
    var url = BASE_URL+'home/blog_detail/'+uuid;
    var config={
      method:'get',
      url:url,
    }

    axios(config).then(re=>{
        this.setState({blog:re.data});  
        console.clear()
        console.log(re.data)
      
    }).catch(err=>{
      alert(err);
    })

}
  render() {
    return(
        <>
        {/* <SignupModal/> */}
        {/* <SignupModal show={modalShow} onHide={() => setModalShow(false)} /> */}
         {/* <Header/>   */}
         <div className="my-container" id="container">
       
             
             <section className="section blog-section success-section">
                  <div className="row">
                    <div className="col-md-8 col-xs-12 ">
                        {/* <div className="b-details-maind">
                            <div className="b-d-image">
                                <img src="assets/images/product02.jpg" />
                            </div>
                            <div className="b-d-text">
                                <h3> Zoha Fragrances </h3>
                                <p> 
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque vero libero voluptatibus earum? Alias dignissimos quo cum, nulla esse facere atque, blanditiis doloribus at sunt quas, repellendus vel? Et, hic!
                                </p>
                            </div>
                        </div> */}



<article class="blog-card">
<div className="blog-card__info">
            <div className="blog-d-imag-d5425">
                <img src={BASE_URL.slice(0,-5)+this.state.blog.b_image}/>
            </div>
          <h5>{this.state.blog.b_title}</h5>
          <p>
            {/* <a href="#" className="icon-link mr-3"><i className="fa fa-pencil-square-o" /> Tony Jahson</a> */}
            {/* <a href="#" className="icon-link"><i className="fa fa-comments-o" /> 150</a> */}
          </p>
          {/* <EditorPreview data={this.state.blog.b_content} /> */}
          {/* <p className="b-detail-text-p">{this.state.blog.b_content}</p> */}
          <EditorPreview data={this.state.blog.b_content} />
          
        </div>
</article>
      
    
                    </div>
                    
                    <div className="col-md-3 col-xs-12">
                        <div className="blog-right-sidebar-d1454">
                            <div className="b-side-one-item">
                            <label className="lb" htmlFor="basic-url" >Search</label>
                        <InputGroup className="mb-3">
                       
                            <FormControl aria-label="Text input with checkbox" />
                            <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm"><i class="fa fa-search" aria-hidden="true"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                        </InputGroup>
                            </div>

                            <div className="b-side-one-item">
                            <div class="widget-header">
                                <h5 class="title">other Blogs</h5>
                            </div>
                            <ul>
                                <li><a href="masking-sms.html">masking SMS<span class="amount">25</span></a></li>
                                <li><a href="non-masking-sms.html">Non - Masking SMS<span class="amount">04</span></a></li>
                                <li><a href="location-based-sms.html">Location Based<span class="amount">40</span></a></li>
                                <li><a href="voice-message.html">voice messages<span class="amount">28</span></a></li>
                                <li><a href="promotional-sms.html">promotional messages<span class="amount">29</span></a></li>
                                <li><a href="email-service.html">email service<span class="amount">99</span></a></li>
                            </ul>
                            </div>


                        </div>

                        

                    </div>
                    
                  </div>
            </section>
      
{/* <Footer/> */}

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

export default BlogsDetails1
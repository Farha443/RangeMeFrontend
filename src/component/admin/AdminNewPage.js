import React from 'react';
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
    Dropdown,
    Card,
    Modal,
    ButtonGroup,
    DropdownButton,
    Tab,
    Row
} from 'react-bootstrap';
import ImageUploader from 'react-images-upload';
import { NavLink } from 'react-router-dom';
import BASE_URL from '../base';
import AdminNavbar from './AdminNavbar';
import {CKEditor} from 'ckeditor4-react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const axios = require('axios');
var token = cookies.get("logintoken")




function Banner(){
  var heading = document.getElementById('heading').value;
  var bg_img = document.getElementById('bg_img').files[0];
  var url = BASE_URL+'home/indexheading/'
  var data = new FormData();
      data.append('heading', heading);
      data.append('bg_img', bg_img);

  var config = {
    method:'post',
    url:url,
    headers: {
      'content-type': `multipart/form-data; boundary=${data._boundary}`,
      "Authorization": "Bearer " + token,
    },
    data : data,
  }
        axios(config).then(res=>{
          console.log(res.data.data)
          window.location="/admin/home"
      }

      ).catch(err=>{
        console.error(err);

      })
}

function Works(){
  
  var title = document.getElementById("title").value;
  var description = document.getElementById('description').value;
  var redirect_link = document.getElementById('redirect_link').value;
  var image = document.getElementById('image').files[0];
  var url = BASE_URL+'home/works/';
  var data = new FormData();
      data.append('title', title);
      data.append('description', description);
      data.append('redirect_link', redirect_link);
      data.append('image', image);

  var config = {
    method:'post',
    url:url,
    headers: {
      'content-type': `multipart/form-data; boundary=${data._boundary}`,
      "Authorization": "Bearer " + token,
    },
    data : data,
  }
        axios(config).then(res=>{
          console.log(res.data.data)
          window.location="/admin/home"
      }

      ).catch(err=>{
        console.error(err);

      })
}

function Stats(){

  var num = document.getElementById("num").value;
  var content = document.getElementById('text').value;
  var icon = document.getElementById('icon').value;
  var url = BASE_URL+'home/stats/';
  var data = new FormData();
      data.append('num', num);
      data.append('content', content);
      data.append('icon', icon);

  var config = {
    method:'post',
    url:url,
    headers: {
      'content-type': `multipart/form-data; boundary=${data._boundary}`,
      "Authorization": "Bearer " + token,
    },
    data : data,
  }
        axios(config).then(res=>{
          console.log(res.data.data)
          window.location="/admin/home"
      }

      ).catch(err=>{
        console.error(err);

      })
}

class AdminNewPage extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
        data: [],
        content :'This is a test',
    };

    this.handleChange = this.handleChange.bind( this );
    this.onEditorChange = this.onEditorChange.bind( this );
}

onEditorChange( evt ) {
    this.setState( {
      content: evt.editor.getData()
    } );
}

handleChange( changeEvent ) {
    this.setState( {
      content: changeEvent.target.value
    } );
}



  // state = {
  //   data: [],
  //   message1: "message"

  // };
  handleChange(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('output');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
    
}

handleChange(event) {
  var reader = new FileReader();
  reader.onload = function(){
    var output = document.getElementById('output1');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
  
}

  async componentDidMount(){
    var url = BASE_URL+'authentication/getcategory/';
    var config = {
        method: 'get',
        url: url,
  
      };
      axios(config)

  .then(res => {
    this.setState({
      data: res.data.data
    });
    
    console.log(res.data.data);
  })
  .catch(err => {
    alert(err);
  })
   
}
    render(){

  return (
    <>

<AdminNavbar />

    <section className="ad-pad-sec">
        
      <Container>
          <Row>

       
          <Col md="3">
                        <aside>
                                <div className="admin-sidebar-main">
                                    <p className="p1"> Home Setting </p>
                                    <ul>
                                 
                                        <li>
                                            <NavLink to="/admin/home"
                                            inactiveClassName="text-gray-800"
                                            >
                                                <img src="/assets/images/image-gallery.png" />
                                                <div className="sidebar-title">Home Settings </div>
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/add-blog"
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="/assets/images/blog.png" />
                                                <div className="sidebar-title"> Add Blogs  </div>
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                              </NavLink>
                                        </li>
                                      
                                      
                                    </ul>
                                </div>
                            </aside>
                        </Col>              

        <Col md={9}>
          <Card className="">
            <Card.Header><h5 className="ad-h5" >Banner Settings</h5></Card.Header>
            <Card.Body>
              <Row>
              <Col sm="5">
                    <Form.Label for="exampleEmail" >Banner Tagline</Form.Label>
                <Form.Control
                    type="text"
                    name="text"
                    id="heading"
                   
                    placeholder="Add Tagline"
                />
                    </Col>
                    <Col sm="4" className="up-right-main">
                    <div class="form-group">
                    <Form.Label for="exampleFile" >Banner Image </Form.Label>
                    {/* <Form.Control id="bg_img" type="file" name="file" />  */}
                    </div>
                      {/* <img src="/assets/images/megaphone.png" width="180px" height="120px" /> */}
                      <div className="pic202">
                      <img className="" id="output" src=""/>
                      <input  type="file" id="bg_img" onChange={this.handleChange} placeholder="Change"/>
                  
                      </div>
                    
                </Col>

                {/* <Col md="3">
                    <div className="banner-upload-img-show">
                      <img className="img-responsive" src="/assets/images/h3.jpg"/>
                    </div>
                </Col> */}
                </Row>

                <Form.Group check row>
                  <Col sm="12" className="text-center">
                   
                    <button className="admin-add-btn" onClick={Banner}> Submit </button>
                  </Col>
                </Form.Group>
              
            </Card.Body>
          </Card>

          <Card className="mt-4"> 
            <Card.Header><h5 className="ad-h5">How it works section</h5></Card.Header>
            <Card.Body>
            <div className="row">
            {/* <div className="col-md-12">
                          <div className="temp-list-main">
                            
                                <ul>
                            
                      <li> 
                                      

                                <div className="temp-second">
                                    <div className="temp-second-img">
                                    <img src="avatars/6.jpg" />
                                  
                                    </div>
                                </div> 

                                <div className="temp-third">
                                <div class="grid-meta">
                                    <h4>
                                    <NavLink to="#" ></NavLink></h4>
                                        <p><strong> </strong> </p>
                                        <p></p>
                                          </div>
                                </div>

                                <div className="temp-btn">
                        


                                <ButtonGroup>
                                    <Button  >Options</Button>

                                    <DropdownButton as={ButtonGroup}  id="bg-nested-dropdown">
                                        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                                        <Dropdown.Item>Delete</Dropdown.Item>
                                    </DropdownButton>
                                </ButtonGroup>
                                

                                </div>  
                            </li>
                        
                    
                                  </ul> 
                              
                          </div>
                      </div> */}
            </div>

              <Row>
              <Col sm="6">
                    <Form.Label for="exampleEmail">Tile Title</Form.Label>
                <Form.Control
                    type="text"
                    name="text"
                    id="title"
                    placeholder="text"
                />
                    </Col>

                    <Col sm="6">
                    <Form.Label for="exampleEmail">Tile Description</Form.Label>
                <Form.Control
                    type="text"
                    name="text"
                    id="description"
                    placeholder="text"
                />
                    </Col>
                </Row>

              <Row>
                {/* <Col cm="6">
                    
                <Form.Label for="exampleFile" >Image </Form.Label>
                  <Form.Control id="tool_image" type="file" name="file" />
                  <Button  className="up-btn">Upload</Button>
                 
                </Col> */}
                
                <Col sm="6" className="up-right-main">
                    <div class="form-group">
                    <Form.Label for="exampleFile" >Tile Image </Form.Label>
                    {/* <Form.Control id="image"  type="file" name="file" /> */}
                    </div>
                   
                    {/* <div className="banner-upload-img-show img-21421">
                      <img className="img-responsive" src="/assets/images/h3.jpg"/>
                    </div> */}
                    <div className="pic202">
                      <img className="" id="output1" src=""/>
                      <input  type="file" id="image" onChange={this.handleChange} placeholder="Change"/>
                  
                      </div>
              
        

                </Col>

                

                <Col cm="6">
                  <Form.Label for="exampleFile" >Redirect Link</Form.Label>
                  <Form.Control id="redirect_link" type="text" name="text" />
                </Col>
                </Row>

                <Form.Group check row>
                  <Col sm="12" className="text-center">
               
                    <button className="admin-add-btn" onClick={Works}> Submit </button>
                  
                  </Col>
                </Form.Group>
              
            </Card.Body>
          </Card>

          <Card className="mt-4">
            <Card.Header> <h5>Stats data</h5> </Card.Header>
            <Card.Body>

  

              <Row>
              <Col sm="6">
                    <Form.Label for="exampleEmail">Number</Form.Label>
                <Form.Control
                    type="number"
                    name="text"
                    id="num"
                    placeholder="text"
                />
                    </Col>

                    <Col sm="6">
                    <Form.Label for="exampleEmail">Description</Form.Label>
                <Form.Control
                    type="text"
                    name="text"
                    id="text"
                    placeholder="text"
                />
                    </Col>
                
                </Row>

              <Row>
              <Col sm="6" className="up-right-main">
                    <div class="form-group">
                    {/* <Form.Label for="exampleFile" >icon </Form.Label>
                    <Form.Control id="icon" type="file" name="file" /> */}
                    {/* <Form.Label for="exampleFile" >Icon</Form.Label>
                  <Form.Control id="icon" type="text" name="text" /> */}
                    </div>
                    <div className="icn121">
                    {/* <span className="right-icn"> <i class="fa fa-check-square-o" aria-hidden="true"></i> </span> */}
                    </div>
              
                

                </Col>
       
                </Row>
                <Form.Group check row>
                  <Col sm="12" className="text-center">
              
                    
                    <button className="admin-add-btn" onClick={Stats}> Submit </button>
                  
                  </Col>
                </Form.Group>
                </Card.Body>
          </Card>
                
     

        </Col>
      
      </Row>
    </Container>     

    </section>


    </>

    // </Page>
  );
};
}
class EditorPreview extends React.Component {
  render() {
      return (
          <div className="editor-preview">
              {/* <h2>Rendered content</h2> */}
              <div dangerouslySetInnerHTML={ { __html: this.props.data } }></div>
          </div>
      );
  }
}

EditorPreview.defaultProps = {
  data: ''
};
export default AdminNewPage;

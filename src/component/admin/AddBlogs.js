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


class AddBlogs extends React.Component {
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

Blogs(){
  console.clear()
  console.log(this.state.content)
  var b_title = document.getElementById("b_title").value;
  var b_image = document.getElementById('b_image').files[0];
  var arr =[]
  var b_category = document.getElementById('b_category').value;
  arr.push(b_category)
  var b_story = document.getElementById('b_story').value;
  var b_content = this.state.content;

  if(document.getElementById('visible').checked == true) {   
    var visible = "True";   
} else {  
  var visible = "False";   
}  

  var url = BASE_URL+'home/blogs/';
  var data = new FormData();
      data.append('b_title', b_title);
      data.append('b_image', b_image);
      data.append('b_category', arr);
      data.append('b_story', b_story);
      data.append('b_content', b_content);
      data.append('visible_on_home', visible);
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

  // state = {
  //   data: [],
  //   message1: "message"

  // };

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
                                    <p className="p1"> Account Setting </p>
                                    <ul>
                                    <li>
                                            <NavLink to="/admin/home"
                                            inactiveClassName="text-gray-800"
                                            >
                                                <img src="/assets/images/image-gallery.png" />
                                                <div className="sidebar-title">Add Banner </div>
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
          
          <Card className="mt-4">
            <Card.Header> <h5>Blogs data</h5> </Card.Header>
            <Card.Body>
            <div className="row">
            </div>
              <Row>
              <Col sm="5">
                    <Form.Label for="exampleEmail">Title</Form.Label>
                <Form.Control
                    type="text"
                    name="text"
                    id="b_title"
                    placeholder="text"
                />
                    </Col>

                    <Col sm="4">
                    <Form.Label for="exampleEmail">Image</Form.Label>
                {/* <Form.Control
                    type="file"
                    name="text"
                    id="b_image"
                    placeholder="text"
                /> */}
                <div className="pic202">
                      <img className="" id="output" src=""/>
                      <input  type="file" id="bg_img" onChange={this.handleChange} placeholder="Change"/>
                  
                      </div>
                    </Col>

                    <Col md="3">
                    <div className="banner-upload-img-show">
                      <img className="img-responsive" src="/assets/images/h3.jpg"/>
                    </div>
                </Col>

                    <Col md="6">
                        <Form.Label> Category</Form.Label>
                        <Form.Control as="select"  id="b_category">
                        {this.state.data.map(cat=>(  
                        <option value={cat.uuid}>{cat.name}</option>))}
                        </Form.Control>
                    </Col>

                    <Col sm="6">
                    <Form.Label for="exampleEmail">Story</Form.Label>
                <Form.Control
                    type="text"
                    name="text"
                    id="b_story"
                    placeholder="text"
                />
                    </Col>
                    <Col sm="6">
                      <div className="cust-rd mt-4">
                            <Form.Check className="custrd "
                              type="radio"
                              id="visible"
                              label="Visible on Home"
                              defaultValue='off'
                            />
                          </div>
                        </Col>

                    <Col sm="12">
                    
                    <Form.Label for="exampleEmail">Content</Form.Label>
                    <CKEditor
                    data={this.state.content}
                    onChange={this.onEditorChange} />
                    {/* <label>
                        Change value:
                        <textarea defaultValue={this.state.content} onChange={this.handleChange} />

                        </label> */}
                        {/* <EditorPreview data={this.state.content} /> */}
                      

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
                   <br/>
                {/* <div className="up-01">
                <Button onClick={()=>this.ServImage()} className="up-btn">Upload</Button>
                
                </div> */}

                </Col>
                </Row>
                <Form.Group check row>
                  <Col sm="12" className="text-center">
                    <Button onClick={()=>this.Blogs()}>Submit</Button>
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
export default AddBlogs;

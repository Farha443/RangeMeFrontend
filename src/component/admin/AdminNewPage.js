import React from 'react';
// import {CButton,CTextarea,CCollapse,Form.Label,Form.Control, CCard, CCard.Body, CCard.Header, CCol, Form.Group, Row, CCardFooter } from '@coreui/react';
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
import AdminNavbar from './AdminNavbar'
const axios = require('axios');

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
    },
    data : data,
  }
        axios(config).then(res=>{
          console.log(res.data.data)

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
    },
    data : data,
  }
        axios(config).then(res=>{
          console.log(res.data.data)

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
    },
    data : data,
  }
        axios(config).then(res=>{
          console.log(res.data.data)

      }

      ).catch(err=>{
        console.error(err);

      })
}

class AdminNewPage extends React.Component {


    render(){
  return (
    <>

<AdminNavbar />

    <section className="ad-pad-sec">
        
      <Container>
          <Row>
      <Col md={12}>
          <Card>
            <Card.Header><h5 className="ad-h5" >Banner Settings</h5></Card.Header>
            <Card.Body>
              

              <Row>
              <Col sm="6">
                    <Form.Label for="exampleEmail" >Banner Tagline</Form.Label>
                <Form.Control
                    type="text"
                    name="text"
                    id="heading"
                   
                    placeholder="Add Tagline"
                />
                    </Col>

                
                    <Col sm="6" className="up-right-main">
                    <div class="form-group">
                    <Form.Label for="exampleFile" >Banner Image </Form.Label>
                    
                   
           
                  <Form.Control id="bg_img" type="file" name="file" /> 
                    </div>
                   
                

                </Col>

                
                </Row>



                <Form.Group check row>
                  <Col sm="12" className="text-center">
                    <Button onClick={Banner}>Submit</Button>
                  </Col>
                </Form.Group>
              
            </Card.Body>
          </Card>
        </Col>
        </Row>
    </Container>     

    </section>

    <section className="ad-pad-sec">
    <Container>
          <Row>
      <Col md={12}>
          <Card>
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
                    <Form.Control id="image"  type="file" name="file" />
                    </div>
                    {/* <div className="icn121">
                    <span className="right-icn"> <i class="fa fa-check-square-o" aria-hidden="true"></i> </span>
                    </div> */}
                   <br/>
                {/* <div className="up-01">
                <Button onClick={()=>this.ToolImage()} className="up-btn">Upload</Button>
                
                </div> */}

                </Col>

                <Col cm="6">
                    
                  <Form.Label for="exampleFile" >Redirect Link</Form.Label>
                  <Form.Control id="redirect_link" type="text" name="text" />
                </Col>
                  
               
                </Row>


                <Form.Group check row>
                  <Col sm="12" className="text-center">
                    <Button onClick={Works}>Submit</Button>
                  </Col>
                </Form.Group>
              
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
      </Container>  

    </section>
    
    <section className="ad-pad-sec">
      <Container>
          <Row>
        <Col xl={12} lg={12} md={12}>
          <Card>
            <Card.Header> <h5>Stats data</h5> </Card.Header>
            <Card.Body>

            <div className="row">
            
            {/* <div className="col-md-12">
                          <div className="temp-list-main">
                            <Form.Label for="exampleFile" >Redirect Link</Form.Label>
                  <Form.Control id="redirect_link" type="text" name="text" />
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
                                        <h3><strong>  </strong> </h3>
                                        <h4> </h4>
                                         </div>
                                </div>

                                <div className="temp-btn">
                        


                                <ButtonGroup>
                                    <Button  >Options</Button>

                                    <DropdownButton as={ButtonGroup}  id="bg-nested-dropdown">
                                        <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
                                        <Dropdown.Item >Delete</Dropdown.Item>
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
                   <br/>
                {/* <div className="up-01">
                <Button onClick={()=>this.ServImage()} className="up-btn">Upload</Button>
                
                </div> */}

                </Col>
       
               
                </Row>


                <Form.Group check row>
                  <Col sm="12" className="text-center">
                    <Button onClick={Stats}>Submit</Button>
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

import useState from 'react-hook-use-state';
import React from 'react';
import '../../../assets2/admin.css';
import AdminNavbar from '../AdminNavbar'
import BrandLogoHome from '../BrandLogoHome';
import { useFilePicker } from "use-file-picker";
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
  Card,
  Modal,
  Row,
  Tab
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';



function Endoresements(){
    const [isActive, setActive] = useState("false");
    const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
        readAs: "DataURL",
        accept: "image/*",
        multiple: true,
        limitFilesConfig: { max: 2 },
        // minFileSize: 1,
        maxFileSize: 50 // in megabytes
      });
    
      if (loading) {
        return <div>Loading...</div>;
      }
    
      if (errors.length) {
        return <div>Error...</div>;
      }

   
    return(
        <>
            <AdminNavbar/>

           
                <div className="admin-container">
                <div className="row">

                    
        {/* right sidebar div start  */}

        <div className="col-md-3">
            <div className="rgm-right-bar serv-p-side-left">

                <div className="serv-comp-leftbar">
                    <img src="assets/images/brand-logo.jpg" />
                </div> 

                <div className="serv-comp-title">
                    <h5> Company Name  </h5>
                </div>

                <div className="p-text-45878">
                    <span className="span-1"> Preview :</span>
                    <span className="span-2">
                        <NavLink to=""> Profile </NavLink>
                        <NavLink to=""> search Listing </NavLink>
                    </span>
                </div>

            </div>
         
        </div>
                <div className="rgm-left-content col-md-9">
            <section className="admin-home-section">

               <Row>
               <Col md="12" xs="12">
                    <div className="servi-welcome-main mb-0">
                        <div className="wel-text">
                        <h4> Request endorsements </h4>
                        <p>
                        Request endorsements from existing brands you've worked with.
                        </p>
                        <button className="admin-add-btn btn disabled" > Endoresements </button>
                        </div>

                        <div className="wel-img">
                            <img src="assets/images/welcome-img.svg" />
                        </div>
                    </div>
                </Col> 
               </Row>
       
            </section>



            <section className="admin-home-section2"> 
         
                <Row>
                    <Col md="12">
                    <Card>
                      
                        <Card.Body className="mb-4">
                            <div className="p-insight-d-main">
                                <div className="p-inside-title with-btn">
                                    <h5> Endorsements </h5>
                                           
                                </div>
                            </div>

                            {/* <Col md="6">

                            <div className="file-select-mn-d">
                            <button className="admin-add-btn" onClick={() => openFileSelector()}>Select files </button>
                            <br />
                            {filesContent.map((file, index) => (
                                <div key={index} className="file-cont">
                                <p>{file.name}</p>
                                <img alt={file.name} src={file.content}></img>
                                <br />
                                </div>
                            ))}
                            </div>

                            </Col> */}
                     
                        </Card.Body>
                    </Card>
                       
                    </Col>
                </Row>
        
            </section>

    
  
            </div>

                </div>
            </div>

        </> 
    );
}

export default Endoresements
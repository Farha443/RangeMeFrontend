import React from 'react';
import '../../assets2/admin.css';
import AdminNavbar from './AdminNavbar'
import { NavLink } from 'react-router-dom';

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
    Row
} from 'react-bootstrap';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import context from 'react-bootstrap/esm/AccordionContext';
import MyEditor from './MyEditor';
import ImgUploader from './ImgUpload';
import ProfileUploader from './ProfileUploader';
import InnerFooter from './InnerFooter';


function Notification() {
    return (
        <>
            <AdminNavbar />



            <section className="product-form-section">
                <Container fluid>
                    <Row className="justify">
                    <Col md="3">
                        <aside>
                                <div className="admin-sidebar-main">
                                    <p className="p1"> Hesap Ayarları</p>
                                    <ul>
                                        <li>
                                            <NavLink to="/admin_profile"
                                            inactiveClassName="text-gray-800"
                                            >
                                                <img src="assets/images/list-searching-variant.png" />
                                                <div className="sidebar-title">Senin profil </div>
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/change_password"
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/detail.png" />
                                                <div className="sidebar-title"> Şifre Değiştirme </div>
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/notification"
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/moving-truck.png" />
                                                <div className="sidebar-title"> Bildirimler  </div>
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                        <p className="p2"> Şirket Ayarları </p>
                                        <li>
                                            <NavLink to="/company_details"  
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/megaphone.png" />
                                                <div className="sidebar-title"> Şirket Detayları </div>
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink to="/team_access"  
                                            inactiveClassName="text-gray-800"
                                            activeClassName="rounded-sm text-gray-200 bg-blue-gray-dark">
                                                <img src="assets/images/megaphone.png" />
                                                <div className="sidebar-title"> Ekip Erişimi</div>
                                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </Col>
                        <Col md="8">

                            <Card>

                                <Card.Body>
                                    <div className="product-form-main">

                                        <div className="p-inside-title">
                                            <h5> <img src="assets/images/bell.png" /> Bildirimler </h5>

                                        </div>

                                        <div className="overview-form">

                                            <Row>
                                                <Col md="12 " className=" mt-4">
                                                    <h3> Web </h3>
                                                </Col>
                                                <hr />
                                            </Row>
                                            <Row>

                                                <Col md="6" className="mt-3" >
                                                    <h5> Brand </h5>
                                                    <div className="step-four-radio noti-check">

                                                        <Form.Group controlId="formBasicEmail">

                                                            <Form.Check inline name="group1" type="checkbox" id="1" checked />
                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Tayuss Onaylanmış™ durumunuzla ilgili güncellemeler</label>
                                                        </Form.Group>

                                                        <Form.Group controlId="formBasicEmail">

                                                            <Form.Check inline name="group1" type="checkbox" id="1" />
                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Onaya gönderilen markalar için hatırlatıcılar</label>
                                                        </Form.Group>

                                                    </div>
                                                </Col>
                                            </Row>


                                            <Row>

                                                <Col md="6" className="mt-2"  >
                                                    <h5> Ekip Çalışması </h5>
                                                    <div className="step-four-radio noti-check">

                                                        <Form.Group controlId="formBasicEmail">

                                                            <Form.Check inline name="group1" type="checkbox" id="1" />
                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Markanıza yeni ekip üyeleri eklendiğinde güncellemeler</label>
                                                        </Form.Group>

                                                        <Form.Group controlId="formBasicEmail">

                                                            <Form.Check inline name="group1" type="checkbox" id="1" />
                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Bekleyen ekip üyesi davetleri için hatırlatıcılar</label>
                                                        </Form.Group>

                                                    </div>
                                                </Col>
                                            </Row>


                                            <Row>

                                                <Col md="6" className="mt-2"  >
                                                    <h5> Çoklu Markalar  </h5>
                                                    <div className="step-four-radio noti-check">

                                                        <Form.Group controlId="formBasicEmail">

                                                            <Form.Check inline name="group1" type="checkbox" id="1" />
                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Tüm markalarınızdan gelen bildirimleri görün</label>
                                                        </Form.Group>


                                                    </div>
                                                </Col>
                                            </Row>

                                        </div>

                                    </div>

                                </Card.Body>
                            </Card>





                            <Card className="mt-4">

                                <Card.Body>
                                    <div className="product-form-main">

                                        <div className="p-inside-title">
                                            <h5> <img src="assets/images/mail.png" /> Email </h5>

                                        </div>

                                        <div className="overview-form">

                                            <Row>

                                                <Col md="6" className="mt-3" >
                                                    <h5> Alıcı Aktiviteleri </h5>
                                                    <div className="step-four-radio noti-check">

                                                        <Form.Group controlId="formBasicEmail">

                                                            <Form.Check inline name="group1" type="checkbox" id="1" checked />
                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Alıcı numume ürün talepleri</label>
                                                        </Form.Group>

                                                        <Form.Group controlId="formBasicEmail">

                                                            <Form.Check inline name="group1" type="checkbox" id="1" />
                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Alıcı size mesaj gönderdiğinde</label>
                                                        </Form.Group>

                                                        <Form.Group controlId="formBasicEmail">

                                                            <Form.Check inline name="group1" type="checkbox" id="1" />
                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Gelen okunmamış mesajlar okundu durumuna geçtiğinde</label>
                                                        </Form.Group>


                                                    </div>
                                                </Col>
                                            </Row>

                                        </div>

                                    </div>

                                </Card.Body>
                            </Card>


                            <Col md="12" className="text-center mt-3">
                                <button class="admin-add-btn"> Ürünü Kaydet</button>
                            </Col>
                        </Col>



                    </Row>
                </Container>
            </section>

            <InnerFooter/>

        </>
    );
}

export default Notification
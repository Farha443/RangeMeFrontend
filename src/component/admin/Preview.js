import React, {useEffect, userEffect, useState} from 'react';
import '../../assets2/admin.css';
import AdminNavbar from './AdminNavbar'
import Gallery from './Gallery'
import { NavLink, useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
    Row,
} from 'react-bootstrap';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import context from 'react-bootstrap/esm/AccordionContext';
import BASE_URL from '../base';
import axios from 'axios';
import Cookies from 'universal-cookie';
import BuyerNavbar from './BuyerNavbar';

const cookies = new Cookies();

var uuid = cookies.get('productuuid')
class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{},
            priceType:"",
        };
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
      } 

      handleDropdownChange(e) {
        this.setState({ priceType: e.target.value });
      }

      Redirect(uuid){
        cookies.set('productuuid',uuid,{path:'/'});
        window.location='/product_form/';
      }

     componentDidMount(){
        
        let uuid = this.props.match.params.uuid;
        if(uuid==='undefined'){
            window.location = '/newbuyerhome';
        }
        var url = BASE_URL+'product/fulldetail/'+uuid;
        var config={
          method:'get',
          url:url,
        }
        
        axios(config).then(re=>{
            this.setState({data:re.data});  
            console.log(re.data)
          
        }).catch(err=>{
          alert(err);
        })
    }
    // const use = useParams();
    // const[fullDetail,setFullDetail]=useState([])
    
    // useEffect(() => {
    //     alert(cookies.get('productuuid'))
    //     // console.log(use)
    //     // if(uuid==='undefined'){
    //     //     window.location = '/blogs';
    //     // }
    //     // var uuid = cookies.get('productuuid')
    //     var url = BASE_URL+'product/fulldetail/'+uuid;
    //     var config={
    //     method:'get',
    //     url:url,
    //     }

    //     axios(config).then(re=>{
    //         console.log(re.data)
    //         setFullDetail(re.data)
    //     }).catch(err=>{
    //     alert(err);
    //     })
    // },[])
    
    render() {
    return (
        <>
           <BuyerNavbar/>

            <section className="product-header-section">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="p-header-main">

                                <div className="p-header-left">
                                    <div className="prod-preview-img-d">
                                    {this.state.data.details?  <img src={BASE_URL.slice(0,-5)+this.state.data.details.image} />:""}
                                    </div>
                                    <div className="p-pre-brand-text">
                                        <h5> {this.state.data.product?this.state.data.product.product_name:''}</h5>
                                        {/* <p> Brand Name </p> */}
                                    </div>

                                </div>

                                <div className="p-header-right">
                                    <div className="p-right-content">
                                

                                        <div className="p-icn-02">
                                          {cookies.get('user_type')==="supplier"?
                                            <button className="appro-btn"> <NavLink to=""  onClick={()=>this.Redirect(uuid)}>  Düzenle </NavLink>  </button>:""}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


            <section className="product-form-section">
                <Container fluid>
                    <Row className="justify">
                    
                        <Col md="8">

                            <Card>

                                <Card.Body>
                                <div className="p-tabs-main-011">
                                <Tabs>
                                    <TabList>
                                    <Tab>Ürüne Genel Bakış</Tab>
                                    <Tab>Ürün Bilgisi</Tab>
                                    <Tab>Fiyatlandırma ve Pazarlama</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="p-tab-ccont-1">
                                            <div className="p-img-main-01">
                                            {this.state.data.details?  <img src={BASE_URL.slice(0,-5)+this.state.data.details.image} />:""}
                                            </div>
                                            <div className="p-tab-text-01">
                                                <div className="p-tab-01">
                                                    <div>
                                                        <h5>{this.state.data.product?this.state.data.product.product_name:''}</h5>
                                                    </div>
                                                    <div className="p-tb-3-column product-retail-unit__details___99Sy4">

                                                    <div class="product-retail-unit__details-value___1IJk4" data-tname="RetailPrice" id="retail_price">
                                                        <p class="product-retail-unit__currency-field___1UoBm"><span>{this.state.data.details?this.state.data.details.mrp:""}</span>&nbsp;TL&nbsp;</p>
                                                        <h4 class="product-retail-unit__details-label___i-63R" data-tname="PriceUnit">MSRP</h4>
                                                    </div>

                                                    <div class="product-retail-unit__details-value___1IJk4" data-tname="ListPrice" id="list_price">
                                                        <p class="product-retail-unit__currency-field___1UoBm"><span>{this.state.data.details?this.state.data.details.cost:""}</span>&nbsp;TL&nbsp;</p>
                                                        <h4 class="product-retail-unit__details-label___i-63R">Maliyet</h4>
                                                    </div>

                                                    <div class="product-retail-unit__details-value___1IJk4" data-tname="Margin" id="margin">
                                                        <p class="product-retail-unit__currency-field___1UoBm">
                                                        <mark><span>{this.state.data.details?this.state.data.details.mrp-this.state.data.details.cost:""}</span>&nbsp;TL&nbsp; (<span>{this.state.data.details?Math.round((this.state.data.details.mrp-this.state.data.details.cost)/this.state.data.details.mrp*100):""}%</span>)</mark></p>
                                                        &nbsp;
                                                        <h4 class="product-retail-unit__details-label___i-63R">Gross Margin</h4>
                                                    </div>

                                                    </div>
                                                </div>

                                            {/* <div data-tname="Availability"><h4 class="wrappers__wrapper___1B_Ho product-summary__attribute-header___2RkcY">
                                                <span class="text__text___2g-Dv text__micro-copy___3xkfL text__display-block___1CZnH">Availability</span>
                                                </h4><p class="wrappers__wrapper___1B_Ho product-summary__availability-details___1SFzV">
                                                <span class="text__text___2g-Dv text__medium-copy___1Y01K text__display-block___1CZnH">Available Now</span></p>
                                            </div> */}


                                            <div data-tname="Distributors"><h4 className="wrappers__wrapper___1B_Ho product-summary__attribute-header___2RkcY">
                                        <span className="text__text___2g-Dv text__micro-copy___3xkfL text__display-block___1CZnH">Distribütörler</span></h4>
                                        <div className="product-summary__tag-list___3di1A" data-tname="TagList">
                                        {this.state.data.distribution?this.state.data.distribution.name.map(dis=>(
                                            <ul className="tag-list__tags___1ScIL" style={{height: '40px'}}>
                                            <li className="tag-list__tag___36fRC" data-tname="TagListItem"><div className="base-tag__layout___cE4JE content-tag__tag___1m9j9" data-tname="ContentTag">
                                                <span className="text__text___2g-Dv text__small-copy___bgT96 text__truncate___35vOk text__veto-baseline___3-Rqq">{dis.name}</span></div></li>
                                            </ul>)):""}
                                            <button className="tag-list__more-button___3_fbF" type="button" style={{display: 'none'}}>+ undefined more</button>
                                        </div>
                                    </div>

                                            </div>                                        
                                        </div>
                                    </TabPanel>
                                  
                                    <TabPanel>
                                
                                      
                                    <div className="grid-row__row___Jfrqi grid-row__wrap___3B9R_">
                                        <div className="grid-column__column___1DAiH grid-column__mobile-4___2691d grid-column__tablet-3___1m39n grid-column__standard-3___1i8QP grid-column__wide-3___2wo1O">
                                        <h2 className="wrappers__wrapper___1B_Ho product-info__h2___3DhGR"><span className="text__text___2g-Dv text__large-heading___31LRE text__display-block___1CZnH">Ürün Bilgisi&nbsp;<span className="product-info__full-heading___2XZMU"></span></span></h2>
                                        </div>
                                        
                                        <div className="grid-column__column___1DAiH grid-column__mobile-4___2691d grid-column__tablet-6___39z9f grid-column__standard-9___2I4oU grid-column__wide-13___3DhWy">
                                            <div className="wrappers__wrapper___1B_Ho field-name__field-name___1rZmV product-info__first-field-name___F35EL"><span className="text__text___2g-Dv text__medium-copy___1Y01K text__display-block___1CZnH">Tanım</span></div>
                                            <div className="wrappers__wrapper___1B_Ho field-value__field-value___1b1WF"><span className="text__text___2g-Dv text__medium-copy___1Y01K text__display-block___1CZnH">{this.state.data.product?this.state.data.product.product_disc:""}</span></div>
                                            <div className="wrappers__wrapper___1B_Ho field-name__field-name___1rZmV"><span className="text__text___2g-Dv text__medium-copy___1Y01K text__display-block___1CZnH">Ürün özellikleri   </span></div>
                                            
                                                {/* <ul className="product-info__ul___36cL9"> */}
                                                {/* <li> */}
                                                    <span className="text__text___2g-Dv text__medium-copy___1Y01K">{this.state.data.product?this.state.data.product.usp:""}</span>
                                                {/* </li> */}
                                              
                                                {/* </ul> */}
                                            <div className="wrappers__wrapper___1B_Ho field-name__field-name___1rZmV"><span className="text__text___2g-Dv text__medium-copy___1Y01K text__display-block___1CZnH">Menşe Ülke/Bölge</span></div>
                                            <div className="wrappers__wrapper___1B_Ho field-value__field-value___1b1WF"><span className="text__text___2g-Dv text__medium-copy___1Y01K text__display-block___1CZnH">{this.state.data.distribution?this.state.data.distribution.country:""}</span></div>
                                            <div className="wrappers__wrapper___1B_Ho field-name__field-name___1rZmV"><span className="text__text___2g-Dv text__medium-copy___1Y01K text__display-block___1CZnH">Menşe Eyaleti</span></div>
                                            <div className="wrappers__wrapper___1B_Ho field-value__field-value___1b1WF"><span className="text__text___2g-Dv text__medium-copy___1Y01K text__display-block___1CZnH">{this.state.data.distribution?this.state.data.distribution.country:"N/A"}</span></div>
                                            <div className="wrappers__wrapper___1B_Ho field-name__field-name___1rZmV"><span className="text__text___2g-Dv text__medium-copy___1Y01K text__display-block___1CZnH">Dağıtım Yetenekleri</span></div>
                                            <div className="product-info__distribution-capabilities-container___3kNCl" data-tname="DistributionCapabilitySection">
                                                {/* <div className="product-info__distribution-capabilities-region___OeS_L" data-tname="Region-0"><span className="text__text___2g-Dv text__medium-copy___1Y01K product-info__distribution-capabilities-region-title___1qSOL text__veto-baseline___3-Rqq" data-tname="RegionTitle">United States of America</span>
                                                    <div className="product-info__distribution-capabilities-region-tag-container___3YmWn">
                                                        <div className="base-tag__layout___cE4JE content-tag__tag___1m9j9" data-tname="RegionTag-0"><span className="text__text___2g-Dv text__small-copy___bgT96 text__truncate___35vOk text__veto-baseline___3-Rqq">All regions</span></div>
                                                    </div>
                                                </div> */}
                                            </div>
                                            <div className="wrappers__wrapper___1B_Ho field-name__field-name___1rZmV"><span className="text__text___2g-Dv text__medium-copy___1Y01K text__display-block___1CZnH">Drop-shipping yeteneğine sahip</span></div>
                                            <div className="wrappers__wrapper___1B_Ho field-value__field-value___1b1WF"><span className="text__text___2g-Dv text__medium-copy___1Y01K text__display-block___1CZnH">{this.state.data.distribution?this.state.data.distribution.drop_ship===false?"No":"Yes":""}</span></div>
                                            <div className="wrappers__wrapper___1B_Ho field-name__field-name___1rZmV"><span className="text__text___2g-Dv text__medium-copy___1Y01K text__display-block___1CZnH">Soğuk depo</span></div>
                                            <div className="wrappers__wrapper___1B_Ho field-value__field-value___1b1WF"><span className="text__text___2g-Dv text__medium-copy___1Y01K text__display-block___1CZnH">{this.state.data.distribution?this.state.data.distribution.storage_required===""?"Not Required":this.state.data.distribution.storage_required:""}</span></div>
                                            {/* <div className="wrappers__wrapper___1B_Ho field-name__field-name___1rZmV"><span className="text__text___2g-Dv text__medium-copy___1Y01K text__display-block___1CZnH">Availability</span></div>
                                            <div className="wrappers__wrapper___1B_Ho field-value__field-value___1b1WF"><span className="text__text___2g-Dv text__medium-copy___1Y01K text__display-block___1CZnH">Available Now</span></div> */}
                                            <div className="wrappers__wrapper___1B_Ho field-name__field-name___1rZmV"><span className="text__text___2g-Dv text__medium-copy___1Y01K text__display-block___1CZnH">Özel etiket için kullanılabilir</span></div>
                                            <div className="wrappers__wrapper___1B_Ho field-value__field-value___1b1WF"><span className="text__text___2g-Dv text__medium-copy___1Y01K text__display-block___1CZnH">{this.state.data.distribution?this.state.data.distribution.private_label===false?"No":"Yes":""}</span></div>
                                            <div className="wrappers__wrapper___1B_Ho field-name__field-name___1rZmV"><span className="text__text___2g-Dv text__medium-copy___1Y01K text__display-block___1CZnH">Distribütörler</span></div>
                                            <div data-tname="TagList">
                                            {this.state.data.distribution?this.state.data.distribution.name.map(dis=>(
                                                <ul className="tag-list__tags___1ScIL" style={{height: '40px'}}>
                                                    <li className="tag-list__tag___36fRC" data-tname="TagListItem">
                                                        <div className="base-tag__layout___cE4JE content-tag__tag___1m9j9" data-tname="ContentTag"><span className="text__text___2g-Dv text__small-copy___bgT96 text__truncate___35vOk text__veto-baseline___3-Rqq">{dis.name}</span></div>
                                                    </li>
                                                    
                                                </ul>)):""}
                                                {/* <button className="tag-list__more-button___3_fbF" type="button" style={{display: 'none'}}>+ undefined more</button> */}
                                            </div>
                                        </div>
                                    </div>



                                        </TabPanel>

                                    <TabPanel className="mt-4">

                                       {/* <Gallery/> */}
                                       <div className="grid-row__row___Jfrqi grid-row__wrap___3B9R_">
                                        <div className="grid-column__column___1DAiH grid-column__mobile-4___2691d grid-column__tablet-3___1m39n grid-column__standard-3___1i8QP grid-column__wide-3___2wo1O">
                                        <h2 className="wrappers__wrapper___1B_Ho product-info__h2___3DhGR">
                                            <span className="text__text___2g-Dv text__large-heading___31LRE text__display-block___1CZnH">Ürün Fiyatı</span>
                                            </h2>
                                        </div>
                                        
                                        <div className="grid-column__column___1DAiH grid-column__mobile-4___2691d grid-column__tablet-6___39z9f grid-column__standard-9___2I4oU grid-column__wide-13___3DhWy">
                                          
                                            <div className="price-d-1021">
                                          
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Label>Ambalaj türü</Form.Label>
                                                <Form.Control as="select"  onChange={this.handleDropdownChange}>

                                                <option value="item" >Kalem</option>
                                                <option value="case">Kutu </option>
                                                
                                                </Form.Control>
                                            </Form.Group>

                                       {this.state.priceType==="item"||this.state.priceType===""?
                                        <div className="f1">
    
                                             <div class="product-retail-unit__details___99Sy4">
                                                <div class="product-retail-unit__details-value___1IJk4" data-tname="RetailPrice" id="retail_price">
                                                    <p class="product-retail-unit__currency-field___1UoBm">
                                                        <span>{this.state.data.details?this.state.data.details.mrp:""}</span>&nbsp;</p>
                                                        <h4 class="product-retail-unit__details-label___i-63R" data-tname="PriceUnit">MSRP</h4>
                                                </div>
                                                <div class="product-retail-unit__details-value___1IJk4" data-tname="ListPrice" id="list_price">
                                                    <p class="product-retail-unit__currency-field___1UoBm"><span>{this.state.data.details?this.state.data.details.cost:""}</span>&nbsp;</p>
                                                    <h4 class="product-retail-unit__details-label___i-63R">Maliyet</h4>
                                                </div>
                                                <div class="product-retail-unit__details-value___1IJk4" data-tname="Margin" id="margin">
                                                    <p class="product-retail-unit__currency-field___1UoBm"><span>{this.state.data.details?this.state.data.details.mrp-this.state.data.details.cost:""}TL</span></p>
                                                    &nbsp;<h4 class="product-retail-unit__details-label___i-63R">Brüt Marj</h4>
                                                </div>
                                            </div>

                                          

                                            <div class="product-retail-unit__details-value___1IJk4" data-tname="RetailPrice" id="retail_price">
                                                    <p class="product-retail-unit__currency-field___1UoBm">
                                                        <span>Fiyat açıklaması </span>&nbsp;</p>
                                                        <h4 class="product-retail-unit__details-label___i-63R" data-tname="PriceUnit">{this.state.data.details?this.state.data.details.pricing_comments===null?"Yorum yok":this.state.data.details.pricing_comments:""}</h4>
                                                </div>
                                        </div>:""}
                                            {this.state.priceType==="case"?
                                            <div class="product-retail-unit__details-value___1IJk4" data-tname="RetailPrice" id="retail_price">
                                            <p class="product-retail-unit__currency-field___1UoBm">
                                                <span>Kutu fiyatlandırması</span>&nbsp;</p>
                                                <h4 class="product-retail-unit__details-label___i-63R" data-tname="PriceUnit">{this.state.data.details?this.state.data.details.case_pricing===null?"":this.state.data.details.case_pricing:""}</h4>

                                                <p class="product-retail-unit__currency-field___1UoBm">
                                                <span>Kutu başı ürün sayısı</span>&nbsp;</p>
                                                <h4 class="product-retail-unit__details-label___i-63R" data-tname="PriceUnit">{this.state.data.details?this.state.data.details.products_per_case===null?"":this.state.data.details.products_per_case:""}</h4>
                                            </div>:""}
                                            </div>
                                            </div>
                                    </div>

                                    <div className="grid-row__row___Jfrqi grid-row__wrap___3B9R_">
                                        <div className="grid-column__column___1DAiH grid-column__mobile-4___2691d grid-column__tablet-3___1m39n grid-column__standard-3___1i8QP grid-column__wide-3___2wo1O">
                                            <h2 className="wrappers__wrapper___1B_Ho">
                                                <span className="text__text___2g-Dv text__large-heading___31LRE text__display-block___1CZnH">Pazarlama</span></h2></div>
                                        <div className="grid-column__column___1DAiH grid-column__mobile-4___2691d grid-column__tablet-6___39z9f grid-column__standard-9___2I4oU grid-column__wide-13___3DhWy">
                                            <div className="wrappers__wrapper___1B_Ho field-name__field-name___1rZmV marketing-info__first-field-name___2_OF-"><span className="text__text___2g-Dv text__medium-copy___1Y01K text__display-block___1CZnH">Bu ürün için yıllık pazarlama bütçesi</span></div>
                                            <div className="wrappers__wrapper___1B_Ho field-value__field-value___1b1WF"><span className="text__text___2g-Dv text__medium-copy___1Y01K text__display-block___1CZnH">{this.state.data.marketing?this.state.data.marketing.promotional_budget:""}</span></div>
                                        </div>
                                    </div>

                               
                                    </TabPanel>
                                </Tabs>
                                </div>
                               
                    

                                </Card.Body>
                            </Card>

                        </Col>


                

                    </Row>
                </Container>
            </section>



        </>
    );
}
}

export default Preview
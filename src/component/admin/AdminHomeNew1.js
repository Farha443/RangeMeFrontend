import React, {useEffect, userEffect, useState} from 'react';
import '../../assets2/admin.css';
import AdminNavbar from './AdminNavbar'
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
import $ from "jquery";  
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import Cookies from "universal-cookie";
import BASE_URL from '../base';
// import BrandLogoHome from './BrandLogoHome';
const axios = require('axios').default;
const cookies = new Cookies();


var user_uuid = cookies.get("uuid")
let loc = window.location;
    let wsStart= 'wss://';
    if (loc.protocol==='https'){
        wsStart='wss://'
    }
function AdminHomeNew(){
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [isActive, setActive] = useState("false");
    const[brands, setBrands] = useState([])
    const[Allbrands, setAllbrands] = useState([])
    const[remove , setRemove] = useState([]);
    const[message , setMessage] = useState([]);
    const[messageCount , setMessageCount] = useState([]);
    const[buyerdetail , setBuyerDetail] = useState([]);
    const[chatbox,setChatbox]=useState(false)
    const[messageList,setmessageList]=useState({})
    const[olDMessages,setolDMessages]=useState([])
    const[list,setList]=useState([])
    const [Id , setId] = useState([])
    const [recieverID , setRecieverId] = useState([])
    const [requirements , setRequirements] = useState([])

    
    function BuyerDetail(e,id){
        var url = BASE_URL+'authentication/getuser/'+ e;
        var url1 = BASE_URL+'authentication/requirements/'+ id; 
        axios.get(url)
        .then(res=>{
            console.log(res.data.data)
            setBuyerDetail(res.data.data)
            setShow2(true)
        }).catch(err=>{
            console.log(err)            
        })

        axios.get(url1 )
        .then(res=>{
            console.log(res.data.data)
            setRequirements(res.data.data)
            setShow2(true)
        }).catch(err=>{
            console.log(err)            
        })

    }

    useEffect(() => {
        var token = cookies.get('logintoken');
        if (token === undefined){
        window.location="/login"
        }
        var toId=cookies.get('uuid');
        var url = BASE_URL+'authentication/message/?toId=' + toId;
         axios.get(url)
        .then(res=>{       
            setList(res.data)
            
            console.log("-----see here ----")
            console.log(res.data)
          }).catch(err=>{
              console.log(err)            
          })
        ;
      },[])

 var socket = new WebSocket('ws://localhost:8000/chat/')
// var socket = new WebSocket(wsStart+'tayuss.com/chat/')
 useEffect(() => {
    socket.onopen = () => {
            // debugger
            console.log('connected')
            }
            socket.onmessage = evt => {
                // listen to data sent from the websocket server
                const message = JSON.parse(evt.data)
                // debugger
                if (message.payload){var jk = JSON.parse(message.payload.msg)}
                console.log(jk)
                if(message.payload){
                    setmessageList(jk)
                        // setMessageCount(message.payload.length)
                    }
                }
                
    },[])



    useEffect(() => {    
        axios.get(BASE_URL+'authentication/send_notifiaction/' )
            .then(res=>{
                console.log("--- get rqs----")
                console.log(res.data.data)
                if(res.data.data){
                        setMessage(res.data.data)
                        setMessageCount(res.data.data.length)
                    }                
               
            }).catch(err=>{
                console.log(err)            
            })
        
    },[])


    const handleToggle = () => {
        setActive(!isActive);
      };
      var ws = new WebSocket('ws://localhost:8000/test/')
    //   var ws = new WebSocket('wss://tayuss.com/test/')
      useEffect(() => {
         
        ws.onopen = () => {
            // debugger
            console.log('connected')
            }
            ws.onmessage = evt => {
                // listen to data sent from the websocket server
                console.log('checking ')
                const message = JSON.parse(evt.data)
                console.log(message.payload)
                if(message.payload){
                        setMessage(message.payload)
                        setMessageCount(message.payload.length)
                    }
                }
                ws.onclose = () => {
                    console.log('disconnected')
                    }
                
        axios.get(BASE_URL+'authentication/getsupplier/'+ user_uuid )
        .then(res=>{
            setBrands(res.data.data[0])
            setRemove(res.data.data)
            var arra = []
            const map1 = res.data.data.map(x => 
                {
                    if (x.uuid === res.data.data[0].uuid ){
                        return {};
                    }else{
                        return arra.push(x) ;
                    }
                });
            setAllbrands(arra)
        }).catch(err=>{
            console.log(err)            
        })
        
    },[])
    
   
    function GetSingleBrand(uuid){
        axios.get(BASE_URL+'authentication/singlebrand/'+ uuid )
        .then(res=>{
            setBrands(res.data.data)
            var dd = remove
            var arra=[];
            const map1 = dd.map(x => 
                {
                    if (x.uuid === uuid ){
                        return {};
                    }else{
                        return arra.push(x) ;
                    }
                });
            setAllbrands(arra)
            console.log(res.data.data.length)
        }).catch(err=>{
            console.log(err)            
        })     
    }

    

   

    return(
        <>
            <AdminNavbar/>

           
                <div className="admin-container">
                <div className="row">
                <div className="rgm-left-content col-md-9">
            <section className="admin-home-section"> 
         
                <Row>
                    <Col md="12">
                    <div className="cover-md-left-cont">
                    <div className="ad-hm-logo-main">
                                     
                                     {/* <img src="assets/images/brand-logo.jpg" /> */}
                                     {brands.brand_logo!= null?
                                     <img src = {BASE_URL.slice(0,-5)+brands.brand_logo}></img>: <img src="assets/images/brand-logo.jpg"/>}
                                        <div className="prof-img-btn">
                                            <button className="clickable-cover-image__change-image___JnYhU" type="button" onClick={() => setShow3(true)}>
                                                <div className="clickable-cover-image__change-image-hint___3NLUs"><img alt="camera" className="clickable-cover-image__change-image-icon___1k392" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMxIDZoLTcuNmwtMy43LTMuN2MtLjItLjItLjQtLjMtLjctLjNoLTZjLS4zIDAtLjUuMS0uNy4zTDguNiA2SDFjLS42IDAtMSAuNC0xIDF2MjJjMCAuNi40IDEgMSAxaDMwYy42IDAgMS0uNCAxLTFWN2MwLS42LS40LTEtMS0xek0xNiAyNWMtMy45IDAtNy0zLjEtNy03czMuMS03IDctNyA3IDMuMSA3IDctMy4xIDctNyA3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNiA1SDNjLS42IDAtMS0uNC0xLTFzLjQtMSAxLTFoM2MuNiAwIDEgLjQgMSAxcy0uNCAxLTEgMXoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=" />
                                                    <div className="clickable-cover-image__change-image-text___1kIxy"></div>
                                                </div>
                                            </button>
                                        </div>
                                   
                                     

                                    </div>

                                    <div className="cover-brand-title ad-hm-b-title">
                                        <h5> {brands.brand_name} </h5>
                                        {/* switch brand */}
                                        <p onClick={handleToggle}> Marka Değiştir <i class="fa fa-angle-down" aria-hidden="true"></i> </p>
                                        <div className={isActive ? "drop-d-101 " : "drop-d-101 open-drop"}>
                                        {Allbrands.map(bt=>( 
                                           <ul>
                                                   <li onClick={() => {GetSingleBrand(bt.uuid);handleToggle()}}> <NavLink to="/admin_home">{bt.brand_name}</NavLink> </li>
                                               </ul>
                                               ))}
                                            {/* onClick={() => GetSingleBrand(bt.uuid)} */}
                                           </div>
                                    </div>
                    </div>

                    </Col>
                    <Col md="12">
                    <Card>
                        <Card.Body className="mb-2">
                            <div className="p-insight-d-main">
                                <div className="p-inside-title">
                                    <h5> Profil Bilgileri</h5>
                                    <p> Profil Durumu: <span> Yayınlanmamış </span> </p>
                                </div>
                            </div>
                        <Row>
                            <Col md="12">
                                <div className="hm-insight-m-div">
                                    <ul>
                                        <li>
                                            <div className="in-content">
                                                <div className="in-cont-first">
                                                <i class="fal fa-check-circle"></i>
                                                    <p>Hesap aç</p>
                                                              {/* create account*/}
                                                </div>           
                                            </div>
                                        </li>

                                        <li className="ad-home-active">
                                            <div className="in-content">
                                                <div className="in-cont-first">
                                                <i class="fal fa-check-circle"></i>
                                                    <p>  Ürün ekle  </p> 
                                                    <p> Alıcıların ilgisini çekmek için ilk ürününüzü ekleyin</p>         
                                                </div>
                                                <div className="in-content-two">
                                                    <button className="admin-add-btn"> Ürün Girişini Tamamlayın </button>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="in-content">
                                                <div className="in-cont-first">
                                                <i class="fal fa-check-circle"></i>
                                                    <p> Email doğrula  </p>          
                                                    {/* confirm email */}
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="in-content">
                                                <div className="in-cont-first">
                                                <i class="fal fa-check-circle"></i>
                                                    {/* <p> Add logo (optional) </p> */}
                                                    <p> Logo Ekle (Opsiyonel) </p>
                                                              
                                                </div>                     
                                            </div>
                                        </li>

                                        <li>
                                            <div className="in-content">
                                                <div className="in-cont-first">
                                                <i class="fal fa-check-circle"></i>
                                                    {/* <p>  Add cover image (optional) </p>           */}
                                                    <p>  Banner Ekle  (Opsiyonel) </p>  
                                                </div>      
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Col>

                    
                        </Row>
                        </Card.Body>
                    </Card>
                       
                    </Col>
             
                </Row>
       
            </section>
                    
            <section className="admin-home-section"> 
            <Container>
                <Row>
                    <Col md="12">
                    <Card style={{width: '80%',marginTop:"5px"}}>
                      
                        <Card.Body>
                            <div className="p-insight-d-main">
                                <div className="p-inside-title">
                                    <h5>Profil Bilgileri</h5>
                                    <p> Profil Durumu: <span> Yayınlanmamış </span> </p>
                                </div>
                            </div>
                        <Row>
                            <Col md="4">
                                <div className="admin-count-box">
                                {/* <i class="fa fa-eye" aria-hidden="true"></i> */}
                                    <h2> {brands.brand_views}</h2>
                                    <p> Görüntülenme </p>
                                </div>
                            </Col>

                            <Col md="4">
                                <div className="admin-count-box">
                                {/* <i class="fa fa-users" aria-hidden="true"></i> */}
                                <h2> - </h2>
                                    <p> Profil Ziyaretleri </p>
                                </div>
                            </Col>

                            <Col md="4">
                                <div className="admin-count-box">
                                {/* <i class="fa fa-commenting-o" aria-hidden="true"></i> */}
                                <h2> - </h2>
                                    <p> Dönüşümler </p>
                                </div>
                            </Col>  
                        </Row>
                        </Card.Body>
                    </Card>
                       
                    </Col>
                </Row>
            </Container>
            </section>
            </div>
        {/* right sidebar div start  */}

        <div className="col-md-3">
            <div className="rgm-right-bar">
            <h5>Geçerli Alıcı Teklifi Verildi --- {message.length}
           </h5> 
                {message.map(msg=>{
                    return <div className="right-side-header">
                   
                    {/* {msg} */}
                   
                    <p> {msg[Object.keys(msg)[1]]} </p>
                    {/* <p> {Object.values(msg)[1]} </p> */}
                    <button className="admin-add-btn f-w-500" onClick={() => BuyerDetail((Object.values(msg)[7]),(Object.values(msg)[0]))}><i class="fa fa-plus" aria-hidden="true"></i>Buyer Detail</button>
                   
                </div>
                })}
                 


            </div>
         
        </div>
                </div>
            </div>
              
           

      <Modal
                size="lg"
                centered
                show={show2}
                onHide={() => setShow2(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    {/* <Modal.Title id="example-custom-modal-styling-title">
                    <h5 style={{ marginBottom: '0px' }}> Add product </h5>
            </Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col xs={12} md={10} className="m-auto">
                         <div className="text-center mb-3">
                         {/* <h5>Buyer detail</h5>   */}
                         <h5>Alıcı detail</h5> 
                         
                       
                         </div>
                            <Col xs={12} md={10} className="m-auto"> 
                                <div>
                                    <p>
                                    <strong>Name :- </strong>{buyerdetail.first_name}
                                    &nbsp;{buyerdetail.last_name}
                                    
                                    </p>
                                    <p>
                                    <strong>Cep Telefonu:- </strong>{buyerdetail.mobile}
                                    
                                    </p>
                                    <p>
                                    <strong>Address:- </strong>{buyerdetail.comp_location}
                                    </p>

                                    <p>
                                    <strong>Ürün:- </strong>{requirements.product}
                                    </p>
                                    <p>
                                    <strong>Budget:- </strong>{requirements.budget}
                                    </p>

                                    <p>
                                    <strong>Category:- </strong> {requirements.cat  }
                                    </p>

                                    <p>
                                    <strong>Quantity:- </strong>{requirements.quantity}
                                    </p>

                                    <p>
                                    <strong>Requirements:- </strong> {requirements.notification}
                                    </p>
                                </div>
                            </Col>
                            </Col>

                        </Row>
                    </Container>
                </Modal.Body>
               
            </Modal>

        </> 
    );
}

export default AdminHomeNew
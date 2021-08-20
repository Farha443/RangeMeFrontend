import React, {useEffect, userEffect, useState} from 'react';
import '../../assets2/admin.css';
import AdminNavbar from './AdminNavbar'
import { NavLink } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ImageUploader from 'react-images-upload';
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
    Table,
    DropdownButton,
    InputGroup,
    Dropdown,
} from 'react-bootstrap';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import context from 'react-bootstrap/esm/AccordionContext';
import CoverPhotoUploader from './CoverPhotoUploader';
import axios from 'axios';
import Cookies from 'universal-cookie';
import BASE_URL from '../base';
import $ from "jquery"; 
import {CKEditor} from 'ckeditor4-react';
import Swal from 'sweetalert2';

const cookies = new Cookies();
var prox = ""
var proxuuid = ""
var prodname = ""
var name = ""
var brandName =""

function Submit(){
    // $(".laoder").show(); 
    // debugger
    var brand_name = document.getElementById('brand_name').value;
    var brand_location = document.getElementById('brand_location').value;
    var brand_website = document.getElementById('website').value;
    var year_founded = document.getElementById('year').value;
    var annual_revenue = document.getElementById('revenue').value;
    var url = BASE_URL + "authentication/createsupplier/";
    var token = cookies.get('logintoken');
    var uuid = cookies.get('sup_uuid');
    var product_uuid = cookies.get('productuuid')
    var userType = cookies.get('user_type');
var config = {
    method: 'post',
    url: url,
    headers: {
      "Authorization": "Bearer " + token,
    },
    data:{
        user_s : uuid,
        product_name : product_uuid,
        year_founded : year_founded,
        annual_revenue: annual_revenue,
        brand_name : brand_name,
        brand_website : brand_website,
        comp_location : brand_location,
      }
  };

  axios(config).then(res=>{
    cookies.set('uuid2', res.data.data.uuid, { path: '/' })
    $(".laoder").hide(); 
    window.location = '/admin_home'
  }
  
  ).catch(err=>{
    console.error(err);
    $(".laoder").hide(); 
    window.location.reload();
  })
}


function BrandProfile() {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [showV, setShowV] = useState(false);
    const [showStory, setShowStory] = useState(false);
    const[content, setContent] = useState("");
    const [isActive, setActive] = useState("false");
    const [isAct, setAct] = useState("false");
    const [showInfo, setShowInfo] = useState(false);
    const handleToggle = () => {
      setActive(!isActive);
    };
    const handleToggleTwo = () => {
        setAct(!isAct);
      };

    const onEditorChange=( evt )=>{
        setContent( evt.editor.getData() );
    }

    
    const [details, setDetails]= useState([])
    const[brands, setBrands] = useState([])
    const [cover, setCover] = useState(false);
    const [logo, setLogo] = useState(false);
    const [show11, setShow11] = useState(false);
    const[sbrand, setSbrand]=useState([]);
    const[video, setVideo] = useState('')
    const[count, setCount] = useState('')

    const year = (new Date()).getFullYear()-50;
    const years = Array.from(new Array(80),(val, index) => index + year);

    var user_uuid = cookies.get("uuid")

    function onDrop(pictureFiles, pictureDataURLs) {
        setCover({
            pictureFiles
        });
    }
    function onDrop1(pictureFiles, pictureDataURLs) {
        // alert(pictureFiles)
        setLogo({
            pictureFiles
        });
    }
    const handleKeypress = (event) => {
        if(event.key === 'Enter'){
            search();
        }
      }
    
    useEffect(()=>{
        var token = cookies.get('logintoken');
        if (token === undefined){
        window.location="/login"
        }
    },)

    useEffect(() => {
        getBrands()
        axios.get(BASE_URL+'authentication/getsupplier/'+ user_uuid )
        .then(res=>{
            
            setBrands(res.data.data)
            console.log("------brands------")
            console.log(res.data.data)
        }).catch(err=>{
            // $(".laoder").hide();
            console.log(err)            
        })
        axios.get(BASE_URL+'authentication/singlebrand/'+ cookies.get("get_brand") )
        .then(res=>{
            // debugger
            setSbrand(res.data.data)
            name = res.data.data.brand_name;
            
            capitalize(name);
            // setCount(res.data.data.product_name.length)
            console.clear()
            console.log("------Single Brand------")
            console.log(res.data.data)
        }).catch(err=>{
            // $(".laoder").hide();
            console.log(err)            
        })     

    }
    ,[])

    function getBrands(query=null){
        if (query){
            var url = BASE_URL+'product/get_brands/'+ cookies.get("get_brand")+'/?search='+query    
        }
        else{    
        var url = BASE_URL+'product/get_brands/'+ cookies.get("get_brand")   
        }
        axios.get(url )
        .then(res=>{
            // setProducts(res.data.data.product)
            // debugger
            setDetails(res.data.data)
            setCount(res.data.data.product.length)
            console.log("-------------all Products-------------")
            console.log(res.data.data)
        }).catch(err=>{
            // $(".laoder").hide();
            console.log(err)            
        })
    }

    function search(){
        var s = document.getElementById('search').value;
        var array = []
        var checkboxes = document.querySelectorAll(' input#status:checked')
        for (var i = 0; i < checkboxes.length; i++) {
            array.push(checkboxes[i].value);
        }
        getBrands(s) 
    }

    function DeleteProduct(id){
        var id = id
        var url = BASE_URL + 'product/delete_product/' + id;
        var config={
            method:'delete',
            url:url,
        };
        axios(config).then(res=>{
            // console.log(res.data )
            // $(".laoder").hide();
            window.location.reload();
          }
          ).catch(err=>{
            console.error(err);
            // $(".laoder").hide();
            window.location.reload();
          })  
    }
    

    function DeleteConfirm(id)
    {
           Swal.fire({
               icon: 'warning',
               title: 'Are you sure?',
               text: 'Click Yes! to Delete',
               showCancelButton: true,
               confirmButtonColor: '#38b5e6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes!',
           }).then((result) => {
               
               if (result.value === true) {
                DeleteProduct(id);
               } else if (result.value === false) {
                   Swal.fire('Changes are not saved', '', 'info')
               }
           });
       }

    function SaveMoveBrand(){  
        // debugger
        var checked_brand = $("input[type='radio'][name='checked_brand']:checked").val();
        if(checked_brand === undefined){
            window.location = "/brand-profile"
        }
        var productuuid = proxuuid
        var url = BASE_URL + "product/move_brand/" + productuuid
        var config={
            method:'patch',
            data:{
                "p_user":checked_brand
            },
            url:url,
        };
        axios(config).then(res=>{
            console.log(res.data )
            window.location.reload();
          }
          ).catch(err=>{
            console.error(err);
            window.location.reload();
          })  


    }

    function CopyFunction(e){
        // alert(e)
        var url = BASE_URL + "product/copy_product/"+ e
        axios.post(url )
        .then(res=>{
            window.location.reload();
        }).catch(err=>{
            console.log(err)            
        })
    }
    
    function MoveBrand(x,y){
        // debugger
        console.log(x,y)
        prox = y
        proxuuid = x
        setShow11(true)

    }

    function Redirect(uuid, name){
        // alert(name)
        cookies.set('productuuid',uuid,{path:'/'});
        cookies.set('product_name',name,{path:'/product_form'});
        cookies.set('product_name',name,{path:'/distribution'});
        cookies.set('product_name',name,{path:'/marketing'});
        window.location='/product_form/';
      }

    function AddProduct(){
        // $(".laoder").show();
        var product_name = document.getElementById("addproduct").value;
        var brand = cookies.get('get_brand')
        var token = cookies.get("logintoken");
        // var uuid = cookies.get('sup_uuid');
        var config= {
            method: 'post',
                url: BASE_URL + 'product/create_product/',
                data: {
                    p_user : brand,
                    product_name: product_name
                },
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json",
                }
        };
        axios(config).then(res=>{
            console.log(res.data )
            // $(".laoder").hide();
            cookies.set('productuuid', res.data.data.uuid, { path: '/' })
            cookies.set('product_name',res.data.data.product_name,{path:'/product_form'})
            window.location = '/product_form'
          }
          ).catch(err=>{
            console.error(err);
            $(".laoder").hide();
            window.location.reload();
          })  
    }

    async function AddCover(){
       var brand_cover = cover ? (cover.pictureFiles)[0] : "";
       var uuid = cookies.get('get_brand')
       var data= new FormData();
       var url = BASE_URL+"authentication/createsupplier/"
       data.append('brand_cover', brand_cover);
       data.append('uuid',uuid)
       var token = cookies.get('logintoken');
       var config = {
           method: 'patch',
           url: url,
           headers: {
               'content-type': `multipart/form-data; boundary=${data._boundary}`,
               "Authorization": "Bearer " + token,
             },
           data:data,
       };
      await axios(config)
         .then(res=>{
                console.log(res.data.data)
                // alert("success")
                //
                window.location.reload();
                setShow(false)
            }
            
            ).catch(err=>{
                console.error(err);
                window.location.reload();
            })
    }

    async function AddLogo(){
       var brand_logo = logo ? (logo.pictureFiles)[0] : "";
       var uuid = cookies.get('get_brand')
       var data= new FormData();
       var url = BASE_URL+"authentication/createsupplier/"
       data.append('brand_logo', brand_logo);
       data.append('uuid',uuid)
       var token = cookies.get('logintoken');
       var config = {
           method: 'patch',
           url: url,
           headers: {
               'content-type': `multipart/form-data; boundary=${data._boundary}`,
               "Authorization": "Bearer " + token,
             },
           data:data,
       };
      await axios(config)
         .then(res=>{
                console.log(res.data.data)
                // alert("success")
                window.location.reload();
            }
            
            ).catch(err=>{
                console.error(err);
                window.location.reload();
            })
    }

    async function EditBrandStory(){
        var brand_story = content;
        var url = BASE_URL+'authentication/createsupplier/';
        var uuid = cookies.get('get_brand');
        var token = cookies.get('logintoken');
        var config = {
            method: 'patch',
            url: url,
            headers: {
              "Authorization": "Bearer " + token,
            },
            data:{
                uuid : uuid,
                brand_story:brand_story,
    
              }
        
          };
          console.log(config)
           await axios(config).then(res=>{
              console.log(res.data.data)
              window.location.reload();
          }
          
          ).catch(err=>{
            console.error(err);
            window.location.reload();
          })
    }

    async function EditBrandVideo(){
        var brand_video = document.getElementById('brand_video').value;
        var url = BASE_URL+'authentication/createsupplier/';
        var uuid = cookies.get('get_brand');
        var token = cookies.get('logintoken');
        var config = {
            method: 'patch',
            url: url,
            headers: {
              "Authorization": "Bearer " + token,
            },
            data:{
                uuid : uuid,
                brand_video:brand_video,
    
              }
        
          };
          console.log(config)
           await axios(config).then(res=>{
              console.log(res.data.data)
              window.location.reload();
          }
          
          ).catch(err=>{
            console.error(err);
            window.location.reload();
          })
    }

    function EditBrandInfo(){
        var brand_name = document.getElementById('e_name').value;
        var brand_location = document.getElementById('e_location').value;
        var brand_website = document.getElementById('e_website').value;
        var year_founded = document.getElementById('e_year').value;
        var annual_revenue = document.getElementById('e_revenue').value;
        var url = BASE_URL + "authentication/createsupplier/";
        var token = cookies.get('logintoken');
        var uuid = cookies.get('get_brand');
        var product_uuid = cookies.get('productuuid')
        var userType = cookies.get('user_type');
    var config = {
        method: 'patch',
        url: url,
        headers: {
          "Authorization": "Bearer " + token,
        },
        data:{
            uuid : uuid,
            product_name : product_uuid,
            year_founded : year_founded,
            annual_revenue: annual_revenue,
            brand_name : brand_name,
            brand_website : brand_website,
            comp_location : brand_location,
    
          }
    
      };
      console.log(config)
      axios(config).then(res=>{
        cookies.set('uuid2', res.data.data.uuid, { path: '/' })
        // alert(cookies.set('uuid1', res.data.data.uuid, { path: '/' }))
        $(".laoder").hide(); 
        window.location.reload();
      }
      
      ).catch(err=>{
        console.error(err);
        $(".laoder").hide(); 
        window.location.reload();
      })
    }

    function capitalize(name) {
        // alert(name);
        brandName =  name.charAt(0).toUpperCase() + name.slice(1);
      }
      

    return (
        <>
            <AdminNavbar />

            <div className="b-cover-photo-supplier">

                <div className="clickable-cover-image__clickable-cover-image___Agsbi" data-tname="CoverImage">
                    <div className="cover-image__image-container___2tnKs">
                        {sbrand.brand_cover?
                        <img alt="Cover" className="cover-image__image___yE2oR" src={BASE_URL.slice(0,-5)+sbrand.brand_cover}/>:<div className="bg222">
                        <p>Banner Ekle </p>
                        </div>}
                        {/* {sbrand.map(img=>(
                            img.uuid===cookies.get('get_brand')?
                        <img alt="Cover" className="cover-image__image___yE2oR" src={BASE_URL.slice(0,-5)+ img.brand_cover} />:""
                        ))} */}
                        {/* <div className="bg222">
                        <p>Add Cover Photo</p>
                        </div> */}
                        
                    </div>
                    <div className="clickable-cover-image__container___1Y72X">
                        <button className="clickable-cover-image__change-image___JnYhU" type="button" onClick={() => setShow(true)}>
                            <div className="clickable-cover-image__change-image-hint___3NLUs">
                                <img alt="camera" className="clickable-cover-image__change-image-icon___1k392" src="assets/images/camera.jpg"/>
                                {/* src={BASE_URL.slice(0,-5)+sbrand.brand_logo} */}
                                <div className="clickable-cover-image__change-image-text___1kIxy" src="assets/images/camera.jpg">Kapak resmini değiştir</div>
                                {/* change cover image */}
                            </div>
                        </button>
                    </div>
                </div>

            </div>

            <section className="cover-p2-section">
                <Container>
                    <Row>
                        <Col md="12">
                            <div className="cover-md-01">
                                <div className="cover-md-left-cont">
                                    <div className="cover-circle-img-d">
                                    {brands.map(img=>(
                                      img.uuid===cookies.get('get_brand')?
                                        <img src={BASE_URL.slice(0,-5)+img.brand_logo} />:""))}
                                        <div className="prof-img-btn">
                                            <button className="clickable-cover-image__change-image___JnYhU" type="button" onClick={() => setShow3(true)}>
                                                <div className="clickable-cover-image__change-image-hint___3NLUs"><img alt="camera" className="clickable-cover-image__change-image-icon___1k392" src="assets/images/camera.jpg" />
                                                <h6>Add logo</h6>
                                                    <div className="clickable-cover-image__change-image-text___1kIxy"></div>
                                                </div>
                                            </button>
                                        </div>
                                        {/* <div className="img-circle-bg">
                                              <p> Add Logo </p>
                                        </div> */}
                                    </div>
                                    <div className="cover-brand-title">
                                        {/* <h5>{brandName}</h5> */}
                                        <h5>{sbrand.brand_name}</h5>
                                        {/* <p> Tage Line text.. </p> */}
                                    </div>
                                </div>
                                <div className="cover-md-right-cont">
                                    <ul>
                                        <li>
                                            <button class="border-btn"> <i class="fa fa-eye" aria-hidden="true"></i>  {sbrand.brand_views}  </button>
                                        </li>
                                        {/* <li>
                                            <button class="border-btn">  <i class="fa fa-plus" aria-hidden="true"></i>  0  </button>
                                        </li> */}
                                        {/* <li>
                                            <button class="admin-add-btn f-w-500"> <i class="fa fa-share-square" aria-hidden="true"></i> Share Profile  </button>
                                        </li> */}
                                        <li>
                                            <button class="border-btn" onClick={handleToggle}> <i class="fa fa-cog" aria-hidden="true"></i> </button>
                                           <div className={isActive ? "drop-d-101 " : "drop-d-101 open-drop"}>
                                               <ul>
                                                   <li> <NavLink to="/brand-profile">Merge Marka Adı</NavLink> </li>
                                                   <li> <NavLink to="/brand-profile">Preview Marka Adı page</NavLink> </li>
                                                   <li> <NavLink to="/brand-profile">Preview Marka Adı card </NavLink> </li>
                                               </ul>
                                           </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="cover-midd-cont-section pd-0">
                <Container fluid>
                    <Row>
                        <Col md="12">
                            <div className="cover-tab-one-main">

                                <Row>
                                    <Col md="12">
                                    <Tabs >
                                    <TabList className="b-tab-list-one">
                                        <Tab>
                                            <div className="tbs-menu">
                                                <i class="fa fa-cog" aria-hidden="true"></i> Ürünü yönet
                                    </div>
                                        </Tab>
                                        <Tab>
                                            <div className="tbs-menu">
                                                <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Marka sayfasını düzenle
                                    </div>
                                        </Tab>


                                    </TabList>
                                    <TabPanel>
                                    <Col md="12">
                                            <Card>
                                                <Card.Body>
                                                    <div className="prod-num-r-btn mb-3">
                                                        
                                                        <button className="admin-add-btn f-w-500" onClick={() => setShow2(true)}><i class="fa fa-plus" aria-hidden="true"></i>  Yeni ürün ekle </button>
                                                       
                                                    </div>

                                                    <div className="prod-search-filter-main">
                                                        <InputGroup >
                                                            <InputGroup.Prepend>
                                                                <Button variant="outline-dark"><i class="fa fa-search" aria-hidden="true" onClick={()=>search()} ></i></Button>
                                                            </InputGroup.Prepend>
                                                                                                                                                            <FormControl
                                                                placeholder="Ürün adına göre ara"
                                                                aria-label="Recipient's username"
                                                                id = "search"
                                                                onKeyPress={handleKeypress}
                                                                aria-describedby="basic-addon2"
                                                            />

                                                            {/* <DropdownButton
                                                                as={InputGroup.Append}
                                                                variant="outline-dark"
                                                                title="Product status"
                                                                id="input-group-dropdown-2"
                                                            >
                                                                <div className="filter-drop-main">
                                                                    <div className="step-four-radio noti-check">
                                                                        <Form.Group controlId="formBasicEmail">

                                                                            <Form.Check inline name="group1" type="checkbox"
                                                                            id="1"
                                                                            value="draft" />
                                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Draft </label>
                                                                        </Form.Group>

                                                                        <Form.Group controlId="formBasicEmail">

                                                                            <Form.Check inline name="group1" type="checkbox" id="1"
                                                                            value="pending_approval" />
                                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Pending Approval </label>
                                                                        </Form.Group>

                                                                        <Form.Group controlId="formBasicEmail">

                                                                            <Form.Check inline name="group1" type="checkbox" id="1"
                                                                            value="published" />
                                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Published </label>
                                                                        </Form.Group>

                                                                        <Form.Group controlId="formBasicEmail">
                                                                            <Form.Check inline name="group1" type="checkbox"id="1"
                                                                            value="approved" />
                                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Ready to submit update </label>
                                                                        </Form.Group>

                                                                        <Form.Group controlId="formBasicEmail">
                                                                            <Form.Check inline name="group1" type="checkbox" id="1"
                                                                            value="rejected" />
                                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Rejected </label>
                                                                        </Form.Group>

                                                                        <Form.Group controlId="formBasicEmail">
                                                                            <Form.Check inline name="group1" type="checkbox" id="1" />
                                                                            <label style={{ marginTop: '0px' }} htmlFor="basic-url" className="lb">Update Rejected </label>
                                                                        </Form.Group>


                                                                        <div className="filter-drop-btn-main">
                                                                            <button className="border-btn"> Clear </button>

                                                                            <button className="admin-add-btn f-w-500" onClick={()=>search()}> Apply now </button>
                                                                        </div>



                                                                    </div>
                                                                </div>
                                                           
                                                            </DropdownButton> */}
                                                        </InputGroup>
                                                    </div>
                                                    {count===0?
                                                    <div className="empty-div">
                                                    <p> Gösterilecek Ürün Yok Ürün eklemek için Ürün Ekle Düğmesine tıklayın.</p>
                                                    </div>:

                                                    <div className="pro-table-main">
                                                        <Table responsive="sm">
                                                            <thead>
                                                                <tr>

                                                                    <th>Ürün</th>
                                                                    <th>Ürün durumu</th>
                                                                    <th className="ac-right" >Eylem</th>

                                                                </tr>
                                                            </thead>

                                                            <tbody>{details.product ? details.product.map(pd=>(
                                                                <tr>
                                                                
                                                                    <td>
                                                                        <NavLink to="/product_form" className="p-img-a">
                                                                        
                                                                            <div className="tbl-prod-img">
                                                                                <img src={BASE_URL.slice(0,-5)+pd.images} />
                                                                            </div>
                                                                            
                                                               {pd.product_name}
                                                               </NavLink>
                                                                    </td>
                                                                   
                                                                    <td> {pd.productStatus=='approved'? 
                                                                        <button className="border-btn">Yayınlandı </button>: pd.productStatus==="draft"?<button className="border-btn"  onClick={()=>Redirect(pd.uuid)}>Taşlak </button>:""}
                                                                        </td>
                                                                    <td className="pd-last-td">
                                                                    <button className="border-btn"  onClick={()=>CopyFunction(pd.uuid)}>  Ürünü kopyala </button>
                                                                        <button className="border-btn"> <NavLink to=""
                                                                        onClick={()=>Redirect(pd.uuid,pd.product_name)}> Düzenle </NavLink>  </button>
                                                                         <button className="border-btn"> <NavLink to="/brand-profile" onClick={()=>DeleteConfirm(pd.uuid)}> Sil </NavLink>  </button>
                                                                         <button className="border-btn" onClick={()=>MoveBrand(pd.uuid,pd.product_name)}>  Başka Marka altına taşı </button>
                                                                        <button className="border-btn" onClick={handleToggleTwo}><i class="fa fa-ellipsis-v" aria-hidden="true"></i> </button>
                                                                        <div className={isAct ? "drop-d-101 " : "drop-d-101 open-drop"}> 
                                                                            <ul>
                                                                                <li> <NavLink to="/brand-profile">View product statistics 1 </NavLink> </li>
                                                                                <li> <NavLink to="/preview">Preview product 1</NavLink> </li>
                                                                                <li> <NavLink to="/brand-profile">Make a copy</NavLink> </li>
                                                                                <li> <NavLink to="/brand-profile"> Sil product</NavLink> </li>
                                                                               
                                                                            </ul>
                                                                        </div>
                                                                    </td>
                                                                
                                                                </tr>)) : ''}

                                                                {/* <tr> */}

                                                                    {/* <td>
                                                                        <NavLink to="/product_form" className="p-img-a">
                                                                            <div className="tbl-prod-img">   
                                                                                <img src="assets/images/blog2.jpeg" />
                                                                            </div>
                                                                            Headphone
                                                                        </NavLink>
                                                                    </td> */}
                                                                    {/* <td> <button details.className="border-btn"> Drafted </button> </td>
                                                                    <td className="pd-last-td">
                                                                        <button className="border-btn"> <NavLink to="/product_form"> Edit </NavLink> </button>
                                                                        <button className="border-btn"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> </button>
                                                                    </td> */}

                                                                {/* </tr> */}

                                                                {/* <tr> */}

                                                                    {/* <td>
                                                                        <NavLink to="/product_form" className="p-img-a">
                                                                            <div className="tbl-prod-img">
                                                                                <img src="assets/images/blog2.jpeg" />
                                                                            </div>
                                                          Headphone
                                                          </NavLink>
                                                                    </td> */}
                                                                    {/* <td> <button className="border-btn"> Drafted </button> </td>
                                                                    <td className="pd-last-td">
                                                                        <button className="border-btn"> <NavLink to="/product_form"> Edit </NavLink> </button>
                                                                        <button className="border-btn"><i class="fa fa-ellipsis-v" aria-hidden="true"></i> </button>
                                                                    </td> */}

                                                                {/* </tr> */}

                                                            </tbody>
                                                        </Table>
                                                    </div>}
                                                
                                                
                                                </Card.Body>
                                            </Card>
                                        </Col>
                               
                                    </TabPanel>
                                    <TabPanel>
                                    <Col md="12">
                                        <Card>
                                            <Card.Body>

                                                <div className="b-p-title">
                                                    <h5>Marka sayfası</h5>
                                                </div>
                                            <Tabs>
                                                <div className="b-profile-tab-2-d">

                                                <TabList>
                                                <Tab>
                                                    <div className="tbs-menu">
                                                    Ürünleri Düzenle
                                                    </div>
                                                </Tab>
                                                <Tab>
                                                    <div className="tbs-menu">
                                                    Profili Düzenle
                                                    </div>
                                                </Tab>
                                            </TabList>

                                            <TabPanel>
                                                {count===0?
                                            <div className="empty-div">
                                                    <p>Gösterilecek Ürün Yok.</p>
                                                    </div>:
                                               <Row>
                                                   <Col md="9" xs="12"> 
                                                      <Row>
                                                      {details.product ? details.product.map(pd=>(
                                                          <Col md="4" xs="4">
                                                            <div className="brand-product-box-d">
                                                                <div className="p-img">
                                                                    {/* <img src="assets/images/blog1.jpg" alt="p-image"/> */}
                                                                    {pd.images?
                                                                    <img src={BASE_URL.slice(0,-5)+pd.images} />:<img src="#" alt="p-image"/>}

                                                                </div>
                                                                <div className="p-text-d-12458">
                                                                    <h6> {pd.product_name} </h6>
                                                                    <div className="cost-text">
                                                                    <p> Ürün fiyatı <span> {pd.cost} </span> </p>
                                                                    <p> Margin <span> {pd.mrp} </span> </p>
                                                               
                                                                    </div>
                                                                 </div>
                                                            </div>
                                                          </Col>
                                                          )) : ''}

                                                          
                                                        
                                                      </Row>
                                                   </Col>

                                                   <Col md="3" xs="12">
                                                     <div className="b-profile-sidebar">
                                                        <div>
                                                            <button className="ed-btn" onClick={() => setShowInfo(true)}> <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Bilgileri Düzenle</button>
                                                        </div>
                                                        <div className="b-profile-sidebar-text">
                                                            <ul>
                                                                <li>
                                                                    <p>
                                                                    <i class="fas fa-map-marker-alt"></i>  {sbrand.comp_location}
                                                                    </p>
                                                                </li>
                                                                {/* <li>
                                                                    <p>
                                                                    <i class="far fa-link"></i> ....
                                                                    </p>
                                                                </li> */}
                                                            </ul>
                                                        </div>

                                                        <div className="b-profile-sidebar-text">
                                                            <ul>
                                                                <li>
                                                                    <p>
                                                                    <i class="far fa-tag"></i>  Ürün
                                                                    </p>
                                                                    <p>
                                                                        ( {count} )
                                                                    </p>
                                                                </li>
                                                                <li>
                                                                    <p>
                                                                    <i class="far fa-calendar-week"></i>Kuruluş Yılı</p>
                                                                    <p>
                                                                        ( {sbrand.year_founded} )
                                                                    </p>
                                                                </li>

                                                                <li>
                                                                    <p>
                                                                    <i class="far fa-chart-line"></i> Hasılat
                                                                    </p>
                                                                    <p>
                                                                        ( {sbrand.annual_revenue} )
                                                                    </p>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                     </div>
                                                   </Col>
                                               </Row>}
                                            </TabPanel>

                                            <TabPanel>
                                            <Row>
                                                   <Col md="9" xs="12"> 
                                                      <Row>
                                                          <Col md="12" xs="12">
                                                            {/* <p className="f-size124"> Product Name </p> */}
                                                            {sbrand.brand_story? <EditorPreview data={sbrand.brand_story} />:<div className="p-story-box-d">
                                                            <i class="fal fa-comment-alt-lines"></i>
                                                                <h4>Hikayeni anlat</h4>
                                                                <p> Alıcıların markanız hakkında bilgi sahibi olmasını sağlayın. </p>
                                                                <button className="admin-add-btn" onClick={() => setShowStory(true)}><i class="fal fa-pen"></i> Hikayenizi düzenleyin </button>
                                                            </div>}
                                                          </Col>
                                                          <Col md="12" xs="12">
                                                          {sbrand.brand_video? sbrand.brand_video:<div className="p-story-box-d">
                                                                
                                                                <i class="fal fa-play-circle"></i>
                                                                    <h4> Video ekle</h4>
                                                                    <p> Markanız veya ürünleriniz hakkında bir YouTube veya Vimeo videosu yerleştirin. </p>
                                                                    <button className="admin-add-btn" onClick={() => setShowV(true)}><i class="fal fa-video-plus"></i> Video ekle </button>
                                                                </div>}
                                                            
                                                          </Col>

                                                      </Row>
                                                   </Col>
                                                   

                                                   <Col md="3" xs="12">
                                                     <div className="b-profile-sidebar">
                                                        <div>
                                                            <button className="ed-btn"> <i class="fa fa-pencil-square-o" aria-hidden="true"></i>Bilgileri Düzenle</button>
                                                        </div>
                                                        <div className="b-profile-sidebar-text">
                                                            <ul>
                                                                <li>
                                                                    <p>
                                                                    <i class="fas fa-map-marker-alt"></i>  {sbrand.comp_location}
                                                                    </p>
                                                                </li>
                                                                {/* <li>
                                                                    <p>
                                                                    <i class="far fa-link"></i> ....
                                                                    </p>
                                                                </li> */}
                                                            </ul>
                                                        </div>

                                                        <div className="b-profile-sidebar-text">
                                                            <ul>
                                                                <li>
                                                                    <p>
                                                                    <i class="far fa-tag"></i>  Ürün
                                                                    </p>
                                                                    <p>
                                                                        ( {count} )
                                                                    </p>
                                                                </li>
                                                                <li>
                                                                    <p>
                                                                    <i class="far fa-calendar-week"></i> Kuruluş Yılı</p>
                                                                    <p>
                                                                        ( {sbrand.year_founded} )
                                                                    </p>
                                                                </li>

                                                                <li>
                                                                    <p>
                                                                    <i class="far fa-chart-line"></i> Hasılat
                                                                    </p>
                                                                    <p>
                                                                        ( {sbrand.annual_revenue })
                                                                    </p>
                                                                </li>                                                              

                                                            </ul>
                                                        </div>

                                            


                                                     </div>
                                                   </Col>
                                               </Row>
                                            </TabPanel>

                                                </div>
                                                </Tabs>
                                            </Card.Body>
                                        </Card>
                                    </Col>                
                                    </TabPanel>

                                </Tabs>
                                    </Col>

                                
                                </Row>
                            
                               

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        

{/* Brand Logo upload modal  */}
<Modal
                size="lg"
                centered
                show={show3}
                onHide={() => setShow3(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Brand Logo
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col xs={12} md={12}>
                            <div className="profile-up-main brand-logo">
                            <div className="upload-imf-direction-text ">
                            <h6> Marka logosu</h6>
                            <p>Image must be at least 800 x 800px.
                                File formats JPG, PNG, GIF, JPEG.</p>
                            </div>
                            <ImageUploader
                            withIcon={true}
                            buttonText='Choose Profile'
                            onChange={onDrop1}
                            imgExtension={['.jpg', '.gif', '.png', '.gif','jpeg']}
                            maxFileSize={5242880}
                            withPreview="true"
                />
                        </div>
                              {/* <BrandLogo/> */}

                            </Col>

                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className="col-md-12 text-center">
                        <button class="admin-add-btn f-w-500" onClick={AddLogo}>  Kaydet  </button>
                    </div>
                </Modal.Footer>
            </Modal>


{/* Cover photo uplod modal  */}
            <Modal
                size="lg"
                centered
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    Upload your cover image
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col xs={12} md={12}>

                                <CoverPhotoUploader />

                            </Col>

                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className="col-md-12 text-center">
                        <button class="admin-add-btn f-w-500">  Kaydet  </button>
                    </div>
                </Modal.Footer>
            </Modal>


{/* add product modal */}
            <Modal
                size="lg"
                centered
                show={show2}
                onHide={() => setShow2(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    <h5 style={{ marginBottom: '0px' }}> ürün ekle
</h5>
                    {/* <p> Start with adding your product’s name </p> */}
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col xs={12} md={10} className="m-auto">
                         <div className="text-center mb-3">
                         <h5> Yeni ürün ekle</h5>  
                         <p style={{ marginTop: '0px' }}>Ürün İsmi Ekle  </p>
                         </div>
                            <Col xs={12} md={10} className="m-auto"> 
                                <Form.Group controlId="formBasicEmail">
                                
                                    <Form.Control id="addproduct" type="text" placeholder="e.g. Corn Flakes"/>

                                </Form.Group>
                            </Col>
                            </Col>

                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className="col-md-12 text-center">
                        <button className="admin-add-btn" onClick={AddProduct} >ürün ekle
 </button>
                    </div>
                </Modal.Footer>
            </Modal>

{/* add story modal */}
            <Modal
                size="lg"
                centered
                show={showStory}
                onHide={() => setShowStory(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    <h5 style={{ marginBottom: '0px' }}> Hikaye Ekle </h5>
           
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                          
            
                            <Col xs={12} md={12} className="m-auto"> 
                            {/* <CKEditor
                                data={content}
                                onChange={onEditorChange()} /> */}
                               <div className="pop-editor-text">
                               <CKEditor
                                data={content}
                                onChange={onEditorChange} /> 
                                    {/* <p style={{ marginTop: '0px' }}> 
                                         Add reach text editor
                                    </p> */}
                               </div>
                            </Col>
                        

                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className="col-md-12 text-center">
                        <button class="admin-add-btn f-w-500" type="submit" onClick={() => {EditBrandStory() }} >Add </button>
                        {/* onClick={EditBrandStory()} */}
                    </div>
                </Modal.Footer>
            </Modal>
        
{/*add brand video url modal  */}
            <Modal
                size="lg"
                centered
                show={showV}
                onHide={() => setShowV(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    {/* <h5 style={{ marginBottom: '0px' }}> Add product </h5> */}
                    {/* <p> Start with adding your product’s name </p> */}
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col xs={12} md={10} className="m-auto">
                         <div className="text-center mb-3">
                         <h5> Youtube/Vimeo URL'si ekle </h5>  
                        
                         </div>
                            <Col xs={12} md={10} className="m-auto"> 
                                <Form.Group controlId="formBasicEmail">
                                
                                    <Form.Control type="text" id="brand_video" placeholder="https://youtu.be/abcdefg"/>

                                </Form.Group>


                            </Col>
                            </Col>

                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className="col-md-12 text-center">
                        <button class="admin-add-btn f-w-500"  onClick={() => {EditBrandVideo()}}>  Embed Video </button>
                    </div>
                </Modal.Footer>
            </Modal>

{/* move brand modal */}
            <Modal
                size="lg"
                centered
                show={show11}
                onHide={() => setShow11(false)}
                aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    <h5 style={{ marginBottom: '0px' }}> </h5>
                    {prox}
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={12} md={10} className="m-auto">
                         <div className="text-center mb-3">
                         <h5>Choose a Marka Adı for this ürün</h5>  
                         
                         </div>
                            <Col xs={12} md={10} className="m-auto"> 
                            {brands.map(brand=>( 
                                <p>
                             {brand.brand_name}<img src={BASE_URL.slice(0,-5)+brand.brand_logo} width="70px" />
                             <input id="checked_brand" name="checked_brand" type="radio"  value={brand.uuid}/>  
                               </p>
                            ))}

                           

                            </Col>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className="col-md-12 text-center">
                        <button className="admin-add-btn" onClick={SaveMoveBrand} > Kaydet </button>
                    </div>
                </Modal.Footer>
            </Modal>

{/* Cover photo uplod modal  */}
        <Modal
                size="lg"
                centered
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                    Upload your cover image
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>

                        <Row>
                            <Col xs={12} md={12}>
                            <div className="profile-up-main cover-photo">
                                <div className="upload-imf-direction-text ">
                                <h6> Upload Cover Photo </h6>
                                <p>Image must be at least 1600 x 400 px.
                                    File formats: JPG, PNG, GIF, jPEG</p>
                                </div>
                                <ImageUploader
                                withIcon={true}
                                buttonText='Choose Cover Photo'
                                onChange={onDrop}
                                imgExtension={['.jpg', '.gif', '.png', '.gif', 'jpeg']}
                                maxFileSize={5242880}
                                withPreview="true"
                    />
                            </div>
                                {/* <CoverPhotoUploader /> */}

                            </Col>

                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className="col-md-12 text-center">
                        <button class="admin-add-btn f-w-500" onClick={AddCover}>  Kaydet  </button>
                    </div>
                </Modal.Footer>
            </Modal>


{/* add new brand modal */}
        <Modal
        size="lg"
        // dialogClassName="modal-90w"
        show={show4}
        onHide={() => setShow4(false)}
        aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
            Add new Marka Adı
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Container>
                
                <Row>
                <Col xs={12} md={12}>
                
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label  style={{marginTop: '0px'}}>marka adı</Form.Label>
                        <Form.Control type="text" id="brand_name" placeholder="abc" />

                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label  style={{marginTop: '0px'}}>Location</Form.Label>
                        <Form.Control type="text" id="brand_location" placeholder="abc" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label  style={{marginTop: '0px'}}>Website</Form.Label>
                        <Form.Control type="text" id="website" defaultValue={sbrand.brand_webisite} placeholder="abc.com" />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label  style={{marginTop: '0px'}}>Kuruluş Yılı</Form.Label>
                      <Form.Control as="select" id="year">
                      {years.map((year, index) => {
                            return <option key={`year${index}`} value={year}>{year}</option>
                        })
                        }
                      </Form.Control>
                  </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label  style={{marginTop: '0px'}}>Hasılat</Form.Label>
                      <Form.Control as="select" id='revenue'>
                      <option value="0M$-5M$">0M$-5M$</option>
                      <option value="6M$-10M$">6M$-10M$</option>
                      <option value="11M$-15M$">11M$-15M$</option>
                      </Form.Control>
                    
                    {/* <p className="mt-2"> Buyers use this information to search for products </p> */}
                  </Form.Group>

                    
                </Col>
            </Row>
            </Container>
            </Modal.Body>
            <Modal.Footer>
                <div className="col-md-12 text-center">
                <button class="admin-add-btn f-w-500" onClick={Submit}>  <i class="fa fa-plus" aria-hidden="true"></i> Marka Ekle</button>
                </div>
            </Modal.Footer>
      </Modal>


{/* Edit brand info modal */}
      <Modal
        size="lg"
        // dialogClassName="modal-90w"
        show={showInfo}
        onHide={() => setShowInfo(false)}
        aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
            Marka Adı  information
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Container>
                
                <Row>
                <Col xs={12} md={6}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label  style={{marginTop: '0px'}} >Marka adı</Form.Label>
                        <Form.Control type="text"  id="e_name" placeholder="abc" defaultValue={sbrand.brand_name} />

                    </Form.Group>
                </Col>

                <Col xs={12} md={6}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label  style={{marginTop: '0px'}}>Location</Form.Label>
                        <Form.Control type="text" id="e_location" defaultValue={sbrand.comp_location} placeholder="abc" />

                    </Form.Group>
                </Col>         

                <Col xs={12} md={6}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label  style={{marginTop: '0px'}}>Website</Form.Label>
                        <Form.Control type="text" id="e_website" defaultValue={sbrand.brand_webisite} placeholder="abc.com" />
                    </Form.Group>
                </Col>
                
                <Col xs={12} md={6}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label  style={{marginTop: '0px'}}>Kuruluş Yılı</Form.Label>
                        <Form.Control as="select" defaultValue={sbrand.year_founded} id="e_year">
                        {years.map((year, index) => {
                            return <option key={`year${index}`} value={year}>{year}</option>})}
                        
                    </Form.Control>
                    </Form.Group>
                </Col>
            
                <Col xs={12} md={6}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label  style={{marginTop: '0px'}}>Hasılat</Form.Label>
                   
                    <Form.Control as="select" id='e_revenue' defaultValue={sbrand.annual_revenue}>
                      <option value="0M$-5M$">0M$-5M$</option>
                      <option value="6M$-10M$">6M$-10M$</option>
                      <option value="11M$-15M$">11M$-15M$</option>
                      </Form.Control>
                  </Form.Group>
                </Col>

            </Row>

            
            </Container>
            </Modal.Body>
            <Modal.Footer>
                <div className="col-md-12 text-center">
                <button class="admin-add-btn f-w-500" onClick={() => EditBrandInfo()}> Kaydet </button>
                </div>
            </Modal.Footer>
      </Modal>

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

export default BrandProfile
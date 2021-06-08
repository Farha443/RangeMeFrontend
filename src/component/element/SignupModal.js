import React from 'react';
import {NavLink} from 'react-router-dom';
import useState from 'react-hook-use-state';
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
  Modal,
  Card,
  Row
} from 'react-bootstrap';

function Start(){
  alert('Hello');
}

function SignupModal(props){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <>


<Modal {...props} 
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Sign up for Veniver
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
      <div className="signup-modal-main signup-modal__account-types">

<NavLink to=""  className="signup-modal__account-type signup-modal__account-type--supplier" data-signup="supplier" onClick={()=>alert('Hi')}>
  <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 100 100" fill="none" className="signup-modal__icon">
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x={32} y={89} width={41} height={5}>
      <path fillRule="evenodd" clipRule="evenodd" d="M32.2959 89.8169H72.7915V93.1972H32.2959" fill="white" />
    </mask>
    <g mask="url(#mask0)">
      <path fillRule="evenodd" clipRule="evenodd" d="M72.7915 91.507C72.7915 90.5735 63.7264 89.8169 52.5437 89.8169C41.361 89.8169 32.2959 90.5735 32.2959 91.507C32.2959 92.4406 41.361 93.1972 52.5437 93.1972C63.7264 93.1972 72.7915 92.4406 72.7915 91.507Z" fill="#E3E6ED" />
    </g>
    <path fillRule="evenodd" clipRule="evenodd" d="M23 16.1975L63.6205 7.22717L76.7422 13.1316L36.6923 22.3291L23 16.1975Z" fill="white" />
    <path fillRule="evenodd" clipRule="evenodd" d="M23 16.1975L63.6205 7.22717L76.7422 13.1316L36.6923 22.3291L23 16.1975V16.1975Z" stroke="#163968" strokeWidth={2} strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M36.6923 80.2394L23 74.1078V16.1975L36.6923 22.3292V80.2394Z" fill="#E3E6ED" />
    <path fillRule="evenodd" clipRule="evenodd" d="M36.6923 80.2369L23 74.1055V16.1975L36.6923 22.3289V80.2369V80.2369Z" stroke="#163968" strokeWidth={2} strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M76.7423 71.0418L36.6924 80.2394V22.3291L76.7423 13.1316V71.0418Z" fill="white">
    </path>
    <path fillRule="evenodd" clipRule="evenodd" d="M75.8704 43.3753C70.438 54.9785 65.1151 56.1217 53.9655 59.7254C42.8159 63.3292 36.8389 72.0825 36.8389 72.0825L37.4489 55.4064C37.4489 55.4064 43.4259 46.653 54.5752 43.0493C65.7248 39.4456 71.048 38.3024 76.4804 26.6992L75.8704 43.3753Z" fill="#006FCF" />
    <path fillRule="evenodd" clipRule="evenodd" d="M76.7423 71.0418L36.6924 80.2394V22.3291L76.7423 13.1316V71.0418V71.0418Z" stroke="#163968" strokeWidth={2} strokeLinejoin="round" />
    <path d="M62.823 39.1859L57.4248 58.3808" stroke="white" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M69.1457 34.0276L62.9688 55.9735" stroke="white" strokeWidth={3} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M36.7764 54.7129C36.7764 54.7129 43.0731 46.6402 54.2224 43.0365C65.372 39.4328 71.3323 38.3127 76.7647 26.7092" stroke="#163968" strokeWidth={2} strokeLinejoin="round" />
    <path d="M36.5088 72.0704C36.5088 72.0704 42.4629 63.3164 53.6125 59.7127C64.7621 56.1089 71.407 54.9889 76.8394 43.3854" stroke="#163968" strokeWidth={2} strokeLinejoin="round" />
    <path fillRule="evenodd" clipRule="evenodd" d="M71.6076 64.6938L60.9961 67.511V65.4671L71.6076 62.6499V64.6938Z" fill="#B4BAC7">
    </path>
    <path fillRule="evenodd" clipRule="evenodd" d="M67.2461 68.4858L60.9961 70.1439V68.308L67.2461 66.6499V68.4858Z" fill="#B4BAC7">
    </path>
  </svg>
  <div className="signup-modal__account-text">
    <div className="signup-modal__account-name">Supplier</div>
    <div className="signup-modal__account-description">I sell products to wholesale buyers</div>
  </div>
</NavLink>
<NavLink to="/signup" className="signup-modal__account-type signup-modal__account-type--buyer" data-signup="buyer" >
  <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 100 100" fill="none" className="signup-modal__icon">
    <rect x={21} y={40} width={58} height={47} rx={1} fill="white" stroke="#163968" strokeWidth={2} />
    <path d="M54 73L66 61" stroke="#22304F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M55 66L59 62" stroke="#22304F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M61 72L65 68" stroke="#22304F" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <rect x={27} y={56} width={14} height={31} fill="#E3E6ED" stroke="#163968" strokeWidth={2}>
    </rect>
    <rect x={47} y={56} width={26} height={18} fill="#E3E6ED" stroke="#22304F" strokeWidth={2}>
    </rect>
    <path d="M66.3982 56L61 75.1949" stroke="white" strokeWidth={2} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M72.1769 52L66 73.9459" stroke="white" strokeWidth={3} strokeLinecap="square" strokeLinejoin="round" />
    <rect x={47} y={56} width={26} height={18} stroke="#163968" strokeWidth={2} />
    <path d="M72.0539 14.41L72.0804 14.4629L72.113 14.5122L72.9478 13.9617C72.113 14.5122 72.113 14.5123 72.1131 14.5125L72.1136 14.5132L72.1155 14.5161L72.1232 14.5277L72.1534 14.5735L72.2712 14.7522L72.7184 15.431C73.1038 16.0159 73.6543 16.8518 74.3149 17.8558C75.6362 19.8639 77.3977 22.5439 79.1592 25.2322C80.9209 27.9208 82.6816 30.6164 84.0015 32.6559C84.6617 33.6762 85.2099 34.5296 85.5923 35.1351C85.784 35.4387 85.9309 35.675 86.0286 35.8372C86.0332 35.8448 86.0376 35.8521 86.0418 35.8592C85.9911 39.7145 84.7687 42.411 83.0605 44.1477C81.3081 45.9294 78.9658 46.7826 76.6087 46.7826C73.2773 46.7826 70.4162 45.1495 68.7457 42.6376L67.913 41.3854L67.0804 42.6376C65.4099 45.1495 62.5488 46.7826 59.2174 46.7826C55.886 46.7826 53.0249 45.1495 51.3544 42.6376L50.5217 41.3854L49.6891 42.6376C48.0186 45.1495 45.1575 46.7826 41.8261 46.7826C38.4947 46.7826 35.6336 45.1495 33.9631 42.6376L33.1304 41.3854L32.2977 42.6376C30.6273 45.1495 27.7662 46.7826 24.4348 46.7826C22.0777 46.7826 19.7353 45.9294 17.983 44.1477C16.2748 42.411 15.0524 39.7145 15.0016 35.8592C15.0059 35.8521 15.0103 35.8448 15.0149 35.8372C15.1126 35.675 15.2595 35.4387 15.4512 35.1351C15.8336 34.5296 16.3817 33.6762 17.042 32.6559C18.3619 30.6164 20.1225 27.9208 21.8843 25.2322C23.6457 22.5439 25.4073 19.8639 26.7286 17.8558C27.3892 16.8518 27.9397 16.0159 28.3251 15.431L28.7723 14.7522L28.8901 14.5735L28.9203 14.5277L28.9279 14.5161L28.9299 14.5132L28.9303 14.5125C28.9305 14.5123 28.9305 14.5122 28.0957 13.9617L28.9305 14.5122L28.963 14.4629L28.9896 14.41C29.116 14.1578 29.3723 14 29.6522 14H50.5217H71.3913C71.6711 14 71.9275 14.1578 72.0539 14.41Z" fill="#006FCF" stroke="#163968" strokeWidth={2} />
    <rect x={35} y={12} width={30} height={10} rx={1} fill="white" stroke="#163968" strokeWidth={2} />
    <rect x={40} y={16} width={20} height={2} rx={1} fill="#006FCF" />
    <path d="M33.9631 42.6375L33.1304 41.3854L32.2977 42.6375C30.6273 45.1494 27.7662 46.7826 24.4348 46.7826C22.0777 46.7826 19.7353 45.9294 17.983 44.1477C16.3877 42.5257 15.2161 40.0668 15.0269 36.6086H86.0166C85.8273 40.0668 84.6557 42.5257 83.0605 44.1477C81.3081 45.9294 78.9658 46.7826 76.6087 46.7826C73.2773 46.7826 70.4162 45.1494 68.7457 42.6375L67.913 41.3854L67.0804 42.6375C65.4099 45.1494 62.5488 46.7826 59.2174 46.7826C55.886 46.7826 53.0249 45.1494 51.3544 42.6375L50.5217 41.3854L49.6891 42.6375C48.0186 45.1494 45.1575 46.7826 41.8261 46.7826C38.4947 46.7826 35.6336 45.1494 33.9631 42.6375Z" fill="#006FCF" stroke="#163968" strokeWidth={2} />
    <path d="M6 87H94.1053" stroke="#163968" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
  <div className="signup-modal__account-text">
    <div className="signup-modal__account-name">Buyer</div>
    <div className="signup-modal__account-description">I purchase products at wholesale</div>
  </div>
</NavLink>
<NavLink to="/signup" className="signup-modal__account-type signup-modal__account-type--service-provider">
  <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 100 100" fill="none" className="signup-modal__icon">
    <mask id="path-1-inside-1" fill="white">
      <path fillRule="evenodd" clipRule="evenodd" d="M28.2503 20.0648L22.2736 14.0881C23.7091 13.3983 25.3083 13 27 13C33.05 13 38 17.95 38 24C38 25.32 37.7644 26.5876 37.3331 27.7629L74.7018 66.0124C75.4673 66.796 75.46 68.0496 74.6854 68.8242L71.8242 71.6854C71.0496 72.46 69.796 72.4674 69.0124 71.7018L30.7629 34.3331C29.5876 34.7644 28.32 35 27 35C20.95 35 16 30.05 16 24C16 22.3084 16.3983 20.7091 17.0881 19.2736L23.0648 25.2503L28.2503 20.0648Z">
      </path>
    </mask>
    <path fillRule="evenodd" clipRule="evenodd" d="M28.2503 20.0648L22.2736 14.0881C23.7091 13.3983 25.3083 13 27 13C33.05 13 38 17.95 38 24C38 25.32 37.7644 26.5876 37.3331 27.7629L74.7018 66.0124C75.4673 66.796 75.46 68.0496 74.6854 68.8242L71.8242 71.6854C71.0496 72.46 69.796 72.4674 69.0124 71.7018L30.7629 34.3331C29.5876 34.7644 28.32 35 27 35C20.95 35 16 30.05 16 24C16 22.3084 16.3983 20.7091 17.0881 19.2736L23.0648 25.2503L28.2503 20.0648Z" fill="#E3E6ED" />
    <path d="M22.2736 14.0881L21.4073 12.2855L18.8645 13.5075L20.8594 15.5024L22.2736 14.0881ZM28.2503 20.0648L29.6645 21.479L31.0787 20.0648L29.6645 18.6506L28.2503 20.0648ZM37.3331 27.7629L35.4555 27.0739L35.0209 28.2582L35.9025 29.1605L37.3331 27.7629ZM74.7018 66.0124L73.2712 67.41L74.7018 66.0124ZM74.6854 68.8242L73.2712 67.41L73.2712 67.41L74.6854 68.8242ZM69.0124 71.7018L70.41 70.2712L69.0124 71.7018ZM30.7629 34.3331L32.1605 32.9025L31.2582 32.0209L30.0739 32.4555L30.7629 34.3331ZM17.0881 19.2736L18.5024 17.8594L16.5075 15.8645L15.2855 18.4073L17.0881 19.2736ZM23.0648 25.2503L21.6506 26.6645L23.0648 28.0787L24.479 26.6645L23.0648 25.2503ZM20.8594 15.5024L26.8361 21.479L29.6645 18.6506L23.6878 12.6739L20.8594 15.5024ZM27 11C24.9901 11 23.0961 11.4739 21.4073 12.2855L23.1399 15.8908C24.3221 15.3227 25.6266 15 27 15V11ZM40 24C40 16.8454 34.1546 11 27 11V15C31.9454 15 36 19.0546 36 24H40ZM39.2107 28.4519C39.7214 27.0602 40 25.5596 40 24H36C36 25.0804 35.8074 26.115 35.4555 27.0739L39.2107 28.4519ZM35.9025 29.1605L73.2712 67.41L76.1324 64.6147L38.7637 26.3652L35.9025 29.1605ZM73.2712 67.41L73.2712 67.41L76.0996 70.2385C77.6489 68.6892 77.6635 66.1819 76.1324 64.6147L73.2712 67.41ZM73.2712 67.41L70.41 70.2712L73.2385 73.0996L76.0996 70.2385L73.2712 67.41ZM70.41 70.2712H70.41L67.6147 73.1324C69.1819 74.6635 71.6892 74.6489 73.2385 73.0996L70.41 70.2712ZM70.41 70.2712L32.1605 32.9025L29.3652 35.7637L67.6147 73.1324L70.41 70.2712ZM27 37C28.5596 37 30.0602 36.7214 31.4519 36.2107L30.0739 32.4555C29.115 32.8074 28.0804 33 27 33V37ZM14 24C14 31.1545 19.8454 37 27 37V33C22.0545 33 18 28.9454 18 24H14ZM15.2855 18.4073C14.4739 20.0961 14 21.9901 14 24H18C18 22.6266 18.3227 21.3221 18.8908 20.1399L15.2855 18.4073ZM24.479 23.8361L18.5024 17.8594L15.6739 20.6878L21.6506 26.6645L24.479 23.8361ZM26.8361 18.6506L21.6506 23.8361L24.479 26.6645L29.6645 21.479L26.8361 18.6506Z" fill="#163968" mask="url(#path-1-inside-1)" />
    <path d="M55.1039 48.8165L57.5094 51.2716L54.3034 54.5357L51.6951 51.9999L55.1039 48.8165Z" fill="#CFD3DC" />
    <path d="M68.3213 26.1379C67.9276 25.7441 67.2881 25.7479 66.8989 26.1462L27.268 66.7112C26.8852 67.103 26.8889 67.7298 27.2762 68.1171L30.1374 70.9783C30.5247 71.3656 31.1515 71.3693 31.5433 70.9865L72.1083 31.3556C72.5066 30.9664 72.5104 30.3269 72.1166 29.9332L68.3213 26.1379Z" fill="white" stroke="#163968" strokeWidth={2} />
    <path fillRule="evenodd" clipRule="evenodd" d="M68.3431 18.3438C65.219 21.4676 65.219 26.5333 68.3431 29.6571C71.4673 32.781 76.5336 32.781 79.6578 29.6571C82.7819 26.5313 84 14 84 14C84 14 81.9515 15.0512 80 15.3433C76.0576 15.9333 70.4329 16.2529 68.3431 18.3438Z" fill="#006FCF" stroke="#163968" strokeWidth={2} strokeLinecap="square" />
    <path fillRule="evenodd" clipRule="evenodd" d="M70.4956 84.6901C70.4956 83.7566 61.4305 83 50.2478 83C39.0651 83 30 83.7566 30 84.6901C30 85.6237 39.0651 86.3803 50.2478 86.3803C61.4305 86.3803 70.4956 85.6237 70.4956 84.6901Z" fill="#E3E6ED" />
  </svg>
  <div className="signup-modal__account-text">
    <div className="signup-modal__account-name">Service Provider</div>
    <div className="signup-modal__account-description">I sell services to suppliers</div>


  </div>
</NavLink>
    </div>
      </Modal.Body>
    
    </Modal>



</>
    );
}

export default SignupModal
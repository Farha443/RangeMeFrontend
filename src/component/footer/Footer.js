import React from 'react';


function Footer(){
    return(
        <>


<footer id="footer" className="footer">
<div className="footer__inner">
  <div className="footer__main">
    <a href="index.html" className="footer__logo">
      <h2> <span> T</span>ayuss </h2>
    </a>
    <select id="language-switcher">
      <option value="au">Australia</option>
      <option value="nz">New Zealand</option>
      <option selected value="us">United States</option>
    </select>
    <div className="footer__social-channels">
      <a href="#" target="_blank" className="footer__social-link">
        <svg xmlns="http://www.w3.org/2000/svg" className="svg" width={17} height={16}>
          <path className="svg__fill" d="M15.3 0H.7C.3 0 0 .3 0 .7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V.7c-.1-.4-.4-.7-.8-.7zM4.7 13.6H2.4V6h2.4v7.6h-.1zM3.6 5c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4V9.9c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8H6.2V6h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z">
          </path>
        </svg>
      </a>
      <a href="#" target="_blank" className="footer__social-link">
        <svg xmlns="http://www.w3.org/2000/svg" className="svg" width={16} height={16}>
          <path className="svg__fill" d="M12.1451 4.85188C12.6753 4.85188 13.1051 4.42208 13.1051 3.89188C13.1051 3.36169 12.6753 2.93188 12.1451 2.93188C11.6149 2.93188 11.1851 3.36169 11.1851 3.89188C11.1851 4.42208 11.6149 4.85188 12.1451 4.85188Z">
          </path>
          <path className="svg__fill" d="M8 12C5.794 12 4 10.206 4 8C4 5.794 5.794 4 8 4C10.206 4 12 5.794 12 8C12 10.206 10.206 12 8 12ZM8 6C6.897 6 6 6.897 6 8C6 9.103 6.897 10 8 10C9.103 10 10 9.103 10 8C10 6.897 9.103 6 8 6Z">
          </path>
          <path className="svg__fill" d="M12 16H4C1.944 16 0 14.056 0 12V4C0 1.944 1.944 0 4 0H12C14.056 0 16 1.944 16 4V12C16 14.056 14.056 16 12 16ZM4 2C3.065 2 2 3.065 2 4V12C2 12.953 3.047 14 4 14H12C12.935 14 14 12.935 14 12V4C14 3.065 12.935 2 12 2H4Z">
          </path>
        </svg>
      </a>
      <a href="#" target="_blank" className="footer__social-link">
        <svg xmlns="http://www.w3.org/2000/svg" className="svg" width={16} height={16}>
          <path className="svg__fill" d="M15.3 0H.7C.3 0 0 .3 0 .7v14.7c0 .3.3.6.7.6H8v-5H6V8h2V6c0-2.1 1.2-3 3-3h2v3h-1c-.6 0-1 .4-1 1v1h2.6l-.6 3h-2v5h4.3c.4 0 .7-.3.7-.7V.7c0-.4-.3-.7-.7-.7z">
          </path>
        </svg>
      </a>
      <a href="#" target="_blank" className="footer__social-link">
        <svg xmlns="http://www.w3.org/2000/svg" className="svg" width={16} height={13}>
          <path className="svg__fill" d="M16 1.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7C5.2 3.9 2.7 2.6 1.1.6c-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z">
          </path>
        </svg>
      </a>
    </div>
  </div>
  <div className="footer__nav">
    <h5 className="footer__heading">Product</h5>
    <a href="index.html" className="footer__link">Home</a>
    <a href="#" className="footer__link">For Suppliers</a>
    <a href="#" className="footer__link">For Buyers</a>
    <a href="#" className="footer__link">For Service Providers</a>
  </div>
  <div className="footer__nav">
    <h5 className="footer__heading">Resources</h5>
    <a href="#" className="footer__link">Success Stories</a>
    <a href="#" className="footer__link">Blog</a>
    <a href="#" className="footer__link">In The News</a>
    <a href="#" className="footer__link">Webinars</a>
    <a href="#" className="footer__link">Support</a>
  </div>
  <div className="footer__nav">
    <h5 className="footer__heading">Company</h5>
    <a href="#" className="footer__link">About Us</a>
    <a href="#" className="footer__link">Contact</a>
    <a href="#" className="footer__link">Careers</a>
    <a href="#" className="footer__link">Privacy Statement</a>
    <a href="#" className="footer__link">Privacy Policy</a>
    <a href="#" className="footer__link">Terms</a>
  </div>
</div>
</footer>

</>
    );
}

export default Footer
import { NavLink } from 'react-router-dom';
import React from 'react';
 
function InnerFooter() {
 
    return (
        <>
<footer className="mn-footer footer">
<div className="container">
  <div className="row">
    <div className="col-md-3 col-xs-12">
        <div className="ft-logo-mn">
        <img src="assets/images/footer-logo.png" />
        </div>
    </div>

    <div className="col-md-9 col-xs-12">
    <div className="ft-link-text-mn ft-scocial inner-footer"> 
          <ul>
            <li> <NavLink to=""> <i class="fab fa-instagram"></i>  </NavLink> </li>
            <li> <NavLink to=""> <i class="fab fa-twitter"></i>  </NavLink> </li>
            <li> <NavLink to=""> <i class="fab fa-facebook-f"></i>  </NavLink> </li>
            <li> <NavLink to=""><i class="fab fa-youtube"></i>  </NavLink> </li>
          </ul>
      </div>
    </div>
  </div>

</div>

</footer>

</>

);
}

export default InnerFooter
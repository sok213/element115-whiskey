import s from './Footer.module.scss';
import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/footer-logo-new.png';

function Footer() {

  function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    return currentYear;
  }
  
  const year = getCurrentYear();

    return (
      <div className='row'>
        <div className='container' style={{flexDirection: 'column'}}>

          <div className={s.footerContainer}>

            <div className={s.leftCol}>
              <div className={s.logoContainer}>
                <img src={logo} />
              </div>
              <div className={s.listContainer}>

              <div className={s.listItem}>
                <p className={s.listHeader}>About</p>
                <ul>
                  <li><Link to="/story">Story</Link></li>
                  <li><Link to="/process">Process</Link></li>
                  <li><Link to="/headquarters">Headquarters</Link></li>
                  <li><Link to="/products">Products</Link></li>
                </ul>
              </div>

              <div className={s.listItem}>
                <p className={s.listHeader}>Help</p>
                <ul>
                  <li><Link to="/contact">Contact</Link></li>
                  <li>
                    <a 
                      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                      target="_blank"
                    >
                      Legal
                    </a>
                  </li>
                </ul>
              </div>

              <div className={s.listItem}>
                <p className={s.listHeader}>Careers</p>
                <ul>
                  <li>
                    <a 
                      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                      target="_blank"
                    >
                      We're hiring!
                    </a>
                  </li>
                </ul>
              </div>
              </div>
            </div>

          {/* End of footer container */}
          </div>

          <div className={s.copyrightContainer}>
            <p>&copy; Element 115 Whiskey Co., {year}</p>
          </div>
        </div>
      </div>
    )
}

export default Footer;
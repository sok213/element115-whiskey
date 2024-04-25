import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import s from './NavigationBar.module.scss';
import logoNav from './../../assets/new-logo-mobile.png';

const NavigationBar = () => {

  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const showMobileMenu = () => {
    setActiveMobileMenu(!activeMobileMenu);
  }

  return (
    <nav className={`${s.navbar} animate__animated animate__fadeInDown`}>
      <div className={s.navbar__contentContainer}>

        {/* Logo */}
        <div className={s['navbar-logo']}>
          <Link to="/">
            <img src={logoNav} alt="Logo" />
          </Link>
        </div>

        {/* Desktop links */}
        <div className={s['navbar-links']}>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/story">Story</NavLink>
          <NavLink to="/process">Process</NavLink>
          <NavLink to="/headquarters">Headquarters</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <div className={s['navbar-cta']}>
            <button onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}>
              Buy
            </button>
          </div>
        </div>

        {/* Mobile menu icon*/}
        <div 
          className={`${s.navbar__Mobile}`} 
          onClick={showMobileMenu}
        >
          {
            activeMobileMenu ? 
            <i className="bi bi-x-lg"></i> : 
            <i className="bi bi-menu-button-wide-fill"></i>
          }
        </div>
    </div>

    {/* Mobile Links */}
    <div 
      className={s['mobile-links']}
      style={activeMobileMenu ? { height: '235px' } : { height: '0px' }}
    >
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/story">Story</NavLink>
      <NavLink to="/process">Process</NavLink>
      <NavLink to="/headquarters">Headquarters</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <div className={s['navbar-cta']}>
        <button onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}>
          Buy
        </button>
      </div>
    </div>
  </nav>
  );
};

export default NavigationBar;


import React from 'react';
import logo from '../assets/pngIcons/BASALT_master_main.png';

import './navBar.scss';

const NavBar = () => {
  return (
    <div className="navigation_container">
      <img src={logo} alt="Basalt Logo" />
      <div className="navigation_routes">
        <p>home</p>
        <p>phone</p>
        <p>et</p>
      </div>
    </div>
  );
};

export default NavBar;

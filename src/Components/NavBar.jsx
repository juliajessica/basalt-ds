import React from 'react';
import logo from '../Assets/pngIcons/BASALT_master_main.png';

import './navBar.scss';

const NavBar = () => {
  return (
    <div className="navigation_container">
      <img src={logo} alt="Basalt Logo" />
      <div className="navigation_routes">
        <p>home</p>
        <span>
          <p>phone</p>
        </span>
        <span>
          <p>et</p>
        </span>
      </div>
    </div>
  );
};

export default NavBar;

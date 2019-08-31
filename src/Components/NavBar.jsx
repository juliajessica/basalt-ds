import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/pngIcons/BASALT_master_main.png';

import './navBar.scss';

const NavBar = () => {
  return (
    <div className="navigation_container">
      <img src={logo} alt="Basalt Logo" />
      <div className="navigation_routes">
        <Link to="/"><p>home</p></Link>
        <Link to=""><p>phone</p></Link>
        <Link to=""><p>et</p></Link>
      </div>
    </div>
  );
};

export default NavBar;

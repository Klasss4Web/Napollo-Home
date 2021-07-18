import React from "react";
import { Link } from "react-router-dom";

import appStoreImg from "../images/download-on-app-store.png";
import playStoreImg from "../images/google-play-badge.png";

const NavBar = () => {
  return (
    <>
      <div className="nav-container">
        <nav className="row">
          <div className="col-3 col-md-1">
            <i class="fas fa-bars fa-2x"></i>
          </div>
          <div className="col-md-2 logo-h">
            <div className="header-logo">
              <div className="header-logo__first"></div>
              <div className="header-logo__second"></div>
              <div className="header-logo__third"></div>
              <div className="header-logo__fourth"></div>
              <div className="header-logo__fifth"></div>
              <div className="header-logo__sixth"></div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="input-area">
              <input type="text" placeholder="Search for artistes, songs, albums" />
              <i className="fas fa-search search-icon"></i>
            </div>
          </div>
          <div className="col-md-2 download-stores">
            <img src={appStoreImg} alt="" />
            <img src={playStoreImg} alt="" />
          </div>
          <div className="col-3 col-md-1">
            <Link to="/signup" className="link">SignUp</Link>
            <span>/</span>
            <Link to="/signup" className="link">Login</Link>
          </div>
          <div className="col-md-2 upload">
            <button className="btn-upload"><i class="fas fa-upload"></i><span>Upload</span></button>
          </div>
          
        </nav>
      </div>
    </>
  )
}


export default NavBar;
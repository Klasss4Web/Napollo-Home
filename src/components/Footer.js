import React from "react";

import "./ComponentStyles.css";

import playStoreImg from "../images/google-play-badge.png";
import appStoreImg from "../images/download-on-app-store.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-flex">
        <div className="footer-copyright">
          <div className="footer-logo">
            <div className="footer-logo__first"></div>
            <div className="footer-logo__second"></div>
            <div className="footer-logo__third"></div>
            <div className="footer-logo__fourth"></div>
            <div className="footer-logo__fifth"></div>
            <div className="footer-logo__sixth"></div>
          </div>
          <h6 className="footer-copy">&copy; 2020, Napollo</h6>
          <small>Legal</small>
          <small className="left-margin-sm">Privacy</small>
          <small className="left-margin-sm">Cookies</small>
        </div>
        
        <div className="footer-napollo">
          <h6>Napollo</h6>
          <small>About</small><br />
          <small>Sign Up</small><br />
          <small>Forgot Password</small><br />
          <small>Contact</small><br />
        </div>
        <div className="footer-membership">
          <h6>Artist Membership</h6>
          <small>Overview</small><br />
          <small>Pricing</small><br />
          <small>Opportunities</small><br />
          <small>Shows</small><br />
          <small>Help</small><br />
        </div>
        <div className="footer-listener">
          <h6>Listener</h6>
          <small>Overview</small><br />
          <small>Pricing</small><br />
          <small>Suggested Playlist</small><br />
          <small>Discover</small><br />
          <small>Reviews</small><br />
        </div>
        <div className="footer-listener">
          <h6>Listener</h6>
          <small>Terms of Service</small><br />
          <small>Privacy Policy</small><br />
          <small>Copyright Privacy</small><br />
          <small>Cookies</small><br />
          <small>Trademark</small><br />
        </div>
        <div className="footer-social">
          <h6>Follow Us</h6>
          <div className="footer-social__icon">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-twitter left-margin-sm"></i>
            <i class="fab fa-instagram left-margin-sm"></i>
          </div>
          <h6>Download App</h6>
          <div className="footer-download__app">
            <img src={appStoreImg} alt="" className="" />
            <img src={playStoreImg} alt="" className="" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

import React from "react";
import { Link } from "react-router-dom";

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
          <Link to="/about" className="link"><small>About</small><br /></Link>
          <Link to="/signUp" className="link"><small>Sign Up</small><br /></Link>
          <Link to="/forgot-password" className="link"><small>Forgot Password</small><br /></Link>
          <Link to="/contact" className="link"><small>Contact</small><br /></Link>
        </div>
        <div className="footer-membership">
          <h6>Artist Membership</h6>
          <Link to="/overview" className="link"><small>Overview</small><br /></Link>
          <Link to="/pricing" className="link"><small>Pricing</small><br /></Link>
          <Link to="/opportunities" className="link"><small>Opportunities</small><br /></Link>
          <Link to="/shows" className="link"><small>Shows</small><br /></Link>
          <Link to="/help" className="link"><small>Help</small><br /></Link>
        </div>
        <div className="footer-listener">
          <h6>Listener</h6>
          <Link to="/overview" className="link"><small>Overview</small><br /></Link>
          <Link to="/pricing" className="link"><small>Pricing</small><br /></Link>
          <Link to="/playlist" className="link"><small>Suggested Playlist</small><br /></Link>
          <Link to="/discover" className="link"><small>Discover</small><br /></Link>
          <Link to="/reviews" className="link"><small>Reviews</small><br /></Link>
        </div>
        <div className="footer-listener">
          <h6>Listener</h6>
          <Link to="/terms" className="link"><small>Terms of Service</small><br /></Link>
          <Link to="/privacy-policy" className="link"><small>Privacy Policy</small><br /></Link>
          <Link to="/copyright-policy" className="link"><small>Copyright Privacy</small><br /></Link>
          <Link to="/cookies" className="link"><small>Cookies</small><br /></Link>
          <Link to="/trademark" className="link"><small>Trademark</small><br /></Link>
        </div>
        <div className="footer-social">
          <h6>Follow Us</h6>
          <div className="footer-social__icon">
          <Link to="https://facebook.com"><i class="fab fa-facebook"></i></Link>
          <Link to="https://twitter.com"><i class="fab fa-twitter left-margin-sm"></i></Link>
          <Link to="https://instagram.com"><i class="fab fa-instagram left-margin-sm"></i></Link>
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

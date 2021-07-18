import React from "react";

import "./ComponentStyles.css";


export default function ChoosePlan() {
  return (
    <div className="choose-plan">
      <h3>Choose Your Plan</h3>
      <div className="choose-plan__flex">
        <div className="choose-plan__free-orange">
          <div className="choose-plan__circle-logo">
            <div className="choose-plan__logo-first logo-white-bg"></div>
            <div className="choose-plan__logo-second logo-white-bg"></div>
            <div className="choose-plan__logo-third logo-white-bg"></div>
            <div className="choose-plan__logo-fourth logo-white-bg"></div>
            <div className="choose-plan__logo-fifth logo-white-bg"></div>
            <div className="choose-plan__logo-sixth logo-white-bg"></div>
          </div>
          <h5>Free</h5>
          <p>Enjoy unlimited online music</p>
          <div className="choose-plan__line"></div>
          <p className="choose-plan__cost">$7.99<span>/month</span></p>
          <p className="choose-plan__free-trial">Starts with one month free trial</p>
          <button className="choose-plan__features-btn">Features</button>
          <ul className="choose-plan__list">
            <i className="fas fa-check"></i><li>Offline Mode</li><br />
            <i className="fas fa-check"></i><li>Online Listening</li><br />
            <i className="fas fa-check"></i><li>No Ads</li><br />
            <i className="fas fa-check"></i><li>Regular Audio</li><br />
            <i className="fas fa-check"></i><li>Offline mode</li><br />
            <i className="fas fa-check"></i><li>30 skips per day</li><br />
            <i className="fas fa-check"></i><li>With Ads</li><br />
            <i className="fas fa-check"></i><li>Unlimited Skips</li><br />
          </ul>
          <button className="choose-plan__activate-btn">Activate</button>
        </div>
        <div className="choose-plan__free-dark">
          <div className="choose-plan__circle-logo btn-dark">
            <div className="choose-plan__logo-first logo-dark-bg"></div>
            <div className="choose-plan__logo-second logo-dark-bg"></div>
            <div className="choose-plan__logo-third logo-dark-bg"></div>
            <div className="choose-plan__logo-fourth logo-dark-bg"></div>
            <div className="choose-plan__logo-fifth logo-dark-bg"></div>
            <div className="choose-plan__logo-sixth logo-dark-bg"></div>
          </div>
          <h5>Premium</h5>
          <p>Enjoy unlimited online music</p>
          <div className="choose-plan__line"></div>
          <p className="choose-plan__cost">$7.99<span>/month</span></p>
          <p className="choose-plan__free-trial">Starts with one month free trial</p>
          <button className="choose-plan__features-btn btn-dark">Features</button>
          <ul className="choose-plan__list">
            <i className="fas fa-check"></i><li>Offline Mode</li><br />
            <i className="fas fa-check"></i><li>Online Listening</li><br />
            <i className="fas fa-check"></i><li>No Ads</li><br />
            <i className="fas fa-check"></i><li>Regular Audio</li><br />
            <i className="fas fa-check"></i><li>Offline mode</li><br />
            <i className="fas fa-check"></i><li>30 skips per day</li><br />
            <i className="fas fa-check"></i><li>With Ads</li><br />
            <i className="fas fa-check"></i><li>Unlimited Skips</li><br />
          </ul>
          <button className="choose-plan__activate-btn btn-dark">Activate</button>
        </div>
      </div>
      
    </div>
  )
}

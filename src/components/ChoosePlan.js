import React from "react";

import "./ComponentStyles.css";


export default function ChoosePlan() {
  return (
    <div className="choose-plan">
      <h3>Choose Your Plan</h3>
      <div className="choose-plan__flex">
        <div className="choose-plan__free-orange">
          <div className="choose-plan__circle-logo">
            <div className="choose-plan__logo-first"></div>
            <div className="choose-plan__logo-second"></div>
            <div className="choose-plan__logo-third"></div>
            <div className="choose-plan__logo-fourth"></div>
            <div className="choose-plan__logo-fifth"></div>
            <div className="choose-plan__logo-sixth"></div>
          </div>
          <h5>Free</h5>
          <p>Enjoy unlimited online music</p>
          <div className="choose-plan__line"></div>
          <p className="choose-plan__cost">$7.99<span>/month</span></p>
          <p className="choose-plan__free-trial">Starts with one month free trial</p>
          <button className="choose-plan__features-btn">Features</button>
          <ul className="choose-plan__list">
            <li>Offline Mode</li>
            <li>Online Listening</li>
            <li>No Ads</li>
            <li>Regular Audio</li>
            <li>Offline mode</li>
            <li>30 skips per day</li>
            <li>With Ads</li>
            <li>Unlimited Skips</li>
          </ul>
          <button className="choose-plan__activate-btn">Activate</button>
        </div>
        <div className="choose-plan__free-dark">
          <div className="choose-plan__circle-logo">
            <div className="choose-plan__logo-first"></div>
            <div className="choose-plan__logo-second"></div>
            <div className="choose-plan__logo-third"></div>
            <div className="choose-plan__logo-fourth"></div>
            <div className="choose-plan__logo-fifth"></div>
            <div className="choose-plan__logo-sixth"></div>
          </div>
          <h5>Free</h5>
          <p>Enjoy unlimited online music</p>
          <div className="choose-plan__line"></div>
          <p className="choose-plan__cost">$7.99<span>/month</span></p>
          <p className="choose-plan__free-trial">Starts with one month free trial</p>
          <button className="choose-plan__features-btn">Features</button>
          <ul className="choose-plan__list">
            <li>Offline Mode</li>
            <li>Online Listening</li>
            <li>No Ads</li>
            <li>Regular Audio</li>
            <li>Offline mode</li>
            <li>30 skips per day</li>
            <li>With Ads</li>
            <li>Unlimited Skips</li>
          </ul>
          <button className="choose-plan__activate-btn">Activate</button>
        </div>
      </div>
      
    </div>
  )
}

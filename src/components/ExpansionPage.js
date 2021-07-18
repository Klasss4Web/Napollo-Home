import React from "react";

import "./ComponentStyles.css";

import phoneImg from "../images/night-mode.png";
import imageOne from "../images/headset.jpg";


export default function ExpansionPage() {
  return (
    <div className="expansion-page">
      <div className="expansion-page__flex">
        <div className="expansion-page__phone">
          <img src={phoneImg} alt="" />
        </div>
        <div className="expansion-page_details">
          <h3 className="expansion-page__title">Expansion Page</h3>
          <p className="expansion-page__description">Discover artistes all around the world by
            their location via the expansion page. Also,
            get to know the top artistes in any location
            on the globe.</p>
          <div className="expansion-page__details-top-artists">
            <p>01</p>
            <div className="expansion-page__card">
              <img src={imageOne} alt="" />
            </div>
            <div className="artists">
              <p>Lights Out</p>
              <p>Cold Play</p>
            </div>
            <div className="reaction">
              <i class="fas fa-heart"></i>
            </div>
          </div>
          <div className="expansion-page__details-top-artists negative-margin">
            <p>02</p>
            <div className="expansion-page__card">
              <img src={imageOne} alt="" />
            </div>
            <div className="artists">
              <p>Green Tuska</p>
            </div>
            <div className="reaction artist-tuska">
              <i class="fas fa-heart"></i>
            </div>
          </div>
          <div className="expansion-page__details-top-artists">
            <p>03</p>
            <div className="expansion-page__card">
              <img src={imageOne} alt="" />
            </div>
            <div className="artists">
              <p>Bruno Mars</p>
            </div>
            <div className="reaction">
              <i class="fas fa-heart"></i>
            </div>
          </div>
          <div className="expansion-page__details-top-artists">
            <p>04</p>
            <div className="expansion-page__card">
              <img src={imageOne} alt="" />
            </div>
            <div className="expansion-page_details-artist-name artists">
              <p>Cardi</p>
            </div>
            <div className="reaction">
              <i class="fas fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

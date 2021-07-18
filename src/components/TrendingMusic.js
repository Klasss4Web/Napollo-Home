import React from "react";

import "./ComponentStyles.css";

import phoneImg from "../images/stereo.jpg";


export default function TrendingMusic() {
  return (
    <div className="trending-music">
      <div className="trending-music__flex">
        <div className="trending-music__flex-player">
          <img src={phoneImg} alt="" />
        </div>
        <div>
          <h3>Listen and enjoy all trending music</h3>
          <div>
            <ul className="trending-music__list">
              <li><span className="trending-music__bullet">What's hot</span></li>
              <li><span className="trending-music__bullet">By genre</span></li>
              <li><span className="trending-music__bullet">By location</span></li>
              <li><span className="trending-music__bullet">Lot's more...</span></li>
            </ul>
          </div>
          <button className="btn btn-listening">Start listening</button>
        </div>
      </div>
      
    </div>
  )
}

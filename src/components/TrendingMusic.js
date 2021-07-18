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
            <ul>
              <li>What's hot</li>
              <li>By genre</li>
              <li>By location</li>
              <li>Lot's more...</li>
            </ul>
          </div>
          <button className="btn btn-listening">Start listening</button>
        </div>
      </div>
      
    </div>
  )
}

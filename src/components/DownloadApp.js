import React from "react";

import "./ComponentStyles.css";

import phoneImg from "../images/download-tab.png";
import playStoreImg from "../images/google-play-badge.png";
import appStoreImg from "../images/download-on-app-store.png";


export default function DownloadApp() {
  return (
    <div className="download-app">
      <div className="download-app__flex">
        <div className="download-app__mobile">
          <img src={phoneImg} alt="" className="download-app__photo" /> 
        </div>
        <div className="download-app__stores">
          <h3 className="download-app__title">Download our iOS and Android apps <span>for Free</span></h3>
          <p>Downloaded over 10 million times in less than six
            months, our cross-platform app allows you to listen to,
            discover, favorite, and share music on the go.</p>
            <div className="app-stores">
              <img src={appStoreImg} alt="" className="download-app__android" />
              <img src={playStoreImg} alt="" className="download-app__apple" />
            </div>
        </div>
        
      </div>
      
    </div>
  )
}

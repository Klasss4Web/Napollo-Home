import React from "react";

import "./ComponentStyles.css";

import imageOne from "../images/headset.jpg";
import phoneImg from "../images/slant1.jpg";

export default function WhatsHot() {
  return (
    <>
    
    <div className="hot-section">
      <h3 className="whats-hot__title">What's Hot!</h3>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={imageOne} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={imageOne} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={imageOne} class="d-block w-100" alt="..." />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
    </div>   
      <div className="hot-section__subtitle">
        <h4>Albums</h4>
        <h6>View All
          <span className="hot-section__span"><i class="fas fa-angle-right"></i></span>
        </h6>
      </div>
      <div className="hot-section__flex">
        <div className="hot-section__collection">
          <div className="hot-section__album">
            <div className="hot-section__album-card">
              <img src={imageOne} alt="" />
              <div className="music-title">
                <h6>Death Red</h6>
                <i class="fas fa-heart"></i>
              </div>
              <div className="music-title">
              <p className="music-title__name">Powerful</p>
                <h6>1.3k</h6>
              </div>
            </div>
            <div className="hot-section__album-card gutters">
              <img src={imageOne} alt="" />
              <div className="music-title">
                <h6>Fooled</h6>
                <i class="fas fa-heart"></i>
              </div>
              <div className="music-title">
                <p className="music-title__name">Alan Walker</p>
                <h6>1.4k</h6>
              </div>
            </div>
            <div className="hot-section__album-card">
              <img src={imageOne} alt="" />
              <div className="music-title">
                <h6>Hate Me</h6>
                <i class="fas fa-heart"></i>
              </div>
              <div className="music-title">
                <p className="music-title__name">Elie Gooding</p>
                <h6>1.6k</h6>
              </div>
            </div>
          </div>

          <div className="hot-section__album">
            <div className="hot-section__album-card">
              <h4 className="hot-section__album-singles">Singles and Eps</h4>
              <img src={imageOne} alt="" />
              <div className="music-title">
                <h6>Lets Dance</h6>
                <i class="fas fa-heart"></i>
              </div>
              <div className="music-title">
                <p className="music-title__name">Bowie</p>
                <h6>1.3k</h6>
              </div>
            </div>
            <div className="hot-section__album-card gutters top-margin">
              <img src={imageOne} alt="" />
              <div className="music-title">
                <h6>Bad Romance</h6>
                <i class="fas fa-heart"></i>
              </div>
              <div className="music-title">
                <p className="music-title__name">Rihana</p>
                <h6>1.3k</h6>
              </div>
            </div>
            <div className="hot-section__album-card">
              <h6 className="hot-section__view">View All</h6>
              <img src={imageOne} alt="" />
              <div className="music-title">
                <h6>Fly</h6>
                <i class="fas fa-heart"></i>
              </div>
              <div className="music-title">
                <p className="music-title__name">Cold Play</p>
                <h6>1.3k</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="arrow-container">
          <div className="arrow">
            <i class="fas fa-angle-right"></i>
          </div>
        </div>
        
        <div className="hot-section__mobile">
          <img src={phoneImg} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

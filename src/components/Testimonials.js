import React from "react";

import "./ComponentStyles.css";

import phoneImg from "../images/slant-phone.jpg";


export default function Testimonials() {
  return (
    <div className="testimonials">
      <h3 className="testimonials-title">Testimonials</h3>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className="testimonials__flex-cards">
              <div className="testimonials__flex-cards-inividual right-margin">
                <p>This is the best app I've come across.
                  was able to upscale my career in less
                  than 10 weeks.</p>
              </div>
              <div className="testimonials__flex-img">
                <div className="testimonials__genre">
                  <h6>French Benten</h6>
                  <h6 className="music-type">R&B/Soul</h6>
                </div>
                <img src={phoneImg} alt="" className="testimonials__photo" />
              </div>         
          </div>
          </div>
          <div class="carousel-item">
            <div className="testimonials__flex-cards">
              <div className="testimonials__flex-cards-inividual right-margin">
                <p>This is the best app I've come across.
                  was able to upscale my career in less
                  than 10 weeks.</p>
              </div>
              <div className="testimonials__flex-img">
                <div className="testimonials__genre">
                  <h6>French Benten</h6>
                  <h6 className="music-type">R&B/Soul</h6>
                </div>
                <img src={phoneImg} alt="" className="testimonials__photo" />
              </div>
          
        </div>
          </div>
          <div class="carousel-item">
            <div className="testimonials__flex-cards">
              <div className="testimonials__flex-cards-inividual left-margin">
                <p>This is the best app I've come across.
                  was able to upscale my career in less
                  than 10 weeks.</p>
              </div>
              <div className="testimonials__flex-img">
                <img src={phoneImg} alt="" className="testimonials__photo" />
              </div>           
            </div>
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
      <div className="testimonials__flex">
        <div className="testimonials__flex-cards">
          <div className="testimonials__flex-cards-inividual right-margin">
            <p>This is the best app I've come across.
              was able to upscale my career in less
              than 10 weeks.</p>
          </div>
          <div className="testimonials__flex-img">
            <div className="testimonials__genre">
              <h6>French Benten</h6>
              <h6 className="music-type">R&B/Soul</h6>
            </div>
            <img src={phoneImg} alt="" className="testimonials__photo" />
          </div>
          
        </div>
        <div className="testimonials__flex-cards">
          <div className="testimonials__flex-cards-inividual left-margin">
            <p>This is the best app I've come across.
              was able to upscale my career in less
              than 10 weeks.</p>
          </div>
          <div className="testimonials__flex-img">
            <div className="testimonials__genre">
              <h6>Hama Gaday</h6>
              <h6 className="music-type">Pop Artist</h6>
            </div>
            <img src={phoneImg} alt="" className="testimonials__photo" />
          </div>
          
        </div>
        <div className="testimonials__flex-cards">
          <div className="testimonials__flex-cards-inividual left-margin">
            <p>This is the best app I've come across.
              was able to upscale my career in less
              than 10 weeks.</p>
          </div>
          <div className="testimonials__flex-img">
            <img src={phoneImg} alt="" className="testimonials__photo" />
          </div>
          
        </div>
      </div>
    </div>
  )
}

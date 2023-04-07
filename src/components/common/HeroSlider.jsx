import React, { useEffect, useRef } from "react";
import img1 from "/slider/bg_slider1.jpg";
import img2 from "/slider/bg_slider22.jpg";
import $ from "jquery";
import "./jquery.nivo.slider";
import "./nivo-slider.css";
import "./preview.css";

export default function HeroSlider() {
  const navbarRef = useRef(null);
  useEffect(() => {
    $("#ensign-nivoslider-2").nivoSlider({
      effect: "random",
      slices: 15,
      boxCols: 8,
      boxRows: 4,
      animSpeed: 500,
      pauseTime: 5000,
      startSlide: 0,
      directionNav: true,
      controlNavThumbs: false,
      pauseOnHover: true,
      manualAdvance: true,
    });
  }, []);
  return (
    <section className="slider-main-area home-3 bg-gray">
      <div className="main-slider an-si">
        <div className="bend niceties preview-2">
          <div ref={navbarRef} id="ensign-nivoslider-2" className="slides">
            <img src={img1} alt="" title="#slider-direction-1" />
            <img src={img2} alt="" title="#slider-direction-2" />
          </div>
          <div
            id="slider-direction-1"
            className="t-cn slider-direction Builder"
          >
            <div className="slide-all slide2">
              {/* <!-- layer 1 --> */}
              <div className="layer-1">
                <h2 className="title5">new collection</h2>
              </div>
              {/* <!-- layer 2 --> */}
              <div className="layer-2">
                <h2 className="title6">Women’s Fashion</h2>
              </div>
              {/* <!-- layer 2 --> */}
              <div className="layer-2">
                <p className="title0">Save Up To 40% Off</p>
              </div>
              {/* <!-- layer 3 --> */}
              <div className="layer-3">
                <a className="min1" href="#">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div
            id="slider-direction-2"
            className="t-cn slider-direction Builder"
          >
            <div className="slide-all2">
              {/* <!-- layer 1 --> */}
              <div className="layer-1">
                <h2 className="title5">new collection</h2>
              </div>
              {/* <!-- layer 2 --> */}
              <div className="layer-2">
                <h2 className="title6">Men’s Fashion</h2>
              </div>
              {/* <!-- layer 2 --> */}
              <div className="layer-2">
                <p className="title0">Save Up To 40% Off</p>
              </div>
              {/* <!-- layer 3 --> */}
              <div className="layer-3">
                <a className="min1" href="#">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

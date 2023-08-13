import React from 'react'
import './Banner.css'

import fashion2 from '../../assets/photo.webp'

const Banner = () => {
  return (
    <section className="banner">
      <div
        className="banner-box"
        style={{
          backgroundImage: `url(${fashion2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h2>
          Get <span>15%</span> off <br /> your first <br /> Fashion order{" "}
        </h2>
        <div className="banner-details">Use the code: <span>15A2</span></div>
        <div className="banner-details">Easy and Free Returns</div>
        <div className="banner-details">T&C's apply</div>
      </div>

      {/* <SlickCarousel/> */}
    </section>
  );
}

export default Banner
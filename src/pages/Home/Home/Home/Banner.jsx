import React from "react";
import img from '../../../../assets/banner.jpg'
const Banner = () => {
  return (
    <div className="my-12">
      <div
        className="hero min-h-screen"
        style={{
         
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to the gadget shop</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

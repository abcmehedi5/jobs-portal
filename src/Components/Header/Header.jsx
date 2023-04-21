import React from "react";
import image from "../../assets/All Images/P3OLGJ1 copy 1.png";
const Header = () => {
  return (
    <div className="container mt-5">
      <div className="row  d-flex justify-content-center align-items-center">
        <div className="col-md-7">
          <h1 style={{fontWeight:'bold', lineHeight:'60px'}}>One Step <br /> Closer To Your <br /><span style={{color:"#9873FF"}}>Dream Job</span></h1>
          <p className="w-50 text-secondary mt-5 ">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>

          <button className="applyBtn">Get Started</button>
        </div>
        <div className="col-md-5">
          <img className="img img-fluid w-100" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;

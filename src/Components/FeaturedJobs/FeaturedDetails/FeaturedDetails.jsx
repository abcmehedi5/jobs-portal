import React from "react";
import { Link } from "react-router-dom";

const FeaturedDetails = ({ job}) => {
  const { job_title, job_type, salary, image, address, company, job_location,_id } =
    job;
  return (
    <div className="col-md-5 m-auto mb-4 job-container">
      <img className=" w-25 mb-4" src={image} alt="" />
      <h4 className="fw-bold">{job_title}</h4>
      <p className="text-secondary">{company}</p>
      <div className="d-flex  gap-4">
        <p className="job-type">{job_location}</p>
        <p className="job-type">{job_type}</p>
      </div>

      <div className="d-flex gap-4 text-secondary ">
        <p> <i className="fa-solid fa-location-dot"></i> {address}</p>
        <p>Salary: <i className="fa-solid fa-dollar-sign"></i> {salary}</p>
      </div>
      <Link to={`/job/${_id}`}><button className="Details-btn">View Details</button></Link>
    </div>
  );
};

export default FeaturedDetails;

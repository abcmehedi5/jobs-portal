import React from "react";
import { Link } from "react-router-dom";

const AppliedJobsDetails = ({ job }) => {
  const {
    job_title,
    address,
    company,
    job_type,
    phone,
    salary,
    image,
    job_location,
    _id,
  } = job;
  return (
    <div className="jobs-contaienr mt-3">
      <div className="job">
        {/* job info and image */}
        <div className="d-flex align-items-center job-info gap-5">
          <div className="applid-job-image">
            <img src={image} alt="" />
          </div>
          <div>
            <h5>{job_title}</h5>
            <p className="text-secondary">{company}</p>
            <div className="d-flex  gap-4">
              <p className="job-type">{job_location}</p>
              <p className="job-type">{job_type}</p>
            </div>
            <div className="d-flex gap-4 text-secondary salery-address ">
              <p>
                <i className="fa-solid fa-location-dot"></i> {address}
              </p>
              <p>
                Salary: <i className="fa-solid fa-dollar-sign"></i> {salary}
              </p>
            </div>
          </div>
        </div>
        {/* job details button */}
        <div>
          <Link to={`/job/${_id}`}>
            <button className="applyBtn">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsDetails;

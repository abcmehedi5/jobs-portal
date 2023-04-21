import React from "react";
import "./JobDetails.css";
import { useLoaderData, useParams } from "react-router-dom";
const JobDetails = () => {
  const { jobId } = useParams();
  const jobs = useLoaderData();
  const jobsFilter = jobs.filter((job) => job._id == jobId);
  const job = jobsFilter[0];

  // get existing job IDs from local storage
  const savedJobIds = localStorage.getItem("jobIds");

  // check if any job IDs already exist in local storage
  let jobIds = savedJobIds ? JSON.parse(savedJobIds) : [];
  // apply now handler
  const applyNowHandle = (id) => {
    // check if job ID already exists in the array
    const isJobIdExists = jobIds.includes(id);

    // add new job ID to the existing job IDs array if it doesn't exist already
    if (!isJobIdExists) {
      jobIds.push(id);
      // save all job IDs to local storage
      localStorage.setItem("jobIds", JSON.stringify(jobIds));
    }
  };

  return (
    <div className="container">
      <h3 className="text-center mt-5">Job Details</h3>

      <div className="row d-flex justify-content-center align-items-center gap-5">
        <div className="col-md-7">
          <p className="mt-5 mb-5">
            <strong>Job Description: </strong>
            <span className="text-secondary">{job.description}</span>
          </p>
          {/* job responsibilites  */}
          <p className="mb-4">
            <strong>Job Responsibility:</strong>
          </p>
          <p>
            {job.responsibilities.map((responsibiliti, index) => (
              <li key={index}>{responsibiliti}</li>
            ))}
          </p>

          <p className="mt-5">
            <strong>Educational Requirements: </strong>
            <br /> <br />
            <span className="text-secondary">
              {job.educational_requirements}
            </span>
          </p>

          <p className="mt-5">
            <strong>Experiences: </strong>
            <br /> <br />
            <span className="text-secondary">{job.experiences}</span>
          </p>
        </div>
        <div className="col-md-4 job-Details-right">
          <h4>Job Details</h4>
          <hr />
          <p>
            <strong>Salary :</strong> {job.salary}
          </p>
          <p>
            {" "}
            <strong>Job Title :</strong> {job.job_title}
          </p>
          <h4>Contact Information</h4>
          <hr />
          <p>
            <strong>Phone :</strong>
            {job.phone}
          </p>
          <p>
            <strong>Email :</strong> {job.email}
          </p>
          <p>
            <strong>Address :</strong> {job.address}
          </p>
          <button
            onClick={() => applyNowHandle(job._id)}
            className="applyBtn w-100"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

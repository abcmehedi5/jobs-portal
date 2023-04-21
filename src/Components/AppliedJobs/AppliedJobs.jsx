import React, { useEffect, useState } from "react";
import "./AppliedJobs.css";
import { useLoaderData } from "react-router-dom";
import AppliedJobsDetails from "./AppliedJobsDetails/AppliedJobsDetails";
const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [applidJob, setApplidJob] = useState([]);
  const [filter, setFileter] = useState([]);
  // get job IDs from local storage
  const savedJobIds = localStorage.getItem("jobIds");
  const jobIds = savedJobIds ? JSON.parse(savedJobIds) : [];
  // filter job data based on the job IDs
  const jobData = jobs.filter((job) => jobIds.includes(job._id));

  useEffect(() => {
    setApplidJob(jobData);
    setFileter(jobData);
  }, []);

  //   handle filter job change
  const handleFilterChange = (e) => {
    const jobFilter = filter.filter(
      (job) => job.job_location === e.target.value
    );
    setApplidJob(jobFilter);
  };

  return (
    <div className="container">
      <h3 className="text-center mt-5 fw-bold">Applied Jobs</h3>
      <div className="select-contaienr">
        <select
          onChange={handleFilterChange}
          className=" job-filter form-select"
        >
          <option defaultValue="Filter">Filter</option>
          <option value="Remote">Remote Job</option>
          <option value="Onsite">Onsite Job</option>
        </select>
      </div>
      {applidJob.map((job) => (
        <AppliedJobsDetails job={job} key={job._id}></AppliedJobsDetails>
      ))}
    </div>
  );
};

export default AppliedJobs;

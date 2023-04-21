import React, { useEffect, useState } from "react";
import "./FeaturedJobs.css";
import FeaturedDetails from "./FeaturedDetails/FeaturedDetails";
const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [showBtn, setShowBtn] = useState(true);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data.slice(0, 4));
        setAllJobs(data);
      });
  }, []);

  //  handle see all jobs
  const seeAllJobsHandler = () => {
    setJobs(allJobs);
    setShowBtn(false);
  };

  return (
    <div className="container">
      <h3 className="text-center">Featured Jobs</h3>
      <p className="text-center text-secondary mb-5">

        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="row">
        {jobs.map((job) => (
          <FeaturedDetails job={job} key={job._id}></FeaturedDetails>
        ))}
      </div>

      <div className="d-flex justify-content-center">
        {showBtn && (
          <button
            onClick={() => {
              seeAllJobsHandler();
            }}
            className="applyBtn mb-5"
          >
            See All Jobs
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedJobs;

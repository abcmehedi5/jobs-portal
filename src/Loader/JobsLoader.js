const jobsLoader = async ()=>{
    const loaderJobs= await fetch('/jobs.json')
    const jobs = await loaderJobs.json();
    return jobs

}

export default jobsLoader
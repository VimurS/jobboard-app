import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/jobs").then((res) => setJobs(res.data));
  }, []);

  // Filter jobs based on title
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container job-list">
      <div className="job-list-header">
        <h1>Job Listings</h1>
        <Link to="/add">
          <button className="primary-btn">+ Post Job</button>
        </Link>
      </div>

      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Jobs.."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="job-cards">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <Link to={`/job/${job.id}`} className="card job-card" key={job.id}>
              <h3>{job.title}</h3>
              <p>{job.company}</p>
            </Link>
          ))
        ) : (
          <p>No jobs found for "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
}

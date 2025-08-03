import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function JobDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/jobs/${id}`)
      .then((res) => setJob(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!job) return <div className="job-detail-container">Loading...</div>;

  return (
    <div className="job-detail-container">
      <div className="job-card">
        <h2 className="job-title">{job.title}</h2>
        <p className="job-company"><strong>Company:</strong> {job.company}</p>
        <br></br>
        <p className="job-company"><strong>Job Description</strong></p>
        <p className="job-description">{job.description}</p>
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function JobForm() {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, company, description }),
    });
    navigate('/');
  };

  return (
    <div className="job-form-container">
      <h1>Post a New Job</h1>
      <form onSubmit={handleSubmit} className="job-form">
        <label>Job Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Company</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />

        <label>Description</label>
        <textarea
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button type="submit">Submit Job</button>
      </form>
        <button className="back-button" onClick={() => navigate(-1)}>← Back</button>

    </div>
  );
}

export default JobForm;

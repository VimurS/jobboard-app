const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const filePath = "./jobs.json";

// GET all jobs
app.get("/jobs", (req, res) => {
  const jobs = JSON.parse(fs.readFileSync(filePath));
  res.json(jobs);
});

// GET job by ID
app.get("/jobs/:id", (req, res) => {
  const jobs = JSON.parse(fs.readFileSync(filePath));
  const job = jobs.find((j) => j.id === req.params.id);
  if (!job) return res.status(404).json({ error: "Job not found" });
  res.json(job);
});

// POST a job
app.post("/jobs", (req, res) => {
  const jobs = JSON.parse(fs.readFileSync(filePath));
  const newJob = {
    id: Date.now().toString(),
    title: req.body.title,
    company: req.body.company,
    description: req.body.description,
  };
  jobs.push(newJob);
  fs.writeFileSync(filePath, JSON.stringify(jobs, null, 2));
  res.status(201).json(newJob);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

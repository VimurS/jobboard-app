import { Routes, Route } from "react-router-dom";
import JobList from "./pages/JobList";
import JobForm from "./pages/JobForm";
import JobDetail from "./pages/JobDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<JobList />} />
      <Route path="/add" element={<JobForm />} />
      <Route path="/job/:id" element={<JobDetail />} />
    </Routes>
  );
}

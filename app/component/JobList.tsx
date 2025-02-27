"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProgressiveBar from "./ProgressiveBar";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  requiredSkills: string[];
  matchScore: number;
}

const JobList = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:5000/jobs");
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p className="text-center">Loading jobs...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Job Recommendations</h1>

      {jobs.length === 0 ? (
        <p className="text-gray-500">No jobs available.</p>
      ) : (
        jobs.map((job) => (
          <div key={job.id} className="bg-white shadow-md p-4 rounded-lg mb-4">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company} • {job.location}</p>
            <p className="text-gray-700 font-medium">{job.salary}</p>

            {/* Match Score Progress Bar */}
            <div className="mt-2">
              <ProgressiveBar value={job.matchScore} />
              <p className="text-sm text-gray-600 mt-1">Match Score: {job.matchScore}%</p>
            </div>

            <Link href={`/jobdetails/${job.id}`}>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                View Details
              </button>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default JobList;

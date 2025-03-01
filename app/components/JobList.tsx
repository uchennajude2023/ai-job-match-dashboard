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
        const response = await fetch("https://67c239b961d8935867e5b2c6.mockapi.io/api/v1/jobs");
        const data = await response.json();
        console.log(data);
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <p className="text-center pt-40 text-lg">Loading jobs...</p>;

  return (
    <div className=" mx-auto p-6 border-8 border-red w-full flex-col md:flex gap-4 justify-evenly ">
      
      {jobs.length === 0 ? (
        <p className="text-gray-500">No jobs available.</p>
      ) : (
        jobs.map((job) => (
          <div key={job.id} className="bg-white shadow-md p-4 rounded-lg mb-4 w-3xl mb:w-full ">
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

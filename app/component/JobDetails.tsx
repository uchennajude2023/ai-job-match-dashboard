"use client"; // Ensures this component runs on the client side

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  requiredSkills: string[];
  matchScore: number;
}

const JobDetails = () => {
  const { id } = useParams() as { id: string }; // Get job ID from URL
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return; // Ensure ID is available

    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/jobs/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch job details");
        }
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]); // Correct dependency

  if (loading) return <p>Loading job details...</p>;
  if (!job) return <p>Job not found</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
      <p className="text-gray-700 font-semibold">{job.company}</p>
      <p className="text-gray-600">{job.location}</p>
      <p className="text-gray-800 font-medium">{job.salary}</p>

      <h3 className="mt-4 text-lg font-semibold">Required Skills:</h3>
      <ul className="list-disc ml-5">
        {job.requiredSkills.map((skill, index) => (
          <li key={index} className="text-gray-700">
            {skill}
          </li>
        ))}
      </ul>

      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;
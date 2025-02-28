"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchJobDetails } from "../lib/api"; // API call function
import { useUserSkills } from "../lib/hooks/useUserSkills"; // Custom Hook
import UserSelection from "./UserSelection"; // Extracted Component
import MissingSkillsAlert from "./MissingSkillsAlert"; // Extracted Component

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
  const { id } = useParams() as { id: string };
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const { selectedUser, missingSkills, handleUserChange, mockUsers } = useUserSkills(job);

  useEffect(() => {
    if (!id) return;
    fetchJobDetails(id)
      .then(setJob)
      .catch((error) => console.error("Error fetching job details:", error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-lg text-center pt-30 ">Loading job details...</p>;
  if (!job) return <p>Job not found</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-lg bg-white">
      <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
      <p className="text-gray-700 font-semibold">{job.company}</p>
      <p className="text-gray-600">{job.location}</p>
      <p className="text-gray-800 font-medium">{job.salary}</p>
      {/* Required Skills Section */}
      <h3 className="mt-4 text-lg font-semibold">Required Skills:</h3>
      <ul className="list-disc ml-5">
        {job.requiredSkills.map((skill, index) => (
          <li
            key={index}
            className={`text-gray-700 ${
              missingSkills.includes(skill) ? "text-red-500 font-bold" : ""
            }`}
          >
            {skill} {missingSkills.includes(skill) && "(Missing)"}
          </li>
        ))}
      </ul>
      

      <UserSelection users={mockUsers} onUserSelect={handleUserChange} />
      {selectedUser && <MissingSkillsAlert user={selectedUser} missingSkills={missingSkills} />}

      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" disabled={!selectedUser}>
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;
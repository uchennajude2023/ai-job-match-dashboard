"use client";

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

interface User {
  id: number;
  name: string;
  skills: string[];
}

// Mock users with different skills
const mockUsers: User[] = [
  { id: 1, name: "Ebuka Emma", skills: ["React", "JavaScript", "CSS"] },
  { id: 2, name: "James Idoko", skills: ["Next.js", "Tailwind CSS", "TypeScript"] },
];

const JobDetails = () => {
  const { id } = useParams() as { id: string };
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [missingSkills, setMissingSkills] = useState<string[]>([]);

  useEffect(() => {
    if (!id) return;

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
  }, [id]);

  // Handle user selection
  const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const userId = parseInt(event.target.value);
    const user = mockUsers.find((u) => u.id === userId) || null;
    setSelectedUser(user);

    // Check missing skills if a user is selected
    if (user && job) {
      const userSkills = user.skills;
      const missing = job.requiredSkills.filter((skill) => !userSkills.includes(skill));
      setMissingSkills(missing);
    }
  };

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
          <li key={index} className={`text-gray-700 ${missingSkills.includes(skill) ? "text-red-500 font-bold" : ""}`}>
            {skill} {missingSkills.includes(skill) && "(Missing)"}
          </li>
        ))}
      </ul>

      {/* User Selection Dropdown */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Select User:</label>
        <select
          className="w-full p-2 border rounded-md"
          onChange={handleUserChange}
          defaultValue=""
        >
          <option value="" disabled>
            Choose a user...
          </option>
          {mockUsers.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      {/* Show missing skills alert */}
      {selectedUser && missingSkills.length > 0 && (
        <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded-md">
          <p>
            <strong>Upskilling Alert:</strong> {selectedUser.name}, consider learning:{" "}
            {missingSkills.join(", ")}
          </p>
        </div>
      )}

      {/* Apply Now Button */}
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" disabled={!selectedUser}>
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;

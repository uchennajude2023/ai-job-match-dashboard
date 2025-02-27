'use client';

import Link from 'next/link';
import ProgressBar from './ProgressiveBar';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  requiredSkills: string[];
  matchScore: number;
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Corp',
    location: 'Remote',
    salary: '$70,000 - $90,000',
    requiredSkills: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS'],
    matchScore: 85,
  },
  {
    id: 2,
    title: 'UI Engineer',
    company: 'DesignPro',
    location: 'New York, USA',
    salary: '$80,000 - $100,000',
    requiredSkills: ['Figma', 'React', 'CSS'],
    matchScore: 70,
  },
  {
    id: 3,
    title: 'Backend Engineer',
    company: 'DesignPro',
    location: 'New York, USA',
    salary: '$80,000 - $100,000',
    requiredSkills: ['SQL', 'Java', 'OOP'],
    matchScore: 49,
  }
];

const JobList = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Job Recommendations</h1>

      {jobs.map((job) => (
        <div key={job.id} className="bg-white shadow-md p-4 rounded-lg mb-4">
          <h2 className="text-xl font-semibold">{job.title}</h2>
          <p className="text-gray-600">{job.company} • {job.location}</p>
          <p className="text-gray-700 font-medium">{job.salary}</p>

          <div className="mt-2">
            <ProgressBar value={job.matchScore} />
            <p className="text-sm text-gray-600 mt-1">Match Score: {job.matchScore}%</p>
          </div>

          <Link href={`/jobs/${job.id}`}>
            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default JobList;
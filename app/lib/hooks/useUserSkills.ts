// app/hooks/useUserSkills.ts
import { useState } from "react";

interface User {
  id: number;
  name: string;
  skills: string[];
}

interface Job {
  requiredSkills: string[];
}

const mockUsers: User[] = [
  { id: 1, name: "John Doe", skills: ["React", "JavaScript", "CSS"] },
  { id: 2, name: "Jane Smith", skills: ["Next.js", "Tailwind CSS", "TypeScript"] },
];

export const useUserSkills = (job: Job | null) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [missingSkills, setMissingSkills] = useState<string[]>([]);

  const handleUserChange = (userId: number) => {
    const user = mockUsers.find((u) => u.id === userId) || null;
    setSelectedUser(user);

    if (user && job) {
      setMissingSkills(job.requiredSkills.filter((skill) => !user.skills.includes(skill)));
    } else {
      setMissingSkills([]);
    }
  };

  return { selectedUser, missingSkills, handleUserChange, mockUsers };
};

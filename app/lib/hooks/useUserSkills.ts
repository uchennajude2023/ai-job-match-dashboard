
import { useState, useMemo } from "react";
import { User } from "../../types/user"; // Ensure the correct path
import { Job } from "../../types/types"; // Import Job type

export const useUserSkills = (job: Job | null) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Mock users for testing
  const mockUsers: User[] = [
    { id: 1, name: "Emma Okolo", skills: ["React", "JavaScript", "Next.js"] },
    { id: 2, name: "Ogechi Nkwo", skills: ["React", "CSS", "Figma"] },
  ];

  // Handle user selection
  const handleUserChange = (user: User) => {
    setSelectedUser(user);
  };

  // Calculate missing skills
  const missingSkills = useMemo(() => {
    if (!selectedUser || !job) return [];
    return job.requiredSkills.filter((skill) => !selectedUser.skills.includes(skill));
  }, [selectedUser, job]);

  return { selectedUser, missingSkills, handleUserChange, mockUsers };
};

"use client";
interface User {
    id: number;
    name: string;
    skills: string[];
  }
  
  interface MissingSkillsAlertProps {
    user: User;
    missingSkills: string[];
  }
  
  const MissingSkillsAlert = ({ user, missingSkills }: MissingSkillsAlertProps) => {
    if (missingSkills.length === 0) return null;
  
    return (
      <div className="mt-4 p-4 bg-yellow-100 border border-yellow-400 rounded-lg">
        <p className="font-semibold text-yellow-800">
          {user.name}, you are missing the following skills for this job:
        </p>
        <ul className="list-disc ml-4 text-yellow-700">
          {missingSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default MissingSkillsAlert;
  
  
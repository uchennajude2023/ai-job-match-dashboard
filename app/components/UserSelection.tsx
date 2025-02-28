"use client";
import { useState } from "react";

interface User {
  id: number;
  name: string;
  skills: string[];
}

const users: User[] = [
  { id: 1, name: "Emma Okolo", skills: ["React", "JavaScript", "Next.js"] },
  { id: 2, name: "Ogechi Nkwo", skills: ["UI/UX Design", "CSS", "Figma"] },
];

interface UserSelectionProps {
  users: User[];
  onSelectUser: (user: User) => void;
}

const UserSelection: React.FC<UserSelectionProps> = ({ onSelectUser }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const userId = parseInt(event.target.value, 10);
    const user = users.find((u) => u.id === userId) || null;
    setSelectedUser(user);
    if (user) onSelectUser(user);
  };

  return (
    <div className="mb-4">
      <label className="block font-semibold">Select User:</label>
      <select
        onChange={handleChange}
        className="border rounded px-3 py-2 w-full"
      >
        <option value="">-- Choose a User --</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserSelection;

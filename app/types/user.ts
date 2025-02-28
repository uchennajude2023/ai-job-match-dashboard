export interface User {
    id: number;
    name: string;
    skills: string[];
  }



export const mockUsers: User[] = [
    { id: 1, name: "Emma Okolo", skills: ["React", "JavaScript", "Next.js"] },
    { id: 2, name: "Ogechi Nkwo", skills: ["UI/UX Design", "CSS", "Figma"] },
  ];
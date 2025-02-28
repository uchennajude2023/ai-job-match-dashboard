// src/utils/api.ts
export const fetchJobDetails = async (id: string) => {
    const response = await fetch(`http://localhost:5000/jobs/${id}`);
    if (!response.ok) throw new Error("Failed to fetch job details");
    return response.json();
  };
  
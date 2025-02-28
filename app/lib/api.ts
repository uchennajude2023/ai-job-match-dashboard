
export const fetchJobDetails = async (id: string) => {
    const response = await fetch(`https://67c239b961d8935867e5b2c6.mockapi.io/api/v1/jobs/${id}`);
    if (!response.ok) throw new Error("Failed to fetch job details");
    return response.json();
  };
  
# AI-Powered Job Match Dashboard

![Next.js](https://img.shields.io/badge/Next.js-14-blue)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-✓-blue)

An AI-powered job matching platform that compares job requirements with user skills, calculates match scores, and provides recommendations. Built with Next.js, TypeScript, Tailwind CSS, and MockAPI.

## 🚀 Features
- Fetches and displays job listings from an API
- Compares user skills with job requirements
- Calculates match scores
- Responsive design for mobile and desktop
- Hosted on Vercel

## 🛠️ Tech Stack
- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **State Management:** React Hooks (useState, useEffect)
- **API:** MockAPI.io
- **Deployment:** Vercel

## 📂 Project Structure
```
app/
 ├── components/
 │   ├── JobList.tsx  # Job Listings Component
 │   ├── JobDetails.tsx  # Individual Job Details Component
 │   ├── UserSelection.tsx  # User selection for skill matching
 │   ├── ProgressiveBar.tsx  # Displays match score visually
 ├── dashboard/page.tsx  # Main dashboard page
 ├── jobdetails/page.tsx  # Job details page
 ├── lib/
 │   ├── api.ts  # Fetch jobs from MockAPI
 │   ├── hooks/useUserSkills.ts  # Custom hook for user skill comparison
 ├── public/  # Static assets
 ├── styles/  # Tailwind CSS styles
 ├── next.config.ts  # Next.js configuration
 ├── README.md  # Documentation
```

## 🏗️ Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/job-match-dashboard.git
   cd job-match-dashboard
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 API Integration
- **Base URL:** `https://67c239b961d8935867e5b2c6.mockapi.io/api/v1/jobs`
- Fetch all jobs:
   ```ts
   const fetchJobs = async () => {
     const response = await fetch("https://67c239b961d8935867e5b2c6.mockapi.io/api/v1/jobs");
     const data = await response.json();
     return data;
   };
   ```
- Fetch job by ID:
   ```ts
   const fetchJobDetails = async (id: string) => {
     const response = await fetch(`https://67c239b961d8935867e5b2c6.mockapi.io/api/v1/jobs/${id}`);
     return response.json();
   };
   ```

## 🚀 Deployment
1. Create a Vercel account and install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Deploy the project:
   ```sh
   vercel
   ```
3. Follow the on-screen instructions to complete deployment.

## 🔧 Troubleshooting
- **404 Page Not Found?** Ensure `next.config.ts` has the correct redirects:
   ```ts
   redirects: async () => [
     {
       source: "/",
       destination: "/dashboard",
       permanent: true,
     },
   ],
   ```
- **API not fetching data?** Check your console logs and network requests in DevTools.
- **Hydration failed?** Ensure all components are correctly wrapped with `use client` where necessary.

## 🤝 Contributing
1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make changes and commit: `git commit -m "Added new feature"`
4. Push to the branch: `git push origin feature-name`
5. Open a Pull Request

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

---
Built with ❤️ by Uchenna


//import Image from "next/image";
import JobList from "../components/JobList";

export default function Page() {
  return (
    <div className="bg-blue-200 min-h-screen pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
      
      
      <div className="bg-blue-200">
        <h1 className="text-2xl md:text-4xl text-center font-black  pt-6 pb-4 border-b-4 border-black">
          AI Powered Job Match Dashboard
        </h1>
      </div>

    
      <div className="text-center mt-6">
        <h1 className="text-xl pb-2 sm:text-3xl md:text-2xl font-bold">Job Recommendations</h1>
      </div>

    
      <div className="w-full overflow-hidden">
        <div className="md:flex flex-col w-full">
          <JobList />
        </div>
      </div>
      
    </div>
  );
}

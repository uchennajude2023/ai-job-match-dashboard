import Image from "next/image";
import JobList from "../component/JobList"

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <h1 className="text-4xl">AI Powered Job Match Dashboard</h1>
      </div>
      <div className="flex gap-x-4 ">
        <div>
            <JobList />
        </div>

      </div>

    </div>
  );
}

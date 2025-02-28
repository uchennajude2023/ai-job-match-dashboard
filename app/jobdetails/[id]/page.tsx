import JobDetails from "../../components/JobDetails";

const JobDetailsPage = () => {
  return (
    <div className=" p-10 md:pt-20 md:pb-40 bg-blue-200">
      <div className="font-[family-name:var(--font-geist-sans)] text-2xl md:text-4xl text-center font-black pb-8">
      Available Jobs</div>
      <JobDetails />
    </div>
  );
};

export default JobDetailsPage;
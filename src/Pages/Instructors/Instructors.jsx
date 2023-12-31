import AllInstructorCard from "../../components/AllInstructorCard/AllInstructorCard";
import PageTitle from "../../components/PageTitle/PageTitle";

import useAllInstructors from "../../hooks/useAllInstructors";

const Instructors = () => {
  const [allInstructors] = useAllInstructors();
  return (
    <div className="mt-32 pb-80">
      <PageTitle heading="Our Beloved Instructors"></PageTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-20 md:ml-48">
        {allInstructors.map((inst) => (
          <AllInstructorCard
            key={inst._id}
            instructorDetails={inst}
          ></AllInstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;

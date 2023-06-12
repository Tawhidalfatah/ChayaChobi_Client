import AllInstructorCard from "../../components/AllInstructorCard/AllInstructorCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAllInstructors from "../../hooks/useAllInstructors";

const Instructors = () => {
  const [allInstructors] = useAllInstructors();
  return (
    <div className="mt-48">
      <SectionTitle heading="Our Beloved Instructors"></SectionTitle>
      <div className="grid grid-cols-3 gap-8 ml-48">
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

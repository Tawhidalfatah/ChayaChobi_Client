import AllInstructorCard from "../../components/AllInstructorCard/AllInstructorCard";
import useAllInstructors from "../../hooks/useAllInstructors";

const Instructors = () => {
  const [allInstructors] = useAllInstructors();
  return (
    <div className="mt-48">
      <h2>Instructors page {allInstructors?.length}</h2>
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

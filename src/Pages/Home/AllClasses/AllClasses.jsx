import AllClassesCard from "../../../components/AllClassesCard/AllClassesCard";
import useAllClasses from "../../../hooks/useAllClasses";

const AllClasses = () => {
  const [approvedClasses] = useAllClasses();
  console.log(approvedClasses);
  return (
    <div className="mt-48">
      <h2>All Classes : {approvedClasses?.length} </h2>
      <div className="grid grid-cols-3 gap-8 ml-48">
        {approvedClasses.map((cls) => (
          <AllClassesCard key={cls._id} cls={cls}></AllClassesCard>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;

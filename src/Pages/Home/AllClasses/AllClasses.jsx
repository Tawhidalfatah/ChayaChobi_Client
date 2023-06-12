import AllClassesCard from "../../../components/AllClassesCard/AllClassesCard";
import PageTitle from "../../../components/PageTitle/PageTitle";

import useAllClasses from "../../../hooks/useAllClasses";

const AllClasses = () => {
  const [approvedClasses] = useAllClasses();
  console.log(approvedClasses);
  return (
    <div className="mt-32 pb-80">
      <PageTitle heading="Our Classes"></PageTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-20 md:ml-48">
        {approvedClasses.map((cls) => (
          <AllClassesCard key={cls._id} cls={cls}></AllClassesCard>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;

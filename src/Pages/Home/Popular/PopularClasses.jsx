import { useQuery } from "@tanstack/react-query";
import PopularCard from "../../../components/PopularCard/PopularCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularClasses = () => {
  const { data: classes = [] } = useQuery({
    queryKey: ["popularclasses"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/popularclasses`
      );
      return res.json();
    },
  });
  console.log(classes);
  return (
    <div className="mt-11">
      <SectionTitle heading="Featured Classes"></SectionTitle>
      <br />
      <div className="grid grid-cols-3 gap-8 ml-48">
        {classes.map((classinfo) => (
          <PopularCard key={classinfo._id} classinfo={classinfo}></PopularCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;

import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularInstructors = () => {
  const { data: instructors = [] } = useQuery({
    queryKey: ["popularinstructors"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/popularinstructors`
      );
      return res.json();
    },
  });
  console.log(instructors);
  return (
    <div>
      <SectionTitle heading="Meet Our Instructors"></SectionTitle>
      <div className="grid grid-cols-3 gap-8 ml-48">
        {instructors.map((instructorinfo) => (
          <div key={instructorinfo._id} className="col-span-1">
            <div className="flex flex-col gap-2 w-full">
              <img
                src={instructorinfo.photo}
                alt="Shoes"
                className="rounded-full object-cover 
                    h-96 
                    w-96"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;

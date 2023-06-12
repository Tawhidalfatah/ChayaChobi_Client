import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { motion } from "framer-motion";
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
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ rotate: 360, opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                whileHover={{ scale: 1.1 }}
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

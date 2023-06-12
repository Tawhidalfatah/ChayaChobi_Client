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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
        {instructors.map((instructorinfo) => (
          <div key={instructorinfo._id} className="col-span-1">
            <div className="flex flex-col items-center gap-2 w-full">
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
                    md:h-96 
                    md:w-96
                    h-40
                    w-40"
              />
              <br />
              <p className="text-center text-xl underline underline-offset-4">
                {instructorinfo.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;

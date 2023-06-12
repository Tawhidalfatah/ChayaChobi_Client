import { motion } from "framer-motion";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const partners = [
  {
    name: "Fox Searchlight Studios",
    logoUrl: "https://i.ibb.co/WgBrpf8/pngwing-com.png",
  },
  {
    name: "Universal Pictures",
    logoUrl: "https://i.ibb.co/5TtW3dY/pngwing-com-1.png",
  },
  {
    name: "Cannes Film Festival",
    logoUrl: "https://i.ibb.co/RbsQMWc/58480a75cef1014c0b5e491b.png",
  },
  {
    name: "Red Digital Cinema",
    logoUrl: "https://i.ibb.co/hyCnfC3/Nice-Png-red-camera-png-1202838.png",
  },
  // Add more partner objects as needed
];

const Partnerships = () => {
  return (
    <section className="industry-partnerships">
      <SectionTitle heading="Our Partners"></SectionTitle>
      <div className="flex flex-col md:flex-row gap-8 row items-center justify-evenly">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ rotate: 0, scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 2,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 11,
              opacity: 0.8,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9, rotate: -10, opacity: 0.6 }}
          >
            <img
              className="w-40 md:w-80"
              src={partner.logoUrl}
              alt={partner.name}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Partnerships;

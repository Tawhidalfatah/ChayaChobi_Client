import { motion } from "framer-motion";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const partners = [
  {
    name: "Fox Searchlight Studios",
    logoUrl: "https://i.ibb.co/VqtvZZb/fox.png",
  },
  {
    name: "Universal Pictures",
    logoUrl: "https://i.ibb.co/Y057bLF/universal.png",
  },
  {
    name: "Cannes Film Festival",
    logoUrl: "https://i.ibb.co/nQLtqRz/cannes.png",
  },
  // Add more partner objects as needed
];

const Partnerships = () => {
  return (
    <section className="industry-partnerships">
      <SectionTitle heading="Our Partners"></SectionTitle>
      <div className="flex items-center justify-evenly">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img className="w-96" src={partner.logoUrl} alt={partner.name} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Partnerships;

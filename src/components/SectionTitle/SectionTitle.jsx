import { Slide } from "react-awesome-reveal";

const SectionTitle = ({ heading }) => {
  return (
    <Slide>
      <h1 className="text-5xl text-center my-10">{heading}</h1>
    </Slide>
  );
};

export default SectionTitle;

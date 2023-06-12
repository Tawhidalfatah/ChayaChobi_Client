import { Zoom } from "react-awesome-reveal";

const SectionTitle = ({ heading }) => {
  return (
    <div className="my-10">
      <Zoom delay={1}>
        <div className="divider"></div>
      </Zoom>
      <Zoom>
        <h1 className="text-5xl text-center py-10">{heading}</h1>
      </Zoom>
      <Zoom delay={1}>
        <div className="divider"></div>
      </Zoom>
    </div>
  );
};

export default SectionTitle;

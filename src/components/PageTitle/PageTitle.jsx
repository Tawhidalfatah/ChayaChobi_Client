import { Zoom } from "react-awesome-reveal";

const PageTitle = ({ heading }) => {
  return (
    <div className="my-10">
      <Zoom>
        <h1 className="text-5xl text-center py-10">{heading}</h1>
      </Zoom>
    </div>
  );
};

export default PageTitle;

import Lottie from "lottie-react";
import errorAnimation from "../../../public/lighthouse.json";
import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div className="mx-auto w-1/4">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>
      <h2 className="text-center text-5xl">
        {error.status}: {error.statusText}
      </h2>
      <br />
      <p className="text-center text-3xl">{error.data}</p>
      <br />
      <div className="flex justify-center">
        <a href="/">
          <span className="btn btn-primary text-xl">Go Home</span>
        </a>
      </div>
    </>
  );
};

export default ErrorPage;

import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useInstructor from "../hooks/useInstructor";
import { ThreeDots } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isInstructor, isInstructorLoading] = useInstructor();
  const location = useLocation();

  if (loading || isInstructorLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#B31312"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
  }

  if (user && isInstructor) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;

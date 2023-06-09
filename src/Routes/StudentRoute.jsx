import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useStudent from "../hooks/useStudent";
import { Navigate, useLocation } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

const StudentRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isStudent, isStudentLoading] = useStudent();
  const location = useLocation();
  if (loading || isStudentLoading) {
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

  if (user && isStudent) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default StudentRoute;

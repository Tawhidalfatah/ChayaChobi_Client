import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useInstructor from "../../hooks/useInstructor";
import useAdmin from "../../hooks/useAdmin";

const Lobby = () => {
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-center text-2xl">Dashboard Lobby</h2>
      <div className="divider"></div>
      <h1 className="text-5xl text-center">
        Welcome, {user?.displayName ? user?.displayName : user?.email}
      </h1>
      <br />

      <h2 className="text-2xl text-center">
        Role: {isAdmin ? "Admin" : isInstructor ? "Instructor" : "Student"}
      </h2>

      <br />
      <p className="text-xl text-center">More Features coming soon</p>
    </div>
  );
};

export default Lobby;

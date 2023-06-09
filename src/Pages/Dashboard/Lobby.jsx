import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Lobby = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2 className="text-center text-2xl">Dashboard Lobby</h2>
      <div className="divider"></div>
      <h1 className="text-5xl text-center">
        Welcome, {user?.displayName ? user?.displayName : user?.email}
      </h1>
      <br />
      <p className="text-xl text-center">More Features coming soon</p>
    </div>
  );
};

export default Lobby;

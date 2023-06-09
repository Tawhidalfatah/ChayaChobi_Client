import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import profile from "../../assets/placeholder.png";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";
const Avatar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            referrerPolicy="no-referrer"
            src={user && user.photoURL ? user.photoURL : profile}
          />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link to="/dashboard/home" className="text-xl">
            Dashboard
          </Link>
        </li>

        <li>
          <Logout></Logout>
        </li>
      </ul>
    </div>
  );
};

export default Avatar;

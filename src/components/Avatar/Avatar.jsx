import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import profile from "../../assets/placeholder.png";
import { Link } from "react-router-dom";
const Avatar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
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
          <Link to="/dashboard" className="text-xl">
            Dashboard
          </Link>
        </li>
        <li>
          <a className="text-xl">Settings</a>
        </li>
        <li>
          <span className="text-xl" onClick={handleLogOut}>
            Logout
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Avatar;

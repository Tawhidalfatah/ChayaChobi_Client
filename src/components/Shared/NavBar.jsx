import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";

const navBarLinks = (
  <>
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? "text-accent-focus" : "")}
        to="/"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? "text-accent-focus" : "")}
        to="/instructors"
      >
        Instructors
      </NavLink>
    </li>
    <li>
      <NavLink
        className={({ isActive }) => (isActive ? "text-accent-focus" : "")}
        to="/classes"
      >
        Classes
      </NavLink>
    </li>
  </>
);

const NavBar = () => {
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content font-bold mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navBarLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-5xl">ChayaChobi</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-10 font-bold text-xl px-1">{navBarLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <Button label="Login"></Button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

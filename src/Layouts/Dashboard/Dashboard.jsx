import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import Logout from "../../components/Logout/Logout";
import useInstructor from "../../hooks/useInstructor";
import { AiFillFileAdd, AiFillHome } from "react-icons/ai";
import {
  FaClipboardList,
  FaCheckCircle,
  FaMoneyBillAlt,
  FaUserAlt,
  FaUsersCog,
  FaBookOpen,
  FaThList,
} from "react-icons/fa";

// import { IoCheckmarkDoneCircleSharp } from "react-icons/io";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  console.log(isAdmin);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          <>
            {isAdmin ? (
              <>
                <li>
                  <Link to="/dashboard/home">
                    <FaUserAlt />
                    Admin Lobby
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageusers">
                    <FaUsersCog />
                    Manage Users
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageclasses">
                    <FaBookOpen />
                    Manage Classes
                  </Link>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <Link to="/dashboard/home">
                    <FaUserAlt />
                    Instructor Lobby
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/addclass">
                    <AiFillFileAdd />
                    Add a Class
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/myclasses">
                    <FaThList />
                    My Classes
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/dashboard/home">
                    {" "}
                    <FaUserAlt />
                    User Lobby
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/selectedclasses">
                    <FaClipboardList />
                    My Selected Classes
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/enrolledclasses">
                    <FaCheckCircle />
                    My Enrolled Classes
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/payhistory">
                    <FaMoneyBillAlt />
                    Payment History
                  </Link>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <Link to="/">
                <AiFillHome />
                Go Back Home
              </Link>
            </li>
            <li>
              <Logout></Logout>
            </li>
          </>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

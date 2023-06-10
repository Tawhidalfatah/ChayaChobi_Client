import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Layouts/AuthenticationLayout/Login";
import Register from "../Layouts/AuthenticationLayout/Register";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
// import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Lobby from "../Pages/Dashboard/Lobby";
// import InstructorRoute from "./InstructorRoute";
// import AdminRoute from "./AdminRoute";
// import StudentRoute from "./StudentRoute";
import AddClass from "../Pages/AddClass/AddClass";
import MyClasses from "../Pages/MyClasses/MyClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // Common Routes
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
    ],
  },
  // Routes for all types of authenticated users
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "home",
        element: <Lobby></Lobby>,
      },
      // Private Student Routes
      {
        path: "selectedclasses",
        element: <div>Selected Classes</div>,
      },
      {
        path: "enrolledclasses",
        element: <div>Enrolled Classes</div>,
      },
      {
        path: "payhistory",
        element: <div>Pay history</div>,
      },
      // Private Instructor Routes
      {
        path: "addclass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myclasses",
        element: <MyClasses></MyClasses>,
      },
      // Admin routes
      {
        path: "manageusers",
        element: <div>Manage Users</div>,
      },
      {
        path: "manageclasses",
        element: <div>Manage Users</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

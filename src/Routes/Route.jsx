import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Layouts/AuthenticationLayout/Login";
import Register from "../Layouts/AuthenticationLayout/Register";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Instructors from "../Pages/Instructors/Instructors";

import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Lobby from "../Pages/Dashboard/Lobby";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import StudentRoute from "./StudentRoute";
import AddClass from "../Pages/AddClass/AddClass";
import MyClasses from "../Pages/MyClasses/MyClasses";
import ManageUsers from "../Pages/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/ManageClasses/ManageClasses";
import AllClasses from "../Pages/Home/AllClasses/AllClasses";
import SelectedClasses from "../Pages/SelectedClasses/SelectedClasses";

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
        element: <AllClasses></AllClasses>,
      },
    ],
  },
  // Routes for all types of authenticated users
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "home",
        element: (
          <PrivateRoute>
            <Lobby></Lobby>
          </PrivateRoute>
        ),
      },
      // Private Student Routes
      {
        path: "selectedclasses",
        element: (
          <StudentRoute>
            <SelectedClasses></SelectedClasses>
          </StudentRoute>
        ),
      },
      {
        path: "enrolledclasses",
        element: (
          <StudentRoute>
            <div>Enrolled Classes</div>
          </StudentRoute>
        ),
      },
      {
        path: "payhistory",
        element: (
          <StudentRoute>
            <div>Pay history</div>
          </StudentRoute>
        ),
      },
      // Private Instructor Routes
      {
        path: "addclass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "myclasses",
        element: (
          <InstructorRoute>
            <MyClasses></MyClasses>
          </InstructorRoute>
        ),
      },
      // Admin routes
      {
        path: "manageusers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "manageclasses",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
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

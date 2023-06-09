import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Layouts/AuthenticationLayout/Login";
import Register from "../Layouts/AuthenticationLayout/Register";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Lobby from "../Pages/Dashboard/Lobby";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import StudentRoute from "./StudentRoute";
import AddClass from "../Pages/AddClass/AddClass";

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
            <div>Selected Classes</div>
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
            <div>My Classes</div>
          </InstructorRoute>
        ),
      },
      // Admin routes
      {
        path: "manageusers",
        element: (
          <AdminRoute>
            <div>Manage Users</div>
          </AdminRoute>
        ),
      },
      {
        path: "manageclasses",
        element: (
          <AdminRoute>
            <div>Manage Users</div>
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

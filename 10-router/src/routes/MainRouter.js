import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/Pages/Dashboard/Dashboard";
import Login from "../components/Pages/Login/Login";
import Signup from "../components/Pages/Signup/Signup";
import Home from "../components/Pages/Home/Home";
import StudentList from "../components/Pages/Students/StudentList";
import FacultyList from "../components/Pages/Faculty/FacultyList";

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children : [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "home",
        element: <Home/>
      },
      {
        path: "students",
        element: <StudentList/>
      },
      {
        path: "faculty",
        element: <FacultyList/>
      }
    ]
  },
]);

export default MainRouter;

import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../Auth/Login";
import { useEffect } from "react";
import EmployeeDashboard from "../Components/Dashboard/EmployeeDashboard";
import AdminDashBoard from "../Components/Dashboard/AdminDashBoard";
import CreateTask from "../Components/AdminIncludes/CreateTask";
import Page404 from "../Components/pages/Page404";

const AuthController = () => {
      const navigate = useNavigate();
      useEffect(() => {
            const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
            console.log(loggedInUser);
            if (loggedInUser && loggedInUser.role === "admin") {
                  let admin = JSON.parse(localStorage.getItem("admin"));
                  navigate(`/admin/${admin.id}`);
            } else if (loggedInUser) {
                  let employees = JSON.parse(localStorage.getItem("employee"));
                  let employee = employees.find((eachEmployee) => eachEmployee.id === loggedInUser.id);
                  navigate(`/employee/${employee.id}`);
            } else {
                  navigate("/");
            }
      }, []);
      return (
            <>
                  <Routes>
                        <Route path="/employee/:id" element={<EmployeeDashboard />} />
                        <Route path="/admin/:id/create" element={<CreateTask />} />
                        <Route path="/admin/:id" element={<AdminDashBoard />} />
                        <Route path="/" element={<Login />} />
                        <Route path="*" element={<Page404 />} />
                  </Routes>
            </>
      );
};

export default AuthController;

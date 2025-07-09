import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "../Auth/Login";
import { useEffect } from "react";
import EmployeeDashboard from "../Components/Dashboard/EmployeeDashboard";
import AdminDashBoard from "../Components/Dashboard/AdminDashBoard";
import CreateTask from "../Components/AdminIncludes/Assign";
import Page404 from "../Components/pages/Page404";
import { getFromStorage } from "../utils/StorageAccess";

const AuthController = () => {
      const navigate = useNavigate();
      useEffect(() => {
            const loggedInUser = getFromStorage("loggedInUser");
            if (loggedInUser && loggedInUser.role === "admin") {
                  let admin = getFromStorage("admin");
                  navigate(`/admin/${admin.id}`);
            } else if (loggedInUser) {
                  let employees = getFromStorage("employee");
                  let employee = employees.find((eachEmployee) => eachEmployee.id === loggedInUser.id);
                  navigate(`/employee/${employee.id}`);
            } else {
                  navigate("/");
                  return;
            }
      }, [navigate]);
      return (
            <>
                  <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/employee/:id" element={<EmployeeDashboard />} />
                        <Route path="/admin/:id" element={<AdminDashBoard />} />
                        <Route path="/admin/:id/create" element={<CreateTask />} />
                        <Route path="*" element={<Page404 />} />
                  </Routes>
            </>
      );
};

export default AuthController;

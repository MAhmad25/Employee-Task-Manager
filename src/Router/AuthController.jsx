import { Route, Routes } from "react-router-dom";
import Login from "../Auth/Login";
import EmployeeDashboard from "../Components/Dashboard/EmployeeDashboard";
import AdminDashBoard from "../Components/Dashboard/AdminDashBoard";
import CreateTask from "../Components/AdminIncludes/CreateTask";
import Page404 from "../Components/pages/Page404";

const AuthController = () => {
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

/* eslint-disable react-hooks/rules-of-hooks */
import AllTask from "../AdminIncludes/AllTask";
import EmployeeHeader from "../EmployeeInludes/Header";
import { useParams } from "react-router-dom";
import Page404 from "../pages/Page404";
const AdminDashBoard = () => {
      let Admin = null;
      let Id = null;
      try {
            Id = useParams();
            Admin = JSON.parse(localStorage.getItem("admin"));
      } catch (error) {
            console.log(error.message);
      }
      return (
            <div className="w-full  min-h-screen bg-zinc-800">
                  {Id.id === (Admin && Admin.id) ? (
                        <>
                              <EmployeeHeader />
                              <AllTask />
                        </>
                  ) : (
                        <Page404 />
                  )}
            </div>
      );
};

export default AdminDashBoard;

import AllTask from "../AdminIncludes/AllTask";
import EmployeeHeader from "../EmployeeInludes/Header";
import { useParams } from "react-router-dom";
import Page404 from "../pages/Page404";
import { getFromStorage } from "../../utils/StorageAccess";

const AdminDashBoard = () => {
      const { id } = useParams();
      const Admin = getFromStorage("admin")
      return (
            <div className="w-full  min-h-screen bg-zinc-800">
                  {id === (Admin && Admin.id) ? (
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

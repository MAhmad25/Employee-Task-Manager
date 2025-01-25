import { useParams } from "react-router-dom";
import EmployeeHeader from "../EmployeeInludes/Header";
import EmployeeTaskContainer from "../EmployeeInludes/EmployeeTaskContainer";
import EmployeeTaskState from "../EmployeeInludes/EmployeeTaskState";
import Page404 from "../pages/Page404";
const EmployeeDashboard = () => {
      const { id } = useParams();
      let specificEmployee = JSON.parse(localStorage.getItem("employee")).find((eachEmployee) => eachEmployee.id === id);
      return (
            <div className="w-screen md:overflow-auto overflow-hidden bg-zinc-800 h-screen">
                  {!specificEmployee ? (
                        <Page404 />
                  ) : (
                        <>
                              <EmployeeHeader />
                              <EmployeeTaskState />
                              <EmployeeTaskContainer />
                        </>
                  )}
            </div>
      );
};

export default EmployeeDashboard;

import { useNavigate, useParams } from "react-router-dom";
import EmployeeHeader from "../EmployeeInludes/Header";
import EmployeeTaskContainer from "../EmployeeInludes/EmployeeTaskContainer";
import EmployeeTaskState from "../EmployeeInludes/EmployeeTaskState";
import Page404 from "../pages/Page404";
import { getFromStorage } from "../../utils/StorageAccess";
import { useEffect, useState } from "react";
const EmployeeDashboard = () => {
      const { id } = useParams();
      const navigate = useNavigate();
      const [specificEmployee, setSpecificEmployee] = useState(false);
      useEffect(() => {
            const allEmployees = getFromStorage("employee");
            let find = allEmployees.find((eachEmployee) => eachEmployee.id === id);
            setSpecificEmployee(Boolean(find));
            if (!allEmployees) {
                  navigate("/");
                  return;
            }
      }, [id, navigate]);
      return (
            <div className="w-screen md:overflow-auto overflow-hidden bg-zinc-800 h-screen">
                  {!specificEmployee ? (
                        <Page404 />
                  ) : (
                        <>
                              <EmployeeHeader id={id} />
                              <EmployeeTaskState id={id} />
                              <EmployeeTaskContainer id={id} />
                        </>
                  )}
            </div>
      );
};

export default EmployeeDashboard;

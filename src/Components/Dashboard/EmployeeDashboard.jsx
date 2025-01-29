/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate, useParams } from "react-router-dom";
import EmployeeHeader from "../EmployeeInludes/Header";
import EmployeeTaskContainer from "../EmployeeInludes/EmployeeTaskContainer";
import EmployeeTaskState from "../EmployeeInludes/EmployeeTaskState";
import Page404 from "../pages/Page404";
const EmployeeDashboard = () => {
      const { id } = useParams();
      const navigate = useNavigate();
      let specificEmployee = null;
      //? Important
      // TODO Remove Try Catch Block and use if else block
      try {
            specificEmployee = JSON.parse(localStorage.getItem("employee")).find((eachEmployee) => eachEmployee.id === id);
      } catch (error) {
            console.log(error.message);
            navigate("/");
            return;
      }
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

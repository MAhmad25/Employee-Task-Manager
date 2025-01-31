/* eslint-disable react/prop-types */
import { useContext } from "react";
import EmployeeTaskList from "./EmployeeTaskList";
import { UserContext } from "../../Contexts/UserContext";
import { getFromStorage } from "../../utils/StorageAccess";
const EmployeeTaskContainer = ({ id }) => {
      const { allEmployees } = useContext(UserContext);
      const employees = getFromStorage("employee");
      const specificEmployee = (allEmployees && allEmployees.find((eachEmployee) => eachEmployee.id === id)) || employees.find((eachEmployee) => eachEmployee.id === id);
      return (
            <div className="w-full flex mt-3 md:justify-center lg:justify-normal  md:flex-wrap overflow-x-auto  gap-3 h-96  md:h-fit p-6 md:p-3">
                  {specificEmployee.tasks.map((eachTask, index) => (
                        <EmployeeTaskList eachTask={eachTask} index={index} key={index} />
                  ))}
            </div>
      );
};
export default EmployeeTaskContainer;

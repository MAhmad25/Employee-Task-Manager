import { useParams } from "react-router-dom";
import EmployeeTaskList from "./EmployeeTaskList";

const EmployeeTaskContainer = () => {
      let { id } = useParams();
      let specificEmployee = JSON.parse(localStorage.getItem("employee")).find((eachEmployee) => eachEmployee.id === id);
      return (
            <div className="w-full flex mt-3 md:justify-center lg:justify-normal  md:flex-wrap overflow-x-auto  gap-3 h-96  md:h-fit p-6 md:p-3">
                  {specificEmployee.tasks.map((eachTask, index) => (
                        <EmployeeTaskList eachTask={eachTask} key={index} />
                  ))}
            </div>
      );
};
export default EmployeeTaskContainer;

/* eslint-disable react/prop-types */
import Button from "./Button";
import { FcApproval } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";

const EmployeeTaskList = ({ eachTask, index }) => {
      const handleTask = (index, btn) => {
            const { id } = JSON.parse(localStorage.getItem("loggedInUser"));
            let allEmployees = JSON.parse(localStorage.getItem("employee"));
            let specificEmployee = allEmployees.find((eachEmployee) => eachEmployee.id === id);
            let specificTask = specificEmployee.tasks.find((eachTask, eachTaskIndex) => eachTaskIndex === index);
            if (btn == "completed") {
                  specificTask.completed = true;
                  if (specificTask.failed) specificTask.failed = false;
            }
            if (btn == "failed") {
                  specificTask.failed = true;
                  if (specificTask.completed) specificTask.completed = false;
            }
            localStorage.setItem("employee", JSON.stringify(allEmployees));
            window.dispatchEvent(new Event("localStorageUpdated"));
      };
      return (
            <div className="md:w-[45%] lg:w-72 w-72 relative flex flex-col gap-5 h-60 flex-shrink-0  text-white border-[0.5px] border-zinc-500 rounded-xl px-4 bg-zinc-800">
                  <div className="w-full flex justify-between gap-2 items-center mt-5  h-[10%]">
                        <Button bgColor="bg-[#FDBA74]" textColor="text-orange-700" message={`${eachTask.category}`} />
                        <p className="font-semibold font-Satoshi">{eachTask.deadline}</p>
                  </div>
                  <div className="w-full ">
                        <h1 className="text-2xl leading-none tracking-tight font-semibold">{eachTask.title}</h1>
                        <p className="text-sm mt-2 font-semibold">{eachTask.description}</p>
                  </div>
                  <div className="w-full absolute bottom-3 left-0 px-4 gap-2 flex items-center flex-col justify-between">
                        {eachTask.completed || eachTask.failed ? (
                              <section className={`w-full h-10 flex items-center justify-center gap-1 rounded-xl ${eachTask.completed ? "bg-green-800" : "bg-red-800"} `}>
                                    {eachTask.completed ? <FcApproval /> : <FcHighPriority />}
                                    <h3>{eachTask.completed ? "Completed" : "Failed"}</h3>
                              </section>
                        ) : (
                              <section className="w-full flex items-center justify-between">
                                    <span onClick={() => handleTask(index, "completed")}>
                                          <Button bgColor="bg-[#86EFAC]" message={"Completed"} textColor="text-green-700" />
                                    </span>
                                    <span onClick={() => handleTask(index, "failed")}>
                                          <Button bgColor="bg-[#FCA5A5]" message={"Failed"} textColor="text-red-700" />
                                    </span>
                              </section>
                        )}
                  </div>
            </div>
      );
};
export default EmployeeTaskList;

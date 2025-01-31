import { Link, useParams } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { getFromStorage } from "../../utils/StorageAccess";
const AllTask = () => {
      const { id } = useParams();
      const allEmployees = getFromStorage("employee");
      return (
            <div className="w-full relative p-5 h-full  bg-zinc-800 text-white">
                  <div className="w-full flex justify-center mb-5">
                        <Link className="text-2xl flex items-center gap-3 font-semibold font-Satoshi py-2 px-4 bg-blue-200 text-blue-800 rounded-xl" to={`/admin/${id}/create`}>
                              <IoMdAdd />
                              <h4>Create a New Task</h4>
                        </Link>
                  </div>
                  <div className="w-full py-5  rounded-xl text-orange-200  bg-orange-700">
                        <h1 className="text-4xl text-center font-Satoshi">Assigned Tasks</h1>
                  </div>
                  <div className="w-full mt-5 flex flex-col gap-3 bg-transparent">
                        <hr />
                        {allEmployees.map((eachEmployee, employeeIndex) => (
                              <div key={employeeIndex} className="w-full">
                                    <div className="w-full flex gap-2 justify-between items-center bg-zinc-700 text-white sm:py-4 py-1 px-3 rounded-lg">
                                          <h2 className="text-lg sm:text-2xl font-Satoshi py-1 px-2 sm:bg-blue-700  text-blue-200  leading-none sm:rounded-xl">{eachEmployee.username}</h2>
                                          <div className="flex sm:w-[67%] sm:text-lg items-center justify-between gap-2">
                                                <h2 className="py-1 px-2 sm:px-5 bg-yellow-700 text-yellow-200 tracking-tighter leading-none rounded-xl">Active</h2>
                                                <h2 className="py-1 px-2 sm:px-5 bg-green-700 text-green-200 tracking-tighter leading-none rounded-xl">Completed</h2>
                                                <h2 className="py-1 px-2 sm:px-5 bg-red-700 text-red-200 tracking-tighter leading-none rounded-xl">Failed</h2>
                                          </div>
                                    </div>
                                    {eachEmployee.tasks.map((eachTask, taskIndex) => (
                                          <div key={taskIndex} className="w-full rounded-2xl mt-1 flex gap-3 justify-between items-center text-lg font-semibold py-4 px-4 font-Satoshi border-[0.5px] border-zinc-400">
                                                <h2 className="tracking-tighter sm:tracking-normal w-[40%] leading-4 sm:text-xl text-sm">{eachTask.title}</h2>
                                                <div className="flex items-center justify-between w-[80%]">
                                                      <h2 className="text-yellow-500 tracking-tighter  leading-none sm:text-xl text-sm">{eachTask.active ? "Yes" : "No"}</h2>
                                                      <h2 className="text-green-500 tracking-tighter leading-none sm:text-xl text-sm">{eachTask.completed ? "Yes" : "No"}</h2>
                                                      <h2 className="text-red-500 tracking-tighter leading-none sm:text-xl text-sm">{eachTask.failed ? "Yes" : "No"}</h2>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        ))}
                  </div>
            </div>
      );
};

export default AllTask;

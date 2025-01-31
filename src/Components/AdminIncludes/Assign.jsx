import { Link, useNavigate, useParams } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { useState } from "react";
import { toast } from "react-toastify";
import { getFromStorage, setInStorage } from "../../utils/StorageAccess";
const AssignTask = () => {
      const { id } = useParams();
      const navigate = useNavigate();

      const [title, setTitle] = useState("");
      const [taskDetail, setTaskDetail] = useState("");
      const [taskDeadline, setDeadline] = useState("");
      const [employee, setEmployee] = useState("Ali Khan");
      const [taskCategory, setTaskCategory] = useState("");
      const handleSubmit = (event) => {
            event.preventDefault();
            let wrappedTask = { title, description: taskDetail, active: true, category: taskCategory, completed: false, deadline: taskDeadline, failed: false, newTask: true };
            let allEmployee = getFromStorage("employee");
            let findSelectedEmployee = allEmployee.find((eachEmployee) => employee === eachEmployee.username);
            findSelectedEmployee.tasks.push(wrappedTask);
            setInStorage("employee", allEmployee);
            toast.success("Task Assigned Successfully");
            navigate(-1);
      };
      return (
            <div className="sm:flex bg-zinc-800 min-h-[100svh] sm:items-center sm:justify-center">
                  <div className="w-full text-white sm:w-1/2 flex flex-col gap-4  p-5 h-full">
                        <div className="flex justify-center relative items-center">
                              <Link to={`/admin/${id}`} className="absolute left-0">
                                    <IoArrowBackOutline size={"1.5rem"} />
                              </Link>
                              <h1 className="text-4xl text-center ">Assign a Task</h1>
                        </div>
                        <hr />
                        <form onSubmit={handleSubmit}>
                              <section className="mt-2">
                                    <h1 className="font-semibold text-xl mb-2">Task Title</h1>
                                    <input minLength={5} value={title} onChange={(e) => setTitle(e.target.value)} required className="outline-none text-lg rounded-xl bg-zinc-800 border-[0.5px] border-zinc-300 w-full  p-3" type="text" placeholder="Title" />
                              </section>
                              <section className="mt-1">
                                    <h1 className="font-semibold text-xl mb-2">Task Detail</h1>
                                    <textarea minLength={10} value={taskDetail} onChange={(e) => setTaskDetail(e.target.value)} rows="3" required className="outline-none resize-none text-lg rounded-xl bg-zinc-800 border-[0.5px] border-zinc-300 w-full  p-3" type="text" placeholder="Description" />
                              </section>
                              <section className="mt-1">
                                    <h1 className="font-semibold text-xl mb-2">Deadline</h1>
                                    <input maxLength={10} value={taskDeadline} onChange={(e) => setDeadline(e.target.value)} required className="outline-none text-lg rounded-xl bg-zinc-800 border-[0.5px] border-zinc-300 w-full p-3" type="date" />
                              </section>
                              <section className="mt-1">
                                    <h1 className="font-semibold text-xl mb-2">Assign to</h1>
                                    <select required value={employee} onChange={(e) => setEmployee(e.target.value)} className="outline-none text-lg rounded-xl bg-zinc-800 border-[0.5px] border-zinc-300 w-full p-3" name="employee" id="employee">
                                          <option value="Ali Khan">Ali Khan</option>
                                          <option value="Aisha Ahmed">Aisha Ahmed</option>
                                          <option value="Omar Sheikh">Omar Sheikh</option>
                                          <option value="Maryam Iqbal">Maryam Iqbal</option>
                                          <option value="Hamza Tariq">Hamza Tariq</option>
                                    </select>
                              </section>
                              <section className="mt-2 mb-2">
                                    <h1 className="font-semibold text-xl mb-2">Category of Task</h1>
                                    <input minLength={2} value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)} required className="outline-none text-lg rounded-xl bg-zinc-800 border-[0.5px] border-zinc-300 w-full p-3" type="text" placeholder="Dev, Design, Presentation.." />
                              </section>
                              <button className="outline-none mt-5 rounded-full text-xl text-white bg-blue-700 w-full py-2 px-16 border-none" type="submit">
                                    Assign
                              </button>
                        </form>
                  </div>
            </div>
      );
};

export default AssignTask;

import { Link, useParams } from "react-router-dom";
import Button from "../EmployeeInludes/Button";
import { IoArrowBackOutline } from "react-icons/io5";
const CreateTask = () => {
      const { id } = useParams();
      return (
            <div className="sm:flex bg-zinc-800 sm:items-center sm:justify-center">
                  <div className="w-full text-white sm:w-1/2 flex flex-col gap-4  p-5 h-full">
                        <div className="flex justify-center relative items-center">
                              <Link to={`/admin/${id}`} className="absolute left-0">
                                    <IoArrowBackOutline size={"1.5rem"} />
                              </Link>
                              <h1 className="text-4xl text-center ">Create a Task</h1>
                        </div>
                        <hr />
                        <section className="mt-2">
                              <h1 className="font-semibold text-xl mb-2">Task Title</h1>
                              <input required className="outline-none text-lg rounded-xl bg-zinc-800 border-[0.5px] border-zinc-300 w-full  p-3" type="text" placeholder="Title" />
                        </section>
                        <section className="mt-1">
                              <h1 className="font-semibold text-xl mb-2">Task Detail</h1>
                              <textarea rows="3" required className="outline-none resize-none text-lg rounded-xl bg-zinc-800 border-[0.5px] border-zinc-300 w-full  p-3" type="text" placeholder="Description" />
                        </section>
                        <section className="mt-1">
                              <h1 className="font-semibold text-xl mb-2">Deadline</h1>
                              <input required className="outline-none text-lg rounded-xl bg-zinc-800 border-[0.5px] border-zinc-300 w-full p-3" type="date" />
                        </section>
                        <section className="mt-1">
                              <h1 className="font-semibold text-xl mb-2">Assign to</h1>
                              <input required className="outline-none text-lg rounded-xl bg-zinc-800 border-[0.5px] border-zinc-300 w-full p-3" type="text" placeholder="John Doe" />
                        </section>
                        <section className="mt-2 mb-2">
                              <h1 className="font-semibold text-xl mb-2">Category of Task</h1>
                              <input required className="outline-none text-lg rounded-xl bg-zinc-800 border-[0.5px] border-zinc-300 w-full p-3" type="text" placeholder="Dev, Design, Presentation.." />
                        </section>
                        <Button bgColor="bg-blue-800" textColor="text-white" message={"Create"} />
                  </div>
            </div>
      );
};

export default CreateTask;

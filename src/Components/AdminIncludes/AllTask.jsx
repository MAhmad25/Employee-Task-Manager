import { Link, useParams } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
const AllTask = () => {
      const { id } = useParams();
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
                        <div className="w-full flex justify-between sm:text-xl items-center text-sm font-semibold py-5 px-1 font-Satoshi bg-zinc-800">
                              <h2 className="py-1 px-2 bg-blue-700 text-blue-200 rounded-xl">Employee Name</h2>
                              <h2 className="py-1 px-2 bg-yellow-700 text-yellow-200 rounded-xl">Active</h2>
                              <h2 className="py-1 px-2 bg-green-700 text-green-200 rounded-xl">Completed</h2>
                              <h2 className="py-1 px-2 bg-red-700 text-red-200 rounded-xl">Failed</h2>
                        </div>
                        <hr />
                        <div className="w-full rounded-2xl mt-1 flex  justify-between items-center text-lg font-semibold py-5 px-7 font-Satoshi border-[0.5px] border-zinc-400">
                              <h2>Ahmad</h2>
                              <h2 className="text-yellow-500">2</h2>
                              <h2 className="text-green-500">4</h2>
                              <h2 className="text-red-500">3</h2>
                        </div>

                        <div className="w-full rounded-2xl mt-1 flex  justify-between items-center text-lg font-semibold py-5 px-7 font-Satoshi border-[0.5px] border-zinc-400">
                              <h2>Ahmad</h2>
                              <h2 className="text-yellow-500">2</h2>
                              <h2 className="text-green-500">4</h2>
                              <h2 className="text-red-500">3</h2>
                        </div>

                        <div className="w-full rounded-2xl mt-1 flex  justify-between items-center text-lg font-semibold py-5 px-7 font-Satoshi border-[0.5px] border-zinc-400">
                              <h2>Ahmad</h2>
                              <h2 className="text-yellow-500">2</h2>
                              <h2 className="text-green-500">4</h2>
                              <h2 className="text-red-500">3</h2>
                        </div>

                        <div className="w-full rounded-2xl mt-1 flex  justify-between items-center text-lg font-semibold py-5 px-7 font-Satoshi border-[0.5px] border-zinc-400">
                              <h2>Ahmad</h2>
                              <h2 className="text-yellow-500">2</h2>
                              <h2 className="text-green-500">4</h2>
                              <h2 className="text-red-500">3</h2>
                        </div>

                        <div className="w-full rounded-2xl mt-1 flex  justify-between items-center text-lg font-semibold py-5 px-7 font-Satoshi border-[0.5px] border-zinc-400">
                              <h2>Ahmad</h2>
                              <h2 className="text-yellow-500">2</h2>
                              <h2 className="text-green-500">4</h2>
                              <h2 className="text-red-500">3</h2>
                        </div>
                  </div>
            </div>
      );
};

export default AllTask;

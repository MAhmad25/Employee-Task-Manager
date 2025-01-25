import { useParams } from "react-router-dom";

const EmployeeTaskState = () => {
      let { id } = useParams();
      let specificEmployee = JSON.parse(localStorage.getItem("employee")).find((eachEmployee) => eachEmployee.id === id);
      const showState = (state) => {
            return specificEmployee.tasks.filter((task) => task[state]).length;
      };
      return (
            <div className="w-full h-96 md:h-fit grid p-5 md:grid-cols-4 md:grid-rows-1 grid-cols-2 grid-rows-2 gap-4">
                  <div className="bg-blue-300 flex flex-col items-center md:h-44 justify-center rounded-lg">
                        <h1 className="text-3xl text-zinc-800 font-Satoshi font-semibold tracking-tighter">{showState("newTask")}</h1>
                        <h1 className="text-2xl text-zinc-800 font-Satoshi font-semibold tracking-tighter">New Task</h1>
                  </div>
                  <div className="bg-green-300 flex flex-col items-center md:h-44 justify-center rounded-lg">
                        <h1 className="text-3xl text-zinc-800 font-Satoshi font-semibold tracking-tighter">{showState("completed")}</h1>
                        <h1 className="text-xl text-zinc-800 font-Satoshi font-semibold tracking-tighter">Completed Task</h1>
                  </div>
                  <div className="bg-orange-300 flex flex-col items-center md:h-44 justify-center  rounded-lg">
                        <h1 className="text-3xl text-zinc-800 font-Satoshi font-semibold tracking-tighter">{showState("active")}</h1>
                        <h1 className="text-xl text-zinc-800 font-Satoshi font-semibold tracking-tighter">Accepted Task</h1>
                  </div>
                  <div className="bg-red-300 flex flex-col items-center md:h-44 justify-center rounded-lg">
                        <h1 className="text-3xl text-zinc-800 font-Satoshi font-semibold tracking-tighter">{showState("failed")}</h1>
                        <h1 className="text-2xl text-zinc-800 font-Satoshi font-semibold tracking-tighter">Failed Task</h1>
                  </div>
            </div>
      );
};

export default EmployeeTaskState;

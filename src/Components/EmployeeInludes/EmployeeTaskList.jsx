/* eslint-disable react/prop-types */
import Button from "./Button";

const EmployeeTaskList = ({ eachTask }) => {
      return (
            <div className="w-72 h-60 md:w-72  flex-shrink-0  text-white border-[0.5px] border-zinc-500 rounded-xl px-4 bg-zinc-800">
                  <div className="w-full flex justify-between gap-2 items-center py-10  h-[10%]">
                        <Button bgColor="bg-green-200" textColor="text-green-700" message={`${eachTask.category}`} />
                        <p className="font-semibold font-Satoshi">{eachTask.deadline}</p>
                  </div>
                  <div className="w-full ">
                        <h1 className="text-2xl font-semibold">{eachTask.title}</h1>
                        <p className="text-sm mt-2 font-semibold">{eachTask.description}</p>
                  </div>
                  <div className="w-full mt-4 gap-2 flex items-center justify-between">
                        <Button bgColor="bg-green-900" message={"Completed"} textColor="text-white" />
                        <Button bgColor="bg-red-900" message={"Failed"} textColor="text-white" />
                  </div>
            </div>
      );
};
export default EmployeeTaskList;

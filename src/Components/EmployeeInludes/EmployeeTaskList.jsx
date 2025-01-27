/* eslint-disable react/prop-types */
import Button from "./Button";

const EmployeeTaskList = ({ eachTask }) => {
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
                  <div className="w-full absolute bottom-3 left-0 px-4 gap-2 flex items-center justify-between">
                        <Button bgColor="bg-[#86EFAC]" message={"Completed"} textColor="text-green-700" />
                        <Button bgColor="bg-[#FCA5A5]" message={"Failed"} textColor="text-red-700" />
                  </div>
            </div>
      );
};
export default EmployeeTaskList;

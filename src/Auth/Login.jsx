import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { getFromStorage, setInStorage } from "../utils/StorageAccess";
import { InitializingData } from "../config/InitialData";
const Login = () => {
      const navigate = useNavigate();
      let [email, setEmail] = useState("");
      let [password, setPassword] = useState("");
      if (email.length || password.length) InitializingData();
      const handleSubmit = (event) => {
            event.preventDefault();
            if (email.endsWith("@admin.com")) {
                  let admin = getFromStorage("admin") || false;
                  if (admin.email === email && admin.password === password) {
                        setInStorage("loggedInUser", { role: "admin", id: admin.id });
                        navigate(`/admin/${admin.id}`);
                  } else {
                        toast.error("Email or password is incorret");
                        return;
                  }
            } else if (email.endsWith("@employee.com")) {
                  let employees = getFromStorage("employee") || false;
                  let employee = employees.find((eachEmployee) => eachEmployee.email === email && eachEmployee.password === password);
                  if (!employee) {
                        toast.error("Email or password is incorrect");
                        return;
                  }
                  setInStorage("loggedInUser", { role: "employee", id: employee.id });
                  navigate(`/employee/${employee.id}`);
            } else {
                  toast.error("Email or password is incorrect");
                  return;
            }
            toast.success("Login Successful");
            setEmail("");
            setPassword("");
      };
      return (
            <div className="Bg flex justify-center items-center  max-w-screen h-[100svh]">
                  <section className="w-[90%] h-[60%] min-h-[400px] md:w-1/2   overflow-hidden rounded-xl bg-gray-300 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 bg-[url('data:image/svg+xml;base64,CiAgICAgIDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmRldi9zdmdqcyIgdmlld0JveD0iMCAwIDcwMCA3MDAiIHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBvcGFjaXR5PSIxIj4KICAgICAgICA8ZGVmcz4KICAgICAgICAgIDxmaWx0ZXIgaWQ9Im5ubm9pc2UtZmlsdGVyIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHByaW1pdGl2ZVVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJsaW5lYXJSR0IiPgogICAgICAgICAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC4yIiBudW1PY3RhdmVzPSI0IiBzZWVkPSIxNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXN1bHQ9InR1cmJ1bGVuY2UiPjwvZmVUdXJidWxlbmNlPgogICAgICAgICAgICA8ZmVTcGVjdWxhckxpZ2h0aW5nIHN1cmZhY2VTY2FsZT0iNDAiIHNwZWN1bGFyQ29uc3RhbnQ9IjAuNyIgc3BlY3VsYXJFeHBvbmVudD0iMjAiIGxpZ2h0aW5nLWNvbG9yPSIjNzk1N0E4IiB4PSIwJSIgeT0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGluPSJ0dXJidWxlbmNlIiByZXN1bHQ9InNwZWN1bGFyTGlnaHRpbmciPgogICAgICAgICAgICAgIDxmZURpc3RhbnRMaWdodCBhemltdXRoPSIzIiBlbGV2YXRpb249IjEwMCI+PC9mZURpc3RhbnRMaWdodD4KICAgICAgICAgICAgPC9mZVNwZWN1bGFyTGlnaHRpbmc+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiIHg9IjAlIiB5PSIwJSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgaW49InNwZWN1bGFyTGlnaHRpbmciIHJlc3VsdD0iY29sb3JtYXRyaXgiPjwvZmVDb2xvck1hdHJpeD4KICAgICAgICAgIDwvZmlsdGVyPgogICAgICAgIDwvZGVmcz4KICAgICAgICA8cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjcwMCIgZmlsbD0idHJhbnNwYXJlbnQiPjwvcmVjdD4KICAgICAgICA8cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjcwMCIgZmlsbD0iIzc5NTdhOCIgZmlsdGVyPSJ1cmwoI25ubm9pc2UtZmlsdGVyKSI+PC9yZWN0PgogICAgICA8L3N2Zz4KICAgIA==')] bg-blend-overlay">
                        <section className=" flex justify-center items-center rounded-b-3xl w-full h-[25%]">
                              <div className="w-14 flex justify-center items-center h-14 rounded-xl shadow-md ">
                                    <FiLogIn size={"1.7rem"} />
                              </div>
                        </section>
                        <section className="w-full flex justify-center gap-2 flex-col items-center">
                              <h1 className="text-2xl font-semibold  font-Satoshi">Sign in with email</h1>
                              <p className="text-center text-sm leading-none font-Satoshi text-[#757575] w-[60%]">Login with your given email and password by company </p>
                        </section>
                        <section className="w-full flex flex-col justify-center items-center gap-4 mt-5">
                              <form autoComplete="off" className="w-full flex justify-center items-center gap-4 flex-col">
                                    <section className="relative">
                                          <div className="absolute left-2 top-1/2 -translate-y-1/2">
                                                <MdEmail color="#757575" />
                                          </div>
                                          <input name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="outline-none focus:border-[0.5px] border-zinc-700 rounded-xl bg-[#EFF3F6]  w-full pl-10 py-1" type="email" placeholder="Email" />
                                    </section>
                                    <section className="relative">
                                          <div className="absolute left-2 top-1/2 -translate-y-1/2">
                                                <FaLock color="#757575" />
                                          </div>
                                          <input name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="outline-none focus:border-[0.5px] border-zinc-700 rounded-xl bg-[#EFF3F6] w-full pl-10 py-1" type="password" placeholder="Password" />
                                    </section>
                                    <section>
                                          <button onClick={handleSubmit} className="outline-none rounded-full text-white bg-[#24252D] w-full py-2 px-16 border-none" type="submit">
                                                Login
                                          </button>
                                    </section>
                              </form>
                        </section>
                  </section>
            </div>
      );
};
export default Login;

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
                  <section className="w-[90%] h-[60%] min-h-[400px] md:w-1/2  bg-[#FBFDFF] overflow-hidden rounded-xl">
                        <section className="blurBox flex justify-center items-center rounded-b-3xl w-full h-[25%]">
                              <div className="w-14 flex justify-center items-center h-14 rounded-xl shadow-md shadow-[#cdedffb7] bg-white">
                                    <FiLogIn size={"1.7rem"} />
                              </div>
                        </section>
                        <section className="w-full flex justify-center gap-2 flex-col items-center">
                              <h1 className="text-2xl font-semibold font-Satoshi">Sign in with email</h1>
                              <p className="text-center text-sm leading-none font-Satoshi text-[#757575] w-[60%]">Login with your given email and password by company </p>
                        </section>
                        <section className="w-full flex flex-col justify-center items-center gap-4 mt-5">
                              <form className="w-full flex justify-center items-center gap-4 flex-col">
                                    <section className="relative">
                                          <div className="absolute left-2 top-1/2 -translate-y-1/2">
                                                <MdEmail color="#757575" />
                                          </div>
                                          <input value={email} onChange={(e) => setEmail(e.target.value)} required className="outline-none focus:border-[0.5px] border-zinc-700 rounded-xl bg-[#EFF3F6]  w-full pl-10 py-1" type="email" placeholder="Email" />
                                    </section>
                                    <section className="relative">
                                          <div className="absolute left-2 top-1/2 -translate-y-1/2">
                                                <FaLock color="#757575" />
                                          </div>
                                          <input value={password} onChange={(e) => setPassword(e.target.value)} className="outline-none focus:border-[0.5px] border-zinc-700 rounded-xl bg-[#EFF3F6] w-full pl-10 py-1" type="password" placeholder="Password" />
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

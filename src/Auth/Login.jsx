import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
const Login = () => {
      const navigate = useNavigate();
      let [email, setEmail] = useState("");
      let [password, setPassword] = useState("");
      const handleSubmit = (event) => {
            event.preventDefault();
            if (email.endsWith("@admin.com")) {
                  let admin = JSON.parse(localStorage.getItem("admin"));
                  if (admin.email === email && admin.password === password) {
                        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin", id: admin.id }));
                        navigate(`/admin/${admin.id}`);
                  } else {
                        toast.error("Email or password is incorret");
                        return;
                  }
            } else if (email.endsWith("@employee.com")) {
                  let employees = JSON.parse(localStorage.getItem("employee"));
                  let employee = employees.find((eachEmployee) => eachEmployee.email === email && eachEmployee.password === password);
                  if (!employee) {
                        toast.error("Email or password is incorrect");
                        return;
                  }
                  localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", id: employee.id }));
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
            <div className="Bg flex justify-center items-center  max-w-screen h-screen">
                  <section className="w-3/4 h-3/4 md:w-1/2  bg-[#FBFDFF] overflow-hidden rounded-xl">
                        <section className="blurBox flex justify-center items-center rounded-b-3xl w-full h-[25%]">
                              <div className="w-14 flex justify-center items-center h-14 rounded-xl shadow-md shadow-[#cdedffb7] bg-white">
                                    <FiLogIn size={"1.7rem"} />
                              </div>
                        </section>
                        <section className="w-full flex justify-center gap-2 flex-col items-center">
                              <h1 className="text-2xl font-semibold font-Satoshi">Sign in with email</h1>
                              <p className="text-center text-sm leading-none font-Satoshi text-[#757575] w-[60%]">Login with your account to start managing employee Task </p>
                        </section>
                        <section className="w-full flex flex-col justify-center items-center gap-4 mt-5">
                              <form className="w-full flex justify-center items-center gap-4 flex-col">
                                    <section className="relative">
                                          <div className="absolute left-2 top-1/2 -translate-y-1/2">
                                                <MdEmail color="#757575" />
                                          </div>
                                          <input value={email} onChange={(e) => setEmail(e.target.value)} required className="outline-none rounded-xl bg-[#EFF3F6] w-full pl-10 py-1 border-none" type="email" placeholder="Email" />
                                    </section>
                                    <section className="relative">
                                          <div className="absolute left-2 top-1/2 -translate-y-1/2">
                                                <FaLock color="#757575" />
                                          </div>
                                          <input value={password} onChange={(e) => setPassword(e.target.value)} className="outline-none rounded-xl bg-[#EFF3F6] w-full pl-10 py-1 border-none" type="password" placeholder="Password" />
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

/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import SetData from "../utils/SetData";
export const UserContext = createContext();
const Context = (props) => {
      SetData();
      let [users, setUser] = useState({});
      useEffect(() => {
            const fetchandSetUser = () => {
                  const allEmployees = JSON.parse(localStorage.getItem("employee"));
                  const admin = JSON.parse(localStorage.getItem("admin"));
                  setUser({ allEmployees, admin });
            };
            fetchandSetUser();
            const handleStorageChanges = () => {
                  fetchandSetUser();
            };
            window.addEventListener("localStorageUpdated", handleStorageChanges);
      }, []);
      return <UserContext.Provider value={users}>{props.children}</UserContext.Provider>;
};

export default Context;

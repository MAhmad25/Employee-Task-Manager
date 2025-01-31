import { useEffect } from "react";
import { InitializingData } from "./InitialData";

const SetData = () => {
      useEffect(() => {
            InitializingData();
      }, []);
};
export default SetData;

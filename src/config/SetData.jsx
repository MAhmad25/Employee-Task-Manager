import { useEffect } from "react";
import { getFromStorage } from "../utils/StorageAccess";
import { InitializingData } from "./InitialData";

const SetData = () => {
      const isDataSet = getFromStorage("dataSetted") || false;
      useEffect(() => {
            if (isDataSet) return;
            InitializingData();
      }, []);
};
export default SetData;

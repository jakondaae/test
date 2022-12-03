import { createContext, useState, useEffect } from "react";
import { MainData } from "./components/Data";

const Change = createContext();

export const ContextWrapper = ({ children }) => {
  const [sidebarc, setSidebarc] = useState(1);
  const [Data, setData] = useState({});
  const ChangeData = () => {
    const temp = MainData.filter((data) => data.id === sidebarc);
    setData(temp[0]);
  };
  useEffect(() => {
    ChangeData();
  }, [sidebarc]);
  return (
    <Change.Provider value={{ Data, sidebarc, setSidebarc }}>
      {children}
    </Change.Provider>
  );
};

export default Change;

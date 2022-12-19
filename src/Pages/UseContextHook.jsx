import { createContext } from "react";
import UseContext from "../Components/Elements/UseContext";

// import ContextAPI from '../Components/Elements/ContextAPI'
const data = createContext();
const data1 = createContext();
const UseContextHook = () => {
  const name = "Abbas";
  const gender = "Male";
  return (
    <>
      {/* <ContextAPI /> */}
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <UseContext />
        </data1.Provider>
      </data.Provider>
    </>
  );
};

export default UseContextHook;
export { data, data1 };

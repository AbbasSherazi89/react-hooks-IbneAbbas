import React, { useContext } from "react";
import { data, data1 } from "../../Pages/UseContextHook";

const UseContext = () => {
  const name = useContext(data);
  const gender = useContext(data1);
  return (
    <>
      <h1>
        My name is {name} and My Gender is {gender}
      </h1>
    </>
  );
};

export default UseContext;

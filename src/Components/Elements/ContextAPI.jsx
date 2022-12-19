import React from "react";
import { data } from "../../App";
const ContextAPI = () => {
  return (
    <>
      <data.Consumer>
        {(name) => {
          return <h1>My name is {name}</h1>;
        }}
      </data.Consumer>
    </>
  );
};

export default ContextAPI;

import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  //
  const decrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };
  return (
    <>
      <div className="container py-5">
        <div className="d-flex">
          <button
            className="btn btn-outline-info fw-bold"
            onClick={() => decrement()}
          >
            {" "}
            -{" "}
          </button>
          <h1 className="mx-3"> {count} </h1>
          <button
            className="btn btn-outline-info fw-bold"
            onClick={() => increment()}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default UseStateHook;

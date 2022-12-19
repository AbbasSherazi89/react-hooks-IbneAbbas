import React, { useReducer } from "react";

const initialstate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return state;
  }
};
const UseReducerHook = () => {
  const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <>
      <div className="container">
          <div>
            <h3>Count: {count}</h3>
          </div>
          <button
            className="btn btn-outline-info"
            onClick={() => dispatch("Increment")}
          >
            Increment
          </button>
          <button
            className="btn btn-outline-info ms-4"
            onClick={() => dispatch("Decrement")}
          >
            Decrement
          </button>
        
      </div>
    </>
  );
};

export default UseReducerHook;

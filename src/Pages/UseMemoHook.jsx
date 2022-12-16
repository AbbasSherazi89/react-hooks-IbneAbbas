import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven= useMemo(()=>{
        let i=0;
        while (i<2000000000) i++;
        return counterOne%2===0
      }, [counterOne])

  // Before to useMemo hook
//   const isEven=()=>{
//     //Declared a variable and used a while loop to delay our return function that check isEven function
//     let i=0;
//     while (i<2000000000) i++;
//     //
//     return counterOne%2===0
//   }
  return (
    <>
      <div className="container">
        <div>
          <div className="btn1 mt-2">
            <button
              className="btn btn-outline-info"
              onClick={() => incrementOne()}
            >
              Counter One - {counterOne}
            </button>
            <span className="fw-bold"> {isEven?'Even':'Odd'} </span>
          </div>
          <div className="btn1 mt-2">
            <button
              className="btn btn-outline-info"
              onClick={() => incrementTwo()}
            >
              Counter Two - {counterTwo}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseMemoHook;

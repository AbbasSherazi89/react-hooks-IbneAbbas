// import { createContext } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseStateHook from "./Pages/UseStateHook";
import NavComp from "./Components/Layout/NavComp";
import UseEffectHook from "./Pages/UseEffectHook";
import UseMemoHook from "./Pages/UseMemoHook";
import UseRefHook from "./Pages/UseRefHook";
import UseContextHook from "./Pages/UseContextHook";
import UseReducerHook from "./Pages/UseReducerHook";

// const data = createContext();

function App() {
  // const name="Abbas"
  return (
    <>
      {/* //UseContext API contents */}

      {/* <data.Provider value={name}>
        <UseContextHook />
      </data.Provider> */}

      <BrowserRouter>
        <NavComp />
        <Routes>
          <Route index path="/" element={<UseStateHook />} />
          <Route path="/useeffect" element={<UseEffectHook />} />
          <Route path="/usememo" element={<UseMemoHook />} />
          <Route path="/useref" element={<UseRefHook />} />
          <Route path="/usecontext" element={<UseContextHook />} />
          <Route path="/usereducer" element={<UseReducerHook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


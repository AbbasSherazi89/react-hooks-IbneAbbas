import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseStateHook from "./Pages/UseStateHook";
import NavComp from "./Components/Layout/NavComp";
import UseEffectHook from "./Pages/UseEffectHook";
import UseMemoHook from "./Pages/UseMemoHook";
import UseRefHook from "./Pages/UseRefHook";
import UseContextHook from "./Pages/UseContextHook";
function App() {
  return (
    <>
    <BrowserRouter>
    <NavComp/>
    <Routes>
      <Route index path="/" element={<UseStateHook/>}/>
      <Route index path="/useeffect" element={<UseEffectHook/>}/>
      <Route index path="/usememo" element={<UseMemoHook/>}/>
      <Route index path="/useref" element={<UseRefHook/>}/>
      <Route index path="/usecontext" element={<UseContextHook/>}/>
    </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;

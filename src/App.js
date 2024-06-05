import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Templates from "./pages/Templates";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/template" element={<Templates/>} />
      </Routes>
    </>
  );
}

export default App;

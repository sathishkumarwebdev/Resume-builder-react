import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Templates from "./pages/Templates";
import Resume from "./pages/Resume";
import Register from "./pages/Register";
import {DataProvider} from "./provider/DataPovider"
function App() {
  return (
    <>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/template" element={<Templates />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;

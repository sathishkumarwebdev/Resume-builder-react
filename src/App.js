import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Templates from "./pages/Templates";
import Resume from "./pages/Resume";
import Register from "./pages/Register";
import Preview from "./pages/Preview";

import {DataProvider} from "./provider/DataPovider";
function App() {
  return (
    <>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/template" element={<Templates />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </DataProvider>
    </>
  );
}

export default App;

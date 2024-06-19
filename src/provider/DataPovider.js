import { useState, createContext } from "react";
import {data} from "../temporaryData/TempData"
export const DataContext = createContext(null);
export function DataProvider(props) {
  const [themeData, setThemeData] = useState({
    resumeColor: "",
    theme: "theme1",
    font: "",
  });
  const [resumeData, setResumeData] = useState(data);
  return (
    <DataContext.Provider value={{ resumeData, setResumeData,themeData,setThemeData }}>
      {props.children}
    </DataContext.Provider>
  );
}

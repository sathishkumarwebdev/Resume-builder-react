import React from "react";
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { DataContext } from "../provider/DataPovider";
import { data } from "../temporaryData/TempData";
import { TiTick } from "react-icons/ti";
import { MdColorLens } from "react-icons/md";

export default function Templates() {

  const [show,setShow] = useState(false);
  const [tickColor,setTickColor]=useState("");
  const context = useContext(DataContext);
  const { resumeData, setResumeData,themeData,setThemeData } = context;
  const navigate = useNavigate();
  console.log(resumeData);
  console.log(themeData);
  // const color = "";
  function colors(resumeColor) {
    setTickColor(resumeColor);
    const newData = { ...themeData, resumeColor };
    setThemeData(newData);
    setResumeData(data)
    
  }

  function selectColor(e) {
    // const color = "";

    if (e.target.id == "plain") {
     const resumeColor = "";
      colors(resumeColor);
      
      
    } else if (e.target.id == "blue") {
      const resumeColor = "navy";
      colors(resumeColor);
     
      
    } else if (e.target.id == "grey") {
      const resumeColor = "rgb(125, 125, 125)";
      colors(resumeColor);
      
    } else if (e.target.id == "meroon") {
      const resumeColor = "rgb(140, 0, 0)";
      colors(resumeColor);
    } else if (e.target.id == "green") {
      const resumeColor = "rgb(0, 80, 0)";
      colors(resumeColor);
    } else if (e.target.id == "skyBlue") {
     const resumeColor = "rgb(23, 169, 228)";
      colors(resumeColor);
    } else if (e.target.id == "pink") {
     const resumeColor = " rgb(255, 127, 127)";
      colors(resumeColor);
    } else if (e.target.id == "lightBlue") {
    const resumeColor = "rgb(34, 166, 153)";
      colors(resumeColor);
    } else if (e.target.id == "yellow") {
      const resumeColor = "rgb(255, 204, 0)";
      colors(resumeColor);
    } else if (e.target.id == "whiteGrey") {
      const resumeColor = "rgb(245, 241, 238)";
      colors(resumeColor);
    }
  }

 
  function theme1() {
    const theme = "theme1";
    const newData = { ...themeData, theme };
    setThemeData(newData);

    navigate("/resume");
  }
  function theme2() {
    const theme = "theme2";
    const newData = { ...themeData, theme };
    setThemeData(newData);

    navigate("/resume");
  }

  function alertMsg() {
    console.log("i am called");
    return (
      <>
        <div className="alert-box">
          <TiTick />
        </div>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className="template-container">
        <div className="select-title">
          <h1>Select a Template</h1>
          <p>Select a color and a template to get started</p>
        </div>
        <div className="select-color">
          <div
            className="color-box no-image"
            id="plain"
            value="nocolor"
            onClick={(e) => selectColor(e)}
          >
            
          </div>
          <div
            className="color-box cc-grey {}"
            id="grey"
            onClick={(e) => selectColor(e)}
          >
           
          </div>
          <div
            className="color-box cc-blue"
            id="blue"
            onClick={(e) => selectColor(e)}
          >
            
          </div>
          <div
            className="color-box cc-meroon"
            id="meroon"
            onClick={(e) => selectColor(e)}
          >
           
          </div>
          <div
            className="color-box cc-green"
            id="green"
            onClick={(e) => selectColor(e)}
          >
            
          </div>
          <div
            className="color-box cc-sky"
            id="skyBlue"
            onClick={(e) => selectColor(e)}
          >
            
          </div>
          <div
            className="color-box cc-pink"
            id="pink"
            onClick={(e) => selectColor(e)}
          >
            
          </div>
          <div
            className="color-box cc-shade-blue"
            id="lightBlue"
            onClick={(e) => selectColor(e)}
          >
            
          </div>
          <div
            className="color-box cc-yellow"
            id="yellow"
            onClick={(e) => selectColor(e)}
          >
            
          </div>
          <div
            className="color-box cc-whitegrey"
            onClick={(e) => selectColor(e)}
            id="whiteGrey"
          >
            
          </div>

          <div className="selected-box">
            <h3> Color:</h3>
            {tickColor == "" ? (
              <MdColorLens color="black" size={50} />
            ) : (
              <MdColorLens color={tickColor} size={50} />
            )}
          </div>
        </div>
        <div className="select-template">
          <div
            className="template-box template1"
            onClick={() => theme1()}
          ></div>

          <Link to={"/resume"}>
            <div
              className="template-box template2"
              onClick={() => theme2()}
            ></div>
          </Link>
          <Link to={"/resume"}>
            <div className="template-box template3"></div>
          </Link>
          <Link to={"/resume"}>
            <div className="template-box template4"></div>
          </Link>
        </div>
      </div>
    </>
  );
}

import { useContext, useState } from "react";
import NavBar from "../components/NavBar";
import PlainTemplate from "../components/PlainTemplate";
import { DataContext } from "../provider/DataPovider";
import ProgressBar from "@ramonak/react-progress-bar";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLessThan } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaMedal } from "react-icons/fa";

import { Editor } from "primereact/editor";

export default function Resume() {
  const context = useContext(DataContext);
  const [counter, setCounter] = useState(1);
  const [form1, setForm1] = useState("progress-bar-box");
  const [form2, setForm2] = useState("progress-bar-box");
  const [form3, setForm3] = useState("progress-bar-box");
  const [form4, setForm4] = useState("progress-bar-box");
  const [form5, setForm5] = useState("progress-bar-box");
  const { themeData, resumeData } = context;
  console.log(themeData);
  console.log(resumeData);

  const PersonalInfo = () => {
    setForm1("progress-bar-box-completed ");
    return (
      <div className="form-container">
        <div className="form-title">
          <h3>Personal Information</h3>
        </div>
        <div className="form content">
          <div className="2-section">
            <div className="label">
              <div>First Name</div>
              <div>Last Name</div>
            </div>
            <div className="label">
              <div>
                <input type="text" placeholder="First Name" />
              </div>
              <div>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>
          </div>

          <div className="2-section">
            <div className="label">
              <div>Proffesion</div>
            </div>
          </div>
          <div className="single-label">
            <div>
              <input type="text" placeholder="Proffesion" />
            </div>
          </div>
          <div className="label">
            <div>Address</div>
            <div>City</div>
          </div>
          <div className="label">
            <div>
              <input type="text" placeholder="Address" />
            </div>
            <div>
              <input type="text" placeholder="City" />
            </div>
          </div>
          <div className="label">
            <div>State</div>
            <div>Zip Code</div>
          </div>
          <div className="label">
            <div>
              <input type="text" placeholder="State" />
            </div>
            <div>
              <input type="text" placeholder="Zip Code" />
            </div>
          </div>
          <div className="section-btn-single">
            <button onClick={() => setCounter(counter + 1)}>Next</button>
          </div>
        </div>
      </div>
    );
  };
  const Education = () => {
    setForm2("progress-bar-box-completed ");
    return (
      <div className="form-container">
        <div className="form-title">
          <h3>Education</h3>
        </div>
        <div className="form content">
          <div className="2-section">
            <div className="label">
              <div>Institution Name</div>
              <div>Course</div>
            </div>
            <div className="label">
              <div>
                <input type="text" placeholder="Institution Name" />
              </div>
              <div>
                <input type="text" placeholder="Course" />
              </div>
            </div>
          </div>
          <div className="2-section">
            <div className="label">
              <div>Country</div>
              <div>State</div>
            </div>
            <div className="label">
              <div>
                <input type="text" placeholder="Country" />
              </div>
              <div>
                <input type="text" placeholder="State" />
              </div>
            </div>
          </div>
          <div className="2-section">
            <div className="label">
              <div>Time Period</div>
            </div>
          </div>

          <div className="label">
            <div>Start</div>
            <div>Finish</div>
          </div>
          <div className="label">
            <div>
              <input type="date" />
            </div>
            <div>
              <input type="date" />
            </div>
          </div>

          <div className="section-btn">
            <button
              className="previous "
              onClick={() => setCounter(counter - 1)}
            >
              previous
            </button>
            <button className="next" onClick={() => setCounter(counter + 1)}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  };
  const Experience = () => {
    setForm3("progress-bar-box-completed");
    return (
      <div className="form-container">
        <div className="form-title">
          <h3>Experience</h3>
        </div>
        <div className="form content">
          <div className="2-section">
            <div className="label">
              <div>Employer</div>
              <div>Company</div>
            </div>
            <div className="label">
              <div>
                <input type="text" placeholder="Employer" />
              </div>
              <div>
                <input type="text" placeholder="Company" />
              </div>
            </div>
          </div>
          <div className="2-section">
            <div className="label">
              <div>Address</div>
              <div>Role</div>
            </div>
            <div className="label">
              <div>
                <input type="text" placeholder="Address" />
              </div>
              <div>
                <input type="text" placeholder="Role" />
              </div>
            </div>
          </div>
          <div className="2-section">
            <div className="label">
              <div>Time Period</div>
            </div>
          </div>

          <div className="label">
            <div>Start</div>
            <div>Finish</div>
          </div>
          <div className="label">
            <div>
              <input type="date" />
            </div>
            <div>
              <input type="date" />
            </div>
          </div>
          <div className="text-editior">
            <Editor style={{ width: "100%", height: "100px" }} />
          </div>
          <div className="section-btn">
            <button
              className="previous "
              onClick={() => setCounter(counter - 1)}
            >
              previous
            </button>
            <button className="next" onClick={() => setCounter(counter + 1)}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  };
  const Contact = () => {
    setForm4("progress-bar-box-completed");
    return (
      <div className="form-container">
        <div className="form-title">
          <h3>Contact Information</h3>
        </div>
        <div className="form content">
          <div className="2-section">
            <div className="label">
              <div>Email Address</div>
              <div>Phone Number</div>
            </div>
            <div className="label">
              <div>
                <input type="email" placeholder="Email Address" />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" />
              </div>
            </div>
          </div>
          <div className="2-section">
            <div className="label">
              <div>Linkedin Profile link</div>
              <div>Twitter Profile link</div>
            </div>
            <div className="label">
              <div>
                <input type="text" placeholder="Linkedin Profile link" />
              </div>
              <div>
                <input type="text" placeholder="Twitter Profile link" />
              </div>
            </div>
          </div>

          <div className="label">
            <div>Portfolio Profile link</div>
            <div>Gitup Profile link</div>
          </div>
          <div className="label">
            <div>
              <input type="text" placeholder="Portfolio Profile link" />
            </div>
            <div>
              <input type="text" placeholder="Gitup Profile link" />
            </div>
          </div>

          <div className="section-btn">
            <button
              className="previous "
              onClick={() => setCounter(counter - 1)}
            >
              previous
            </button>
            <button className="next" onClick={() => setCounter(counter + 1)}>
              Next
            </button>
          </div>
        </div>
      </div>
    );
  };
  const Award = () => {
    setForm5("progress-bar-box-completed");
    return (
      <div className="form-container">
        <div className="form-title">
          <h3>Award/Certification</h3>
        </div>
        <div className="form content">
          <div className="2-section">
            <div className="single-label">
              <div>Name of Organization</div>
            </div>
            <div className="single-label">
              <div>
                <input type="text" placeholder="Name of Organization" />
              </div>
            </div>
          </div>
          <div className="2-section">
            <div className="label">
              <div>
                Award Title <i>(Optional)</i>
              </div>
              <div>Date of Acquisition</div>
            </div>
            <div className="label">
              <div>
                <input type="text" placeholder=" Award Title" />
              </div>
              <div>
                <input type="date" />
              </div>
            </div>
            <div className="text-editior">
              <Editor
                style={{ width: "100%", height: "100px" }}
                headerTemplate="Description"
              />
            </div>
          </div>

          <div className="section-btn">
            <button
              className="previous "
              onClick={() => setCounter(counter - 1)}
            >
              previous
            </button>
            <button className="next" onClick={() => setCounter(counter + 1)}>
              Preview
            </button>
          </div>
        </div>
      </div>
    );
  };
  console.log(counter);
  return (
    <>
      <NavBar />
      <div className="progress-detail">
        <div className={form1}>
          <BsFillPersonLinesFill size={22} /> &nbsp;
          <h3>Personal Information</h3>
        </div>
        <div className={form2}>
          <FaGraduationCap size={22} /> &nbsp;
          <h3>Education </h3>
        </div>
        <div className={form3}>
          <FaSuitcase size={22} /> &nbsp;
          <h3>Experience</h3>
        </div>
        <div className={form4}>
          <IoCall size={22} /> &nbsp;
          <h3>Contact Information</h3>
        </div>
        <div className={form5}>
          <FaMedal size={22} /> &nbsp;
          <h3>Award/Certification</h3>
        </div>
      </div>

      <div className="resume-container">
        <div className="right-division">
          <div className="resume-form">
            {counter === 1 ? (
              <PersonalInfo />
            ) : counter === 2 ? (
              <Education />
            ) : counter === 3 ? (
              <Experience />
            ) : counter === 4 ? (
              <Contact />
            ) : (
              <Award />
            )}
          </div>
        </div>
        <div className="left-division">
          <PlainTemplate themeData={themeData} resumeData={resumeData} />
        </div>
      </div>
    </>
  );
}

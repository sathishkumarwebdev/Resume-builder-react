import React,{useContext,useState} from "react";
import { DataContext } from "../provider/DataPovider";

export function Education({counter,setCounter,setForm2}) {
    const context = useContext(DataContext);
    const { resumeData, setResumeData } = context;

    setForm2("progress-bar-box-completed");

    const form = {
       education: {
    college1: {
      institutionnName: "Bellows College",
      year: "2022-2023",
      course: "B.E",
      country: "india",
      state: "Tamilnadu",
      startDate: "05-07-2020",
      endDate: "05-07-2023",
    }
}
    };

    const [EducationData, setEducationData] = useState(form);

    const handleInputChange = (e) => {
      setEducationData((data) => ({ ...data, [e.target.name]: e.target.value }));

      setResumeData({
        ...resumeData,
        EducationData: {
          ...resumeData.personalData,
          [e.target.name]: e.target.value,
        },
      });
    };

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
          <button className="previous " onClick={() => setCounter(counter - 1)}>
            previous
          </button>
          <button className="next" onClick={() => setCounter(counter + 1)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { data } from "../temporaryData/TempData";

export default function PlainTemplate({ themeData, resumeData }) {
  // const firstName="Sathish";
  console.log("plaintemp::", themeData);
  console.log("resumrData::", resumeData);
  // const {personalData} =data;
  const { personalData, objective, experience, skills, education } = data;
  const skillsArray =  skills ;
  const {resumeColor}=themeData;
  console.log(resumeColor);
  const h3Style={

                    "color": resumeColor,
                    "borderBottom": `2px solid ${resumeColor}`,
                    
                    
                 
  }
  for(const key in personalData){
    
  }
    console.log(personalData);
  // const map1=personalData.map((key)=>key);
  // console.log(map1);
  function template() {
    return (
      <>
        <div className="plain-template-box-theme-one">
          <div className="theme-plain-title">
            <h1 style={{ color: resumeColor }}>
              {personalData.firstName} &nbsp; {personalData.lastName}
            </h1>
            <hr style={{ border: `2px solid  ${resumeColor}` }} />
            <h3 style={{ color: resumeColor }}>{personalData.proffesion}</h3>
            <hr style={{ border: `2px solid  ${resumeColor}` }} />
          </div>
          <div className="resume-body-theme-one">
            <div className="section-left-theme-one">
              <div className="contact">
                <h3 style={h3Style}>Contact</h3>
                <p>{personalData.phone}</p>
                <p>{personalData.email}</p>
                <p>{personalData.address}</p>
                <p>{personalData.city}</p>
                <p>{personalData.state}</p>
                <p>{personalData.zipcode}</p>
                <p>{personalData.linkedin}</p>
                <p>{personalData.twitter}</p>
                <p>{personalData.portfolio}</p>
                <p>{personalData.gitup}</p>
              </div>
              <div className="Education">
                <h3 style={h3Style}>Education</h3>
                <p>{education.college1.institutionnName}</p>
                <p>{education.college1.course}</p>
                <p>{education.college1.country}</p>
                <p>{education.college1.state}</p>
                <p>{education.college1.startDate} to</p>
                <p>{education.college1.endDate}</p>
              </div>
              <div className="skills"></div>
              {/* <div className="education">4</div> */}
            </div>
            <div className="section-right-theme-one">
              <div className="objective">
                <h3 style={h3Style}>Objective</h3>
                <p style={{ fontSize: "16px" }}>{objective}</p>
              </div>
              <div className="experience">
                <h3 style={h3Style}>Experience</h3>
                <p>{experience.experience1.employer}</p>
                <p>{experience.experience1.company}</p>
                <p>{experience.experience1.role}</p>
                <p>{experience.experience1.address}</p>
                <p>{experience.experience1.city}</p>
                <p>{experience.experience1.country}</p>
                <p>{experience.experience1.startDate}</p>
                <p>{experience.experience1.endDate}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <div className="plain-template-container">{template()}</div>;
}

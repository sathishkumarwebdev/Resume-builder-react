import React,{useState,useContext} from 'react';
import { DataContext } from '../provider/DataPovider';


export  function PersonalInfo({counter,setCounter,setForm1}) {
   const context = useContext(DataContext);
   const {  resumeData, setResumeData } = context;

setForm1("progress-bar-box-completed");

const form = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  profession: "",
  phone: "",
  email: "",
};

const [personalData, setPersonalData] = useState(form);

const handleInputChange = (e) => {
  setPersonalData((data) => ({ ...data, [e.target.name]: e.target.value }));

  setResumeData({
    ...resumeData,
    personalData: {
      ...resumeData.personalData,
      [e.target.name]: e.target.value,
    },
  });
};





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
                <input
                  type="text"
                  placeholder="First Name"
                  value={personalData.firstName}
                  name="firstName"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={personalData.lastName}
                  onChange={handleInputChange}
                />
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
              <input
                type="text"
                placeholder="Proffesion"
                name="profession"
                value={personalData.profession}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="label">
            <div>Address</div>
            <div>City</div>
          </div>
          <div className="label">
            <div>
              <input
                type="text"
                placeholder="Address"
                name="address"
                value={personalData.address}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="City"
                name="city"
                value={personalData.city}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="label">
            <div>State</div>
            <div>Zip Code</div>
          </div>
          <div className="label">
            <div>
              <input
                type="text"
                placeholder="State"
                name="state"
                value={personalData.state}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Zip Code"
                name="zipCode"
                value={personalData.zipCode}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="section-btn-single">
            <button onClick={() => setCounter(counter + 1)}>Next</button>
          </div>
        </div>
      </div>
    );
  };

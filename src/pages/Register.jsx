import React from 'react'
import {useState} from "react";
import {Link} from "react-router-dom"
import { HiDocumentDuplicate } from "react-icons/hi2";

export default function Register() {
    const [bgColor,setBgColor]=useState(true);

  
    
  return (
    <div className="register-container">
      <div className="content-login">
        <div className="login-logo">
          <HiDocumentDuplicate size={30} />
          <h2>Resume</h2>
          <h2 style={{ color: "skyblue", marginLeft: "5px" }}>Builder</h2>
        </div>
        <div className="title-login">
          <h1>The Best Free Online Resume Builder</h1>
        </div>
        <div>
          <p className="login-qote">
            A Quick and Easy Way to Create Your Professional Resume.
          </p>
        </div>
      </div>
      <div className="login-conatiner">
        {/* <div className="login-content"></div> */}
        <div className="login-box">
          <div className="register-logo">
            <h3>
              Welcome To <span>Resume Builder</span>
            </h3>
          </div>
          <div className="option-box">
            <div className="option">
              <button
                className={bgColor ? "bg-color" : "bg-color--none"}
                onClick={() => setBgColor(!bgColor)}
              >
                sign up
              </button>
              <button
                className={bgColor ? "bg-color--none" : "bg-color"}
                onClick={() => setBgColor(!bgColor)}
              >
                login
              </button>
            </div>
          </div>
          {bgColor ? (
            <div className="sign-in-box">
              <label>Email:</label>
              <input type="text" placeholder="Enter Your Email Address" />
              <label>Password:</label>
              <input type="text" placeholder="Enter Your Password" />
              <label>Confirm Password:</label>
              <input type="text" placeholder="Confirm Your Password" />
              <Link to="/">
                <button>Register</button>
              </Link>
            </div>
          ) : (
            <div className="login-form">
              <label>Email:</label>
              <input type="text" placeholder="Enter Your Email Address" />
              <label>Password:</label>
              <input type="text" placeholder="Enter Your Password" />

              <Link to="/">
                <button>Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


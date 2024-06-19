import React from 'react';
import {useState} from "react";
import {Link} from "react-router-dom"
import { HiDocumentDuplicate } from "react-icons/hi2";
import { IoPersonCircleSharp } from "react-icons/io5";

export default function () {
  const [profile,setProfile]=useState(false)
  return (
    <nav>
      <div className="nav-logo">
        <HiDocumentDuplicate className="logo" />
        <h1>Resume</h1>
        <h1 style={{ color: "skyblue", marginLeft: "5px" }}>Builder</h1>
      </div>
      <div className="nav-itmes">
        {profile ? (
          <div className="profile">
            My Account <IoPersonCircleSharp className="profile-icon" />
          </div>
        ) : (
          <div className="sign-section">
            <div className="login">
              <Link to={"/register"}>
                <button>Register</button>
              </Link>
            </div>

            <div className="sign-up">
              <Link to={"/register"}>
                <button>Sign in</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

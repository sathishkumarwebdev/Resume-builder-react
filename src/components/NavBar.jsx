import React from 'react';
import { HiDocumentDuplicate } from "react-icons/hi2";
import { IoPersonCircleSharp } from "react-icons/io5";

export default function () {
  return (
    <nav>
      <div className="nav-logo">
        <HiDocumentDuplicate className="logo" />
        <h1>Resume</h1>
        <h1 style={{ color: "skyblue", marginLeft:"5px"}}>Builder</h1>
      </div>
      <div className="nav-itmes">
        <div className='profile'>
           My Account <IoPersonCircleSharp className='profile-icon'/>
        </div>
      </div>
    </nav>
  );
}

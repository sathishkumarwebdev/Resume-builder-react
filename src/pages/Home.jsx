import React from "react";
import NavBar from "../components/NavBar";
import banner from "../images/landing-banner.png";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="home-container">
        <div className="section">
          <div className="section-title">
            <h1>The Best Online Resume Builder</h1>
          </div>
          <div className="home-content">
            <h4>
              Easily create the perfect resume for any job using our
              best-in-class resume builder platform.
            </h4>
          </div>
          <div className="resume-create-btn">
            <button>Create My Resume Now </button>
          </div>
        </div>
      </div>
    </>
  );
}

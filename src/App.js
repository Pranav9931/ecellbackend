import "./App.css";
import React, { useState } from "react";
import logoImg from "./images/ecell_logo_sidebar.png";

import coverimg from "./images/cover_img_default.jpeg";
import profilePic from "./images/profilePic.jpeg";

// Icons
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";

function App() {
  const [pageNo, setPageNo] = useState("01");
  const [coverImg, setCoverImg] = useState(coverimg);
  const [profileImg, setProfileImg] = useState(profilePic);
  return (
    <div className="app">
      {/* Contents */}
      <div className="app-content">
        {/* Sidebar */}
        <div className="app-content-sidebar">
          <div className="sidebar-layer">
            <div className="app-sidebar-content">
              <img src={logoImg} />
              <span>Already registered, Take a look?</span>
              <button className="sidebar_btn">View Profile</button>
            </div>
          </div>
        </div>

        {/* Main Container */}
        <div className="app-content-container">
          {/* Header */}
          <div className="head-part">
            <span className="content-title">Register</span>
            <span>
              {pageNo} <span style={{ color: "#ccc" }}>| 03</span>
            </span>
          </div>

          {/* Cover Photo */}
          <div className="cover-picture">
            <img src={coverImg} />
          </div>

          {/* Profile Picture */}
          <div className="profileImg-Section">
            <div className="profile-picture">
              <img src={profileImg} />
              <div className="imgChange">
                <CameraAltOutlinedIcon className="camera-icon" />
                <input
                  type="file"
                  accept="image/*"
                  name="profilePic"
                  id="profilePic"
                  onChange={(e) => {
                    const url = URL.createObjectURL(e.target.files[0]);
                    setProfileImg(url);
                  }}
                />
              </div>
            </div>
            <button className="changeCoverImg-btn">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

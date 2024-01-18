import React from "react";
import "./home.css";
import TextField from "@mui/material/TextField";

const Home = () => {
  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }} className="quiz-settings">
          Quiz settings
        </span>
        <div className="settings_select">
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
          />
          <TextField
            select
            label="Select category"
            variant="outlined"
            style={{ marginBottom: 25 }}
          />
        </div>
      </div>
      <img src="../assets/quiz-pic1.png" className="banner" alt="" />
    </div>
  );
};

export default Home;

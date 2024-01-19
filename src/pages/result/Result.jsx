import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "./result.css";

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <div className="result">
      <span className="title">final Score: {score}</span>
      <Button
        variant="contained"
        color="error"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go To Homepage
      </Button>
    </div>
  );
};

export default Result;

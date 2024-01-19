import React from "react";
import { useState } from "react";
import "./question.css";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Question = ({
  currQuest,
  setCurrQuest,
  questions,
  correct,
  setScore,
  options,
  score,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const handleSelect = (seleOpt) => {
    if (selected === seleOpt && selected === correct) {
      return "select";
    } else if (selected === seleOpt && selected !== correct) {
      return "wrong";
    } else if (seleOpt === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const navigate = useNavigate();

  const handleNext = () => {
    if (currQuest > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrQuest(currQuest + 1);
      setSelected();
    } else {
      setError("Please select an option first");
    }
  };

  const handleQuit = () => {};

  return (
    <div className="question">
      <h1>Question {currQuest + 1}</h1>
      <div className="singleQuestion">
        <h2>{questions[currQuest].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((opt) => (
              <button
                onClick={() => handleCheck(opt)}
                className={`singleOption ${selected && handleSelect(opt)}`}
                key={opt}
                disabled={selected}
              >
                {opt}
              </button>
            ))}
        </div>

        <div className="controls">
          <Button
            variant="contained"
            color="error"
            size="large"
            style={{ width: 195 }}
            href="/"
            onClick={handleQuit}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 195 }}
            onClick={handleNext}
          >
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;

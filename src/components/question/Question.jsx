import React from "react";
import { useState } from "react";
import "./question.css";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const Question = ({
  currQuest,
  setCurrQuest,
  questions,
  correct,
  setScore,
  options,
  score,
  setQuestions,
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
            style={{ width: 185 }}
            href="/"
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            endIcon={<SendIcon />}
          >
            Next Question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;

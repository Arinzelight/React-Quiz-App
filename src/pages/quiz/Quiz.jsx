import React from "react";
import "./quiz.css";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Question from "../../components/question/Question";

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState([]);
  const [currQuest, setCurrQuest] = useState(0);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    if (questions && questions.length > 0) {
      setOptions(
        handleShuffle([
          questions[currQuest]?.correct_answer,
          ...questions[currQuest]?.incorrect_answers,
        ])
      );
    }
  }, [questions, currQuest]);

  console.log(options);

  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>
      {questions ? (
        <>
          {questions[currQuest] ? (
            <>
              <div className="quizInfo">
                <span>{questions[currQuest].category}</span>
                <span>Score : {score}</span>
              </div>
              <Question
                currQuest={currQuest}
                setCurrQuest={setCurrQuest}
                questions={questions}
                options={options}
                correct={questions[currQuest]?.correct_answer}
                score={score}
                setScore={setScore}
              />
            </>
          ) : (
            <div className="noQuestion">
              <h3>No question available for the current category.</h3>
              <Button
                variant="contained"
                color="error"
                size="large"
                style={{ width: 195 }}
                href="/"
              >
                Back To Home
              </Button>
            </div>
          )}
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="primary"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;

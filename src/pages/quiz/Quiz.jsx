import React from "react";
import "./quiz.css";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Question from "../../components/question/Question";

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState();
  const [currQuest, setCurrQuest] = useState(0);

  useEffect(() => {
    console.log(questions);

    setOptions(
      questions &&
        handleShuffle([
          questions[currQuest]?.correct_answer,
          ...questions[currQuest]?.incorrect_answers,
        ])
    );
  }, [questions]);

  console.log(options);

  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome {name}</span>
      {questions ? (
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
            setQuestions={setQuestions}
          />
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

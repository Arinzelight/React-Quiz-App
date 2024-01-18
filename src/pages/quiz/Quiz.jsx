import React from "react";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

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
    <div>
      <span className="subtitle">Welcome {name}</span>
      {questions ? (
        <>Questions</>
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

import React from "react";
import { useEffect } from "react";

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return <div>qst</div>;
};

export default Quiz;

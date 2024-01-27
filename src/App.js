import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import he from "he";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/result/Result";

const App = () => {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category, difficulty) => {
    try {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`
      );

      // Decode HTML entities in each question and options
      const decodedQuestions = data.results.map((result) => ({
        ...result,
        question: he.decode(result.question),
        // Decode options if they exist
        ...(result.incorrect_answers && {
          incorrect_answers: result.incorrect_answers.map((option) =>
            he.decode(option)
          ),
        }),
        correct_answer: he.decode(result.correct_answer),
      }));

      setQuestions(decodedQuestions);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          />
          <Route
            path="/result"
            element={<Result score={score} name={name} />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

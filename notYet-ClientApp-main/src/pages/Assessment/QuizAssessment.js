import React, { useState } from "react";
import "./QuizAssessment.css";
import { Link } from "react-router-dom";

const QuizAssessment = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    new Array(questions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelection = (answerIndex) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setShowResults(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers(new Array(questions.length).fill(null));
    setShowResults(false);
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (question.correctAnswerIndex === userAnswers[index]) {
        score += 1;
      }
    });
    return score;
  };

  if (showResults) {
    return (
      <div className="quiz-container">
        <h2 className="results">Quiz Results</h2>
        <p className="results-msg">
          You scored {calculateScore()} out of {questions.length}!
        </p>
        <button className="next-btn" onClick={handleResetQuiz}>
          Take Again
        </button>
        <Link to="/">
          <button className="next-btn2">!YET Home</button>
        </Link>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div className="quiz-container">
      <h2 className="question">{currentQuestion.question}</h2>
      <div className="answers">
        {currentQuestion.answers.map((answer, index) => (
          <button
            key={index}
            className={`answer ${
              userAnswers[currentQuestionIndex] === index ? "selected" : ""
            }`}
            onClick={() => handleAnswerSelection(index)}
          >
            {answer}
          </button>
        ))}
      </div>
      <button
        className="next-btn"
        disabled={userAnswers[currentQuestionIndex] === null}
        onClick={handleNextQuestion}
      >
        {currentQuestionIndex === questions.length - 1
          ? "Finish"
          : "Next Question"}
      </button>
    </div>
  );
};

export default QuizAssessment;

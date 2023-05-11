import classes from "./Assessment.module.css";
import React, { useState } from "react";
import Backgroundgif from "../../UI/Backgroundgif";

import QuizAssessment from "./QuizAssessment";

function Assessment() {
  const questions = [
    {
      question:
        "Question 1: What is the time complexity of searching for an element in a circular linked list?",
      answers: ["a) O(n)", "b) O(nlogn)", "c) O(1)", "d) O(n2)"],
      correctAnswerIndex: 0,
    },
    {
      question:
        "Question 2: Which of the following is false about a circular linked list?",
      answers: [
        "a) Every node has a successor",
        "b) Time complexity of inserting a new node at the head of the list is O(1)",
        "c) Time complexity for deleting the last node is O(n)",
        "d) We can traverse the whole circular linked list by starting from any point",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Question 3: Which of the following properties is associated with a queue?",
      answers: [
        "a) First In Last Out",
        "b) Last In First Out",
        "c) First In First Out",
        "d) Last In Last Out",
      ],
      correctAnswerIndex: 2,
    },
  ];

  return (
    <div className={classes}>
      <Backgroundgif />
      <div>
        <QuizAssessment questions={questions} />
      </div>
    </div>
  );
}
export default Assessment;

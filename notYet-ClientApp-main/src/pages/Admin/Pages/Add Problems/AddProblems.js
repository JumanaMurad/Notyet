import React from "react";

import NavBar from "../../Componentsx/NavBar";
import ProblemForm from "./ProblemForm";
import "./AddProblems.css";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function AddProblems(props) {
  const [isEditing, setIsEditing] = useState(false);

  fetch("http://localhost:3000/problems/", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-origin": "*",
    },
    body: JSON.stringify({
      title: " Problem2",
      description: "Problem description",
      category: "Stack",
      hint: ["first hint", "second hint"],
      difficulty: "hard",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <NavBar />
      <div className="new-expense">
        {!isEditing && (
          <button onClick={startEditingHandler}>Add New Problem</button>
        )}
        {isEditing && (
          <ProblemForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
        {/* <Problemx items={DUMMY_EXPENSES} /> */}
      </div>
    </div>
  );
}
export default AddProblems;

import React, { useState } from "react";

import Card from "./Card";
import ProblemsFilter from "./ProblemsFilter";
import ProblemsChart from "./ProblemsChart";
import ProblemsList from "./ProblemsList";
import "./Problemx.css";

const Problemx = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ProblemsFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ProblemsChart expenses={filteredExpenses} />

        <ProblemsList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Problemx;

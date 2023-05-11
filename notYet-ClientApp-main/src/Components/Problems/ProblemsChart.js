import React from "react";

import Chart from "../../UI/Chart/Chart";

const ProblemsChart = (props) => {
  const chartDataPoints = [
    { label: "Stack", value: 0 },
    { label: "Queue", value: 0 },
    { label: "Linked List", value: 0 },
    { label: "Mapping", value: 0 },
    { label: "Graph", value: 0 },
    { label: "Hash", value: 0 },
    { label: "Bit Manip", value: 0 },
    { label: "BST", value: 10 },
    { label: "Strings", value: 10 },
    { label: "Set", value: 0 },
    { label: "Bitmask", value: 0 },
    { label: "2ointers", value: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ProblemsChart;

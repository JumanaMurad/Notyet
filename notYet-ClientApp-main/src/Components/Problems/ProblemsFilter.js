import React from "react";

import "./ProblemsFilter.css";

const ProblemsFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Diffuculty </label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">Hard</option>
          <option value="2021">Medium</option>
          <option value="2020">Easy </option>
          <option value="2019">Beginners</option>
        </select>
      </div>
    </div>
  );
};

export default ProblemsFilter;

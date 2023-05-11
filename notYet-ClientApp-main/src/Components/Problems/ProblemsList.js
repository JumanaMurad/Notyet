import React from "react";
import { useState, useEffect } from "react";

import "./ProblemsList.css";
import ProblemsItem from "./ProblemsItem";
import { Link } from "react-router-dom";

const ProblemsList = (props) => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  const fetchInfo = () => {
    fetch(`http://localhost:3000/problems/?category=${category}`, {
      method: "GET",
      crossDomain: true,
    })
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        setData(d.data);
        setCategory(d.data.category);
      });
  };
  console.log(typeof data);

  console.log(fetchInfo);
  useEffect(() => {
    fetchInfo();
  }, []);

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <Link to="/problems/compiler" style={{ textDecoration: "none" }}>
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ProblemsItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            cat={expense.cat}
          />
        ))}

        {data.map((i) => {
          return (
            <tr>
              <td>{i._id}</td>
              <td>{i.title}</td>
              <td>{i.description}</td>
              <td>{i.category}</td>
            </tr>
          );
        })}
      </ul>
    </Link>
  );
};
export default ProblemsList;

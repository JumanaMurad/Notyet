import React from "react";
import Navbar from "../ComponentX/Navbar";
import { useState, useEffect } from "react";

function Submissions() {
  const [data, setData] = useState([]);
  const fetchInfo = () => {
    fetch(`http://localhost:3000/users/640faa2301e4df370425d3f7`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((d) => {
        // console.log(d.data.user);
        setData(d.data);
      });
  };
  console.log(data.user.solvedProblems);

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      <Navbar />
      {
        //   <ul>
        //     {data.Map((i) => {
        //       return (
        //         <tr>
        //           <td>{i.solvedProblems}</td>
        //         </tr>
        //       );
        //     })}{" "}
        //   </ul>
      }
      <h2>Submissions</h2>
    </div>
  );
}
export default Submissions;

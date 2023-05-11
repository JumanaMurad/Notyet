import React, { useState, useEffect } from "react";
import "./Profile.css";
import Navbar from "./ComponentX/Navbar";

function Profile() {
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
  console.log(data);

  console.log(fetchInfo);
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      <Navbar />
      {/* 
      <ul>
        {data.Map((i) => {
          return (
            <tr>
              <td>{i.name}</td>
              <td>{i.email}</td>
              <td>{i.jobTitle}</td>
            </tr>
          );
        })}{" "}
      </ul> */}
    </div>
  );
}

export default Profile;

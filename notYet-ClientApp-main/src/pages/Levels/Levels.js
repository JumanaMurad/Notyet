// import React, { useState, useEffect } from "react";
// import axios from "axios";
import Header from "../../UI/Header";
import Footer from "../../UI/Footer";
import Card from "../../UI/Card";
import One from "../../assets/Icons/One.png";
import classes from "./Levels.module.css";
import Backgroundgif from "../../UI/Backgroundgif";
import { Link } from "react-router-dom";

function Levels() {
  //   const [levels, setLevels] = useState([]);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     async function getLevels() {
  //       const { data } = await axios.get("/api/levels");
  //       setLevels(data);
  //       setLoading(false);
  //     }
  //     getLevels();
  //   }, []);

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }

  return (
    // <div>
    //   <h1>Levels</h1>
    //   <ul>
    //     {levels.map((level) => (
    //       <li key={level.id}>{level.name}</li>
    //     ))}
    //   </ul>
    // </div>
    <div>
      <Header />
      <div>
        <Backgroundgif />
      </div>
      <div>
        <div className={classes.header1}>
          <h1>!YET 15 Days</h1>
          <p className={classes.line}>______________________</p>
          <div className={classes.card1}>
            <img src={One} alt="one" />
          </div>
          <div className={classes.text}>
            <p>
              We aspire to help all who seek improvement in problem solving and
              develop an ability to think outside the box and think
              strategically by providing them with an organized environment
              guided by professionals. Through our platform they will be able to
              endorse their team working skills while working collaboratively
              with their team, learn how to code , debug and optimize code ,
              mastering programming techniques through our organized topics and
              roadmaps.
            </p>
          </div>
        </div>
        <Link to="/problems" style={{ textDecoration: "none" }}>
          <Card>
            <img src={One} alt="one" />
            <div clasName={classes.content}>
              <h1>Level 1</h1>
              <h1>Avg. 2 Problems/ day | 5 days</h1>
            </div>
          </Card>
        </Link>
        <Link to="/problems" style={{ textDecoration: "none" }}>
          <Card>
            <img src={One} alt="one" />
            <div clasName={classes.content}>
              <h1>Level 2</h1>
              <h1>Avg. 2 -3 Problems/ day | 5 days</h1>
            </div>
          </Card>
        </Link>
        <Link to="/problems" style={{ textDecoration: "none" }}>
          <Card>
            <img src={One} alt="one" style={{ textDecoration: "none" }} />
            <div clasName={classes.content}>
              <h1>Level 3</h1>
              <h1>Avg. 2 -3 Problems/ day | 5 days</h1>
            </div>
          </Card>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
export default Levels;

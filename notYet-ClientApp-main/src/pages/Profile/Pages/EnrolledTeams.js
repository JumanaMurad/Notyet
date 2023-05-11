import React from "react";
import Navbar from "../ComponentX/Navbar";

import classes from "./EnrolledTeams.module.css";
import { useState, useEffect } from "react";
import Msg from "../../../UI/Msg/Msg";
import BackgroundColor from "../../../UI/BackgroundColor/BackgroundColor";

function EnrolledTeams() {
  const [MsgIsOpen, setMsgIsOpen] = useState();
  const [MsgIsOpen2, setMsgIsOpen2] = useState();
  const [data, setData] = useState([]);

  fetch("http://localhost:3000/teams", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-origin": "*",
    },
    body: JSON.stringify({
      teamName: "Third Team",
      teamLeader: "Marwan",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  function DeleteHandler() {
    //Delete handler = Awel ma yedos 3la zorar el delete ye3ml el function w el gowa el function el howa EFTA7 MESSAGE
    setMsgIsOpen(true); //EFTAH el MESSAGE
  }

  function closeMsgHandler() {
    setMsgIsOpen(false); //2e2fel el Message
  }
  function DeleteHandler2() {
    //Delete handler = Awel ma yedos 3la zorar el delete ye3ml el function w el gowa el function el howa EFTA7 MESSAGE
    setMsgIsOpen2(true); //EFTAH el MESSAGE
  }
  function closeMsgHandler2() {
    setMsgIsOpen2(false); //2e2fel el Message
  }
  return (
    <div>
      <Navbar />
      <button className={classes.button1} onClick={DeleteHandler}>
        Join Team
      </button>
      {MsgIsOpen && <BackgroundColor onClick={closeMsgHandler} />}
      {MsgIsOpen && (
        <Msg
          text="Do You Want To Join a Team at !YET?"
          onClose={closeMsgHandler}
        />
      )}
      <button className={classes.button1} onClick={DeleteHandler2}>
        Create Team
      </button>
      {MsgIsOpen2 && <BackgroundColor onClick={closeMsgHandler2} />}
      {MsgIsOpen2 && (
        <Msg
          text="Do You Want To Create a new Team at !YET?"
          onClose={closeMsgHandler2}
        />
      )}
    </div>
  );
}
export default EnrolledTeams;

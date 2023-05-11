import React from "react";
import "./Login.css";

import LoginForm from "./LoginForm";
import LogoWhiteText from "../assets/LogoWhiteText.png";
import code from "../assets/code.png";
import Footer from "../UI/Footer";
// import { Redirect } from "react-router-dom";

function Login(props) {
  function saveLogin(enteredInformation) {
    const SubmitedDate = {
      ...enteredInformation, //el data el gya mn lOGINFORM
      id: Math.random().toString(), //zawdetlha ID
    };
    props.OnSubmitTest(SubmitedDate);
    //localStorage.setItem("loginForm", JSON.stringify(SubmitedDate));
  }
  return (
    <div>
      <img className="logo" src={LogoWhiteText}></img>
      <div className="login">
        <img src={code}></img>
        <LoginForm onSubmitedd={saveLogin} />
      </div>
      <Footer />
    </div>
  );
}
export default Login;

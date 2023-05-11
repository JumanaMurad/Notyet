import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import ForgetPwd from "./ForgetPwd";

function LoginForm(props) {
  const [enteredUsername, setEnteredUsername] = useState(""); //enteredTitle is the state variable = ' ', setEnteredTitle is the function that updates the state variable '****'
  const [enteredPassword, setEnteredPassword] = useState("");

  function UsernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
    localStorage.setItem("username", enteredUsername);
  }
  function PasswordChangeHandler(event) {
    setEnteredPassword(event.target.value);
  }
  function SubmitHandler(event) {
    event.preventDefault(); // prevent the page from reloading
    console.log("allloooo");
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-origin": "*",
      },
      body: JSON.stringify({
        email: enteredUsername,
        password: enteredPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    setEnteredUsername(""); //3alshan arga3 el input fields fadya
    setEnteredPassword("");
  }
  return (
    <form onSubmit={SubmitHandler}>
      <div className="Loginform">
        <p className="head">Welcome Back</p>
        <p className="head-2">Welcome Back ! Please Enter your Details</p>
        <div className="new-expense__control">
          <label>UserName</label>
          <input
            type="text"
            min="1"
            max="10"
            value={enteredUsername}
            required
            placeholder="Enter your Username"
            onChange={UsernameChangeHandler}
          />
        </div>{" "}
        <div className="new-expense__control">
          <label>Password</label>
          <input
            type="password"
            value={enteredPassword}
            required
            placeholder="**********************"
            onChange={PasswordChangeHandler}
          />
        </div>
        <div className="container">
          <input type="checkbox" id="rememberme" />
          <label for="rememberme">Remember me to login</label> <br />
          <Link to="/login/forgetPwd">
            <a href="#">Forget Password?</a>
          </Link>
        </div>
        <div className="button">
          <Link to="/assessment">
            <button type="submit" onClick={SubmitHandler}>
              Sign In
            </button>
          </Link>
        </div>
        <div className="sign-in-with-google">
          <h4 type="">Sign In with Google</h4>
        </div>
      </div>
      <div className="container2">
        <label for="rememberme">Dont have an account?</label> <br />
        <Link to="/signup">
          <a>Signup</a>
        </Link>
      </div>
    </form>
  );
}
export default LoginForm;

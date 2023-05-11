import React from "react";
import { useState } from "react";
import "./SignUpForm.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

function SignUpForm(props) {
  let cpass = useRef();
  let pass = useRef();
  const [enteredUsername, setEnteredUsername] = useState(""); //enteredTitle is the state variable = ' ', setEnteredTitle is the function that updates the state variable '****'
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setConfirmPassword] = useState("");

  // This is a function component
  function EmailChangeHandler(event) {
    setEnteredEmail(event.target.value); // event.target.value is the value of the input field == setEnteredTitle khod el input field w 7otot fyl eneterfield
  }
  function UsernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }
  function PasswordChangeHandler(event) {
    setEnteredPassword(event.target.value);
  }
  function PasswordCheckHandler(event) {
    setConfirmPassword(event.target.value);
  }
  function SubmitHandler(event) {
    event.preventDefault(); // prevent the page from reloading

    let password = pass.current.value;
    let confirmPass = cpass.current.value;
    if (password === confirmPass) {
      alert("The passwords match 😍😍");
    } else {
      alert("The passwords do not match😢😢");
    }
    console.log("yarab");
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-origin": "*",
      },
      body: JSON.stringify({
        name: enteredUsername,
        email: enteredEmail,
        password: enteredPassword,
        passwordConfirm: enteredConfirmPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    setEnteredUsername("");
    setEnteredEmail("");
    setEnteredPassword("");
    setConfirmPassword("");
  }

  return (
    <form onSubmit={SubmitHandler}>
      <div className="Signupform">
        <p className="head">Welcome to NOT YET</p>
        <p className="head-2">Welcome to your website , Create an Account</p>
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
        </div>
        <div className="new-expense__control">
          <label>Email</label>
          <input
            type="email"
            value={enteredEmail}
            required
            placeholder="Enter your Email"
            onChange={EmailChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Password</label>
          <input
            type="password"
            value={enteredPassword}
            required
            placeholder="**********************"
            onChange={PasswordChangeHandler}
            ref={pass}
          />
        </div>
        <div className="new-expense__control">
          <label>Confirm Password</label>
          <input
            type="password"
            value={enteredConfirmPassword}
            required
            placeholder="**********************"
            onChange={PasswordCheckHandler}
            ref={cpass}
          />
        </div>
        <Link to="/">
          <div className="button">
            <button type="submit" onClick={SubmitHandler}>
              SignUp
            </button>
          </div>
        </Link>
        <div className="container2">
          <label for="rememberme">Already have an account?</label> <br />
          <Link to="/login">
            <a> Login</a>
          </Link>
        </div>
      </div>
    </form>
  );
}
export default SignUpForm;

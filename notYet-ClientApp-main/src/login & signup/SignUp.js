import React from "react";
import SignUpForm from "./SignUpForm";
import LogoWhiteText from "../assets/LogoWhiteText.png";
import code from "../assets/code.png";
import "./SignUp.css";
import Footer from "../UI/Footer";

function SignUp(props) {
  function saveSignUp(enteredInformation) {
    const SubmitedDate = {
      ...enteredInformation, //el data el gya mn ExpensesForm
      id: Math.random().toString(), //zawdetlha ID
    };
    props.OnSubmitTest(SubmitedDate);
  }
  return (
    <div>
      <img className="logo" src={LogoWhiteText}></img>
      <div className="signup">
        <img src={code}></img>
        <SignUpForm onSubmitedd={saveSignUp} />
      </div>
      <Footer />
    </div>
  );
}
export default SignUp;

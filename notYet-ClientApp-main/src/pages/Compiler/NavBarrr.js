import React from "react";
import Select from "react-select";
import "./NavBarrr.css";
import Chatbot from "./Chatbot";
import { useState } from "react";
import LogoWhiteText from "../../assets/LogoWhiteText.png";
import { Link } from "react-router-dom";
import Container from "./container/container";

const NavBarrr = ({
  userLang,
  setUserLang,
  userTheme,
  setUserTheme,
  fontSize,
  setFontSize,
}) => {
  const languages = [
    { value: "c", label: "C" },
    { value: "cpp", label: "C++" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
  ];
  const themes = [
    { value: "GitHub", label: "GitHub" },
    { value: "vs-dark", label: "Dark" },
    { value: "light", label: "Light" },
    { value: "solarized-dark", label: "Solarized-dark" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleWindow = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleWindow2 = () => {
    setIsOpen2(!isOpen2);
  };
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleWindow3 = () => {
    setIsOpen3(!isOpen3);
  };
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleWindow4 = () => {
    setIsOpen4(!isOpen4);
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/">
          <img src={LogoWhiteText} alt="logo"></img>
        </Link>
      </div>
      <Select
        options={languages}
        value={userLang}
        onChange={(e) => setUserLang(e.value)}
        placeholder={userLang}
      />
      <Select
        options={themes}
        value={userTheme}
        onChange={(e) => setUserTheme(e.value)}
        placeholder={userTheme}
      />

      <Chatbot />
      <div className="center">
        <ul>
          <button className="slide-button" onClick={toggleWindow}>
            {isOpen ? "Close" : "Open"} WhiteBoard
          </button>
          <div className={`slide-window ${isOpen ? "open" : ""}`}>
            <Container></Container>
          </div>
        </ul>
        <ul>
          <button className="slide-button2" onClick={toggleWindow2}>
            {isOpen2 ? "Close" : "Open"} Timer
          </button>
          <div className={`slide-window2 ${isOpen2 ? "open" : ""}`}></div>
        </ul>
        <ul>
          <button className="slide-button3" onClick={toggleWindow3}>
            {isOpen3 ? "Close" : "Open"} Discussions
          </button>
          <div className={`slide-window3 ${isOpen3 ? "open" : ""}`}></div>
        </ul>
        <ul>
          <button className="slide-button4" onClick={toggleWindow4}>
            {isOpen4 ? "Close" : "Open"} Submittions
          </button>
          <div className={`slide-window4 ${isOpen4 ? "open" : ""}`}></div>
        </ul>
      </div>
    </div>
  );
};

export default NavBarrr;
/*
        integrate a chatboot here with this code{" <div style={{ height: "600px", width: "400px" }}>
          <iframe
            src={`https://ora.sh/embed/5c34d300-ece7-4b6d-aac0-787ba4bfc250`}
            width="100%"
            height="100%"
            style={{ border: "0", borderRadius: "4px" }}
          />
        </div>"}

*/

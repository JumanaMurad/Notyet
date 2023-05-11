import React from "react";
import "./Home.css";
import Header from "../UI/Header";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import Features from "../Components/Features/Features";
import matrix from "../assets/matrix.png";
import FeedBack from "../Components/Feedback/Feedback";
import Questionss from "../Components/Questions/Questionss";
import videocalllogo from "../assets/video-calll.png";
import languages from "../assets/languages.png";
import Footer from "../UI/Footer";
import Backgroundgif from "../UI/Backgroundgif";

function Home() {
  return (
    <div>
      <Header />
      <div className="backgroundd">
        <Backgroundgif />
      </div>
      <div className="header1">
        <h1>NOT YET </h1>
        <p className="one">
          We aspire to help all who seek improvement in problem solving
        </p>
        <p className="two">and develop an ability to think outside the Box</p>

        <Link to="/login">
          <Button>Join !YET</Button>
        </Link>
      </div>
      <div className="header2">
        <h1>What is NOT YET? </h1>
        <p>___________________________________</p>
      </div>
      <Features />
      <div className="header3">
        <h1>Our Competitors </h1>
        <p>___________________________________</p>
        <img src={matrix} alt="" />
      </div>
      <div className="header4">
        <h1>Customer FeedBack</h1>
        <p>___________________________________</p>
        <FeedBack />
      </div>
      <div className="header5">
        <h1>Questions Categories</h1>
        <p>___________________________________</p>
        {/* <Questions /> */}
        <Questionss />
      </div>
      <div className="header6">
        <h1>Our Video References</h1>
        <p className="line">__________________________</p>
        <div className="container">
          <p className="textt">
            The truth that interview questions and algorithms are difficult.
            even more difficult is to trying to understand the inner workings of
            a complex algorithms from a book or video. our videos are recorded
            in good computers and cameras that explain the question in details.
            and its over 125 hours of content specifically made to interview
            questions and algorithms easy.
          </p>
          <img src={videocalllogo} alt="" />
        </div>
      </div>
      <div className="header7">
        <h1>We Speak 5 Languages</h1>
        <p className="line">__________________________</p>
        <div className="container">
          <img src={languages} alt="" />
          <p className="textt">
            There's nothing more commutative than speaking it's the only and
            first communication tool. only to find solutions in programming
            languages that you don't know. That's why all our questions can be
            solved in many languages that are popular. JavaScript, Python,
            C++,C, Java and more.
          </p>
        </div>
      </div>
      <div className="header8">
        <p>How do tou want to start your journey in problem solving?</p>
        <button>Of Course</button>
        <button>Not Now</button>
      </div>
      <Footer />
    </div>
  );
}
export default Home;

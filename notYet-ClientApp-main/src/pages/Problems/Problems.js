import Header from "../../UI/Header";
import Button from "../../UI/Button";
import { Link } from "react-router-dom";
import classes from "./Problems.module.css";
import Backgroundgif from "../../UI/Backgroundgif";
import Problemx from "../../Components/Problems/Problemx";
import { DATA } from "./DATA";
import Footer from "../../UI/Footer";

//2022 >> Hard
//2021 >> Medium
//2020 >> Easy
//2019 >> Beginners
///////////////////////////
// 1{ label: "Stack", value: 0 },
// 2 { label: "Queue", value: 0 },
//3  { label: "Linked List", value: 0 },
//4 { label: "Mapping", value: 0 },
//5  { label: "Graph", value: 0 },
//6 { label: "Hash", value: 0 },
//7 { label: "Bit Manip", value: 0 },
//8 { label: "BST", value: 0 },
// 9{ label: "String ", value: 0 },
// 10{ label: "Set", value: 0 },
//11 { label: "Bitmask", value: 0 },
//12 { label: "Two Pointers", value: 0 },

function Problems() {
  const dummy = DATA;

  return (
    <div>
      <Header />
      <div>
        <Backgroundgif />
      </div>
      <div>
        <div className={classes.header1}>
          <h1>+100 Top Picked Problem</h1>
          <p>The Best Practice to grow your problem solving skills</p>

          <Link to="/login">
            <Button>Join !YET</Button>
          </Link>
        </div>
        <div className={classes.header2}>
          <h2>0 Problems Solved out of Set-A</h2>
          <p> 0%</p>
        </div>
        <Problemx items={dummy} />
        <Footer />
      </div>
    </div>
  );
}
export default Problems;

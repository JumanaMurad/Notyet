import Header from "../../UI/Header";
import Footer from "../../UI/Footer";
import Backgroundgif from "../../UI/Backgroundgif";
import classes from "./Content.module.css";
import One from "../../assets/Icons/One.png";
import Two from "../../assets/Icons/Two.png";
import Three from "../../assets/Icons/Three.png";
import Four from "../../assets/Icons/Four.png";
import Five from "../../assets/Icons/Five.png";
import Six from "../../assets/Icons/Six.png";
import Seven from "../../assets/Icons/Seven.png";
import Eight from "../../assets/Icons/Eight.png";
import Nine from "../../assets/Icons/Nine.png";
import Ten from "../../assets/Icons/Ten.png";
import Eleven from "../../assets/Icons/Eleven.png";
import { Link } from "react-router-dom";
function Content() {
  return (
    <div>
      <Header />
      <div>
        <Backgroundgif />
      </div>
      <div className={classes.first}>
        <div className={classes.content1}>
          <h1>Roadmaps</h1>
          <p className={classes.line1}>_________________________</p>
        </div>
        <div className={classes.roadmap1}>
          <h3>Comperhensive Roadmaps</h3>
        </div>
        <Link to="/content/levels">
          <div className={classes.card1}>
            <img src={One} alt="one" />
          </div>
        </Link>
        <Link to="/content/levels">
          <div className={classes.card2}>
            <img src={Two} alt="two" />
          </div>
        </Link>
        <Link to="/content/levels">
          <div className={classes.card3}>
            <img src={Three} alt="one" />
          </div>
        </Link>
        <Link to="">
          <div className={classes.roadmap1}>
            <h3>In-Depth Roadmaps</h3>
          </div>
        </Link>
        <Link to="">
          <div className={classes.card1}>
            <img src={Four} alt="one" />
          </div>
        </Link>
        <Link to="">
          <div className={classes.card2}>
            <img src={Five} alt="two" />
          </div>
        </Link>
        <Link to="">
          <div className={classes.card3}>
            <img src={Six} alt="one" />
          </div>
        </Link>
        <Link to="">
          <div className={classes.card4}>
            <img src={Seven} alt="two" />
          </div>
        </Link>
        <Link to="">
          <div className={classes.card5}>
            <img src={Eight} alt="one" />
          </div>
        </Link>
        <Link to="">
          <div className={classes.card6}>
            <img src={Nine} alt="two" />
          </div>
        </Link>
        <Link to="">
          <div className={classes.card7}>
            <img src={Ten} alt="one" />
          </div>
        </Link>
        <Link to="">
          <div className={classes.card8}>
            <img src={Eleven} alt="two" />
          </div>
        </Link>
        <Footer />
      </div>
    </div>
  );
}
export default Content;

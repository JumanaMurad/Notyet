import { Link } from "react-router-dom";
import "./Header.css";
import LogoWhiteText from "../assets/LogoWhiteText.png";
import Profile from "../assets/profile.png";

function Header(props) {
  const username = localStorage.getItem("username");
  // const [username, setUsername] = useState("");
  // useEffect(() => {
  //   // Get login form data from localStorage
  //   const storedData = localStorage.getItem("loginForm");

  //   if (storedData) {
  //     // Convert JSON string back to an object and extract the username
  //     const { username } = JSON.parse(storedData);

  //     // Update state with the retrieved username
  //     setUsername(username);
  //   }
  // }, []);

  return (
    <header>
      <div className="Header">
        <div className="leftSide">
          <Link to="/">
            <img src={LogoWhiteText} alt="logo"></img>
          </Link>
        </div>
        <div className="center">
          <ul>
            <Link className="text" to="/problems">
              Problems
            </Link>
          </ul>
          <ul>
            <Link className="text" to="/content">
              Content
            </Link>
          </ul>
          <ul>
            <Link className="text" to="/team">
              Team
            </Link>
          </ul>
          <ul>
            <Link className="text" to="/about">
              About
            </Link>
          </ul>
        </div>

        <div className="rightSide">
          <img src={Profile} alt="profile"></img>
          <Link className="text" to="/profile">
            <a>{username || <p>GUEST😁</p>}</a>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="54"
            height="54"
            viewBox="0 0 24 24"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </div>
      </div>
    </header>
  );
}
export default Header;

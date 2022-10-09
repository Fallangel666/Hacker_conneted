import { Navbar } from "react-bootstrap";
import NavBar from "./Navbar.jsx"
function About() {
  return (
    <div className="Home">
      <header className="home-header">
        <div id="navbar">
          <NavBar />
        </div>

        <div>
          <h1 id="title">HACKER CONNECTED</h1>
        </div>
        <div id="aboutTitle">
          <h1>About</h1>
        </div>
      </header>
    </div>
  );
}

export default About;

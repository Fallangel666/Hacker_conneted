import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import NavBar from "./Navbar.jsx";

// const React = require("react")
// const Def = require('./default')

function Home() {
  return (
    <div className="Home">
      <header className="home-header">
        <div id="navbar">
          <NavBar />
        </div>

        <div>
          <h1 id="title">HACKER CONNECTED</h1>
        </div>
        <div id="welcome">
          <h2>Welcome to the social network for hackers!</h2>
        </div>
      </header>
    </div>
  );
}

export default Home;

import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import NavBar from "./Navbar.jsx";

// const React = require("react")
// const Def = require('./default')


function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <NavBar />

        <div id="title">
          <h1>HACKER CONNECTED</h1>
        </div>
        <div id="welcome">
          <h2>Welcome to the social network for hackers!</h2>
        </div>
      </header>
    </div>
  );
}

export default Home;

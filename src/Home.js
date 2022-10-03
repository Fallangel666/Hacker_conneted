import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="Home">
      <header className="home-header">
        <Navbar />
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

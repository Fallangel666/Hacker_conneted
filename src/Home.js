import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <h1 id="title">HACKER CONNECTED</h1>
        <div>
          <nav><a>Home</a></nav>
          <nav><a>About</a></nav>
        </div>
      </header>
    </div>
  );
}

export default Home;

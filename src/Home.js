import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <ul id="navbar">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Sign In</a>
        </ul>
        <div>
          <img id="logo"></img>
          <h1 id="title">HACKER CONNECTED</h1>
        </div>
        <div>
          <p>What are you looking for?</p>
          <form id="searchbar">
            <input></input>
            <button>Search</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Home;

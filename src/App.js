import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Navbar from "./Layout.js";

const React = require('react')
const Def = require('./default')


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

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

export default App;

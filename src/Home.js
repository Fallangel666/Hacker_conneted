import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
<<<<<<< HEAD
import Navbar from "./Navbar.jsx";
=======
import Navbar from "./Layout";
>>>>>>> 80ee5d199912c2dc9d3c5bbe8c94a654d08596a4
/*
const React = require('react')
const Def = require('./default')*/


function Home() {
  return (
    <div className="Home">
      <header className="home-header">
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

export default Home;

import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Navbar from "./Navbar";

function Search() {
  return (
    <div className="Home">
      <header className="home-header">
        <Navbar />

        <div id="title">
          <h1>HACKER CONNECTED</h1>
        </div>
        
      </header>
    </div>
  );
}

export default Search;

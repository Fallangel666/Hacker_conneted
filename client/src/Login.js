import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import NavBar from "./Navbar.jsx";

function Login() {
  return (
    <div className="Home">
      <header className="home-header">
        <NavBar />

        <div class="login-box">
      <h1>Login</h1>
      <form>
        <label>Email</label>
        <input type="email" placeholder="" />
        <label>Password</label>
        <input type="password" placeholder="" />
        <input type="button" value="Submit" />
      </form>
    </div>
    <p class="para-2">
    Don't have an account? <a href="./Signup.js">Sign Up Here</a>
    </p>
      </header>
    </div>
  );
}

export default Login;

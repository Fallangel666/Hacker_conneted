import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import NavBar from "./Navbar.jsx";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />

        <div class="login-box">
          <h1>Login</h1>
          <form>
            <label>Email</label>
            <input
              type="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <label>Password</label>
            <input
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <input type="button" value="Submit" />
          </form>
        </div>
        <p class="para-2">
          Don't have an account? <a href="./Signup">Sign Up Here</a>
        </p>
      </header>
    </div>
  );
}

export default Login;

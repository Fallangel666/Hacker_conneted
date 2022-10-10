import NavBar from "./Navbar.jsx";

function Signup() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="navbar">
          <NavBar />
        </div>

        <div class="signup-box">
          <h1>Sign Up</h1>
          
          <form>
            <label>First Name</label>
            <input type="text" placeholder="" />
            <label>Last Name</label>
            <input type="text" placeholder="" />
            <label>Profession</label>
            <input type="text" placeholder="" />
            <label>Email</label>
            <input type="email" placeholder="" />
            <label>Password</label>
            <input type="password" placeholder="" />
            <label>Confirm Password</label>
            <input type="password" placeholder="" />
            <input type="button" value="Submit" />
          </form>
          <p id="para-3">
            By clicking the Sign Up button,you agree to our <br />
            <a href="#">Terms and Condition</a> and{" "}
            <a href="#">Policy Privacy</a>
          </p>
        </div>
        <p class="para-2">
          Already have an account? <a href="./Login">Login here</a>
        </p>
      </header>
    </div>
  );
}

export default Signup;

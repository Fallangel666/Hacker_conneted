import NavBar from "./Navbar.jsx";
function About() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="navbar">
          <NavBar />
        </div>

        <div>
          <h1 id="title">HACKER CONNECTED</h1>
        </div>
        <div id="aboutTitle">
          <h1>About</h1>
        </div>
      </header>
    </div>
  );
}

export default About;

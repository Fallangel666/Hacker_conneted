const React = require('react')


function home () {
    return (
      <Def>
            <div href="home" className="Home">
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
 </Def>
    )
}
module.exports= home
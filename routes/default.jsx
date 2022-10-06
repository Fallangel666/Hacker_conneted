const React = require('react')
const Def = require('./home')

function Def (html) {
    return (
        <html>
            <head>
                <title>RestRant</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
                <link rel= "stylesheet" href="/css/style.css"/>
            </head>
            <body>
            <nav>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/error404"></a>
                </li>
                <li>
                  <a href="/profile"></a> 
                </li>
              </ul>
            </nav>

                {html.children}
            </body>
        </html>
    )
  }

  module.exports = Def;
  

  
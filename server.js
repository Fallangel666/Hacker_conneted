import express from "express"

const App = express()

App.use("*", (req, res) => res.status(404).json({ error: "Not Found"}))

export default App
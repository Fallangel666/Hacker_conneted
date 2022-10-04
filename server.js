import express from "express"

const app = express()

app.use("*", (req, res) => res.status(404).json({ error: "Not Found"}))

export default app
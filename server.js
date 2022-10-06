import express, { application } from "express"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/home", index)
app.use("*", (req, res) => res.status(404).json({ error: "Not Found"}))

export default app



import { alignPropType } from "react-bootstrap/esm/types";
import { Link } from "react-router-dom"

//middleware

const router = require("express").Router();


module.exports = router;

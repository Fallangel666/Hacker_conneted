const express = require("express");
const cors = require("cors")  // install cors
const bodyParser = require("body-parser");
var dateFormat = require('dateformat');


const app = express();
app.set("port", 3001);

app.use(cors())
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));

const Pool = require("pg").Pool;
const config = {
    host: "localhost",
    user: "Austin",
    password: "astros5",
    database: "cubing"
};

const pool = new Pool(config);

app.post("/add-time", async (req, res) => {
    const name = req.body.name;
    const time = req.body.time;
    // It would be better to set the time server-side
    const timeStamp = dateFormat(time, dateFormat.masks.isoDateTime)

    const template = 'INSERT INTO times(name, time) VALUES($1, $2)'
    const response = await pool.query(template, [name, timeStamp])

    res.end()
});

app.get("/list", async (req, res) => {
    const template = await pool.query('SELECT * FROM times');
    res.json({ times: template.rows });

})

app.get("/", (req, res) => {
    res.json({ message: "We did it!" });
});

app.listen(app.get("port"), () => {
    console.log(`Server at: http://localhost:${app.get("port")}/`);
});
const { client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: "3001",
  password: "rootUser",
  database: "postgres",
});

client.connect();

client.query(`Select * from Users`, (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end;
});

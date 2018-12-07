const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "atervinnstan_test"
});

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

app.get("/api/stations", (req, res) => {
  const queryString = "SELECT * FROM stations";

  connection.query(queryString, (err, rows, fields) => {
    if (err) {
      console.log("Failed to get all stations: " + err);
      res.end("Error: " + err);
      res.sendStatus(500);
      res.end();
      return;
    }

    res.json(rows);
  });
});

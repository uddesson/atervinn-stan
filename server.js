const express = require("express");
const cors = require("cors");
const app = express();

// Data imports.
const sortingData = require("./data/sorting.json");
const moduleData = require("./data/modules.json");
const ftiData = require("./data/ftistations.json");

app.use(cors());

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

// Get all sortingdata.
app.get("/api/sorting", (req, res) => {
  res.send(sortingData);
});

// Get all modules.
app.get("/api/modules", (req, res) => {
  res.send(moduleData);
});

// Get all fti stations.
app.get("/api/fti", (req, res) => {
  res.send(ftiData);
});

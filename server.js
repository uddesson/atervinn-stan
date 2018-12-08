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

/**
 * TODO: Handle errors for all endpoints.
 */

// Search in sortingdata.
app.get("/api/sorting/search/:query", (req, res) => {
  const query = req.params.query;

  const matchesQuery = itemToMatch => {
    return itemToMatch.toLowerCase().includes(query.toLowerCase());
  };

  // Check if query string matches either item.name or one of the item synonyms.
  const results = sortingData.items.filter(
    item =>
      matchesQuery(item.name) ||
      item.synonyms.some(synonym => matchesQuery(synonym.value))
  );

  res.send(results);
});

// Get all modules.
app.get("/api/modules", (req, res) => {
  res.send(moduleData);
});

// Get all fti stations.
app.get("/api/fti", (req, res) => {
  res.send(ftiData);
});

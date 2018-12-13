const express = require('express');
const cors = require('cors');
const app = express();

// Data imports.
const sortingData = require('./data/sorting.json');
const moduleData = require('./data/modules.json');
const ftiData = require('./data/ftistations.json');

app.use(cors());

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

// Search in sortingdata.
app.get('/api/sorting/search/:query', (req, res) => {
  let query = req.params.query;
  let results = [];

  const matchesQuery = itemToMatch => {
    return itemToMatch.toLowerCase().includes(query.toLowerCase());
  };

  /*
   * Wait till query is more than 2 characters, to avoid autocomplete
   * on only one or two letters (will return too many irrelevant results.)
   */

  if (query.length > 2) {
    // Check if query string matches either item.name or one of the item synonyms.
    results = sortingData.items.filter(
      item =>
        matchesQuery(item.name) ||
        item.synonyms.some(synonym => matchesQuery(synonym.value))
    );
  }

  res.send(results);
});

// Get all modules.
app.get('/api/modules', (req, res) => {
  res.send(moduleData);
});

// Get all fti stations.
app.get('/api/fti', (req, res) => {
  res.send(ftiData);
});

/*
 * Send error as json in browser, if no code is sent default is 500
 * This will catch if we try to send a non-existing resource.
 * But NOT if network request fails.
 */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send({ message: err.message });
});

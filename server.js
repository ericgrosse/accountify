const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

// Allow all cross-origin requests for the time being
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/parseCSV', (req, res) => {
  res.send({ test: 'Hello, World!' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const parse = require('csv-parse/lib/sync')
const fs = require('fs')
const path = require('path')

// Allow all cross-origin requests for the time being
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/parseCSV/:filename', (req, res) => {
  let csvPath = path.join(__dirname, req.params.filename)
  let buffer = fs.readFileSync(csvPath)
  let records = parse(buffer.toString())
  //console.log(records)
  res.send(records);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

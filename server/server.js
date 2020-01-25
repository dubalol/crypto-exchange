const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  const html = path.resolve(__dirname, '../build/index.html');
  res.sendFile(html);
});

app.get('/bundle.js', (req, res) => {
  const bundle = path.resolve(__dirname, '../build/bundle.js');
  res.sendFile(bundle);
});

/*

Code here

*/

app.listen(port, () => console.log(`Listening on port ${port}`));

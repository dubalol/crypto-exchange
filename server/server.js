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

// error handler 
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});



app.listen(port, () => console.log(`Listening on port ${port}`));

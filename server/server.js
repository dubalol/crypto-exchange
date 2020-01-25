const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
// const router = require('')
// require the router 

const port = 3000;

app.use(express.static(__dirname))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// static path for the css files 
app.use('/', express.static(path.resolve(__dirname, 'build')));

//initial page with log in & password

app.get('/', (req, res) => {
  const html = path.resolve(__dirname, '../build/index.html');
  res.sendFile(html);
});

// receieves username and pw if auth return main page with portfolio, order book and chart 
app.post('/login', 
  // send to router
);

// marketplace buy button will send a request with the Username and amount of stock/crypto
app.post('/marketplace',
  // send to router
);

// limit button will send a post request with the Username, amount of stock/crypto and rate 
app.post('/limit'
  // send to router
);

app.post('/bundle.js', (req, res) => {
  const bundle = path.resolve(__dirname, '../build/bundle.js');
  res.sendFile(bundle);
});


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

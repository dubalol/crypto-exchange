// need to add connection to db
const db = require('../db/crypto_db.js')

const cryptoController = {};


// login controller
cryptoController.login = (req, res, next) => {
  // add login query here
  //TODO
  //need to send something back if not found in the db
  const user = "Will";
  const getUserQuery = (`SELECT * FROM accounts WHERE username = '${user}'`)
  db.query(getUserQuery)
    .then(data => {
      // console.log(data.rows[0])
      res.locals.body = data.rows[0]
      next();
    })

}

// get market
cryptoController.getMarket = (req, res, next) => {
  // add get market query here
  // TODO 
  // need to sort the info in the query  
  const order = "ASK";
  const getMarketQuery = (`SELECT * FROM orders WHERE txn_type = '${order}' LIMIT 5`)
  db.query(getMarketQuery)
    .then(data => {
      res.locals.body = data.rows
      next();
    })
}


//get limit
cryptoController.addLimit = (req, res, next) => {
  // add get limit query here
  // TODO 
  // need to sort the info in the query  
  const addLimit = ['Will', 1.25, 1]
  const insertLimit = (`INSERT INTO orders (username, txn_type, rate, eth) VALUES ('${addLimit[0]}','BID', ${addLimit[1]}, ${addLimit[2]})`);
  db.query(insertLimit)
  next();
}

cryptoController.getLimit = (req, res, next) => {
  const getAsk = (`SELECT * FROM orders WHERE txn_type = 'ASK' ORDER BY rate DESC LIMIT 5`)
  db.query(getAsk)
    .then(data => {
      // console.log(data)
      res.locals.body = data.rows
      next();
    })
}

cryptoController.getBid = (req, res, next) => {
  const getBid = (`SELECT * FROM orders WHERE txn_type = 'BID' ORDER BY rate ASC LIMIT 5`)
  db.query(getBid)
    .then(data => {
      console.log(data)
      res.locals.body[1] = data.rows
      next()
    })

}

//TODO 
// all info coming in on req.body


// update user
cryptoController.addLogin = (req, res, next) => {
  // insert new user 
}

// update market
cryptoController.updateMarket = (req, res, next) => {
  // insert into market
  //delete shit 

}

//update limit
cryptoController.updateLimit = (req, res, next) => {
  // insert into limit


}



module.exports = cryptoController;
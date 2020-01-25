// need to add connection to db

const cryptoController = {};


// login controller
cryptoController.login = (req, res, next) => {
  // add login query here
  console.log("yeah this shit works! ")

}

// get market
cryptoController.getMarket = (req, res, next) => {
  // add get market query here
  console.log("market is working")
  next();

}


//get limit
cryptoController.getLimit = (req, res, next) => {
  // add get limit query here

}


// update user
cryptoController.addLogin = (req, res, next) => {
  // insert new user 
}

// update market
cryptoController.updateMarket = (req, res, next) => {
  // insert into market

}

//update limit
cryptoController.updateLimit = (req, res, next) => {
  // insert into limit

}



module.exports = cryptoController;